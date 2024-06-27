import React from 'react';
import "./Boton.css";

function Boton({ titulo, botonActivo, onClick }) {
  return (
    <button className={`${botonActivo ? 'boton-activo' : 'boton'}`} onClick={onClick}>
      {titulo}
    </button>
  );
}

export default Boton;
