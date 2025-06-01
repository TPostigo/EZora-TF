// src/paginas/Perfil/PerfilUsuario.jsx
import React, { useEffect, useState } from 'react';
import './PerfilUsuario.css';
import { useNavigate } from 'react-router-dom';

function PerfilUsuario() {
  const [email, setEmail] = useState('');
  const [esAdmin, setEsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.email) {
      setEmail(user.email);
    }
    if (user?.isAdmin === true) {
      setEsAdmin(true);
    }
  }, []);

  return (
    <div className="usuario-perfil-container">
      <h1>Mi Perfil</h1>
      <div className="usuario-perfil-info">
        <strong>Correo electrónico:</strong>
        <p>{email}</p>
      </div>

      {esAdmin && (
        <div className="admin-botones">
          <button onClick={() => navigate('/admin/add-producto')}>Añadir Producto</button>
          <button onClick={() => navigate('/admin/gestionar-productos')}>Editar / Eliminar Productos</button>
        </div>
      )}
    </div>
  );
}

export default PerfilUsuario;
