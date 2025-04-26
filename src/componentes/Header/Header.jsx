import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

// Importa todos los iconos
import logo from '../../Assets/logo.png';
import ezstartIcon from '../../Assets/EZStart.png';
import codeLabIcon from '../../Assets/CodeLab.png';
import skillShopIcon from '../../Assets/SkillShop.png';
import perfilIcon from '../../Assets/Perfil.png';

function Header() {
  const [mostrarMenuPerfil, setMostrarMenuPerfil] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const togglePerfilMenu = () => {
    setMostrarMenuPerfil(!mostrarMenuPerfil);
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="header-container">
      <button className="header-icon_button" onClick={() => navigate('/homepage')}>
        <img src={logo} alt="Logo" className="header-icon_container" />
      </button>

      {isLoggedIn && (
        <>
          <button className="header-button">
            EZStart
            <img className="iconos" src={ezstartIcon} alt="EZStart" />
          </button>

          <button className="header-button">
            Code Lab
            <img className="iconos" src={codeLabIcon} alt="Code Lab" />
          </button>

          <button className="header-button">
            Skill Shop
            <img className="iconos" src={skillShopIcon} alt="Skill Shop" />
          </button>

          <div className="perfil-container">
            <button className="header-button" onClick={togglePerfilMenu}>
              <img className="iconos" src={perfilIcon} alt="Perfil" />
            </button>

            {mostrarMenuPerfil && (
              <div className="perfil-menu">
                <button className="perfil-item">Mi Info</button>
                <button className="perfil-item" onClick={handleLogout}>Cerrar Sesión</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
