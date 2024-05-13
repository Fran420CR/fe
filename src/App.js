// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AgregarClientes from './components/AgregarClientes';
import AgregarProveedores from './components/AgregarProveedores';
import FacturaElectronica from './components/FacturaElectronica';
import './App.css';


const styles = {  };

function App() {
  return (
    <Router>
      <div>
        <Dashboard />
        <Routes>
          <Route path="/agregar-clientes" element={<AgregarClientes />} />
          <Route path="/agregar-proveedores" element={<AgregarProveedores />} />
          <Route path="/factura-electronica" element={<FacturaElectronica />} />
          {/* Ruta por defecto al iniciar la app */}
          <Route path="/" element={<AgregarClientes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
