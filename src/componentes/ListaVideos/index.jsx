import React from 'react';
import TituloCategoria from "../TituloCategoria";
import VideoCard from "../VideoCard";
import "./ListaVideos.css";

const ListaVideos = ({ titulo, color, videos, eliminarVideo, editarVideo }) => {
  return (
    <div className="container-listaVideos">
      <TituloCategoria titulo={titulo} color={color} />
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          id={video.id}
          titulo={video.titulo}
          color={color}
          imagen={video.imagen}
          link={video.video}
          eliminarVideo={eliminarVideo}
          editarVideo={() => editarVideo(video)}
        />
      ))}
    </div>
  );
};

export default ListaVideos;
