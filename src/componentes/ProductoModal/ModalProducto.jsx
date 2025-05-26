// src/componentes/ModalProducto.jsx
import React from 'react';
import './ModalProducto.css';

function ModalProducto({ producto, onClose }) {
  if (!producto) return null;

  const añadirACesta = () => {
    const cestaActual = JSON.parse(localStorage.getItem('cesta')) || [];
    const nuevaCesta = [...cestaActual, producto];
    localStorage.setItem('cesta', JSON.stringify(nuevaCesta));
    alert(`${producto.nombre} añadido a la cesta`);
    onClose();
  };

  return (
    <div className="modal-producto-overlay" onClick={onClose}>
      <div className="modal-producto-contenido" onClick={(e) => e.stopPropagation()}>
        <div className="modal-producto-layout">
          <img src={producto.imagen} alt={producto.nombre} className="modal-producto-imagen" />
          <div className="modal-producto-info">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <span className="modal-producto-precio">{producto.precio} €</span>
            <button className="modal-producto-boton" onClick={añadirACesta}>
              Añadir a cesta
            </button>
          </div>
        </div>
        <button className="modal-producto-cerrar" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default ModalProducto;
