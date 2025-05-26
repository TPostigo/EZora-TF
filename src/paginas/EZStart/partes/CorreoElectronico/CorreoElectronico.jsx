// src/paginas/EZStart/partes/CorreoElectronico/CorreoElectronico.jsx
import React from 'react';
import './CorreoElectronico.css';

function CorreoElectronico() {
  return (
    <div className="correo-container">
      <h1>Correo Electrónico</h1>
      <p>
        Aprende paso a paso cómo usar el correo electrónico: crear una cuenta, enviar mensajes, adjuntar archivos y organizar tu bandeja. Está pensado para personas que están empezando con la informática.
      </p>

      <div className="correo-section">
        <h2>1. ¿Qué es un correo electrónico?</h2>
        <p>
          Es una forma de enviar mensajes a través de internet, como una carta digital. Puedes usarlo para comunicarte con otras personas, enviar fotos o recibir notificaciones de servicios como el banco o citas médicas.
        </p>
      </div>

      <div className="correo-section">
        <h2>2. Crear una cuenta de correo</h2>
        <p>Para poder enviar y recibir correos, necesitas una cuenta. Puedes crear una gratuita en:</p>
        <ul>
          <li><strong>Gmail:</strong> www.gmail.com</li>
          <li><strong>Outlook:</strong> www.outlook.com</li>
          <li><strong>Yahoo Mail:</strong> www.mail.yahoo.com</li>
        </ul>
        <p>
          Haz clic en “Crear cuenta” y sigue los pasos. Tendrás que escribir tu nombre, elegir una dirección como <i>juan123@gmail.com</i>, y crear una contraseña segura.
        </p>
        <img
          src="/imagenes/crear-cuenta-gmail.png"
          alt="Ejemplo: Crear cuenta en Gmail"
          className="correo-imagen"
        />
      </div>

      <div className="correo-section">
        <h2>3. Acceder a tu cuenta</h2>
        <p>
          Entra en la web del servicio (por ejemplo, <strong>www.gmail.com</strong>) y escribe tu dirección de correo y tu contraseña. Haz clic en "Iniciar sesión".
        </p>
        <img
          src="/imagenes/iniciar-sesion.png"
          alt="Pantalla de inicio de sesión"
          className="correo-imagen"
        />
      </div>

      <div className="correo-section">
        <h2>4. Enviar un correo</h2>
        <p>Cuando estés dentro de tu cuenta:</p>
        <ul>
          <li>Haz clic en el botón “Redactar” o “Nuevo mensaje”.</li>
          <li>En “Para”, escribe la dirección del destinatario (por ejemplo: <i>amiga@hotmail.com</i>).</li>
          <li>En “Asunto”, escribe una frase breve (por ejemplo: <i>Fotos del viaje</i>).</li>
          <li>Debajo, escribe el mensaje que quieres enviar.</li>
          <li>Pulsa el botón “Enviar”.</li>
        </ul>
        <img
          src="/imagenes/redactar-correo.png"
          alt="Ejemplo: redacción de un nuevo correo"
          className="correo-imagen"
        />
      </div>

      <div className="correo-section">
        <h2>5. Adjuntar archivos (fotos, documentos...)</h2>
        <p>Para mandar una foto o un archivo:</p>
        <ul>
          <li>Pulsa el icono de clip 📎 que aparece al redactar el mensaje.</li>
          <li>Se abrirá una ventana con tus carpetas.</li>
          <li>Selecciona el archivo que quieres enviar y haz doble clic.</li>
          <li>Verás el archivo cargado en el correo. Pulsa “Enviar”.</li>
        </ul>
        <img
          src="/imagenes/adjuntar-archivo.png"
          alt="Cómo adjuntar un archivo"
          className="correo-imagen"
        />
      </div>

      <div className="correo-section">
        <h2>6. Leer un correo recibido</h2>
        <p>
          Los correos nuevos aparecen en la bandeja de entrada. Para leer uno, solo tienes que hacer clic sobre él.
        </p>
        <img
          src="/imagenes/bandeja-entrada.png"
          alt="Vista de la bandeja de entrada"
          className="correo-imagen"
        />
      </div>

      <div className="correo-section">
        <h2>7. Organizar la bandeja de entrada</h2>
        <p>Puedes mantener tus correos ordenados de esta forma:</p>
        <ul>
          <li><strong>Eliminar:</strong> Usa el icono de papelera 🗑️ si no lo necesitas.</li>
          <li><strong>Importantes:</strong> Marca con una estrella ⭐ los correos importantes.</li>
          <li><strong>Carpetas:</strong> Crea carpetas o etiquetas para clasificar correos por tema.</li>
          <li><strong>Buscar:</strong> Usa la barra de búsqueda para encontrar correos antiguos.</li>
        </ul>
        <img
          src="/imagenes/organizar-correo.png"
          alt="Opciones para organizar correos"
          className="correo-imagen"
        />
      </div>

      <div className="correo-section">
        <h2>8. Cerrar sesión</h2>
        <p>
          Cuando termines de usar tu correo, sobre todo si estás en un ordenador compartido, es importante cerrar sesión.
          Haz clic en tu foto o inicial (arriba a la derecha) y selecciona “Cerrar sesión” o “Salir”.
        </p>
        <img
          src="/imagenes/cerrar-sesion.png"
          alt="Cómo cerrar sesión de tu correo"
          className="correo-imagen"
        />
      </div>
    </div>
  );
}

export default CorreoElectronico;
