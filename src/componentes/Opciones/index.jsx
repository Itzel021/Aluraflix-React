import "./Opciones.css"
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Opciones = (props) => {
    const {eliminarVideo, id, editarVideo} = props
    
    return <div className="container-opciones">
        <div className="opcion">
            <MdDeleteForever className="icon" onClick={()=>eliminarVideo(id)} /> Eliminar
        </div>
        <div className="opcion">
            <FaEdit className="icon" onClick={()=>editarVideo(id)}/> Editar
        </div>
    </div>
}

export default Opciones