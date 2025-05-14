import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderSimple.css';
import logo from '../../Assets/logo.png';

function HeaderSimple() {
  const navigate = useNavigate();

  return (
    <div className="header-simple-container">
      <img
        src={logo}
        alt="Logo"
        className="header-simple-logo"
        onClick={() => navigate('/')}
      />
      <div className="header-simple-buttons">
        <button
          className="header-simple-button"
          onClick={() => navigate('/registro')}
        >
          REGISTRARSE
        </button>
        <button
          className="header-simple-button"
          onClick={() => navigate('/login')}
        >
          INICIAR SESION
        </button>
      </div>
    </div>
  );
}

export default HeaderSimple;
