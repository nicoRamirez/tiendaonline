import React from "react";

const Producto = ({figurita}) => {
    return ( 
        <h3>{figurita.id} {figurita.articulo} {figurita.precio}</h3>
     );
}
 
export default Producto;