import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Productos from "../Productos";



function ItemDetailContainer(props) {

    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Obtener el producto correspondiente a id
        const fetchItem = async () => {
        const fetchedItem = await new Promise(resolve => {
            setTimeout(() => {
            resolve(Productos.find(item => item.id === parseInt(id)));
            }, 500);  // tiempo de recarga de 500milisegundos
        });
        setItem(fetchedItem);
        };
    
        fetchItem();
    }, [id]);



    return (
        <div>
        {item ? (
        <div className="card">
            <div className="card-body">
            <h2>{item.nombre}</h2>

            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <p>{item.categoria}</p>
        </div>
        </div>
    ) : (
        <p>Cargando detalles del producto...</p>
    )}
        </div>
    )
    
}

export default ItemDetailContainer