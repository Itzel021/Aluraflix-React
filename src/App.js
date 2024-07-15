/* Importaciones */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/*  Importar componentes */
import Navbar from "./componentes/Navbar/index";
import Footer from "./componentes/Footer";
import Modal from "./componentes/Modal/"

/*  Importar paginas */
import Home from "./paginas/Home";
import FormPage from "./paginas/FormPage";
import Page404 from "./paginas/Page404";

function App() {
  const [videoBanner, setVideoBanner] = useState({
    id: uuidv4(),
    titulo: "Challenge React",
    categoria: "Front End",
    imagen: "img/img-card.png",
    video: "https://www.youtube.com/watch?v=ov7vA5HFe6w",
    descripcion: "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.",
  });

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
      descripcion: "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.",
    },
    {
      id: uuidv4(),
      titulo: "¿Qué es JavaScript?",
      categoria: "Front End",
      imagen: "front-2.png",
      video: "https://www.youtube.com/watch?v=GJfOSoaXk4s",
      descripcion: "Aprenderas JavaScript de forma sencilla.",
    },
    {
      id: uuidv4(),
      titulo: "Equipo Front End",
      categoria: "Front End",
      imagen: "front-3.png",
      video: "https://www.youtube.com/watch?v=rpvrLaBQwgg",
      descripcion: "Como trabajar en equipo de manera efectiva",
    },
    {
      id: uuidv4(),
      titulo: "Spring Framework. ¿Qué es? ",
      categoria: "Back End",
      imagen: "back-1.png",
      video: "https://www.youtube.com/watch?v=t-iqt1b2qqk",
      descripcion: "Spring una forma de hacer las cosas",
    },
    {
      id: uuidv4(),
      titulo: "¿Qué es SQL y NoSQL?",
      categoria: "Back End",
      imagen: "back-2.png",
      video: "https://www.youtube.com/watch?v=cLLKVd5CNLc",
      descripcion: "Aprende y almacena datos",
    },
    {
      id: uuidv4(),
      titulo: "Simplificando tu código en Java: Conoce los enum",
      categoria: "Back End",
      imagen: "back-3.png",
      video: "https://www.youtube.com/watch?v=EoPvlE85XAQ",
      descripcion: "Organizate!!",
    },
    {
      id: uuidv4(),
      titulo: "¿Qué son las Soft Skills?",
      categoria: "Innovación y gestión",
      imagen: "innova-1.png",
      video: "https://www.youtube.com/watch?v=vhwspfvI52k&t=292s",
      descripcion: "Importante en el mundo laboral.",
    },
    {
      id: uuidv4(),
      titulo: "7 Soft Skills más deseadas por las empresas",
      categoria: "Innovación y gestión",
      imagen: "innova-2.png",
      video: "https://www.youtube.com/watch?v=YhR7Zp8NUzE",
      descripcion: "Investiga y preparate",
    },
    {
      id: uuidv4(),
      titulo: "¿Qué son las metodologias ágiles?",
      categoria: "Innovación y gestión",
      imagen: "innova-3.png",
      video: "https://www.youtube.com/watch?v=6N3OkLCfK-0",
      descripcion: "Es importante conocerlas...",
    },
  ]);

  //Registrar video
  const registrarVideo = (video) => {
    console.log("Nuevo video: ", video);
    //Spread operator, agregar el nuevo elemento, copiar los existentes y agregar el nuevo
    actualizarVideos([...videos, video]);
  };

  //Eliminar video
  const eliminarVideo = (id) => {
    console.log("Eliminar video", id)
    const nuevosVideos = videos.filter((video) => video.id !== id)
    actualizarVideos(nuevosVideos)
  }
  
  //Actualizar videos
  const handleSave = (updatedVideo) => {
    const nuevosVideos = videos.map((video) =>
      video.id === updatedVideo.id ? updatedVideo : video
    );
    actualizarVideos(nuevosVideos);
  };

  //Editar video
  const [videoSeleccionado, setVideoSeleccionado] = useState(null);
  

 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home 
            categorias={categorias} 
            videos={videos} 
            videoBanner={videoBanner}
            eliminarVideo={eliminarVideo}
            editarVideo={(video) => setVideoSeleccionado(video)}
            />}
        />
        <Route
          path="/nuevo-video"
          element={
            <FormPage categorias={categorias} registrarVideo={registrarVideo} />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Modal video={videoSeleccionado} onClose={() => setVideoSeleccionado(null)} onSave={handleSave} />
      <Footer />
    </Router>
  );
}

export default App;
