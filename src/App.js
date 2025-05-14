import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './paginas/Homepage/Homepage';
import Login from './paginas/Login/Login';
import Registro from './paginas/Registro/Registro';
import AuthLayout from './layouts/AuthLayout';
import ProtectedRoute from './componentes/ProtectedRoutes';
import Header from './componentes/Header/Header';
import EZStartMenu from './paginas/EZStart/EZStartMenu';
import UsoSistemaOperativo from './paginas/EZStart/partes/UsoSistemaOperativo/UsoSistemaOperativo';
import InstalacionDeProgramas from './paginas/EZStart/partes/InstalacionDeProgramas/InstalacionDeProgramas';
import NavegacionInternet from './paginas/EZStart/partes/NavegacionInternet/NavegacionInternet';
import CorreoElectronico from './paginas/EZStart/partes/CorreoElectronico/CorreoElectronico';
import SeguridadEnLaRed from './paginas/EZStart/partes/SeguridadEnLaRed/SeguridadEnLaRed';
import HerramientasDeOficina from './paginas/EZStart/partes/HerramientasDeOficina/HerramientasDeOficina';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/registro" element={<AuthLayout><Registro /></AuthLayout>} />

        <Route
          path="/homepage"
          element={
            <>
              <Header />
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/ezstart"
          element={
            <>
              <Header />
              <ProtectedRoute>
                <EZStartMenu />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/ezstart/instalacion"
          element={
            <>
              <Header />
              <ProtectedRoute>
                <InstalacionDeProgramas />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/ezstart/navegacion"
          element={
            <>
              <Header />
              <ProtectedRoute>
                <NavegacionInternet/>
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/ezstart/uso-sistema"
          element={
            <>
              <Header />
              <ProtectedRoute>
                <UsoSistemaOperativo />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/ezstart/correo"
          element={
            <>
              <Header />
              <ProtectedRoute>
                <CorreoElectronico />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/ezstart/seguridad"
          element={
            <>
              <Header />
              <ProtectedRoute>
                <SeguridadEnLaRed />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/ezstart/oficina"
          element={
            <>
              <Header />
              <ProtectedRoute>
                <HerramientasDeOficina />
              </ProtectedRoute>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
