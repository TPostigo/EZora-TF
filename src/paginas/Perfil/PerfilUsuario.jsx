// src/paginas/Perfil/PerfilUsuario.jsx
import React, { useEffect, useState } from 'react';
import './PerfilUsuario.css';

function PerfilUsuario() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.email) {
      setEmail(user.email);
    }
  }, []);

  return (
    <div className="usuario-perfil-container">
      <h1>Mi Perfil</h1>
      <div className="usuario-perfil-info">
        <strong>Correo electrónico:</strong>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default PerfilUsuario;
