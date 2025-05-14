import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetch('/api/mensaje')
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje))
      .catch((err) => console.error('Error al conectar con el backend:', err));
  }, []);

  return (
    <div className="homepage-container">
      <h1>¡Bienvenido, {user?.email || 'usuario'}!</h1>
      <p className="homepage-intro">
        Explora nuestras secciones para aprender habilidades digitales útiles, mejorar tus conocimientos y acceder a cursos de calidad.
      </p>

      <div className="homepage-cards">
        <div className="homepage-card" onClick={() => navigate('/ezstart')}>
          <h3>EZStart</h3>
          <p>Aprende lo básico del ordenador y la red.</p>
        </div>
        <div className="homepage-card" onClick={() => navigate('/codelab')}>
          <h3>Code Lab</h3>
          <p>Practica programación y lógica paso a paso.</p>
        </div>
        <div className="homepage-card" onClick={() => navigate('/skillshop')}>
          <h3>Skill Shop</h3>
          <p>Accede a cursos y recursos exclusivos.</p>
        </div>
      </div>

      <div className="homepage-back-msg">
        <p>Mensaje desde el backend:</p>
        <strong>{mensaje}</strong>
      </div>
    </div>
  );
}

export default Homepage;
