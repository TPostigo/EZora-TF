// src/paginas/EZStart/partes/NavegacionInternet/NavegacionInternet.jsx
import React from 'react';
import './NavegacionInternet.css';

function NavegacionInternet() {
  return (
    <div className="navegacion-container">
      <h1>Navegación por Internet</h1>
      <p>Aprende a usar los navegadores web de forma segura y eficiente.</p>

      <div className="navegacion-section">
        <h2>1. ¿Qué es un navegador?</h2>
        <p>
          Es una aplicación que te permite visitar páginas web. Los más comunes son Google Chrome, Mozilla Firefox, Microsoft Edge y Safari.
        </p>
      </div>

      <div className="navegacion-section">
        <h2>2. Buscar información</h2>
        <p>
          Entra en un navegador y escribe lo que quieras buscar en la barra superior. Google, Bing o DuckDuckGo son buscadores populares.
        </p>
      </div>

      <div className="navegacion-section">
        <h2>3. Abrir pestañas</h2>
        <p>
          Puedes tener varias páginas abiertas al mismo tiempo. Haz clic en el símbolo "+" en la parte superior del navegador para abrir una nueva pestaña.
        </p>
      </div>

      <div className="navegacion-section">
        <h2>4. Guardar páginas favoritas</h2>
        <p>
          Si encuentras una página que quieres volver a visitar, haz clic en el icono de estrella (★) para guardarla como favorito o marcador.
        </p>
      </div>

      <div className="navegacion-section">
        <h2>5. ¿Qué es una URL?</h2>
        <p>
          Es la dirección de una página web, como por ejemplo: www.ejemplo.com. Puedes escribirla directamente en la barra superior para ir a esa página.
        </p>
      </div>
    </div>
  );
}

export default NavegacionInternet;
