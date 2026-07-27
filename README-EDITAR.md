# Cómo actualizar el sitio de VULCANO

No necesitás saber programar. El 100% de lo que vas a cambiar día a día
vive en **un solo archivo: `content.js`**. Los otros archivos (`index.html`,
`styles.css`, `script.js`) son el "diseño" y no hace falta tocarlos.

## Reglas de oro
1. Abrí `content.js` con el Bloc de notas (o cualquier editor de texto).
2. Cambiá solo lo que está **entre comillas `" "`**.
3. No borres comas `,` ni llaves `{ }` ni corchetes `[ ]`.
4. Guardá el archivo y volvé a subirlo a donde tengas alojado el sitio
   (o pedile a quien lo aloja que reemplace ese archivo).

## Tareas más comunes

**Cambiar el teléfono o WhatsApp**
Buscá la sección `negocio:` y cambiá `telefono` y `whatsapp`.

**Agregar una foto real a un trabajo del portafolio**
1. Subí la foto a algún sitio que te dé un link directo (Google Drive
   en modo "cualquiera con el link", Imgur, o el hosting de tu web).
2. Buscá el trabajo en `portafolio:` y pegá el link entre las comillas
   de `imagen: ""`.

**Agregar un trabajo nuevo al portafolio**
Copiá un bloque completo, desde `{` hasta `},`, y pegalo antes del
corchete `]` que cierra `portafolio`. Cambiá título, categoría y foto.
La `categoria` debe ser exactamente una de estas tres palabras:
`rejas`, `muebles` o `industrial`.

**Agregar una opinión de cliente real**
Igual que arriba, pero dentro de `testimonios:`.

**Cambiar quién aparece en el equipo**
Editá los nombres y roles dentro de `equipo:`.

## Si preferís no tocar nada
También podés simplemente enviarme los cambios (foto, texto, teléfono)
y yo actualizo `content.js` por vos.
