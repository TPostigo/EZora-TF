import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

import logo from '../../Assets/logo.png';
import ezstartIcon from '../../Assets/EZStart.png';
import codeLabIcon from '../../Assets/CodeLab.png';
import skillShopIcon from '../../Assets/SkillShop.png';
import perfilIcon from '../../Assets/Perfil.png';
import cerrarSesion from '../../Assets/CerrarSesion.png';

function Header() {
  const navigate = useNavigate();
  const [mostrarMenuPerfil, setMostrarMenuPerfil] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('authToken');
      setIsLoggedIn(!!token);
    };
    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/homepage');
  };

  const togglePerfilMenu = () => {
    setMostrarMenuPerfil(!mostrarMenuPerfil);
  };

  if (!isLoggedIn) return null;

  return (
    <div className="header-container">
      <button className="header-icon_button" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" className="header-icon_container" />
      </button>

      <button className="header-button" onClick={() => navigate('/ezstart')}>
        EZStart <img className="iconos" src={ezstartIcon} alt="EZStart" />
      </button>

      <button className="header-button" onClick={() => navigate('/codelab')}>
        Code Lab <img className="iconos" src={codeLabIcon} alt="Code Lab" />
      </button>

      <button className="header-button" onClick={() => navigate('/skillshop')}>
        Skill Shop <img className="iconos" src={skillShopIcon} alt="Skill Shop" />
      </button>

      <div className="perfil-container">
        <button className="header-button" onClick={togglePerfilMenu}>
          <img className="iconos" src={perfilIcon} alt="Perfil" />
        </button>
        {mostrarMenuPerfil && (
          <div className="perfil-menu">
            <button className="perfil-item" onClick={() => navigate('/usuario')}>Mi Info</button>
            <button className="perfil-item" id='cs' onClick={handleLogout}>Cerrar Sesión
               <img src={cerrarSesion} alt="cerrarSesion" className="CS" /> 
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
