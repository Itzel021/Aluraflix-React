import Banner from '../componentes/Banner'
import ListaVideos from '../componentes/ListaVideos'

const Home = (props) => {

  const{categorias,videos} = props
  
  return (
      <div className="container">
        <Banner />
        {categorias.map((categoria, index) => {
        // Filtrar videos por la categoría actual
        const videosFiltrados = videos.filter(video => video.categoria === categoria.titulo);

        return (
          <ListaVideos
            key={index}
            titulo={categoria.titulo}
            color={categoria.colorPrimario}
            videos={videosFiltrados} 
          />
        );
      })}
      </div>
  )
}

export default Home
