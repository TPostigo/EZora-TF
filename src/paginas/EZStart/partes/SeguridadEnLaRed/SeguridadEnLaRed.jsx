// src/paginas/EZStart/partes/SeguridadEnLaRed/SeguridadEnLaRed.jsx
import React from 'react';
import './SeguridadEnLaRed.css';
import contSeg from './img/contSeg.png';
import sitSeg from './img/sitSeg.png';
import corrPhy from './img/corrPhy.png';
import antiVi from './img/antiVi.png';
import seguri from './img/seguri.png';

function SeguridadEnLaRed() {
  return (
    <div className="seguridad-container">
      <h1>Seguridad básica en la red</h1>
      <p>
        Protégete mientras navegas por internet con estos consejos sencillos y útiles. Aprende a crear contraseñas seguras, evitar estafas y mantener tu equipo protegido.
      </p>

      <div className="seguridad-section">
        <h2>1. Usa contraseñas seguras</h2>
        <p>
          Las contraseñas deben ser largas y difíciles de adivinar. Recomendaciones:
        </p>
        <ul>
          <li>Usa una combinación de letras mayúsculas, minúsculas, números y símbolos. Ejemplo: <code>PeRr0!2023*</code></li>
          <li>No uses tu nombre, fecha de nacimiento ni palabras simples como "123456".</li>
          <li>Si puedes, utiliza un gestor de contraseñas para guardar todas tus claves de forma segura.</li>
        </ul>
        <img
          src={contSeg}
          alt="Ejemplo de contraseña segura"
          className="seguridad-imagen"
        />
      </div>

      <div className="seguridad-section">
        <h2>2. No compartas información sensible</h2>
        <p>
          Nunca compartas datos personales por internet, como tu DNI, número de cuenta o dirección, especialmente si no estás seguro del sitio o la persona.
        </p>
        <ul>
          <li>No envíes información por correo electrónico o redes sociales.</li>
          <li>Asegúrate de que el sitio web comience por <strong>https://</strong> y tenga un candado 🔒.</li>
          <li>Desconfía si alguien te pide códigos, contraseñas o datos bancarios.</li>
        </ul>
        <img
          src={sitSeg}
          alt="Ejemplo de sitio seguro y no seguro"
          className="seguridad-imagen"
        />
      </div>

      <div className="seguridad-section">
        <h2>3. Evita correos falsos (phishing)</h2>
        <p>
          El phishing es un tipo de engaño donde alguien se hace pasar por una empresa o banco para robarte datos.
        </p>
        <ul>
          <li>No hagas clic en enlaces de correos sospechosos o que te piden datos urgentes.</li>
          <li>Revisa siempre la dirección del remitente (por ejemplo: <code>banco@seguro.com</code> vs <code>banco123@nooficial.com</code>).</li>
          <li>Si tienes dudas, entra a la página escribiendo tú mismo la dirección en el navegador.</li>
        </ul>
        <img
          src={corrPhy}
          alt="Ejemplo de un correo de phishing"
          className="seguridad-imagen"
        />
      </div>

      <div className="seguridad-section">
        <h2>4. Instala antivirus y mantén tu equipo actualizado</h2>
        <p>
          Un antivirus protege tu ordenador frente a virus y amenazas. Además, es importante mantener actualizado el sistema operativo y los programas.
        </p>
        <ul>
          <li>En Windows puedes usar <strong>Windows Defender</strong>, que ya viene incluido.</li>
          <li>También existen otros antivirus gratuitos como <strong>Avast</strong> o <strong>AVG</strong>.</li>
          <li>Activa las actualizaciones automáticas del sistema para tener siempre la última protección.</li>
        </ul>
        <img
          src={antiVi}
          alt="Antivirus y actualizaciones del sistema"
          className="seguridad-imagen"
        />
      </div>

      <div className="seguridad-section">
        <h2>5. Usa el sentido común</h2>
        <p>
          A veces, el mejor antivirus es la precaución. Si algo parece sospechoso, es mejor no hacer clic ni contestar.
        </p>
        <ul>
          <li>No descargues archivos de páginas que no conoces.</li>
          <li>No creas todo lo que lees en internet. Verifica en varias fuentes.</li>
          <li>Pregunta a alguien de confianza si tienes dudas antes de continuar.</li>
        </ul>
        <img
          src={seguri}
          alt="Recomendación general de precaución"
          className="seguridad-imagen"
        />
      </div>
    </div>
  );
}

export default SeguridadEnLaRed;
