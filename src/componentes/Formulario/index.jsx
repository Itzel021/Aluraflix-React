import { useState } from "react";
import Header from "../Header";
import "./Formulario.css";
import Boton from "../Boton";
import CampoTexto from "../CampoTexto";
import ListaCategorias from "../ListaCategorias";
import TextArea from "../TextArea";

function Formulario(props) {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');
    const [video, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const { registrarVideo } = props

    const envioDatos = (e) => {
        //console.log("Manejar envio")
        e.preventDefault();
        const datosVideo = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion,
        };
        //console.log(datosVideo);
        registrarVideo(datosVideo)
        
    };
   

    return (
        <div className="container-form">
            <form onSubmit={envioDatos}>
                <Header
                    titulo="Nuevo video"
                    texto="Complete el formulario para crear una nueva tarjeta de video"
                />
                <div className="row-form">
                    <CampoTexto
                        titulo="Titulo"
                        placeholder="Ingrese el titulo"
                        valor={titulo}
                        actualizarValor={setTitulo}
                    />
                    <ListaCategorias
                        titulo="Categoría"
                        opciones={props.categorias}
                        valor={categoria}
                        actualizarValor={setCategoria}
                    />
                </div>
                <div className="row-form">
                    <CampoTexto
                        titulo="Imagen"
                        placeholder="Ingrese la url de la imagen"
                        valor={imagen}
                        actualizarValor={setImagen}
                    />
                    <CampoTexto
                        titulo="Video"
                        placeholder="Ingrese el enlace del video"
                        valor={video}
                        actualizarValor={setVideo}
                    />
                </div>
                <div className="row-form">
                    <TextArea
                        titulo="Descripción"
                        placeholder="¿De qué se trata este vídeo?"
                        required={true}
                        valor={descripcion}
                        actualizarValor={setDescripcion}
                    />
                </div>
                <div className="row-form-button">
                    <Boton titulo="GUARDAR" type="submit"/>
                    <Boton titulo="LIMPIAR" type="reset" />
                </div>
            </form>
        </div>
    );
}

export default Formulario;
