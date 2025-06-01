const ejerciciosHtml = [
  {
    id: 1,
    titulo: "Título principal",
    enunciado: "Crea un título principal para una página usando la etiqueta adecuada.",
    codigo: "<h1>Bienvenidos a mi sitio web</h1>"
  },
  {
    id: 2,
    titulo: "Cita destacada",
    enunciado: "Muestra una cita destacada usando la etiqueta <blockquote>.",
    codigo: `<blockquote>
  "La práctica hace al maestro" - Anónimo
</blockquote>`
  },
  {
    id: 3,
    titulo: "Enlace externo",
    enunciado: "Agrega un enlace que lleve a otro sitio web.",
    codigo: '<a href="https://developer.mozilla.org/es/">Visita MDN Web Docs</a>'
  },
  {
    id: 4,
    titulo: "Sección de contenido",
    enunciado: "Crea una sección con un subtítulo y un párrafo.",
    codigo: `<section>
  <h2>Sobre nosotros</h2>
  <p>Somos una comunidad de aprendizaje enfocada en tecnologías web.</p>
</section>`
  },
  {
    id: 5,
    titulo: "Lista ordenada",
    enunciado: "Crea una lista ordenada con tres pasos para preparar un café.",
    codigo: `<ol>
  <li>Calentar agua</li>
  <li>Añadir café al filtro</li>
  <li>Verter agua y esperar</li>
</ol>`
  },
  {
    id: 6,
    titulo: "Formulario de contacto",
    enunciado: "Crea un formulario con campos para nombre, correo y un botón de enviar.",
    codigo: `<form>
  <label>Nombre: <input type="text" name="nombre"></label><br>
  <label>Correo: <input type="email" name="correo"></label><br>
  <button type="submit">Enviar</button>
</form>`
  },
  {
    id: 7,
    titulo: "Tabla de horarios",
    enunciado: "Crea una tabla con días de la semana y actividades.",
    codigo: `<table border="1">
  <tr><th>Día</th><th>Actividad</th></tr>
  <tr><td>Lunes</td><td>Estudiar HTML</td></tr>
  <tr><td>Martes</td><td>Práctica con CSS</td></tr>
</table>`
  },
  {
    id: 8,
    titulo: "Botón interactivo",
    enunciado: "Agrega un botón que, al pulsarlo, muestre un mensaje de confirmación.",
    codigo: `<button onclick="alert('¡Bien hecho!')">Haz clic aquí</button>`
  },
  {
    id: 9,
    titulo: "Div con estilo inline",
    enunciado: "Crea un contenedor con un color de fondo usando estilos inline.",
    codigo: `<div style="background-color: #f5f5dc; padding: 1rem;">
  Este es un cuadro con color de fondo.
</div>`
  },
  {
    id: 10,
    titulo: "Artículo con formato",
    enunciado: "Crea un artículo con un subtítulo, texto en negrita y una cita.",
    codigo: `<article>
  <h2>Cómo empezar en HTML</h2>
  <p><strong>Aprender HTML</strong> es el primer paso para convertirse en desarrollador web.</p>
  <blockquote>"El código es poesía."</blockquote>
</article>`
  }
];

export default ejerciciosHtml;
