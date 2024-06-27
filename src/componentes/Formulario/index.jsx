
import Header from "../Header";
import "./Formulario.css";
import Boton from "../Boton";
import CampoTexto from "../CampoTexto"

function Formulario(props) {
   // console.log(props)
    
    return (
        <div className="container-form">
            <form>
                <Header
                    titulo="Nuevo video"
                    texto="Complete el formulario para crear una nueva tarjeta de video"
                />
                <div className="row-form-button">
                    <CampoTexto titulo="Titulo" placeholder="Ingrese el titulo" />
                </div>
                <div className="row-form-button">
                    <CampoTexto titulo="Imagen" placeholder="Ingrese la url de la imagen" />
                    <CampoTexto titulo="Video" placeholder="Ingrese el enlace del video" />
                </div>
                <div className="row-form-button">
                    
                </div>
                <div className="row-form-button">
                    <Boton titulo="GUARDAR" />
                    <Boton titulo="LIMPIAR" />
                </div>
            </form>
        </div>
    );
}

export default Formulario;
