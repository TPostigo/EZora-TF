// src/paginas/Checkout/Checkout.jsx
import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { obtenerCestaPorUsuario } from '../../api/cestaService';
import './Checkout.css';
import Header from '../../componentes/Header/Header';

function Checkout() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cargarCesta = async () => {
      const user = getAuth().currentUser;
      if (user) {
        const productos = await obtenerCestaPorUsuario(user.uid);
        const totalCalculado = productos.reduce((sum, prod) => sum + parseFloat(prod.precio), 0);
        setTotal(totalCalculado);
      }
    };

    cargarCesta();
  }, []);

  return (
    <>
      <div className="checkout-container">
        <h2>Pasarela de pago</h2>
        <div className="checkout-form">
          <div className="checkout-summary">
            <p>Total a pagar:</p>
            <h3>{total.toFixed(2)} €</h3>
          </div>

          <form className="formulario-pago" onSubmit={(e) => e.preventDefault()}>
            <label>
              Titular de la tarjeta
              <input type="text" placeholder="Nombre completo" required />
            </label>

            <label>
              Número de tarjeta
              <input type="text" placeholder="1234 5678 9012 3456" required maxLength="19" />
            </label>

            <div className="formulario-fila">
              <label>
                Fecha de expiración
                <input type="text" placeholder="MM/AA" required maxLength="5" />
              </label>
              <label>
                CVV
                <input type="text" placeholder="123" required maxLength="4" />
              </label>
            </div>

            <button className="boton-pago">Pagar ahora</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Checkout;
