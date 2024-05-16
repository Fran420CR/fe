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
  const [codigo, setCodigo] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [unidadMedida, setUnidadMedida] = useState('');
  const [unidadMedidaComercial, setUnidadMedidaComercial] = useState('');
  const [detalle, setDetalle] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [montoTotal, setMontoTotal] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [impuesto, setImpuesto] = useState({ codigo: '', tarifa: '', monto: '' });
  const [montoTotalLinea, setMontoTotalLinea] = useState('');
  const [impuestoNeto, setImpuestoNeto] = useState('');
  const [codMoneda, setCodMoneda] = useState('');
  const [tipoCodComCambio, settipoCodComCambio] = useState('');
  const [totalServGravados, setTotalServGravados] = useState('');
  const [totalGravados, setTotalGravados] = useState('');
  const [totalVentas, setTotalVentas] = useState('');
  const [totalVentasNeta, setTotalVentasNeta] = useState('');
  const [totalImpuestos, setTotalImpuestos] = useState('');
  const [totalComprobante, setTotalComprobante] = useState('');

  /*
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/datosClientes')
      .then(response => response.json())
      .then(data => {
        console.log('Datos de clientes obtenidos:', data);
        setClientes(data);
      })
      .catch(error => console.error('Error al obtener los datos de clientes:', error));
  }, []);*/

  const handleConsultarCliente = () => {
    // Realizar la solicitud de datos del cliente utilizando cedulaReceptor
    fetch(`http://localhost:3001/datosCliente?cedula=${cedulaReceptor}`)
      .then(response => response.json())
      .then(data => {
        console.log('Datos del cliente obtenidos:', data);
        // Actualizar el estado con los datos del receptor obtenidos
        // (puedes manejar esta lógica de acuerdo a tus necesidades)
      })
      .catch(error => console.error('Error al obtener los datos del cliente:', error));
  };

  const handleConsultarProveedor = () => {
    // Realizar la solicitud de datos del cliente utilizando cedulaReceptor
    fetch(`http://localhost:3001/datosProveedor?cedula=${cedulaEmisor}`)
      .then(response => response.json())
      .then(data => {
        console.log('Datos del proveedor obtenidos:', data);
        // Actualizar el estado con los datos del receptor obtenidos
        // (puedes manejar esta lógica de acuerdo a tus necesidades)
      })
      .catch(error => console.error('Error al obtener los datos del proveedor:', error));
  };
  
  
  const [tabla, setTabla] = useState([{
    numeroLinea: '',
    codigoServicio: '',
    codigoComercial: '',
    tipoCodCom: '',
    codigo: '',
    cantidad: '',
    unidadMedida: '',
    unidadMedidaComercial: '',
    detalle: '',
    precioUnitario: '',
    montoTotal: '',
    subtotal: '',
    impuesto: {
      codigo: '',
      tarifa: '',
      monto: ''
    },
    montoTotalLinea: '',
    impuestoNeto: ''

  }]);

  const handleInputChange = (index, event) => {
    const values = [...tabla];
    if (event.target.name === "codigo" || event.target.name === "tarifa" || event.target.name === "monto") {
      values[index]['impuesto'][event.target.name] = event.target.value;
    } else {
      values[index][event.target.name] = event.target.value;
    }
    setTabla(values);
  };

  const handleAddRow = () => {
    setTabla([...tabla, {
      numeroLinea: '',
      codigoServicio: '',
      codigoComercial: '',
      tipoCodCom: '',
      codigo: '',
      cantidad: '',
      unidadMedida: '',
      unidadMedidaComercial: '',
      detalle: '',
      precioUnitario: '',
      montoTotal: '',
      subtotal: '',
      impuesto: {
        codigo: '',
        tarifa: '',
        monto: ''
      },
      montoTotalLinea: '',
      impuestoNeto: ''
    }]);
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

  const handletipoCodComCambio = (event) => {
    settipoCodComCambio(event.target.value);
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

  const handleCodigo = (event) => {
    setCodigo(event.target.value);
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

  const handleImpuesto = (event) => {
    setImpuesto({ ...impuesto, [event.target.name]: event.target.value });
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
      tipoCodComCambio,
      totalServGravados,
      totalGravados,
      totalVentas,
      totalVentasNeta,
      totalImpuestos,
      totalComprobante,
      tabla
    });

    // Limpiamos los campos después de enviar el formulario
    setCodigoSeguridad('');
    setCodigoActividad('');
    setNumeroConsecutivo('');
    setCedulaEmisor('');
    setCedulaReceptor('');
    setCodMoneda('');
    settipoCodComCambio('');
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
        <h2>Resumen de la Factura</h2>
        <div className="form-group">
          <label className="form-label">Código de Moneda:</label>
          <input className="form-input" type="text" value={codMoneda} onChange={handleCodMoneda} />
        </div>
        <div className="form-group">
          <label className="form-label">tipoCodCom de Cambio:</label>
          <input className="form-input" type="text" value={tipoCodComCambio} onChange={handletipoCodComCambio} />
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
        {/* <div className="form-container-table" id="tabla">
          <h2>Tabla</h2>
          <table>
            <thead>
              <tr>
                <th>Número Línea</th>
                <th>Código</th>
                <th>tipoCodCom Cod Com</th>
                <th>Código Comercial</th>
                <th>Cantidad</th>
                <th>Unidad de Medida</th>
                <th>Unidad de Medida Comercial</th>
                <th>Detalle</th>
                <th>Precio Unitario</th>
                <th>Monto Total</th>
                <th>SubTotal</th>
                <th>Código de Impuesto</th>
                <th>Tarifa de Impuesto</th>
                <th>Monto de Impuesto</th>
                <th>Monto Total Linea</th>
                <th>Impuesto Neto</th>
              </tr>
            </thead>
            <tbody>
              {tabla.map((item, index) => (
                <tr key={index}>
                  <td><input type="text" name="numeroLinea" value={item.numeroLinea} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="codigo" value={item.codigoServicio} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="codigoComercial" value={item.codigoComercial} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="tipoCodComCodCom" value={item.tipoCodCom} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="cantidad" value={item.cantidad} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="unidadMedida" value={item.unidadMedida} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="unidadMedidaComercial" value={item.unidadMedidaComercial} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="detalle" value={item.detalle} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="precioUnitario" value={item.precioUnitario} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="montoTotal" value={item.montoTotal} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="subtotal" value={item.subtotal} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="codigoImpuesto" value={item.impuesto.codigo} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="tarifa" value={item.impuesto.tarifa} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="monto" value={item.impuesto.monto} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="montoTotalLinea" value={item.montoTotalLinea} onChange={event => handleInputChange(index, event)} /></td>
                  <td><input type="text" name="impuestoNeto" value={item.impuestoNeto} onChange={event => handleInputChange(index, event)} /></td>
                </tr>
              ))}
            </tbody>
          </table>



          <button onClick={handleAddRow}>Agregar fila</button>
        </div> */}
        <h2>Detalles del Servicio</h2>
        <div className='col'>
          <div>
            <div className="form-group">
              <label className="form-label">Número Línea</label>
              <input className="form-input" type="text" value={numeroLinea} onChange={handleCodigoServicio} />
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
            <div className="form-group"> <label className="form-label">Precio unitario:</label>
              <input className="form-input" type="text" value={precioUnitario} onChange={handlePrecioUnitario} /></div>
            <div className="form-group"><label className="form-label">Monto total:</label>
              <input className="form-input" type="text" value={montoTotal} onChange={handleMontoTotal} /></div>
            <div className="form-group"><label className="form-label">Subtotal:</label>
              <input className="form-input" type="text" value={subtotal} onChange={handleSubtotal} /></div>
            <div className="form-group"><label className="form-label">Código de impuesto:</label>
              <input className="form-input" type="text" value={impuesto.codigo} onChange={handleImpuesto} /></div>
            <div className="form-group"><label className="form-label">Tarifa de impuesto:</label>
              <input className="form-input" type="text" value={impuesto.tarifa} onChange={handleImpuesto} /></div>
            <div className="form-group"><label className="form-label">Monto de impuesto:</label>
              <input className="form-input" type="text" value={impuesto.monto} onChange={handleImpuesto} /></div>
              <div className="form-group"><label className="form-label">Impuesto Neto:</label>
              <input className="form-input" type="text" value={impuestoNeto} onChange={handleImpuestoNeto} /></div>
            <div className="form-group"><label className="form-label">Monto total de línea:</label>
              <input className="form-input" type="text" value={montoTotalLinea} onChange={handleMontoTotalLinea} /></div>
          </div>
        </div>
        <button type="submit" className="submit-button">Agregar Factura</button>
      </form>
    </div>
  );
}

export default FacturaElectronica;
