// src/paginas/Admin/GestionarProductos.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './GestionarProductos.css';

function GestionarProductos() {
  const [productos, setProductos] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');
  const [nuevaImagen, setNuevaImagen] = useState('');

  const obtenerProductos = async () => {
    const productosSnapshot = await getDocs(collection(db, 'productos'));
    const lista = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProductos(lista);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const eliminarProducto = async (id) => {
    await deleteDoc(doc(db, 'productos', id));
    obtenerProductos();
  };

  const editarProducto = (producto) => {
    setModoEdicion(producto.id);
    setNuevoNombre(producto.nombre);
    setNuevaDescripcion(producto.descripcion || '');
    setNuevaImagen(producto.imagen || '');
  };

  const guardarCambios = async (id) => {
    await updateDoc(doc(db, 'productos', id), {
      nombre: nuevoNombre,
      descripcion: nuevaDescripcion,
      imagen: nuevaImagen
    });
    setModoEdicion(null);
    obtenerProductos();
  };

  return (
    <div className="gestion-productos-container">
      <h2>Gestionar Productos</h2>
      {productos.map((producto) => (
        <div key={producto.id} className="producto-item">
          {modoEdicion === producto.id ? (
            <>
              <input
                className="producto-input"
                type="text"
                placeholder="Nombre"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
              />
              <input
                className="producto-input"
                type="text"
                placeholder="Descripción"
                value={nuevaDescripcion}
                onChange={(e) => setNuevaDescripcion(e.target.value)}
              />
              <input
                className="producto-input"
                type="text"
                placeholder="URL de imagen"
                value={nuevaImagen}
                onChange={(e) => setNuevaImagen(e.target.value)}
              />
              <button className="producto-btn" onClick={() => guardarCambios(producto.id)}>Guardar</button>
              <button className="producto-btn" onClick={() => setModoEdicion(null)}>Cancelar</button>
            </>
          ) : (
            <>
              <p><strong>{producto.nombre}</strong></p>
              <p>{producto.descripcion}</p>
              {producto.imagen && (
                <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
              )}
              <button className="producto-btn" onClick={() => editarProducto(producto)}>Editar</button>
              <button className="producto-btn eliminar" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default GestionarProductos;
