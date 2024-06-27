import React from 'react';
import TituloCategoria from "../TituloCategoria";
import VideoCard from "../VideoCard";
import "./ListaVideos.css";

const ListaVideos = ({ titulo, color, videos }) => {
    
    return (
        <div className="container-listaVideos">
            <TituloCategoria titulo={titulo} color={color} />
            {videos.map((video, index) => (
                <VideoCard
                    key={index}
                    titulo={video.titulo}  
                    color={color}
                    imagen={video.imagen}
                    link={video.video}
                />
            ))}
        </div>
    );
}

export default ListaVideos;
