import "./TextArea.css"

const TextArea = (props) =>{ 

    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) =>{
        //console.log("Cambio ", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-textArea">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            onChange={manejarCambio}
        />
    </div>
}

export default TextArea