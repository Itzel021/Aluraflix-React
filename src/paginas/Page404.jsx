import React from 'react';
import '../assets/css/Page404.css'; 
import portadaAlura from '../assets/img/404.jpg'; 

const Page404 = () => {
    return (
        <div className="gif-container" style={{ backgroundImage: `url(${portadaAlura})` }}>
            <p className="message">Esta página no existe</p>
        </div>
    );
}

export default Page404;
