// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './paginas/Homepage/Homepage';
import Login from './paginas/Login/Login';
import Registro from './paginas/Registro/Registro';
import AuthLayout from './layouts/AuthLayout';
import ProtectedRoute from './componentes/ProtectedRoutes';
import AdminRoute from './componentes/AdminRoute';
import Header from './componentes/Header/Header';

import EZStartMenu from './paginas/EZStart/EZStartMenu';
import CodeLabMenu from './paginas/CodeLab/CodeLabMenu';
import UsoSistemaOperativo from './paginas/EZStart/partes/UsoSistemaOperativo/UsoSistemaOperativo';
import InstalacionDeProgramas from './paginas/EZStart/partes/InstalacionDeProgramas/InstalacionDeProgramas';
import NavegacionInternet from './paginas/EZStart/partes/NavegacionInternet/NavegacionInternet';
import CorreoElectronico from './paginas/EZStart/partes/CorreoElectronico/CorreoElectronico';
import SeguridadEnLaRed from './paginas/EZStart/partes/SeguridadEnLaRed/SeguridadEnLaRed';
import HerramientasDeOficina from './paginas/EZStart/partes/HerramientasDeOficina/HerramientasDeOficina';

import PerfilUsuario from './paginas/Perfil/PerfilUsuario';
import SkillShop from './paginas/SkillShop/SkillShop';
import Checkout from './paginas/Checkout/Checkout';
import PythonPage from './paginas/CodeLab/python/PythonPage';
import JavaScriptPage from './paginas/CodeLab/javascript/JavaScriptPage';
import HtmlPage from './paginas/CodeLab/html/HtmlPage';
import SQLPage from './paginas/CodeLab/sql/SQLPage';

import AddProducto from './paginas/Admin/AddProducto';
import GestionarProductos from './paginas/Admin/GestionarProductos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/registro" element={<AuthLayout><Registro /></AuthLayout>} />

        <Route path="/homepage" element={<><Header /><ProtectedRoute><Homepage /></ProtectedRoute></>} />
        <Route path="/ezstart" element={<><Header /><ProtectedRoute><EZStartMenu /></ProtectedRoute></>} />
        <Route path="/ezstart/instalacion" element={<><Header /><ProtectedRoute><InstalacionDeProgramas /></ProtectedRoute></>} />
        <Route path="/ezstart/navegacion" element={<><Header /><ProtectedRoute><NavegacionInternet /></ProtectedRoute></>} />
        <Route path="/ezstart/uso-sistema" element={<><Header /><ProtectedRoute><UsoSistemaOperativo /></ProtectedRoute></>} />
        <Route path="/ezstart/correo" element={<><Header /><ProtectedRoute><CorreoElectronico /></ProtectedRoute></>} />
        <Route path="/ezstart/seguridad" element={<><Header /><ProtectedRoute><SeguridadEnLaRed /></ProtectedRoute></>} />
        <Route path="/ezstart/oficina" element={<><Header /><ProtectedRoute><HerramientasDeOficina /></ProtectedRoute></>} />

        <Route path="/codelab" element={<><Header /><ProtectedRoute><CodeLabMenu /></ProtectedRoute></>} />
        <Route path="/codelab/python" element={<><Header /><ProtectedRoute><PythonPage /></ProtectedRoute></>} />
        <Route path="/codelab/javascript" element={<><Header /><ProtectedRoute><JavaScriptPage /></ProtectedRoute></>} />
        <Route path="/codelab/html" element={<><Header /><ProtectedRoute><HtmlPage /></ProtectedRoute></>} />
        <Route path="/codelab/sql" element={<><Header /><ProtectedRoute><SQLPage /></ProtectedRoute></>} />

        <Route path="/perfil" element={<><Header /><ProtectedRoute><PerfilUsuario /></ProtectedRoute></>} />
        <Route path="/skillshop" element={<><Header /><ProtectedRoute><SkillShop /></ProtectedRoute></>} />
        <Route path="/checkout" element={<><Header /><ProtectedRoute><Checkout /></ProtectedRoute></>} />

        <Route path="/admin/add-producto" element={
          <><Header /><ProtectedRoute><AdminRoute><AddProducto /></AdminRoute></ProtectedRoute></>
        } />

        <Route path="/admin/gestionar-productos" element={
          <><Header /><ProtectedRoute><AdminRoute><GestionarProductos /></AdminRoute></ProtectedRoute></>
        } />
      </Routes>
    </Router>
  );
}

export default App;
