import React from 'react';
import './Banner.css';
import TituloCategoria from '../TituloCategoria';

const Banner = (props) => {
  const { videoBanner } = props;

  return (
    <div className="banner">
      <div className="banner-content">
        <div className="video-list">    
            <div className="video-item">
              <div className='description'>
                <TituloCategoria titulo={videoBanner.categoria} color={"#82CFFA"} />
                <h2>{videoBanner.titulo}</h2>
                <p>{videoBanner.descripcion}</p>
              </div>
              <div className='card'>
              <a href={videoBanner.video} target="_blank" rel="noopener noreferrer">
                <img src={videoBanner.imagen} alt={videoBanner.titulo} />
                </a>
              </div>
            </div>      
        </div>
      </div>
    </div>
  );
};

export default Banner;