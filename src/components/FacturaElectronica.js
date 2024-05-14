import React, { useState } from 'react';

function FacturaElectronica() {
  const [codigoSeguridad, setCodigoSeguridad] = useState('');
  const [codigoActividad, setCodigoActividad] = useState('');
  const [numeroConsecutivo, setNumeroConsecutivo] = useState('');
  const [cedulaEmisor, setCedulaEmisor] = useState('');
  const [cedulaReceptor, setCedulaReceptor] = useState(''); // Variable cedulaReceptor agregada

  const handleCodigoSeguridad = (event) => {
    setCodigoSeguridad(event.target.value);
  }

  const handleCodigoActividad = (event) => {
    setCodigoActividad(event.target.value);
  }

  const handleNumeroConsecutivo = (event) => {
    setNumeroConsecutivo(event.target.value);
  }

  const handleCedulaEmisor = (event) => {
    setCedulaEmisor(event.target.value);
  }

  const handleCedulaReceptor = (event) => { // Manejador para cedulaReceptor
    setCedulaReceptor(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Factura Electronica agregada:', { codigoSeguridad, codigoActividad, numeroConsecutivo, cedulaEmisor, cedulaReceptor });

    // Limpiamos los campos después de enviar el formulario
    setCodigoSeguridad('');
    setCodigoActividad('');
    setNumeroConsecutivo('');
    setCedulaEmisor('');
    setCedulaReceptor(''); // Se agrega limpiar cedulaReceptor
  }

  return (
    <div className="form-container"> {/* Añadimos una clase contenedora para aplicar estilos */}
      <h2>Importante</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Código de Seguridad:</label>
          <input className="form-input" type="text" value={codigoSeguridad} onChange={handleCodigoSeguridad} />
        </div>
        <div className="form-group">
          <label className="form-label">Código de Actividad:</label>
          <input className="form-input" type="text" value={codigoActividad} onChange={handleCodigoActividad} />
        </div>
        <div className="form-group">
          <label className="form-label">Número de Consecutivo:</label>
          <input className="form-input" type="text" value={numeroConsecutivo} onChange={handleNumeroConsecutivo} />
        </div>
        {/* Emisor */}
        <h2>Emisor</h2>
        <div className="form-group">
          <label className="form-label">Cédula del Emisor:</label>
          <input className="form-input" type="text" value={cedulaEmisor} onChange={handleCedulaEmisor} />
        </div>
        {/* Receptor */}
        <h2>Receptor</h2>
        <div className="form-group">
          <label className="form-label">Cédula del Receptor:</label>
          <input className="form-input" type="text" value={cedulaReceptor} onChange={handleCedulaReceptor} />
        </div>
        {/* Detalle del Servicio */}
        <h2>Detalle del Servicio</h2>

        <button type="submit" className="submit-button">Agregar Factura</button>
      </form>
    </div>
  );
}

export default FacturaElectronica;
