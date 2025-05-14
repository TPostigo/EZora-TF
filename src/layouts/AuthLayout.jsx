import React from 'react';
import HeaderSimple from '../componentes/HeaderSimple/HeaderSimple';
import './AuthLayout.css';


function AuthLayout({ children }) {
  return (
    <div>
      <HeaderSimple />
      <div className="auth-content">{children}</div>
    </div>
  );
}

export default AuthLayout;

