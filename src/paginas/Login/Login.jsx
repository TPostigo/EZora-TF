import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // tu propio CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userFound = users.find(user => user.email === email && user.password === password);

    if (userFound) {
      localStorage.setItem('currentUser', JSON.stringify(userFound));
      navigate('/homepage');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Iniciar Sesión</h2>
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
        <button onClick={handleLogin}>Entrar</button>
        <div className="switch-auth">
          ¿No tienes cuenta?
          <Link to="/registro">Regístrate</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
