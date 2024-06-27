import React from 'react';
import Formulario from "../componentes/Formulario/index"

function FormPage(props) {
  return (
    <div>
        <Formulario categorias={props.categorias}/>
    </div>
  );
}

export default FormPage
