import React from 'react';
import './Banner.css';

const Banner = (props) => {
  const {videos} = props

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Bienvenido a Nuestro Sitio</h1>
        <p>Explora nuestras características y servicios.</p>
      </div>
    </div>
  );
}

export default Banner;
