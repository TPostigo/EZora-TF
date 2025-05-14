// src/paginas/EZStart/partes/HerramientasDeOficina/HerramientasDeOficina.jsx
import React from 'react';
import './HerramientasDeOficina.css';

function HerramientasDeOficina() {
  return (
    <div className="herramientas-container">
      <h1>Herramientas de Oficina</h1>
      <p>Aprende a utilizar programas de oficina como procesadores de texto y hojas de cálculo.</p>

      <div className="herramientas-section">
        <h2>1. Procesadores de texto</h2>
        <p>
          Programas como Microsoft Word, Google Docs o LibreOffice Writer te permiten crear documentos. Puedes escribir, dar formato, insertar imágenes y guardar tu trabajo.
        </p>
      </div>

      <div className="herramientas-section">
        <h2>2. Hojas de cálculo</h2>
        <p>
          Excel, Google Sheets o LibreOffice Calc sirven para organizar datos, hacer cálculos y crear gráficos. Son muy útiles para gestionar presupuestos, listas o datos numéricos.
        </p>
      </div>

      <div className="herramientas-section">
        <h2>3. Guardar y exportar</h2>
        <p>
          Puedes guardar tus archivos en el ordenador o en la nube. Los formatos más comunes son .docx para texto y .xlsx para hojas de cálculo. También puedes exportarlos a PDF.
        </p>
      </div>

      <div className="herramientas-section">
        <h2>4. Versiones online</h2>
        <p>
          Google Docs y Google Sheets son versiones online gratuitas que se guardan automáticamente y se pueden compartir fácilmente con otras personas.
        </p>
      </div>
    </div>
  );
}

export default HerramientasDeOficina;
