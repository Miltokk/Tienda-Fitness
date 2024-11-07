import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();


export const useCart = () => {
return useContext(CartContext);
};


export const CartProvider = ({ children }) => {
const [cartItems, setCartItems] = useState([]);

  // funcion agregar productos al carrito
const addItemToCart = (item, quantity) => {
    setCartItems((prevItems) => {
    const existingItem = prevItems.find((i) => i.id === item.id);
    if (existingItem) {
        return prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
    } else {
        return [...prevItems, { ...item, quantity }];
    }
    });
};

  // Función para eliminar un producto del carrito por su ID
const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
};

  // Función para vaciar el carrito
const clearCart = () => {
    setCartItems([]);
};

  // Función para actualizar la cantidad de un producto en el carrito
const updateItemQuantity = (itemId, quantity) => {
    setCartItems((prevItems) => 
    prevItems.map((item) => 
        item.id === itemId ? { ...item, quantity } : item
    )
    );
};

return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart, updateItemQuantity }}>
    {children}
    </CartContext.Provider>
);
};

