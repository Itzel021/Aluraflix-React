import "./ListaCategorias.css"

import React from 'react';

function ListaCategorias(props) {

    const manejarCambio = (e) =>{
        //console.log("Cambio ", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return (
        <div className="lista-opciones">
            <label>{props.titulo}</label>
            <select onChange={manejarCambio}>
                {props.opciones.map((opcion) => (
                    <option key={opcion.id} value={opcion.id} >
                        {opcion.titulo}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ListaCategorias
