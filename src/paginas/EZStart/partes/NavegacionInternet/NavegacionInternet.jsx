// src/paginas/EZStart/partes/NavegacionInternet/NavegacionInternet.jsx
import React from 'react';
import './NavegacionInternet.css';
import nave from './img/nave.png';
import busqGo from './img/busqGo.png';
import pesta from './img/pesta.png';
import favo from './img/favo.png';
import url from './img/url.png';

function NavegacionInternet() {
  return (
    <div className="navegacion-container">
      <h1>Navegación por Internet</h1>
      <p>
        Aprende a usar los navegadores web paso a paso: cómo buscar información, abrir páginas, guardar tus sitios favoritos y navegar de forma segura.
      </p>

      <div className="navegacion-section">
        <h2>1. ¿Qué es un navegador?</h2>
        <p>
          Es un programa que permite acceder a internet y visitar páginas web. Algunos de los más conocidos son:
        </p>
        <ul>
          <li><strong>Google Chrome</strong></li>
          <li><strong>Mozilla Firefox</strong></li>
          <li><strong>Microsoft Edge</strong></li>
          <li><strong>Safari</strong> (en dispositivos Apple)</li>
        </ul>
        <img
          src={nave}
          alt="Ejemplos de navegadores web"
          className="navegacion-imagen"
        />
      </div>

      <div className="navegacion-section">
        <h2>2. Buscar información</h2>
        <p>
          Entra en un navegador y escribe lo que quieras buscar en la barra superior (donde aparece el texto o dirección). Al pulsar <strong>Enter</strong>, verás una lista de resultados.
        </p>
        <p>
          Puedes usar buscadores como:
        </p>
        <ul>
          <li><strong>Google</strong>: www.google.com</li>
          <li><strong>Bing</strong>: www.bing.com</li>
          <li><strong>DuckDuckGo</strong>: www.duckduckgo.com</li>
        </ul>
        <img
          src={busqGo}
          alt="Ejemplo de búsqueda en Google"
          className="navegacion-imagen"
        />
      </div>

      <div className="navegacion-section">
        <h2>3. Abrir pestañas</h2>
        <p>
          Puedes visitar varias páginas a la vez. Para hacerlo, haz clic en el símbolo "+" en la parte superior del navegador. 
          Cada nueva pestaña es como una nueva ventana.
        </p>
        <img
          src={pesta}
          alt="Cómo abrir pestañas en el navegador"
          className="navegacion-imagen"
        />
      </div>

      <div className="navegacion-section">
        <h2>4. Guardar páginas favoritas</h2>
        <p>
          Si encuentras una página que te gusta y quieres guardar para más tarde, haz clic en el icono de estrella (★) que aparece a la derecha de la barra de direcciones.
        </p>
        <p>
          Esa página se guardará como "Favorito" o "Marcador", y podrás volver a ella fácilmente desde el menú de marcadores.
        </p>
        <img
          src={favo}
          alt="Guardar una página como favorito"
          className="navegacion-imagen"
        />
      </div>

      <div className="navegacion-section">
        <h2>5. ¿Qué es una URL?</h2>
        <p>
          Es la dirección única de una página web. Por ejemplo: <strong>www.ejemplo.com</strong>. 
          Si la escribes en la barra superior y pulsas <strong>Enter</strong>, irás directamente a esa página.
        </p>
        <img
          src={url}
          alt="Ejemplo de una URL en la barra del navegador"
          className="navegacion-imagen"
        />
      </div>

      <div className="navegacion-section">
        <h2>6. Navegación segura</h2>
        <p>
          Para evitar problemas de seguridad:
        </p>
        <ul>
          <li>Evita hacer clic en enlaces sospechosos.</li>
          <li>Fíjate que las páginas tengan un candado 🔒 al lado de la URL (significa que es segura).</li>
          <li>No escribas contraseñas en páginas que no conoces o que no empiecen por <strong>https://</strong>.</li>
        </ul>
        <img
          src="/imagenes/navegacion-segura.png"
          alt="Candado de seguridad en una página web"
          className="navegacion-imagen"
        />
      </div>
    </div>
  );
}

export default NavegacionInternet;
