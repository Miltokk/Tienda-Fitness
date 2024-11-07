import React, { useEffect, useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import Productos from "../Productos";
import "./ItemDetailContainer.css";
import { useCart } from '../../context/CartContext';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';


function ItemDetailContainer(props) {

    const { id } = useParams();
    const { addItemToCart } = useCart();
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
            <img src={`/src/assets/${item.id}.png`}/>
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <p>{item.categoria}</p>
            
        </div>
        <ItemQuantitySelector  maxQuantity={item.inventario}  onAdd={(quantity) => addItemToCart(item, quantity)} />
        </div>
    ) : (
        <p>Cargando detalles del producto...</p>
    )}
        </div>
    )
    
}

export default ItemDetailContainer