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
            <option value="" disable defaultValue="" hidden>Seleccionar categoria</option>
                {props.opciones.map((opcion) => (
                    <option key={opcion.id} value={opcion.titulo} >
                        {opcion.titulo}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ListaCategorias
