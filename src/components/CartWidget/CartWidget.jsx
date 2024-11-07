import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../../context/CartContext';


function CartWidget() {
    const { cartItems } = useCart();
    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return (
    <div className='carrito'>
        <FaShoppingCart size="30px" />
        {cartItemCount > 0 && (
        <span className='badge'>{cartItemCount}</span>
        )}
    
    </div>
    )
}

export default CartWidget