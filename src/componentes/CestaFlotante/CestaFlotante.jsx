import React, { useEffect, useState } from 'react';
import './CestaFlotante.css';

function CestaFlotante({ visible }) {
  const [cesta, setCesta] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cesta');
    if (stored) setCesta(JSON.parse(stored));
  }, [visible]);

  const eliminarDeCesta = (id) => {
    const nuevaCesta = cesta.filter(item => item.id !== id);
    setCesta(nuevaCesta);
    localStorage.setItem('cesta', JSON.stringify(nuevaCesta));
  };

  if (!visible) return null;

  return (
    <div className="cesta-menu-flotante">
      <h3 className="cesta-titulo">Mi Cesta</h3>
      {cesta.length === 0 ? (
        <p className="cesta-vacia">Tu cesta está vacía</p>
      ) : (
        cesta.map((item) => (
          <div className="cesta-item-flotante" key={item.id}>
            <img src={item.imagen} alt={item.nombre} className="cesta-img-flotante" />
            <div className="cesta-info-flotante">
              <span className="cesta-nombre-flotante">{item.nombre}</span>
              <span className="cesta-precio-flotante">{item.precio} €</span>
            </div>
            <div className="cesta-eliminar-contenedor">
              <button className="cesta-eliminar-flotante" onClick={() => eliminarDeCesta(item.id)}>×</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CestaFlotante;
