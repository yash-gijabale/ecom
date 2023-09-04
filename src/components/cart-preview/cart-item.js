import React from "react";
import './cart-item.css'

const CartPreviewItem = ({cartItem}) =>{
    const {name, qauntity, price, imageUrl} = cartItem

    return (

        <div className="cart-item-container">
            <div className="cart-item-img">
                <img src={imageUrl} />
            </div>
            <div className="cart-item-desc">
                <span>{name}</span>
                <span>{qauntity} X ${price*qauntity}</span>
            </div>
        </div>

    )
}

export default CartPreviewItem;