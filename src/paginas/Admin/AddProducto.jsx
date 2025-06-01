// src/paginas/Admin/AddProducto.jsx
import React, { useState } from 'react';
import './AddProducto.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function AddProducto() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'productos'), {
        nombre,
        precio: parseFloat(precio),
        imagen,
        descripcion
      });

      setMensaje('Producto añadido correctamente');
      setNombre('');
      setPrecio('');
      setImagen('');
      setDescripcion('');
    } catch (error) {
      console.error('Error al añadir producto:', error);
      setMensaje('Error al guardar el producto');
    }
  };

  return (
    <div className="add-product-container">
      <h2>Añadir Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL de imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button type="submit">Añadir</button>
        {mensaje && <p>{mensaje}</p>}
      </form>
    </div>
  );
}

export default AddProducto;