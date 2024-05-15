// AgregarClientes.js
import React, { useState } from 'react';

function AgregarClientes() {
    const [nombre, setNombre] = useState('');
    const [tipoCed, setTipocedula] = useState('');
    const [cedula, setcedula] = useState('');
    const [nombreComercial, setNombreComercial] = useState('');
    const [provincia, setProvincia] = useState('');
    const [canton, setCanton] = useState('');
    const [distrito, setDistrito] = useState('');
    const [otrasSenas, setOtrasSenas] = useState('');
    const [codigoPaisReceptor, setCodigoPaisReceptor] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');

    const [responseMessage, setResponseMessage] = useState('');
    const [isError, setIsError] = useState(false);  

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    }

    const handleTipocedulaChange = (event) => {
        setTipocedula(event.target.value);
    }

    const handleCedulaChange = (event) => {
        setcedula(event.target.value);
    }

    const handleNombreComercialChange = (event) => {
        setNombreComercial(event.target.value);
    }

    const handleProvinciaChange = (event) => {
        setProvincia(event.target.value);
    }

    const handleCantonChange = (event) => {
        setCanton(event.target.value);
    }

    const handleDistritoChange = (event) => {
        setDistrito(event.target.value);
    }

    const handleOtrasSenasChange = (event) => {
        setOtrasSenas(event.target.value);
    }

    const handleCodigoPaisReceptorChange = (event) => {
        setCodigoPaisReceptor(event.target.value);
    }

    const handleTelefonoChange = (event) => {
        setTelefono(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            nombre,
            tipoCed,
            cedula,
            nombreComercial,
            provincia,
            canton,
            distrito,
            otrasSenas,
            codigoPaisReceptor,
            telefono,
            email
        };

        try {
            const response = await fetch('http://localhost:3001/agregarCliente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });


            if (response.ok) {
                const responseData = await response.json();
                setResponseMessage(responseData.message || 'Cliente agregado exitosamente');
                setIsError(false);
                // Limpiar campos después de una respuesta exitosa si es necesario
                setNombre('');
                setTipocedula('');
                setcedula('');
                setNombreComercial('');
                setProvincia('');
                setCanton('');
                setDistrito('');
                setOtrasSenas('');
                setCodigoPaisReceptor('');
                setTelefono('');
                setEmail('');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al agregar cliente');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage(error.message || 'Error al procesar la solicitud');
            setIsError(true);
        }

        setTimeout(() => {
            setResponseMessage('');
            setIsError(true);
        }, 3000);
    }


    return (
        <div className="form-container"> {/* Añadimos una clase contenedora para aplicar estilos */}
            <h2>Cliente</h2>
            <form onSubmit={handleSubmit}>
                {/* Cada div envolvente para el input y label se agrega con una clase específica para estilos */}
                <div className="form-group">
                    <label className="form-label">Nombre:</label>
                    <input className="form-input" type="text" value={nombre} onChange={handleNombreChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Tipo cédula:</label>
                    <input className="form-input" type="text" value={tipoCed} onChange={handleTipocedulaChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Cédula:</label>
                    <input className="form-input" type="text" value={cedula} onChange={handleCedulaChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Nombre Comercial:</label>
                    <input className="form-input" type="text" value={nombreComercial} onChange={handleNombreComercialChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Provincia:</label>
                    <input className="form-input" type="text" value={provincia} onChange={handleProvinciaChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Cantón:</label>
                    <input className="form-input" type="text" value={canton} onChange={handleCantonChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Distrito:</label>
                    <input className="form-input" type="text" value={distrito} onChange={handleDistritoChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Otras Señas:</label>
                    <input className="form-input" type="text" value={otrasSenas} onChange={handleOtrasSenasChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Código País Receptor:</label>
                    <input className="form-input" type="text" value={codigoPaisReceptor} onChange={handleCodigoPaisReceptorChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Teléfono:</label>
                    <input className="form-input" type="text" value={telefono} onChange={handleTelefonoChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input className="form-input" type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className={`response-message ${isError ? 'error' : 'success'} ${responseMessage && 'show'}`}>
                    {responseMessage && <p>{responseMessage}</p>}
                </div>
                <button type="submit" className="submit-button">Agregar Cliente</button>
            </form>
        </div>
    );
}

export default AgregarClientes;
