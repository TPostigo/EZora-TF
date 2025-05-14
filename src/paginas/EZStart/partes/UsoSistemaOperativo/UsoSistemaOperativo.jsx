import React from 'react';
import './UsoSistemaOperativo.css';

function UsoSistemaOperativo() {
  return (
    <div className="uso-sistema-container">
      <h1>Uso básico del sistema operativo</h1>
      <p>Aprende a moverte por tu ordenador con confianza. A continuación, te mostramos las funciones básicas que debes conocer:</p>

      <div className="uso-sistema-section">
        <h2>1. Abrir carpetas y archivos</h2>
        <p>
          Puedes hacer doble clic sobre cualquier carpeta o archivo para abrirlo. Si estás en Windows, usa el explorador de archivos. En macOS, utiliza el Finder.
        </p>
      </div>

      <div className="uso-sistema-section">
        <h2>2. Copiar y pegar archivos</h2>
        <p>
          Selecciona el archivo, haz clic derecho y elige “Copiar”. Luego, ve a la carpeta destino, haz clic derecho y selecciona “Pegar”. También puedes usar los atajos:
        </p>
        <ul>
          <li>Ctrl + C para copiar</li>
          <li>Ctrl + V para pegar</li>
          <li>Ctrl + X para cortar</li>
        </ul>
      </div>

      <div className="uso-sistema-section">
        <h2>3. Ajustar configuración básica</h2>
        <p>
          Puedes cambiar el fondo de pantalla, la resolución o configurar Wi-Fi desde el panel de configuración ("Configuración" en Windows, "Preferencias del Sistema" en macOS).
        </p>
      </div>

      <div className="uso-sistema-section">
        <h2>4. Cerrar y apagar el equipo</h2>
        <p>
          No olvides cerrar tus programas antes de apagar el ordenador. Puedes hacer clic en el botón de inicio y seleccionar “Apagar”. En macOS, ve al menú de la manzana  y elige “Apagar”.
        </p>
      </div>
    </div>
  );
}

export default UsoSistemaOperativo;
