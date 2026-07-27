/* ============================================================
   CONTENIDO DEL SITIO — VULCANO
   ------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas tocar para actualizar
   el sitio. No necesitas saber programar: solo reemplaza el
   texto que está entre comillas " " por el tuyo, con cuidado
   de no borrar las comillas ni las comas.

   Guía rápida:
   - Para cambiar una foto, reemplaza la dirección web dentro
     de imagen: "..." por el link de tu foto (puedes subir tus
     fotos a Google Drive, Imgur, o pedirle a tu diseñador que
     te dé el link directo de la imagen).
   - Para agregar un trabajo nuevo al portafolio, copia un
     bloque completo entre { } y pégalo antes del ] de cierre,
     luego cambia sus datos.
   - Guarda el archivo y sube los cambios donde tengas alojada
     la página. Revisa README-EDITAR.md para el paso a paso.
   ============================================================ */

const SITE_CONTENT = {

  // ---------- DATOS GENERALES DEL NEGOCIO ----------
  negocio: {
    nombre: "VULCANO Havanero",
    nombreCompleto: "VULCANO Havanero — Herrería & Tuberías Industriales",
    eslogan: "El hierro tiene su forma. Nosotros le damos su propósito.",
    descripcionCorta: "Herrería con más de 9 años de trayectoria: rejas, domos, portones, escaleras, barandelas, estructuras metálicas, aluminio, vidrio, muebles y tuberías de alta presión para hogares, hoteles e industrias.",
    telefono: "+52 56 5209 6043",
    whatsapp: "+52 56 5209 6043", // solo números, con código de país, sin + ni espacios
    email: "terreromanu922@gmail.com",
    direccion: "México",
    horario: "Lunes a viernes de 8:00 a 18:00 · Sábados de 8:00 a 13:00",
    instagram: "https://instagram.com/vulcanoherreria",
    anosExperiencia: 11,
    proyectosRealizados: 290
  },

  // ---------- SERVICIOS ----------
  servicios: [
    {
      titulo: "Rejas y protecciones",
      detalle: "Rejas para balcones, puertas y ventanas a medida. Diseños que protegen sin perder estética.",
      icono: "reja"
    },
    {
      titulo: "Muebles y estructuras",
      detalle: "Muebles de hierro y estructuras para el hogar: mesas, escaleras, barandas y piezas a pedido.",
      icono: "mueble"
    },
    {
      titulo: "Tuberías de alta presión",
      detalle: "Instalación y mantenimiento de tuberías de alta presión para hoteles e industrias, con certificación de proceso.",
      icono: "tuberia"
    }
  ],

  // ---------- PORTAFOLIO ----------
  // categoria puede ser: "rejas", "muebles" o "industrial"
  portafolio: [
    {
      titulo: "Reja balcón frente — Barrio Norte",
      categoria: "rejas",
      imagen: "img/rejas/reja_2.jpg",
      descripcion: "Reja de diseño geométrico para balcón, terminación en pintura antióxido negro mate."
    },
    {
      titulo: "Portón corredizo residencial",
      categoria: "rejas",
      imagen: "img/rejas/reja_bano.jpg",
      descripcion: "Portón corredizo automatizado de 4 metros para acceso vehicular."
    },
    {
      titulo: "Portón corredizo residencial",
      categoria: "rejas",
      imagen: "img/rejas/reja_bl.jpg",
      descripcion: "Portón corredizo automatizado de 4 metros para acceso vehicular."
    },
    {
      titulo: "Portón corredizo residencial",
      categoria: "rejas",
      imagen: "img/rejas/reja_ventana.jpg",
      descripcion: "Portón corredizo automatizado de 4 metros para acceso vehicular."
    },
    {
      titulo: "Portón corredizo residencial",
      categoria: "rejas",
      imagen: "img/rejas/reja_ventana1.jpg",
      descripcion: "Portón corredizo automatizado de 4 metros para acceso vehicular."
    },
    {
      titulo: "Portón corredizo residencial",
      categoria: "rejas",
      imagen: "img/rejas/ventana1.jpg",
      descripcion: "Portón corredizo automatizado de 4 metros para acceso vehicular."
    },
    {
      titulo: "Escalera caracol de hierro",
      categoria: "muebles",
      imagen: "img/muebles/estante_1.jpg",
      descripcion: "Escalera caracol a medida, estructura de hierro con barandas torneadas."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "muebles",
      imagen: "img/muebles/estante.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "muebles",
      imagen: "img/muebles/mueble_1.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "muebles",
      imagen: "img/muebles/mueble_2.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "muebles",
      imagen: "img/muebles/mueble_industrial.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "muebles",
      imagen: "img/muebles/mueble.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "muebles",
      imagen: "img/muebles/muebles.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Red de tuberías — Hotel Costanera",
      categoria: "industrial",
      imagen: "",
      descripcion: "Instalación completa de tuberías de alta presión para el sistema contra incendios del hotel."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "industrial",
      imagen: "",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/insta_porton.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/insta_porton_1.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/porton_1.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/porton_2.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/porton_3.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/porton_4.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/porton_5.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/portonx.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/portonx1.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/portonx_inst.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/puerta_1.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/puerta_2.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/puerta_3.1.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/puerta_3.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/puerta_4.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/puerta_5.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/puerta_6.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/puerta_7.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/puerta_8.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Línea de vapor — Planta industrial",
      categoria: "portones y verjas",
      imagen: "img/portones_verjas/puerta.jpg",
      descripcion: "Tendido y soldadura de línea de vapor de alta presión, certificada según normas vigentes."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "techo_escaleras",
      imagen: "img/techo_escaleras/elemento.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "techo_escaleras",
      imagen: "img/techo_escaleras/elementos.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "techo_escaleras",
      imagen: "img/techo_escaleras/escalera1.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "techo_escaleras",
      imagen: "img/techo_escaleras/escalera2.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "techo_escaleras",
      imagen: "img/techo_escaleras/escaleras.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "techo_escaleras",
      imagen: "img/techo_escaleras/escaleras1.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "techo_escaleras",
      imagen: "img/techo_escaleras/techo.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "techo_escaleras",
      imagen: "img/techo_escaleras/techo1.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    },
    {
      titulo: "Mesa de comedor industrial",
      categoria: "techo_escaleras",
      imagen: "img/techo_escaleras/techo2.jpg",
      descripcion: "Base de hierro forjado con tapa de madera maciza, estilo industrial."
    }
  ],

  // ---------- OPINIONES DE CLIENTES ----------
  // Estos son textos de ejemplo. Reemplázalos por comentarios reales
  // de tus clientes apenas los tengas.
  testimonios: [
    {
      nombre: "Marcela Duarte",
      rol: "Cliente particular",
      texto: "Encargamos la reja del balcón y quedó exactamente como la imaginamos. Puntuales y muy prolijos con la terminación."
    },
    {
      nombre: "Hotel Costanera",
      rol: "Gerencia de mantenimiento",
      texto: "Contratamos a Vulcano para renovar nuestra red de tuberías de alta presión. Trabajo certificado, sin interrumpir la operación del hotel."
    },
    {
      nombre: "Javier Peralta",
      rol: "Cliente particular",
      texto: "El portón automatizado funciona perfecto desde el primer día. Nos asesoraron en todo el proceso, muy recomendables."
    },
    {
      nombre: "Planta Industrial Sur",
      rol: "Jefe de planta",
      texto: "Profesionales serios. Cumplieron los tiempos pactados en la instalación de la línea de vapor y respetaron cada norma de seguridad."
    }
  ],

  // ---------- EQUIPO ----------
  equipo: [
    { nombre: "Enmanuel Miranda Terrero", rol: "Fundador y herrero principal" },
    { nombre: "Armando Cuesta Rodríguez", rol: "Especialista en marketing" },
    { nombre: "Roberto Perez García", rol: "Ingeniero diseñador" },
    { nombre: "Armando Cuesta Recio", rol: "Taller y producción" },
  ]

};
