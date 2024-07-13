import React from 'react';
import "./Boton.css";

function Boton({ titulo, botonActivo, onClick, botonGuardar}) {
  return (
    <button
      className={`${botonActivo ? 'boton-activo' : 'boton'} ${botonGuardar ? 'btn-guardar' : ' '}`} 
      onClick={onClick}>
      {titulo}
    </button>
  );
}

export default Boton;
