// src/paginas/EZStart/partes/InstalacionDeProgramas/InstalacionDeProgramas.jsx
import React from 'react';
import './InstalacionDeProgramas.css';
import MicSt from './img/MicSt.png';
import Finish from './img/Finish.png';
import BuscW from './img/BuscW.png';
import DesisW from './img/DesisW.png';
import ActuW from './img/ActuW.png';


function InstalacionDeProgramas() {
  return (
    <div className="instalacion-container">
      <h1>Instalación y gestión de programas</h1>
      <p>
        Aprende paso a paso a instalar, eliminar y actualizar programas sin poner en riesgo tu ordenador.
      </p>

      <div className="instalacion-section">
        <h2>1. ¿Qué es un programa?</h2>
        <p>
          Es una herramienta o aplicación que instalas en tu ordenador para realizar tareas. Por ejemplo:
        </p>
        <ul>
          <li><strong>Navegador:</strong> Google Chrome, Mozilla Firefox</li>
          <li><strong>Editor de texto:</strong> Microsoft Word, LibreOffice Writer</li>
          <li><strong>Antivirus:</strong> Avast, Windows Defender</li>
        </ul>
      </div>

      <div className="instalacion-section">
        <h2>2. Descargar programas seguros</h2>
        <p>
          Siempre descarga programas desde fuentes confiables:
        </p>
        <ul>
          <li>La web oficial del programa (por ejemplo: www.vlc.com).</li>
          <li>La <strong>Microsoft Store</strong> (Windows) o la <strong>App Store</strong> (Mac).</li>
        </ul>
        <p>
          No descargues programas desde páginas sospechosas que ofrezcan versiones piratas o "crackeadas". 
          Pueden contener virus o dañar tu equipo.
        </p>
        <img
          src={MicSt}
          alt="Ejemplo de descarga desde sitio oficial"
          className="instalacion-imagen"
        />
      </div>

      <div className="instalacion-section">
        <h2>3. Instalar un programa</h2>
        <p>Sigue estos pasos:</p>
        <ol>
          <li>Una vez descargado el archivo, haz doble clic sobre él.</li>
          <li>Se abrirá el instalador. Pulsa "Siguiente" o "Aceptar" según te indique.</li>
          <li>Lee cada paso con atención. Quita las casillas si ofrecen instalar algo adicional que no necesitas.</li>
          <li>Al terminar, pulsa “Finalizar”. El programa estará listo para usarse.</li>
        </ol>
        <img
          src={Finish}
          alt="Ventana típica de instalación"
          className="instalacion-imagen"
        />
      </div>

      <div className="instalacion-section">
        <h2>4. Abrir un programa instalado</h2>
        <p>
          Puedes abrirlo buscando su icono en el escritorio o escribiendo su nombre en el menú de inicio (Windows) o Spotlight (Mac).
        </p>
        <img
          src={BuscW}
          alt="Buscar y abrir un programa instalado"
          className="instalacion-imagen"
        />
      </div>

      <div className="instalacion-section">
        <h2>5. Desinstalar un programa</h2>
        <p>
          Si ya no necesitas un programa, puedes eliminarlo:
        </p>
        <ul>
          <li><strong>Windows:</strong> Ve al Panel de Control &rarr; Programas &rarr; Desinstalar un programa. Haz clic en el programa y luego en "Desinstalar".</li>
          <li><strong>macOS:</strong> Abre la carpeta “Aplicaciones” y arrastra el icono del programa a la Papelera.</li>
        </ul>
        <img
          src={DesisW}
          alt="Desinstalación de programas en Windows"
          className="instalacion-imagen"
        />
      </div>

      <div className="instalacion-section">
        <h2>6. Mantener el software actualizado</h2>
        <p>
          Tener los programas actualizados es importante para:
        </p>
        <ul>
          <li>Evitar errores o fallos.</li>
          <li>Mejorar el funcionamiento.</li>
          <li>Proteger tu equipo de virus o ataques.</li>
        </ul>
        <p>
          Muchos programas se actualizan automáticamente. Si no es así, abre el programa y busca una opción llamada <strong>“Buscar actualizaciones”</strong> o revisa su página web.
        </p>
        <img
          src={ActuW}
          alt="Opción para actualizar un programa"
          className="instalacion-imagen"
        />
      </div>

      <div className="instalacion-section">
        <h2>7. Consejo final</h2>
        <p>
          Si tienes dudas, pregunta antes de instalar algo. Muchos virus se instalan por error al aceptar todo sin leer.
          Lee con calma y solo instala lo que necesitas.
        </p>
      </div>
    </div>
  );
}

export default InstalacionDeProgramas;
