import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="dashboard-container">
      <h1>Facturación Electrónica</h1>
      <nav>
        <ul className="dashboard-options">
          <li><Link to="/agregar-clientes" className={location.pathname === '/agregar-clientes' ? 'active' : ''}>Agregar Clientes</Link></li>
          <li><Link to="/agregar-proveedores" className={location.pathname === '/agregar-proveedores' ? 'active' : ''}>Agregar Proveedores</Link></li>
          <li><Link to="/factura-electronica" className={location.pathname === '/factura-electronica' ? 'active' : ''}>Factura Electrónica</Link></li>
          <li><Link to="/nota-credito" className={location.pathname === '/nota-credito' ? 'active' : ''}>Nota Crédito</Link></li>
          <li><Link to="/nota-debito" className={location.pathname === '/nota-debito' ? 'active' : ''}>Nota Débito</Link></li>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}></Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
