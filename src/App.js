import { Fragment, useState } from "react";
import Footer from "./componentes/Footers";
import Header from "./componentes/Header";
import Producto from "./componentes/Producto";

function App() {

const [figuritas,guardarFigurita]=useState([
  {id:1,articulo:"paquete de figuritas",precio:35},
  {id:2,articulo:"figurita edicion limitada",precio:10},
  {id:3,articulo:"albun de figuritas",precio:70},
  {id:4,articulo:"paquete de figurita con una edicion limitada",precio:40},
  {id:5,articulo:"caja con paquetes de figuritas",precio:150}
]);


  return (
    <Fragment>
      <Header/>
      <h1>figuritas de futbol argentino compre online</h1>
      {figuritas.map(figurita=>
      <Producto
      figurita={figurita}/>)
        }
      <Footer 
      anio={2021}/>
    </Fragment>
  );
}

export default App;