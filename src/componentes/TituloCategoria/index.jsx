import React from 'react';
import './TituloCategoria.css';

const TituloCategoria = ({titulo, color}) => {

    const colorTitulo = {
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}`
    };

    return (
        <div className="container-titulo-categoria">
            <div className="titulo-categoria" style={colorTitulo}>
                <strong>{titulo}</strong>
            </div>
        </div>
    );
}

export default TituloCategoria;
