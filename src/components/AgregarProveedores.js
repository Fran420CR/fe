// AgregarProveedores.js
import React, { useState } from 'react';

function AgregarProveedores() {
    const [nombre, setNombre] = useState('');
    const [tipoID, setTipoID] = useState('');
    const [ID, setID] = useState('');
    const [nombreComercial, setNombreComercial] = useState('');
    const [provincia, setProvincia] = useState('');
    const [canton, setCanton] = useState('');
    const [distrito, setDistrito] = useState('');
    const [otrasSenas, setOtrasSenas] = useState('');
    const [codigoPaisReceptor, setCodigoPaisReceptor] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    }

    const handleTipoIDChange = (event) => {
        setTipoID(event.target.value);
    }

    const handleIDChange = (event) => {
        setID(event.target.value);
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Cliente agregado:', { nombre, tipoID, ID, nombreComercial, provincia, canton, distrito, otrasSenas, codigoPaisReceptor, telefono, email });

        // Limpiamos los campos después de enviar el formulario
        setNombre('');
        setTipoID('');
        setID('');
        setNombreComercial('');
        setProvincia('');
        setCanton('');
        setDistrito('');
        setOtrasSenas('');
        setCodigoPaisReceptor('');
        setTelefono('');
        setEmail('');
    }

    return (
        <div className="form-container"> {/* Añadimos una clase contenedora para aplicar estilos */}
            <h2>Proveedor</h2>
            <form onSubmit={handleSubmit}>
                {/* Cada div envolvente para el input y label se agrega con una clase específica para estilos */}
                <div className="form-group">
                    <label className="form-label">Nombre:</label>
                    <input className="form-input" type="text" value={nombre} onChange={handleNombreChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">Tipo ID:</label>
                    <input className="form-input" type="text" value={tipoID} onChange={handleTipoIDChange} />
                </div>
                <div className="form-group">
                    <label className="form-label">ID:</label>
                    <input className="form-input" type="text" value={ID} onChange={handleIDChange} />
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
                <button type="submit" className="submit-button">Agregar Cliente</button>
            </form>
        </div>
    );
}

export default AgregarProveedores;
