/* Importaciones */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/*  Importar componentes */
import Navbar from "./componentes/Navbar/index";
import Footer from "./componentes/Footer";

/*  Importar paginas */
import Home from "./paginas/Home";
import FormPage from "./paginas/FormPage";
import Page404 from "./paginas/Page404";

function App() {
  const [categorias, actualizarCategorias] = useState([
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
    },
    {
      id: uuidv4(),
      titulo: "Back End",
      colorPrimario: "#A6D157",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y gestión",
      colorPrimario: "#FF8A29",
    },
  ]);

  const [videos, actualizarVideos] = useState([
    {
      id: uuidv4(),
      titulo: "Cuándo usar let, var y const",
      categoria: "Front End",
      imagen: "front-1.png",
      video: "https://www.youtube.com/watch?v=PztCEdIJITY",
      descripcion: "aa ",
    },
    {
      id: uuidv4(),
      titulo: "¿Qué es JavaScript?",
      categoria: "Front End",
      imagen: "front-2.png",
      video: "https://www.youtube.com/watch?v=GJfOSoaXk4s",
      descripcion: " bb",
    },
    {
      id: uuidv4(),
      titulo: "Equipo Front End",
      categoria: "Front End",
      imagen: "front-3.png",
      video: "https://www.youtube.com/watch?v=rpvrLaBQwgg",
      descripcion: "aa ",
    },
    {
      id: uuidv4(),
      titulo: "Spring Framework. ¿Qué es? ",
      categoria: "Back End",
      imagen: "back-1.png",
      video: "https://www.youtube.com/watch?v=t-iqt1b2qqk",
      descripcion: "aa ",
    },
    {
      id: uuidv4(),
      titulo: "¿Qué es SQL y NoSQL?",
      categoria: "Back End",
      imagen: "back-2.png",
      video: "https://www.youtube.com/watch?v=cLLKVd5CNLc",
      descripcion: "aa ",
    },
    {
      id: uuidv4(),
      titulo: "Simplificando tu código en Java: Conoce los enum",
      categoria: "Back End",
      imagen: "back-3.png",
      video: "https://www.youtube.com/watch?v=EoPvlE85XAQ",
      descripcion: "aa ",
    },
    {
      id: uuidv4(),
      titulo: "¿Qué son las Soft Skills?",
      categoria: "Innovación y gestión",
      imagen: "innova-1.png",
      video: "https://www.youtube.com/watch?v=vhwspfvI52k&t=292s",
      descripcion: "aa ",
    },
    {
      id: uuidv4(),
      titulo: "7 Soft Skills más deseadas por las empresas",
      categoria: "Innovación y gestión",
      imagen: "innova-2.png",
      video: "https://www.youtube.com/watch?v=YhR7Zp8NUzE",
      descripcion: "aa ",
    },
    {
      id: uuidv4(),
      titulo: "¿Qué son las metodologias ágiles?",
      categoria: "Innovación y gestión",
      imagen: "innova-3.png",
      video: "https://www.youtube.com/watch?v=6N3OkLCfK-0",
      descripcion: "aa ",
    },
  ]);

  //Registrar video
  const registrarVideo = (video) => {
    console.log("Nuevo video: ", video);
    //Spread operator, agregar el nuevo elemento, copiar los existentes y agregar el nuevo
    actualizarVideos([...videos, video]);
  };
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home categorias={categorias} videos={videos} />}
        />
        <Route
          path="/nuevo-video"
          element={
            <FormPage categorias={categorias} registrarVideo={registrarVideo} />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
