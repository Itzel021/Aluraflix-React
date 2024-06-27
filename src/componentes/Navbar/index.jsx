import { useState } from "react";
import Boton from "../Boton";
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  const [boton, setBotonActivo] = useState("Home");

  const handleButtonClick = (buttonName) => {
    setBotonActivo(buttonName);
  };

  return (
    <div className="navbar">
      <div>
        <img src="./img/Aluraflix-logo.png" alt="logoAlura" />
      </div>
      <div>
        <Link to="/" onClick={() => handleButtonClick("Home")}>
          <Boton
            titulo="Home"
            botonActivo={boton === "Home"}
          />
        </Link>
        <Link to="/nuevo-video" onClick={() => handleButtonClick("Nuevo Video")}>
          <Boton
            titulo="Nuevo Video"
            botonActivo={boton === "Nuevo Video"}
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
