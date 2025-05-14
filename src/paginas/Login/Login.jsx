import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { loginUsuario } from '../../api/firebaseService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const usuario = await loginUsuario(email, password);

      // Guardamos el token y los datos del usuario
      localStorage.setItem('authToken', 'true');
      localStorage.setItem('user', JSON.stringify(usuario));

      navigate('/homepage');
    } catch (err) {
      console.error(err);
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Iniciar Sesión</h2>

        {error && <p className="error-message">{error}</p>}

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
          ¿No tienes cuenta?{' '}
          <span
            style={{ color: 'green', cursor: 'pointer' }}
            onClick={() => navigate('/registro')}
          >
            Regístrate
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
