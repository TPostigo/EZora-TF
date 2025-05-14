// src/paginas/Registro/Registro.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css';
import { registrarUsuario } from '../../api/firebaseService';

function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registrarUsuario(email, password);
      alert('¡Registrado correctamente!');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
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
          ¿Ya tienes cuenta?{' '}
          <span onClick={() => navigate('/login')} style={{ color: 'green', cursor: 'pointer' }}>
            Inicia sesión
          </span>
        </div>
      </div>
    </div>
  );
}

export default Registro;
