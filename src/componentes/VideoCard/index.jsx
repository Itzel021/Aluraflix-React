import Opciones from "../Opciones";
import "./VideoCard.css"

// Importa tus imágenes
import imageMap from '../../assets/imageMap';

const VideoCard = (props) => {
  const { titulo, imagen, color, link, id, eliminarVideo } = props;

  const colorCard = {
    border: `2px solid ${color}`,
    boxShadow: `0 0 10px ${color}`
  };
  const colorInfo = {
    borderTop: `1px solid ${color}`,
    boxShadow: `0px -9px 6px ${color}`
  };
 // Determinar si la imagen es una URL externa
 const isExternalUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

const imageSrc = isExternalUrl(imagen) ? imagen : imageMap[imagen];

  return (
    <div className="video-card" style={colorCard}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="video-link">
        <img className="thumbnail" src={imageSrc} alt={titulo} />
      </a>
        <div className="info" style={colorInfo}>
          <Opciones eliminarVideo={eliminarVideo} id={id} />
        </div>
    </div>
  );
}

export default VideoCard;
