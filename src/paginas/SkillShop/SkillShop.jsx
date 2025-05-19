// src/paginas/SkillShop/SkillShop.jsx
import React, { useEffect, useState } from 'react';
import './SkillShop.css';
import { obtenerProductos } from '../../api/skillShopApi';

function SkillShop() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="skillshop-container">
      <h1>Tienda - SkillShop</h1>
      <div className="skillshop-grid">
        {productos.map((producto) => (
          <div className="skillshop-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} className="skillshop-img" />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <span className="skillshop-precio">{producto.precio} €</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillShop;
