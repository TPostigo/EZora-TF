import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registro.css'; // tu propio CSS

function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.email === email)) {
      alert('El usuario ya existe');
      return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('¡Registrado correctamente!');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Crear Cuenta</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Registrarse</button>
        <div className="switch-auth">
          ¿Ya tienes cuenta?
          <Link to="/login">Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default Registro;
