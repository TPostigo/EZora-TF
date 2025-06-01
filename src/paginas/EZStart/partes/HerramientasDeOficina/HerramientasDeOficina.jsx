// src/paginas/EZStart/partes/HerramientasDeOficina/HerramientasDeOficina.jsx
import React from 'react';
import './HerramientasDeOficina.css';
import procText from './img/procText.png';
import ojCalc from './img/ojCalc.png';
import expAr from './img/expAr.png';
import goDocs from './img/goDocs.png';

function HerramientasDeOficina() {
  return (
    <div className="herramientas-container">
      <h1>Herramientas de Oficina</h1>
      <p>
        Aprende a utilizar programas básicos de oficina, como los procesadores de texto y las hojas de cálculo, paso a paso y con ejemplos.
      </p>

      <div className="herramientas-section">
        <h2>1. ¿Qué son las herramientas de oficina?</h2>
        <p>
          Son programas que usamos para escribir textos, hacer cuentas, preparar presentaciones o crear listas. Se usan mucho en el trabajo, en estudios y también en casa.
        </p>
      </div>

      <div className="herramientas-section">
        <h2>2. Procesadores de texto</h2>
        <p>
          Sirven para escribir documentos, como cartas, informes o apuntes. Los más comunes son:
        </p>
        <ul>
          <li><strong>Microsoft Word</strong> (de pago)</li>
          <li><strong>Google Docs</strong> (gratis y online)</li>
          <li><strong>LibreOffice Writer</strong> (gratuito)</li>
        </ul>
        <p>
          Puedes escribir, cambiar el tipo de letra, el color, el tamaño, alinear el texto, insertar imágenes o tablas, y guardar el documento.
        </p>
        <img
          src={procText}
          alt="Ejemplo de procesador de texto"
          className="herramientas-imagen"
        />
      </div>

      <div className="herramientas-section">
        <h2>3. Hojas de cálculo</h2>
        <p>
          Se usan para hacer cuentas, organizar datos o crear listas. Por ejemplo: una lista de gastos mensuales o una tabla con horarios.
        </p>
        <ul>
          <li><strong>Microsoft Excel</strong></li>
          <li><strong>Google Sheets</strong></li>
          <li><strong>LibreOffice Calc</strong></li>
        </ul>
        <p>
          Cada hoja está dividida en columnas (letras) y filas (números). Puedes escribir texto o números y hacer operaciones automáticas, como sumar o calcular porcentajes.
        </p>
        <img
          src={ojCalc}
          alt="Ejemplo de hoja de cálculo"
          className="herramientas-imagen"
        />
      </div>

      <div className="herramientas-section">
        <h2>4. Guardar y exportar archivos</h2>
        <p>
          Cuando termines tu trabajo, puedes:
        </p>
        <ul>
          <li><strong>Guardar en tu ordenador</strong> con opciones como “Guardar” o “Guardar como”.</li>
          <li><strong>Guardar en la nube</strong>, como en Google Drive o OneDrive (necesitas cuenta).</li>
          <li><strong>Exportar</strong> a otros formatos como PDF, muy útil si no quieres que se pueda editar.</li>
        </ul>
        <img
          src={expAr}
          alt="Cómo guardar o exportar archivos"
          className="herramientas-imagen"
        />
      </div>

      <div className="herramientas-section">
        <h2>5. Versiones online (sin instalar nada)</h2>
        <p>
          Puedes usar herramientas de oficina directamente desde el navegador, sin instalar programas. Solo necesitas internet y una cuenta de Google.
        </p>
        <ul>
          <li><strong>Google Docs:</strong> documentos de texto</li>
          <li><strong>Google Sheets:</strong> hojas de cálculo</li>
          <li>Todo se guarda automáticamente y puedes compartir los archivos con otras personas.</li>
        </ul>
        <img
          src={goDocs}
          alt="Ejemplo de Google Docs"
          className="herramientas-imagen"
        />
      </div>

      <div className="herramientas-section">
        <h2>6. Consejos básicos</h2>
        <ul>
          <li>Usa nombres claros para tus archivos (por ejemplo: <i>Lista_compras_enero.xlsx</i>).</li>
          <li>Haz copias de seguridad si el archivo es importante.</li>
          <li>Si no sabes para qué sirve una herramienta, pasa el ratón por encima: suele aparecer una explicación.</li>
        </ul>
      </div>
    </div>
  );
}

export default HerramientasDeOficina;
