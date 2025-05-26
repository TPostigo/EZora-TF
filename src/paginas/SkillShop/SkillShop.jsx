// src/paginas/SkillShop/SkillShop.jsx
import React, { useEffect, useState } from 'react';
import './SkillShop.css';
import { obtenerProductos } from '../../api/skillShopApi';
import ModalProducto from '../../componentes/ProductoModal/ModalProducto'; // Asegúrate que la ruta es correcta

function SkillShop() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

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
          <div
            className="skillshop-card"
            key={producto.id}
            onClick={() => setProductoSeleccionado(producto)}
          >
            <img src={producto.imagen} alt={producto.nombre} className="skillshop-img" />
            <h2>{producto.nombre}</h2>
            <span className="skillshop-precio">{producto.precio} €</span>
          </div>
        ))}
      </div>

      <ModalProducto
        producto={productoSeleccionado}
        onClose={() => setProductoSeleccionado(null)}
      />
    </div>
  );
}

export default SkillShop;
