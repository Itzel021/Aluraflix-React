import Opciones from "../Opciones";
import "./VideoCard.css"

// Importa tus imágenes
import imageMap from '../../assets/imageMap';

const VideoCard = (props) => {
  const { titulo, imagen, color, link } = props;

  const colorCard = {
    border: `2px solid ${color}`,
    boxShadow: `0 0 10px ${color}`
  };
  const colorInfo = {
    borderTop: `1px solid ${color}`,
    boxShadow: `0px -9px 6px ${color}`
  };
 
  return (
    <div className="video-card" style={colorCard}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="video-link">
        <img className="thumbnail" src={imageMap[imagen]} alt={titulo} />
      </a>
        <div className="info" style={colorInfo}>
          <Opciones />
        </div>
    </div>
  );
}

export default VideoCard;
