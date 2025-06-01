import React, { useState, useEffect } from 'react';
import './PythonConsole.css';

function PythonConsole({ defaultCode = "" }) {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");

  useEffect(() => {
    const loadPyodide = async () => {
      if (!window.loadPyodide) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js";
        script.onload = async () => {
          const pyodideModule = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",
          });
          setPyodide(pyodideModule);
        };
        document.body.appendChild(script);
      } else {
        const pyodideModule = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",
        });
        setPyodide(pyodideModule);
      }
    };
    loadPyodide();
  }, []);

  useEffect(() => {
    setCode(defaultCode);
  }, [defaultCode]);

  const runCode = async () => {
    if (pyodide) {
      try {
        let stdout = "";
        pyodide.setStdout({
          batched: (text) => { stdout += text; },
        });

        await pyodide.runPythonAsync(code);
        setOutput(stdout || "✔️ Código ejecutado correctamente.");
      } catch (err) {
        setOutput(`❌ Error: ${err.message}`);
      }
    }
  };

  return (
    <div className="pythonconsole-container">
      <h2 className="pythonconsole-title">Consola Python</h2>
      <textarea
        className="pythonconsole-textarea"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div className="pythonconsole-actions">
        <button className="pythonconsole-button" onClick={runCode}>
          Ejecutar
        </button>
      </div>
      <div className="pythonconsole-output-label">Resultado:</div>
      <div className="pythonconsole-output">{output}</div>
    </div>
  );
}

export default PythonConsole;
