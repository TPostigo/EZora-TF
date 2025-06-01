// src/paginas/CodeLab/javascript/JavaScriptPage.jsx
import React, { useState } from 'react';
import JavaScriptConsole from './JavaScriptConsole';
import ejerciciosJavaScript from './ejerciciosJavaScript';
import './JavaScriptPage.css';

function JavaScriptPage() {
  const [codigoSeleccionado, setCodigoSeleccionado] = useState("");
  const [ejercicioActivo, setEjercicioActivo] = useState(null);

  const handleEjercicioClick = (ej) => {
    setCodigoSeleccionado(ej.codigo);
    setEjercicioActivo(ej.id);
  };

  return (
    <div className="jspage-layout">
      <aside className="jspage-ejercicios">
        <h3>Ejercicios</h3>
        <ul>
          {ejerciciosJavaScript.map((ej) => (
            <li
              key={ej.id}
              onClick={() => handleEjercicioClick(ej)}
              className={`jspage-ejercicio-item ${ejercicioActivo === ej.id ? 'jspage-ejercicio-activo' : ''}`}
            >
              <div>{ej.titulo}</div>
              {ejercicioActivo === ej.id && (
                <p className="jspage-enunciado">{ej.enunciado}</p>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <main className="jspage-consola">
        <JavaScriptConsole defaultCode={codigoSeleccionado} />
      </main>
    </div>
  );
}

export default JavaScriptPage;
