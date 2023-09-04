import React from "react";
import './product-card.css'
import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context";

const ProductCard = ({productItem}) =>{
    const {name, price, imageUrl} = productItem

    const {addCartItem} = useContext(cartContext)

    return (
        <div className="product-container">
            <div className="product-img-container" style={{backgroundImage: `url('${imageUrl}')`,backgroundSize: 'cover',}}>
                <button className="add-to-card-btn" onClick={()=> addCartItem(productItem)}>add to card</button>
            </div>
            <div className="product-img-desc">
                <span>{name}</span>
                <span>${price}</span>
            </div>
        </div>
    )
}

export default ProductCard