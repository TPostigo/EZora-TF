import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

import logo from '../../Assets/logo.png';
import ezstartIcon from '../../Assets/EZStart.png';
import codeLabIcon from '../../Assets/CodeLab.png';
import skillShopIcon from '../../Assets/SkillShop.png';
import perfilIcon from '../../Assets/Perfil.png';
import cerrarSesion from '../../Assets/CerrarSesion.png';
import cestaIcon from '../../Assets/Cesta.png';

import { getAuth } from 'firebase/auth';
import { obtenerCestaPorUsuario, eliminarProductoDeCesta } from '../../api/cestaService';

function Header() {
  const navigate = useNavigate();
  const [mostrarMenuPerfil, setMostrarMenuPerfil] = useState(false);
  const [mostrarCesta, setMostrarCesta] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [productosCesta, setProductosCesta] = useState([]);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('authToken');
      setIsLoggedIn(!!token);
    };
    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  useEffect(() => {
    const cargarCesta = async () => {
      const user = getAuth().currentUser;
      if (user) {
        const productos = await obtenerCestaPorUsuario(user.uid);
        setProductosCesta(productos);
      }
    };

    if (mostrarCesta) {
      cargarCesta();
    }
  }, [mostrarCesta]);

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
    setMostrarCesta(false);
  };

  const toggleCestaMenu = () => {
    setMostrarCesta(!mostrarCesta);
    setMostrarMenuPerfil(false);
  };

  const eliminarProducto = async (producto) => {
    const user = getAuth().currentUser;
    if (!user) return;

    await eliminarProductoDeCesta(user.uid, producto);
    const nuevaCesta = productosCesta.filter(item => item.id !== producto.id);
    setProductosCesta(nuevaCesta);
  };

  const totalCesta = productosCesta.reduce((total, item) => total + Number(item.precio), 0).toFixed(2);

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

      <div className="header-cesta-container">
        <button className="header-button" onClick={toggleCestaMenu}>
          <img className="iconos" src={cestaIcon} alt="Cesta" />
        </button>
        {mostrarCesta && (
          <div className="header-cesta-menu">
            {productosCesta.length === 0 ? (
              <p style={{ padding: '1rem' }}>Tu cesta está vacía.</p>
            ) : (
              <>
                {productosCesta.map((producto, index) => (
                  <div key={index} className="header-cesta-item">
                    <img src={producto.imagen} alt={producto.nombre} className="header-cesta-img" />
                    <div>
                      <p className="header-cesta-nombre">{producto.nombre}</p>
                      <p className="header-cesta-precio">{producto.precio} €</p>
                    </div>
                    <button className="cesta-eliminar-btn" onClick={() => eliminarProducto(producto)}>×</button>
                  </div>
                ))}
                <div className="header-cesta-total">
                  <strong className='precCest'>Total: {totalCesta} €</strong>
                    <button className="cesta-pagar-btn" onClick={() => navigate('/checkout')}>
                      Ir a pagar
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="perfil-container">
        <button className="header-button" onClick={togglePerfilMenu}>
          <img className="iconos" src={perfilIcon} alt="Perfil" />
        </button>
        {mostrarMenuPerfil && (
          <div className="perfil-menu">
            <button className="perfil-item" onClick={() => navigate('/perfil')}>Mi Info</button>
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
