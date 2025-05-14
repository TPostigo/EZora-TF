import React from 'react';
import './InstalacionDeProgramas.css';

function InstalacionDeProgramas() {
  return (
    <div className="instalacion-container">
      <h1>Instalación y gestión de programas</h1>
      <p>Aquí aprenderás a instalar y eliminar aplicaciones sin comprometer la seguridad de tu equipo.</p>

      <div className="instalacion-section">
        <h2>1. Descargar programas seguros</h2>
        <p>
          Siempre descarga programas desde sus sitios oficiales o tiendas de aplicaciones confiables. Evita sitios extraños o que ofrezcan versiones "gratuitas" de programas de pago.
        </p>
      </div>

      <div className="instalacion-section">
        <h2>2. Instalar un programa</h2>
        <p>
          Una vez descargado el archivo, haz doble clic para iniciar la instalación. Sigue los pasos del instalador. Asegúrate de leer cada paso para evitar instalar programas adicionales no deseados.
        </p>
      </div>

      <div className="instalacion-section">
        <h2>3. Desinstalar un programa</h2>
        <p>
          En Windows, ve al Panel de Control &rarr; Programas &rarr; Desinstalar un programa. En macOS, simplemente arrastra la aplicación desde la carpeta de Aplicaciones a la Papelera.
        </p>
      </div>

      <div className="instalacion-section">
        <h2>4. Mantener el software actualizado</h2>
        <p>
          Muchos programas tienen la opción de actualizarse automáticamente. Esto es importante para mantener la seguridad de tu equipo.
        </p>
      </div>
    </div>
  );
}

export default InstalacionDeProgramas;
