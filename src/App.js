// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AgregarClientes from './components/AgregarClientes';
import AgregarProveedores from './components/AgregarProveedores';
import FacturaElectronica from './components/FacturaElectronica';
import LoginForm from './components/LogIn';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/"
          element={<ProtectedRoute element={<Layout />} />}
        >
          <Route path="agregar-clientes" element={<AgregarClientes />} />
          <Route path="agregar-proveedores" element={<AgregarProveedores />} />
          <Route path="factura-electronica" element={<FacturaElectronica />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
