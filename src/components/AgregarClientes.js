// AgregarClientes.js
import React, { useState } from 'react';

function AgregarClientes() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Cliente agregado:', { nombre, email });

        // Mostraremos los datos en la consola
        setNombre('');
        setEmail('');
    }

    return (
        <div>
            <h2>Agregar Cliente</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={handleNombreChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <button type="submit">Agregar Cliente</button>
            </form>
        </div>
    );
}

export default AgregarClientes;
