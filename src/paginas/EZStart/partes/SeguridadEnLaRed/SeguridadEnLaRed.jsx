// src/paginas/EZStart/partes/SeguridadEnLaRed/SeguridadEnLaRed.jsx
import React from 'react';
import './SeguridadEnLaRed.css';

function SeguridadEnLaRed() {
  return (
    <div className="seguridad-container">
      <h1>Seguridad básica en la red</h1>
      <p>Protégete mientras navegas por internet con estos consejos y prácticas recomendadas:</p>

      <div className="seguridad-section">
        <h2>1. Contraseñas seguras</h2>
        <p>
          Usa contraseñas largas, con combinación de letras, números y símbolos. Evita usar datos personales como fechas de nacimiento.
        </p>
      </div>

      <div className="seguridad-section">
        <h2>2. No compartas información sensible</h2>
        <p>
          Nunca envíes tus datos personales o bancarios por correo electrónico o redes sociales. Verifica siempre el sitio web antes de introducir datos importantes.
        </p>
      </div>

      <div className="seguridad-section">
        <h2>3. Evita correos falsos (phishing)</h2>
        <p>
          Si recibes un correo sospechoso que solicita datos o incluye enlaces extraños, no hagas clic. Comprueba siempre la dirección del remitente.
        </p>
      </div>

      <div className="seguridad-section">
        <h2>4. Utiliza antivirus y actualiza el sistema</h2>
        <p>
          Instala un antivirus confiable y mantén tu sistema operativo actualizado. Esto reduce las posibilidades de sufrir ataques o virus.
        </p>
      </div>
    </div>
  );
}

export default SeguridadEnLaRed;
