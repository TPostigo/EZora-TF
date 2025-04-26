// App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./paginas/Homepage/Homepage";
import Login from "./paginas/Login/Login";
import Registro from "./paginas/Registro/Registro";
import ProtectedRoute from "./componentes/ProtectedRoutes";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer"; // 👈 también el Footer

function AppContent() {
  const location = useLocation();
  
  const hideHeaderFooterPaths = ['/', '/login', '/registro'];
  const showHeaderFooter = !hideHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/homepage" element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        } />
        {/* Más rutas protegidas */}
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
