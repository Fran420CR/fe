// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard Mieo</h1>
      <nav>
        <ul>
          <li><Link to="/agregar-clientes">Agregar Clientes</Link></li>
          <li><Link to="/agregar-proveedores">Agregar Proveedores</Link></li>
          <li><Link to="/factura-electronica">Factura Electrónica</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
