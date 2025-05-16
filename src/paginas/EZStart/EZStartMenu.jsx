// src/paginas/EZStart/EZStartMenu.jsx
import React from 'react';
import './EZStartMenu.css';
import { useNavigate } from 'react-router-dom';

const secciones = [
  { id: 1, titulo: 'Uso del Sistema Operativo', imagen: '/img/UsoSistemaOperativo.png', ruta: '/ezstart/uso-sistema' },
  { id: 2, titulo: 'Instalación de Programas', imagen: '/img/InstalacionDeProgramas.png', ruta: '/ezstart/instalacion' },
  { id: 3, titulo: 'Navegación por Internet', imagen: '/img/NavegacionPorInternet.png', ruta: '/ezstart/navegacion' },
  { id: 4, titulo: 'Correo Electrónico', imagen: '/img/CorreoElectronico.png', ruta: '/ezstart/correo' },
  { id: 5, titulo: 'Seguridad en la Red', imagen: '/img/SeguridadEnLaRed.png', ruta: '/ezstart/seguridad' },
  { id: 6, titulo: 'Herramientas de Oficina', imagen: '/img/HerramientasDeOficina.png', ruta: '/ezstart/oficina' },
];

function EZStartMenu() {
  const navigate = useNavigate();

  return (
    <div className="ezstart-container">
      {secciones.map((sec) => (
        <div
          key={sec.id}
          className="ezstart-box"
          style={{ backgroundImage: `url(${sec.imagen})` }}
          onClick={() => navigate(sec.ruta)}
        >
          <div className="ezstart-title">{sec.titulo}</div>
        </div>
      ))}
    </div>
  );
}

export default EZStartMenu;
