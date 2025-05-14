// src/paginas/EZStart/partes/CorreoElectronico/CorreoElectronico.jsx
import React from 'react';
import './CorreoElectronico.css';

function CorreoElectronico() {
  return (
    <div className="correo-container">
      <h1>Correo Electrónico</h1>
      <p>Aprende cómo crear, enviar y gestionar correos electrónicos de forma sencilla.</p>

      <div className="correo-section">
        <h2>1. Crear una cuenta de correo</h2>
        <p>
          Puedes crear una cuenta gratuita en servicios como Gmail, Outlook o Yahoo. Solo necesitas una conexión a internet y seguir los pasos en la página de registro.
        </p>
      </div>

      <div className="correo-section">
        <h2>2. Enviar un correo</h2>
        <p>
          Una vez dentro de tu cuenta, haz clic en “Redactar” o “Nuevo mensaje”. Escribe la dirección del destinatario, el asunto y el mensaje, y pulsa “Enviar”.
        </p>
      </div>

      <div className="correo-section">
        <h2>3. Adjuntar archivos</h2>
        <p>
          Para enviar fotos o documentos, haz clic en el icono de clip 📎 y selecciona el archivo desde tu ordenador.
        </p>
      </div>

      <div className="correo-section">
        <h2>4. Organizar la bandeja de entrada</h2>
        <p>
          Puedes marcar correos como importantes, eliminarlos o moverlos a carpetas para mantener todo ordenado. También puedes buscar por palabras clave.
        </p>
      </div>
    </div>
  );
}

export default CorreoElectronico;
