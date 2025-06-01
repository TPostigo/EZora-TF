// src/paginas/CodeLab/javascript/JavaScriptConsole.jsx
import { useState, useEffect } from "react";
import "./JavaScriptConsole.css";

function JavaScriptConsole({ defaultCode = "" }) {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");

  useEffect(() => {
    setCode(defaultCode);
  }, [defaultCode]);

  const runCode = () => {
    let consoleOutput = "";
    const originalConsoleLog = console.log;

    try {
      console.log = (...args) => {
        consoleOutput += args.join(" ") + "\n";
        originalConsoleLog(...args);
      };

      const result = eval(`(function() { ${code} })()`);

      let combinedOutput = "";
      if (consoleOutput.trim().length > 0) {
        combinedOutput += consoleOutput.trim();
      }
      if (result !== undefined) {
        if (combinedOutput.length > 0) combinedOutput += "\n";
        combinedOutput += result.toString();
      }

      setOutput(combinedOutput || "✔️ Código ejecutado correctamente.");
    } catch (err) {
      setOutput(`❌ Error: ${err.message}`);
    } finally {
      console.log = originalConsoleLog;
    }
  };

  return (
    <div className="jsconsole-container">
      <h2 className="jsconsole-title">Consola JavaScript</h2>
      <textarea
        className="jsconsole-input"
        rows="8"
        placeholder="Escribe tu código JavaScript aquí..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div className="jsconsole-actions">
        <button className="jsconsole-button" onClick={runCode}>
          Ejecutar
        </button>
      </div>
      <div className="jsconsole-label">Resultado:</div>
      <pre className="jsconsole-output">{output}</pre>
    </div>
  );
}

export default JavaScriptConsole;
