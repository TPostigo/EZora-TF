import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="homepage-container">
      <h1 className="homepage-titulo">¡Bienvenido, {user?.email || 'usuario'}!</h1>
      <h3 className='homepage-descripcion'>EZora es una plataforma para aprender informática, programación y desarrollar habilidades digitales de forma sencilla y práctica.</h3>

      <div className="homepage-grid">
        <div className="homepage-card card-ezstart" onClick={() => navigate('/ezstart')}>
          <h3>EZStart</h3>
          <p className="card-description">Aprende lo básico del ordenador y la red.</p>
        </div>

        <div className="homepage-card card-codelab" onClick={() => navigate('/codelab')}>
          <h3>Code Lab</h3>
          <p className="card-description">Practica programación y lógica paso a paso.</p>
        </div>

        <div className="homepage-card card-skillshop" onClick={() => navigate('/skillshop')}>
          <h3>Skill Shop</h3>
          <p className="card-description">Accede a cursos y recursos exclusivos.</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
