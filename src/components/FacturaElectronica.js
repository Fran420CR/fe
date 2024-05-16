import React, { useState } from 'react';

function FacturaElectronica() {
  const [codigoSeguridad, setCodigoSeguridad] = useState('');
  const [codigoActividad, setCodigoActividad] = useState('');
  const [numeroConsecutivo, setNumeroConsecutivo] = useState('');
  const [cedulaEmisor, setCedulaEmisor] = useState('');
  const [cedulaReceptor, setCedulaReceptor] = useState('');
  const [numeroLinea, setNumeroLinea] = useState('');
  const [codigoServicio, setCodigoServicio] = useState('');
  const [codigoComercial, setCodigoComercial] = useState('');
  const [tipoCodCom, setTipoCodCom] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [unidadMedida, setUnidadMedida] = useState('');
  const [unidadMedidaComercial, setUnidadMedidaComercial] = useState('');
  const [detalle, setDetalle] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [montoTotal, setMontoTotal] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [impuestoCodigo, setImpuestoCodigo] = useState('');
  const [impuestoTarifa, setImpuestoTarifa] = useState('');
  const [impuestoMonto, setImpuestoMonto] = useState('');
  const [montoTotalLinea, setMontoTotalLinea] = useState('');
  const [impuestoNeto, setImpuestoNeto] = useState('');
  const [codMoneda, setCodMoneda] = useState('');
  const [tipoCambio, setTipoCambio] = useState('');
  const [totalServGravados, setTotalServGravados] = useState('');
  const [totalGravados, setTotalGravados] = useState('');
  const [totalVentas, setTotalVentas] = useState('');
  const [totalVentasNeta, setTotalVentasNeta] = useState('');
  const [totalImpuestos, setTotalImpuestos] = useState('');
  const [totalComprobante, setTotalComprobante] = useState('');
  const [datosClienteProveedor, setDatosClienteProveedor] = useState({
    cliente: null,
    proveedor: null
  });


  const handleConsultarCliente = () => {
    // Realizar la solicitud de datos del cliente utilizando cedulaReceptor
    fetch(`http://localhost:3001/datosCliente?cedula=${cedulaReceptor}`)
      .then(response => response.json())
      .then(data => {
        console.log('Datos del cliente obtenidos:', data);
        setDatosClienteProveedor(prevState => ({
          ...prevState,
          cliente: data
        }));
      })
      .catch(error => console.error('Error al obtener los datos del cliente:', error));
  };

  const handleConsultarProveedor = () => {
    // Realizar la solicitud de datos del cliente utilizando cedulaReceptor
    fetch(`http://localhost:3001/datosProveedor?cedula=${cedulaEmisor}`)
      .then(response => response.json())
      .then(data => {
        console.log('Datos del proveedor obtenidos:', data);
        setDatosClienteProveedor(prevState => ({
          ...prevState,
          proveedor: data
        }));
      })
      .catch(error => console.error('Error al obtener los datos del proveedor:', error));
  };


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

  const handleCedulaReceptor = (event) => {
    setCedulaReceptor(event.target.value);
  }

  const handleCodMoneda = (event) => {
    setCodMoneda(event.target.value);
  }

  const handleTipoCambio = (event) => {
    setTipoCambio(event.target.value);
  }

  const handleTotalServGravados = (event) => {
    setTotalServGravados(event.target.value);
  }

  const handleTotalGravados = (event) => {
    setTotalGravados(event.target.value);
  }

  const handleTotalVentas = (event) => {
    setTotalVentas(event.target.value);
  }

  const handleTotalVentasNeta = (event) => {
    setTotalVentasNeta(event.target.value);
  }

  const handleTotalImpuestos = (event) => {
    setTotalImpuestos(event.target.value);
  }

  const handleTotalComprobante = (event) => {
    setTotalComprobante(event.target.value);
  }

  const handleNumeroLinea = (event) => {
    setNumeroLinea(event.target.value);
  }

  const handleCodigoServicio = (event) => {
    setCodigoServicio(event.target.value);
  }

  const handleCodigoComercial = (event) => {
    setCodigoComercial(event.target.value);
  }

  const handleTipoCodCom = (event) => {
    setTipoCodCom(event.target.value);
  }

  const handleCantidad = (event) => {
    setCantidad(event.target.value);
  }

  const handleUnidadMedida = (event) => {
    setUnidadMedida(event.target.value);
  }

  const handleUnidadMedidaComercial = (event) => {
    setUnidadMedidaComercial(event.target.value);
  }

  const handleDetalle = (event) => {
    setDetalle(event.target.value);
  }

  const handlePrecioUnitario = (event) => {
    setPrecioUnitario(event.target.value);
  }

  const handleMontoTotal = (event) => {
    setMontoTotal(event.target.value);
  }

  const handleSubtotal = (event) => {
    setSubtotal(event.target.value);
  }

  const handleImpuestoCodigo = (event) => {
    setImpuestoCodigo(event.target.value);
  }

  const handleImpuestoTarifa = (event) => {
    setImpuestoTarifa(event.target.value);
  }

  const handleImpuestoMonto = (event) => {
    setImpuestoMonto(event.target.value);
  }

  const handleMontoTotalLinea = (event) => {
    setMontoTotalLinea(event.target.value);
  }

  const handleImpuestoNeto = (event) => {
    setImpuestoNeto(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Factura Electronica agregada:', {
      codigoSeguridad,
      codigoActividad,
      numeroConsecutivo,
      cedulaEmisor,
      cedulaReceptor,
      codMoneda,
      tipoCambio,
      totalServGravados,
      totalGravados,
      totalVentas,
      totalVentasNeta,
      totalImpuestos,
      totalComprobante,
    });

    const formData = {
      //MODULO Y ACCION
      w: "genXML",
      r: "gen_xml_fe",
      // DATA
      codigoSeguridad,
      codigo_actividad: codigoActividad,
      numeroConsecutivo,
      // EMISOR
      emisor_nombre: datosClienteProveedor.proveedor ? datosClienteProveedor.proveedor.nombre : '',
      emisor_tipo_identif: datosClienteProveedor.proveedor ? datosClienteProveedor.proveedor.tipo_identificacion : '',
      emisor_num_identif: datosClienteProveedor.proveedor ? datosClienteProveedor.proveedor.numero_identificacion : '',
      emisor_nombre_comercial: datosClienteProveedor.proveedor ? datosClienteProveedor.proveedor.nombreComercial : '',
      emisor_provincia: datosClienteProveedor.proveedor ? datosClienteProveedor.proveedor.provincia : '',
      emisor_canton: datosClienteProveedor.proveedor ? datosClienteProveedor.proveedor.canton : '',
      emisor_distrito: datosClienteProveedor.proveedor ? datosClienteProveedor.proveedor.distrito : '',
      emisor_otras_senas: datosClienteProveedor.proveedor ? datosClienteProveedor.proveedor.otrasSenas : '',
      emisor_cod_pais_tel: datosClienteProveedor.proveedor ? datosClienteProveedor.proveedor.codigoPaisReceptor : '',
      emisor_tel: datosClienteProveedor.proveedor ? datosClienteProveedor.proveedor.telefono : '',
      emisor_email: datosClienteProveedor.proveedor ? datosClienteProveedor.proveedor.email : '',
      // RECEPTOR
      receptor_nombre: datosClienteProveedor.cliente ? datosClienteProveedor.cliente.nombre : '',
      receptor_tipo_identif: datosClienteProveedor.cliente ? datosClienteProveedor.cliente.tipo_identificacion : '',
      receptor_num_identif: datosClienteProveedor.cliente ? datosClienteProveedor.cliente.numero_identificacion : '',
      receptor_nombre_comercial: datosClienteProveedor.cliente ? datosClienteProveedor.cliente.nombreComercial : '',
      receptor_provincia: datosClienteProveedor.cliente ? datosClienteProveedor.cliente.provincia : '',
      receptor_canton: datosClienteProveedor.cliente ? datosClienteProveedor.cliente.canton : '',
      receptor_distrito: datosClienteProveedor.cliente ? datosClienteProveedor.cliente.distrito : '',
      receptor_otras_senas: datosClienteProveedor.cliente ? datosClienteProveedor.cliente.otrasSenas : '',
      receptor_cod_pais_tel: datosClienteProveedor.cliente ? datosClienteProveedor.cliente.codigoPaisReceptor : '',
      receptor_tel: datosClienteProveedor.cliente ? datosClienteProveedor.cliente.telefono : '',
      receptor_email: datosClienteProveedor.cliente ? datosClienteProveedor.cliente.email : '',
      // RESUMEN FACTURA
      codMoneda,
      tipoCambio,
      totalServGravados,
      totalGravados,
      totalVentas,
      totalVentasNeta,
      totalImpuestos,
      totalComprobante,

      numeroLinea: numeroLinea,
      codigoServicio: codigoServicio,
      codigoComercial: codigoComercial,
      tipoCodCom: tipoCodCom,
      codigoC: codigoComercial,
      cantidad: cantidad,
      unidadMedida: unidadMedida,
      unidadMedidaComercial: unidadMedidaComercial,
      detalle: detalle,
      precioUnitario: precioUnitario,
      montoTotal: montoTotal,
      subtotal: subtotal,
      impuesto: {
        codigo: impuestoCodigo,
        tarifa: impuestoTarifa,
        monto: impuestoMonto
      },
      montoTotalLinea: montoTotalLinea,
      impuestoNeto: impuestoNeto

      // Completar los datos del emisor y del receptor con los datos almacenados en la variable global

    };

    // Limpiamos los campos después de enviar el formulario
    setCodigoSeguridad('');
    setCodigoActividad('');
    setNumeroConsecutivo('');
    setCedulaEmisor('');
    setCedulaReceptor('');
    setCodMoneda('');
    setTipoCambio('');
    setTotalServGravados('');
    setTotalGravados('');
    setTotalVentas('');
    setTotalVentasNeta('');
    setTotalImpuestos('');
    setTotalComprobante('');
  }

  return (
    <div className="form-container">
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
        <h2>Emisor</h2>
        <div className="form-group">
          <label className="form-label">Cédula del Emisor:</label>
          <input className="form-input" type="text" value={cedulaEmisor} onChange={handleCedulaEmisor} />
          <button type="button" onClick={handleConsultarProveedor}>Consultar Proveedor</button>
        </div>
        <h2>Receptor</h2>
        <div className="form-group">
          <label className="form-label">Cédula del Receptor:</label>
          <input className="form-input" type="text" value={cedulaReceptor} onChange={handleCedulaReceptor} />
          <button type="button" onClick={handleConsultarCliente}>Consultar Receptor</button>
        </div>
        <h2>Detalles del Servicio</h2>
        <div className='col'>
          <div>
            <div className="form-group">
              <label className="form-label">Número Línea</label>
              <input className="form-input" type="text" value={numeroLinea} onChange={handleNumeroLinea} />
            </div>
            <div className="form-group">
              <label className="form-label">Código de Servicio:</label>
              <input className="form-input" type="text" value={codigoServicio} onChange={handleCodigoServicio} />
            </div>
            <div className="form-group">
              <label className="form-label">Tipo Código Comercial:</label>
              <input className="form-input" type="text" value={tipoCodCom} onChange={handleTipoCodCom} />
            </div>
            <div className="form-group">
              <label className="form-label">Código comercial:</label>
              <input className="form-input" type="text" value={codigoComercial} onChange={handleCodigoComercial} />
            </div>
            <div className="form-group">
              <label className="form-label">Cantidad:</label>
              <input className="form-input" type="text" value={cantidad} onChange={handleCantidad} />
            </div>
            <div className="form-group">
              <label className="form-label">Unidad de medida:</label>
              <input className="form-input" type="text" value={unidadMedida} onChange={handleUnidadMedida} />
            </div>
            <div className="form-group">
              <label className="form-label">Unidad de medida comercial:</label>
              <input className="form-input" type="text" value={unidadMedidaComercial} onChange={handleUnidadMedidaComercial} />
            </div>
            <div className="form-group">
              <label className="form-label">Detalle:</label>
              <input className="form-input" type="text" value={detalle} onChange={handleDetalle} />
            </div>
          </div>
          <div>
            <div className="form-group">
              <label className="form-label">Precio unitario:</label>
              <input className="form-input" type="text" value={precioUnitario} onChange={handlePrecioUnitario} />
            </div>
            <div className="form-group">
              <label className="form-label">Monto total:</label>
              <input className="form-input" type="text" value={montoTotal} onChange={handleMontoTotal} />
            </div>
            <div className="form-group">
              <label className="form-label">Subtotal:</label>
              <input className="form-input" type="text" value={subtotal} onChange={handleSubtotal} /></div>
            <div className="form-group">
              <label className="form-label">Código de impuesto:</label>
              <input className="form-input" type="text" value={impuestoCodigo} onChange={handleImpuestoCodigo} />
            </div>
            <div className="form-group">
              <label className="form-label">Tarifa de impuesto:</label>
              <input className="form-input" type="text" value={impuestoTarifa} onChange={handleImpuestoTarifa} />
            </div>
            <div className="form-group">
              <label className="form-label">Monto de impuesto:</label>
              <input className="form-input" type="text" value={impuestoMonto} onChange={handleImpuestoMonto} />
            </div>
            <div className="form-group">
              <label className="form-label">Impuesto Neto:</label>
              <input className="form-input" type="text" value={impuestoNeto} onChange={handleImpuestoNeto} />
            </div>
            <div className="form-group"
            ><label className="form-label">Monto total de línea:</label>
              <input className="form-input" type="text" value={montoTotalLinea} onChange={handleMontoTotalLinea} />
            </div>
          </div>
        </div>
        <h2>Resumen de la Factura</h2>
        <div className="form-group">
          <label className="form-label">Código de Moneda:</label>
          <input className="form-input" type="text" value={codMoneda} onChange={handleCodMoneda} />
        </div>
        <div className="form-group">
          <label className="form-label">Tipo de Cambio:</label>
          <input className="form-input" type="text" value={tipoCambio} onChange={handleTipoCambio} />
        </div>
        <div className="form-group">
          <label className="form-label">Total de Servicios Gravados:</label>
          <input className="form-input" type="text" value={totalServGravados} onChange={handleTotalServGravados} />
        </div>
        <div className="form-group">
          <label className="form-label">Total Gravados:</label>
          <input className="form-input" type="text" value={totalGravados} onChange={handleTotalGravados} />
        </div>
        <div className="form-group">
          <label className="form-label">Total de Ventas:</label>
          <input className="form-input" type="text" value={totalVentas} onChange={handleTotalVentas} />
        </div>
        <div className="form-group">
          <label className="form-label">Total de Ventas Neta:</label>
          <input className="form-input" type="text" value={totalVentasNeta} onChange={handleTotalVentasNeta} />
        </div>
        <div className="form-group">
          <label className="form-label">Total de Impuestos:</label>
          <input className="form-input" type="text" value={totalImpuestos} onChange={handleTotalImpuestos} />
        </div>
        <div className="form-group">
          <label className="form-label">Total del Comprobante:</label>
          <input className="form-input" type="text" value={totalComprobante} onChange={handleTotalComprobante} />
        </div>

        <button type="submit" className="submit-button">Agregar Factura</button>
      </form>
    </div>
  );
}

export default FacturaElectronica;
