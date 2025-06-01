// src/componentes/AdminRoute.jsx
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user?.isAdmin;

  if (!isAdmin) {
    return <Navigate to="/homepage" replace />;
  }

  return children;
};

export default AdminRoute;
