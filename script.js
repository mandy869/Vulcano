/* ============================================================
   No hace falta tocar este archivo para actualizar textos o
   fotos: eso se hace en content.js. Este archivo solo dibuja
   el contenido en la página y maneja las interacciones.
   Funciona en todas las páginas del sitio: cada función revisa
   si el bloque que necesita existe antes de dibujarlo.
   ============================================================ */

const ICONS = {
  reja: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 3v18M9 3v18M14 3v18M19 3v18M4 8h15M4 16h15"/></svg>`,
  mueble: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 10h16v9H4z"/><path d="M4 10l2-6h12l2 6"/><path d="M7 19v2M17 19v2"/></svg>`,
  tuberia: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 8h9a3 3 0 0 1 3 3v7"/><path d="M21 16h-9a3 3 0 0 1-3-3V6"/><circle cx="3" cy="8" r="1.4"/><circle cx="21" cy="16" r="1.4"/></svg>`,
  photo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-4 4-3-3-6 6"/></svg>`
};

document.addEventListener("DOMContentLoaded", () => {
  const D = SITE_CONTENT;
  const $ = (id) => document.getElementById(id);

  // ---------- FOOTER (presente en todas las páginas) ----------
  const footerName = $("footerName");
  if (footerName) footerName.textContent = `© ${new Date().getFullYear()} ${D.negocio.nombre} · ${D.negocio.direccion}`;

  const whatsappFloat = $("whatsappFloat");
  if (whatsappFloat) whatsappFloat.href = `https://wa.me/${D.negocio.whatsapp}`;

  // ---------- NAVEGACIÓN ACTIVA ----------
  const current = (document.body.dataset.page || "").trim();
  document.querySelectorAll("nav a[data-nav]").forEach(a => {
    if (a.dataset.nav === current) a.classList.add("current");
  });

  // ---------- MENÚ MÓVIL ----------
  const navList = $("navList");
  const navToggle = $("navToggle");
  if (navToggle && navList) {
    navToggle.addEventListener("click", () => navList.classList.toggle("open"));
    navList.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navList.classList.remove("open")));
  }

  // ---------- HERO (solo inicio) ----------
  const heroTitle = $("heroTitle");
  if (heroTitle) {
    const [linea1, ...resto] = D.negocio.eslogan.split(". ");
    heroTitle.innerHTML = `${linea1}.<br><em>${resto.join(". ")}</em>`;
    $("heroLede").textContent = D.negocio.descripcionCorta;
    $("heroStats").innerHTML = `
      <div class="stat"><div class="n">${D.negocio.anosExperiencia}+</div><div class="l">Años de oficio</div></div>
      <div class="stat"><div class="n">${D.negocio.proyectosRealizados}+</div><div class="l">Proyectos entregados</div></div>
    `;
    const grille = $("grille");
    if (grille) {
      for (let i = 0; i < 14; i++) {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = "100%";
        bar.style.animationDelay = `${i * 0.05}s`;
        grille.appendChild(bar);
      }
      const cross = document.createElement("div");
      cross.className = "bar cross";
      grille.appendChild(cross);
    }
  }

  // ---------- SERVICIOS (inicio y servicios.html) ----------
  function renderServices(containerId) {
    const el = $(containerId);
    if (!el) return;
    el.innerHTML = D.servicios.map(s => `
      <div class="service-card reveal">
        <div class="bar-mark"></div>
        <h3>${s.titulo}</h3>
        <p>${s.detalle}</p>
      </div>
    `).join("");
  }
  renderServices("servicesGrid");
  renderServices("servicesGridHome");

  // ---------- PORTAFOLIO (inicio y portafolio.html) ----------
  function portfolioCard(p) {
    return `
      <div class="p-card reveal" data-cat="${p.categoria}">
        ${p.imagen ? `<img src="${p.imagen}" alt="${p.titulo}" onload="this.classList.add('loaded')">` : ""}
        ${!p.imagen ? `<div class="placeholder">${ICONS.photo}<span>Foto pendiente<br>${p.titulo}</span></div>` : ""}
        <div class="overlay">
          <div class="cat">${p.categoria}</div>
          <h4>${p.titulo}</h4>
          <p>${p.descripcion}</p>
        </div>
      </div>`;
  }

  const portfolioGridHome = $("portfolioGridHome");
  if (portfolioGridHome) {
    portfolioGridHome.innerHTML = D.portafolio.slice(0, 3).map(portfolioCard).join("");
    requestAnimationFrame(() => portfolioGridHome.querySelectorAll(".reveal").forEach(el => el.classList.add("in")));
  }

  const portfolioGrid = $("portfolioGrid");
  if (portfolioGrid) {
    function renderPortfolio(filter) {
      const items = D.portafolio.filter(p => filter === "todos" || p.categoria === filter);
      portfolioGrid.innerHTML = items.map(portfolioCard).join("");
      requestAnimationFrame(() => portfolioGrid.querySelectorAll(".reveal").forEach(el => el.classList.add("in")));
    }
    renderPortfolio("todos");
    const filters = $("filters");
    if (filters) {
      filters.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        filters.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderPortfolio(btn.dataset.filter);
      });
    }
  }

  // ---------- TESTIMONIOS (inicio y testimonios.html) ----------
  function testiCard(t) {
    return `
      <div class="testi-card reveal">
        <div class="quote-mark">"</div>
        <p class="text">${t.texto}</p>
        <div class="who">${t.nombre}<span class="role">${t.rol}</span></div>
      </div>`;
  }
  const testiGridHome = $("testiGridHome");
  if (testiGridHome) testiGridHome.innerHTML = D.testimonios.slice(0, 2).map(testiCard).join("");
  const testiGrid = $("testiGrid");
  if (testiGrid) testiGrid.innerHTML = D.testimonios.map(testiCard).join("");

  // ---------- EQUIPO (inicio y equipo.html) ----------
  function teamCard(m) {
    return `
      <div class="team-card reveal">
        <div class="avatar"></div>
        <h4>${m.nombre}</h4>
        <div class="role">${m.rol}</div>
      </div>`;
  }
  const teamGridHome = $("teamGridHome");
  if (teamGridHome) teamGridHome.innerHTML = D.equipo.slice(0, 3).map(teamCard).join("");
  const teamGrid = $("teamGrid");
  if (teamGrid) teamGrid.innerHTML = D.equipo.map(teamCard).join("");

  // ---------- CONTACTO (contacto.html) ----------
  const contactRows = $("contactRows");
  if (contactRows) {
    contactRows.innerHTML = `
      <div class="row"><div class="label">Teléfono / WhatsApp</div><div class="value"><a href="https://wa.me/${D.negocio.whatsapp}" target="_blank">${D.negocio.telefono}</a></div></div>
      <div class="row"><div class="label">Email</div><div class="value"><a href="mailto:${D.negocio.email}">${D.negocio.email}</a></div></div>
      <div class="row"><div class="label">Zona de trabajo</div><div class="value">${D.negocio.direccion}</div></div>
      <div class="row"><div class="label">Horario</div><div class="value">${D.negocio.horario}</div></div>
    `;
  }
  const contactForm = $("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const [nombre, contacto, mensaje] = e.target.querySelectorAll("input, textarea");
      const texto = encodeURIComponent(`Hola ${D.negocio.nombre}, soy ${nombre.value} (${contacto.value}). ${mensaje.value}`);
      window.open(`https://wa.me/${D.negocio.whatsapp}?text=${texto}`, "_blank");
    });
  }

  // ---------- REVEAL ON SCROLL ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("in"); });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
