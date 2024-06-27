import "./Opciones.css"
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Opciones = () => {
    return <div className="container-opciones">
        <div className="opcion">
            <MdDeleteForever /> Eliminar
        </div>
        <div className="opcion">
            <FaEdit /> Editar
        </div>
    </div>
}

export default Opciones