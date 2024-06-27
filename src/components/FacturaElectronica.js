import React, { useState } from 'react';

function FacturaElectronica() {
  const [codigoSeguridad, setCodigoSeguridad] = useState('');
  const [codigoActividad, setCodigoActividad] = useState('');
  const [numeroConsecutivo, setNumeroConsecutivo] = useState('');
  const [cedulaReceptor, setCedulaReceptor] = useState('');
  const [condicionVenta, setCondicionVenta] = useState('');
  const [plazoCredito, setPlazoCredito] = useState('');
  const [medioPago, setMedioPago] = useState('');
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
  const [tipoReceptor, setTipoReceptor] = useState('clientes'); // Estado para el RadioGroup

  const [datosReceptor, setDatosReceptor] = useState({
    receptor: null
  });

  const handleConsultarReceptor = () => {
    fetch(`http://localhost:3001/api/${tipoReceptor}/${cedulaReceptor}`)
      .then(response => response.json())
      .then(data => {
        console.log('Datos del cliente obtenidos:', data);
        setDatosReceptor(prevState => ({
          ...prevState,
          receptor: data
        }));
      })
      .catch(error => console.error('Error al obtener los datos del cliente:', error));
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

  const handleCedulaReceptor = (event) => {
    setCedulaReceptor(event.target.value);
  }
  const handleCondicionVenta = (event) => {
    setCondicionVenta(event.target.value);
  }
  const handlePlazoCredito = (event) => {
    setPlazoCredito(event.target.value);
  }
  const handleMedioPago = (event) => {
    setMedioPago(event.target.value);
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

    let clave = "";
    const claveData = {
      w: "clave",
      r: "clave",
      tipoCedula: "fisico",
      cedula: "54654654",
      codigoPais: "506",
      consecutivo: numeroConsecutivo,
      situacion: "normal",
      codigoSeguridad: codigoSeguridad,
      tipoDocumento: "FE",
      terminal: "00001",
      sucursal: "001"
    };

    accionAPIHAcienda(claveData)
      .then(response => {
        try {

          clave = response.resp.clave;
          const fechaEmision = new Date();

          const formData = {
            //MODULO Y ACCION
            w: "genXML",
            r: "gen_xml_fe",
            // DATA
            clave: clave,
            codigo_actividad: codigoActividad,
            consecutivo: numeroConsecutivo,
            fecha_emision: fechaEmision,
            // EMISOR
            emisor_nombre: "CABLEADOS Y SISTEMAS SF SOCIEDAD ANÓNIMA",
            emisor_tipo_identif: "02",
            emisor_num_identif: "3101313137",
            emisor_nombre_comercial: "CABLEADOS Y SISTEMAS SF SOCIEDAD ANÓNIMA",
            emisor_provincia: "4",
            emisor_canton: "03",
            emisor_distrito: "02",
            emisor_otras_senas: "Contiguo pastas vigui, centro comercial plaza Quizarco, segundo piso",
            emisor_cod_pais_tel: "506",
            emisor_tel: "22444746",
            emisor_email: "cableadosystemas@yahoo.com",
            // RECEPTOR
            receptor_nombre: datosReceptor.receptor ? datosReceptor.receptor.Nombre : '',
            receptor_tipo_identif: datosReceptor.receptor ? datosReceptor.receptor.TipoCed : '',
            receptor_num_identif: datosReceptor.receptor ? datosReceptor.receptor.Cedula : '',
            receptor_nombre_comercial: datosReceptor.receptor ? datosReceptor.receptor.NombreComercial : '',
            receptor_provincia: datosReceptor.receptor ? datosReceptor.receptor.Provincia : '',
            receptor_canton: datosReceptor.receptor ? datosReceptor.receptor.Canton : '',
            receptor_distrito: datosReceptor.receptor ? datosReceptor.receptor.Distrito : '',
            receptor_otras_senas: datosReceptor.receptor ? datosReceptor.receptor.OtrasSenas : '',
            receptor_cod_pais_tel: datosReceptor.receptor ? datosReceptor.receptor.CodigoPaisReceptor : '',
            receptor_tel: datosReceptor.receptor ? datosReceptor.receptor.Telefono : '',
            receptor_email: datosReceptor.receptor ? datosReceptor.receptor.Email : '',
            //
            condicion_venta: condicionVenta,
            plazo_credito: plazoCredito,
            medio_pago: medioPago,
            // RESUMEN FACTURA
            cod_moneda: codMoneda,
            tipo_cambio: tipoCambio,
            total_serv_gravados: totalServGravados,
            totalGravados: totalGravados,
            total_ventas: totalVentas,
            total_ventas_neta: totalVentasNeta,
            total_impuestos: totalImpuestos,
            total_comprobante: totalComprobante,

            detalles: {
              1: {
                numeroLinea: numeroLinea,
                codigo: codigoServicio,
                codigoComercial: [
                  {
                    tipo: tipoCodCom,
                    codigo: codigoComercial
                  }
                ],
                cantidad: cantidad,
                unidadMedida: unidadMedida,
                unidadMedidaComercial: unidadMedidaComercial,
                detalle: detalle,
                precioUnitario: precioUnitario,
                montoTotal: montoTotal,
                subtotal: subtotal,
                impuesto: {
                  1: {
                    codigo: impuestoCodigo,
                    tarifa: impuestoTarifa,
                    monto: impuestoMonto
                  }
                },
                impuestoNeto: impuestoNeto,
                montoTotalLinea: montoTotalLinea
              }
            }


            // Completar los datos del emisor y del receptor con los datos almacenados en la variable global

          };

          console.log(formData);

          formData.detalles = JSON.stringify(formData.detalles);

          const jsonFormData = JSON.stringify(formData);

          console.log(jsonFormData);

          accionAPIHAcienda(formData);
        } catch (error) {
          console.error("Error al analizar la respuesta:", error);
        }
      }).catch(error => {
        console.error(error);
      });



    // Limpiamos los campos después de enviar el formulario
    // setCodigoSeguridad('');
    // setCodigoActividad('');
    // setNumeroConsecutivo('');
    // setCedulaEmisor('');
    // setCedulaReceptor('');
    // setCodMoneda('');
    // setTipoCambio('');
    // setTotalServGravados('');
    // setTotalGravados('');
    // setTotalVentas('');
    // setTotalVentasNeta('');
    // setTotalImpuestos('');
    // setTotalComprobante('');
  }

  async function accionAPIHAcienda(data) {
    const url = "http://localhost:3001/api/hacienda/accion";
    let jsonResponse = null;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      jsonResponse = await response.json();
      console.log('Respuesta del servidor:', jsonResponse);
    } catch (error) {
      console.error('Error:', error);
    }

    return jsonResponse;
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
        <h2>Receptor</h2>
        <div className="form-group">
          <label className="form-label">Tipo de Receptor:</label>
          <div>
            <input
              type="radio"
              id="cliente"
              name="tipoReceptor"
              value="cliente"
              checked={tipoReceptor === 'clientes'}
              onChange={() => setTipoReceptor('clientes')}
            />
            <label htmlFor="cliente">Cliente</label>
          </div>
          <div>
            <input
              type="radio"
              id="proveedor"
              name="tipoReceptor"
              value="proveedor"
              checked={tipoReceptor === 'proveedores'}
              onChange={() => setTipoReceptor('proveedores')}
            />
            <label htmlFor="proveedor">Proveedor</label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Cédula del Receptor:</label>
          <input className="form-input" type="text" value={cedulaReceptor} onChange={handleCedulaReceptor} />
          <button type="button" onClick={handleConsultarReceptor}>
            Consultar Receptor
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">Condición de Venta:</label>
          <input className="form-input" type="text" value={condicionVenta} onChange={handleCondicionVenta} />
        </div>
        <div className="form-group">
          <label className="form-label">Plazo Crédito:</label>
          <input className="form-input" type="text" value={plazoCredito} onChange={handlePlazoCredito} />
        </div>
        <div className="form-group">
          <label className="form-label">Medio Pago:</label>
          <input className="form-input" type="text" value={medioPago} onChange={handleMedioPago} />
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
