// src/paginas/CodeLab/CodeLabMenu.jsx
import React from 'react';
import './CodeLabMenu.css';
import { useNavigate } from 'react-router-dom';

const lenguajes = [
  { id: 1, titulo: 'JavaScript', imagen: '/img/js.png', ruta: '/codelab/javascript' },
  { id: 2, titulo: 'Python', imagen: '/img/python.png', ruta: '/codelab/python' },
  { id: 3, titulo: 'HTML + CSS', imagen: '/img/html.png', ruta: '/codelab/html' },
  { id: 4, titulo: 'SQL', imagen: '/img/sql.png', ruta: '/codelab/sql' },
];

function CodeLabMenu() {
  const navigate = useNavigate();

  return (
    <div className="codelab-container">
      {lenguajes.map((lang) => (
        <div
          key={lang.id}
          className="codelab-box"
          style={{ '--bg-image': `url(${lang.imagen})` }}
          onClick={() => navigate(lang.ruta)}
        >
          <div className="codelab-title">{lang.titulo}</div>
        </div>
      ))}
    </div>
  );
}

export default CodeLabMenu;
