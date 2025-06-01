import React, { useState } from 'react';
import PythonConsole from './PythonConsole';
import ejercicios from './ejerciciosPython';
import './PythonPage.css';

function PythonPage() {
  const [codigoSeleccionado, setCodigoSeleccionado] = useState("");
  const [ejercicioActivo, setEjercicioActivo] = useState(null);

  const handleEjercicioClick = (ej) => {
    setCodigoSeleccionado(ej.codigo);
    setEjercicioActivo(ej.id);
  };

  return (
    <div className="pythonpage-layout">
      <aside className="pythonpage-ejercicios">
        <h3>Ejercicios</h3>
        <ul>
          {ejercicios.map((ej) => (
            <li
              key={ej.id}
              onClick={() => handleEjercicioClick(ej)}
              className={`pythonpage-ejercicio-item ${ejercicioActivo === ej.id ? 'pythonpage-ejercicio-activo' : ''}`}
            >
              <div>{ej.titulo}</div>
              {ejercicioActivo === ej.id && (
                <p className="pythonpage-enunciado">{ej.enunciado}</p>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <main className="pythonpage-consola">
        <PythonConsole defaultCode={codigoSeleccionado} />
      </main>
    </div>
  );
}

export default PythonPage;
