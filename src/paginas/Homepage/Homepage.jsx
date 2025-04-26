import React, { useEffect, useState } from 'react';

function Homepage() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    // Gracias al proxy en package.json, no necesitas poner localhost:5000
    fetch('/api/mensaje')
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje))
      .catch((err) => console.error('Error al conectar con el backend:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Frontend de React</h1>
      <p>Mensaje desde backend:</p>
      <strong style={{ color: 'green', fontSize: '1.2rem' }}>{mensaje}</strong>
    </div>
  );
}

export default Homepage;
