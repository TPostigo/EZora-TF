// src/paginas/CodeLab/html/HtmlPage.jsx
import React, { useState } from 'react';
import HtmlConsole from './HtmlConsole';
import ejercicios from './ejerciciosHtml';
import './HtmlPage.css';

function HtmlPage() {
  const [codigoSeleccionado, setCodigoSeleccionado] = useState("");
  const [ejercicioActivo, setEjercicioActivo] = useState(null);

  const handleEjercicioClick = (ej) => {
    setCodigoSeleccionado(ej.codigo);
    setEjercicioActivo(ej.id);
  };

  return (
    <div className="htmlpage-layout">
      <aside className="htmlpage-ejercicios">
        <h3>Ejercicios HTML</h3>
        <ul>
          {ejercicios.map((ej) => (
            <li
              key={ej.id}
              onClick={() => handleEjercicioClick(ej)}
              className={`htmlpage-ejercicio-item ${ejercicioActivo === ej.id ? 'htmlpage-ejercicio-activo' : ''}`}
            >
              <div>{ej.titulo}</div>
              {ejercicioActivo === ej.id && (
                <p className="htmlpage-enunciado">{ej.enunciado}</p>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <main className="htmlpage-consola">
        <HtmlConsole defaultCode={codigoSeleccionado} />
      </main>
    </div>
  );
}

export default HtmlPage;
