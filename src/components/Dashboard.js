import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="dashboard-container">
      <h1>Dashboard Mieo</h1>
      <nav>
        <ul className="dashboard-options">
          <li><Link to="/agregar-clientes" className={location.pathname === '/agregar-clientes' ? 'active' : ''}>Agregar Clientes</Link></li>
          <li><Link to="/agregar-proveedores" className={location.pathname === '/agregar-proveedores' ? 'active' : ''}>Agregar Proveedores</Link></li>
          <li><Link to="/factura-electronica" className={location.pathname === '/factura-electronica' ? 'active' : ''}>Factura Electrónica</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
