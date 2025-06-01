import React, { useState, useEffect } from 'react';
import './HtmlConsole.css';

function HtmlConsole({ defaultCode = "" }) {
  const [code, setCode] = useState(defaultCode);

  useEffect(() => {
    setCode(defaultCode);
  }, [defaultCode]);

  return (
    <div className="htmlconsole-container">
      <h2 className="htmlconsole-title">Consola HTML</h2>

      <textarea
        className="htmlconsole-textarea"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Escribe código HTML aquí..."
      />

      <div className="htmlconsole-preview-label">Vista previa:</div>
      <iframe
        className="htmlconsole-preview"
        title="Vista previa HTML"
        srcDoc={code}
        sandbox=""
      />
    </div>
  );
}

export default HtmlConsole;
