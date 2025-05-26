// src/paginas/EZStart/partes/UsoSistemaOperativo/UsoSistemaOperativo.jsx
import React from 'react';
import './UsoSistemaOperativo.css';
import SistOpe from './img/SistOpe.png';
import AbrirCarp from './img/AbrirCarp.png';
import CopPast from './img/CopPast.png';
import AjWin from './img/AjWin.png';
import ApagarW from './img/ApagarW.png';


function UsoSistemaOperativo() {
  return (
    <div className="uso-sistema-container">
      <h1>Uso básico del sistema operativo</h1>
      <p>
        Aprende a moverte por tu ordenador con confianza. A continuación, te mostramos las funciones básicas más importantes que deberías conocer.
      </p>

      <div className="uso-sistema-section">
        <h2>1. ¿Qué es un sistema operativo?</h2>
        <p>
          Es el programa principal que controla tu ordenador. Los más comunes son:
        </p>
        <ul>
          <li><strong>Windows</strong> (Microsoft)</li>
          <li><strong>macOS</strong> (Apple)</li>
          <li><strong>Linux</strong> (como Ubuntu o Linux Mint)</li>
        </ul>
        <img
          src={SistOpe}
          alt="Ejemplos de sistemas operativos"
          className="uso-sistema-imagen"
        />
      </div>

      <div className="uso-sistema-section">
        <h2>2. Abrir carpetas y archivos</h2>
        <p>
          Para abrir un archivo o carpeta:
        </p>
        <ul>
          <li>Haz doble clic sobre el icono con el ratón.</li>
          <li>En Windows, usa el <strong>Explorador de archivos</strong>.</li>
          <li>En Mac, usa el <strong>Finder</strong> (el icono de la carita sonriente).</li>
        </ul>
        <img
          src={AbrirCarp}
          alt="Ejemplo de abrir una carpeta en Windows"
          className="uso-sistema-imagen"
        />
      </div>

      <div className="uso-sistema-section">
        <h2>3. Copiar y pegar archivos</h2>
        <p>Pasos para copiar un archivo de una carpeta a otra:</p>
        <ol>
          <li>Haz clic derecho sobre el archivo y elige <strong>Copiar</strong>.</li>
          <li>Ve a la carpeta de destino.</li>
          <li>Haz clic derecho en un espacio vacío y elige <strong>Pegar</strong>.</li>
        </ol>
        <p>También puedes usar estos atajos:</p>
        <ul>
          <li><strong>Ctrl + C:</strong> Copiar</li>
          <li><strong>Ctrl + V:</strong> Pegar</li>
          <li><strong>Ctrl + X:</strong> Cortar (mover)</li>
        </ul>
        <img
          src={CopPast}
          alt="Cómo copiar y pegar archivos"
          className="uso-sistema-imagen"
        />
      </div>

      <div className="uso-sistema-section">
        <h2>4. Ajustar configuración básica</h2>
        <p>
          Puedes personalizar tu ordenador desde el panel de configuración:
        </p>
        <ul>
          <li><strong>Windows:</strong> Ve a <em>Inicio &gt; Configuración</em></li>
          <li><strong>macOS:</strong> Ve a <em>Preferencias del Sistema</em></li>
        </ul>
        <p>Desde ahí puedes:</p>
        <ul>
          <li>Cambiar el fondo de pantalla</li>
          <li>Configurar la conexión Wi-Fi</li>
          <li>Modificar el tamaño del texto o la resolución</li>
        </ul>
        <img
          src={AjWin}
          alt="Panel de configuración de Windows"
          className="uso-sistema-imagen"
        />
      </div>

      <div className="uso-sistema-section">
        <h2>5. Cerrar y apagar el equipo</h2>
        <p>
          Es importante cerrar los programas abiertos antes de apagar el equipo para evitar errores. Luego:
        </p>
        <ul>
          <li><strong>Windows:</strong> Haz clic en el botón de Inicio (abajo a la izquierda) y selecciona <em>Apagar</em>.</li>
          <li><strong>macOS:</strong> Haz clic en el menú  y elige <em>Apagar</em>.</li>
        </ul>
        <img
          src={ApagarW}
          alt="Cómo apagar el equipo"
          className="uso-sistema-imagen"
        />
      </div>

      <div className="uso-sistema-section">
        <h2>6. Consejo final</h2>
        <p>
          No tengas miedo de explorar. La mayoría de los cambios pueden deshacerse y todo se puede aprender poco a poco. 
          Tómatelo con calma y practica con frecuencia.
        </p>
      </div>
    </div>
  );
}

export default UsoSistemaOperativo;
