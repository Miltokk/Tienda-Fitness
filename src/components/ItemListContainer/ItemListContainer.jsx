import React ,{ useEffect, useState } from 'react'
import "./ItemListContainer.css"
import Productos from "../Productos";
import { Link, useParams } from "react-router-dom";

function ItemListContainer(props) {   
    const { id } = useParams();
    const [Articulos, setArticulos] = useState([]);

    useEffect(() => {
        // Filtrar productos por categoría si categoryId existe, o mostrar todos los productos
        if (id) {
            setArticulos(Productos.filter(articulo => articulo.tipo === id));
        } else {
        setItems(Productos); // Mostrar todos los productos si no hay categoría seleccionada
        }
    }, [id]);


return (
    
            <div>
            <h1>Articulos </h1>
            <div id="card-container">
                {Articulos.map((articulo) => (
                    <div className="card" key={articulo.id}>
                        <Link to={`../ItemDetailContainer/${articulo.id}`}>
                            <h2 className="card-title">{articulo.nombre}</h2>
                            <p className="card-price">Precio: ${articulo.precio}</p>
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        )
}

export default ItemListContainer