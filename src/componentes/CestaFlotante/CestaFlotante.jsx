// src/componentes/CestaFlotante.jsx
import React, { useEffect, useState } from 'react';
import './CestaFlotante.css';
import { getAuth } from 'firebase/auth';
import { obtenerCestaPorUsuario, eliminarProductoDeCesta } from '../../api/cestaService';
import { useNavigate } from 'react-router-dom';

function CestaFlotante({ visible, onClose }) {
  const [cesta, setCesta] = useState([]);
  const navigate = useNavigate();

  const cargarCesta = async () => {
    const user = getAuth().currentUser;
    if (user) {
      const productos = await obtenerCestaPorUsuario(user.uid);
      setCesta(productos);
    }
  };

  useEffect(() => {
    if (visible) {
      cargarCesta();
    }
  }, [visible]);

  const eliminarDeCesta = async (producto) => {
    const user = getAuth().currentUser;
    if (!user) return;

    await eliminarProductoDeCesta(user.uid, producto);
    cargarCesta(); // Recargar después de eliminar
  };

  if (!visible) return null;

  return (
    <div className="cesta-flotante-overlay">
      <div className="cesta-flotante-panel">
        <button className="cesta-cerrar" onClick={onClose}>×</button>
        <h3 className="cesta-titulo">Mi Cesta</h3>
        {cesta.length === 0 ? (
          <p className="cesta-vacia">Tu cesta está vacía</p>
        ) : (
          <>
            <ul className="cesta-lista">
              {cesta.map((item) => (
                <li className="cesta-item" key={item.id}>
                  <img src={item.imagen} alt={item.nombre} className="cesta-img" />
                  <div className="cesta-info">
                    <span className="cesta-nombre">{item.nombre}</span>
                    <span className="cesta-precio">{item.precio} €</span>
                  </div>
                  <button className="cesta-eliminar" onClick={() => eliminarDeCesta(item)}>×</button>
                </li>
              ))}
            </ul>
            <button className="cesta-boton-pagar" onClick={() => navigate('/checkout')}>
              Ir a pagar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CestaFlotante;
