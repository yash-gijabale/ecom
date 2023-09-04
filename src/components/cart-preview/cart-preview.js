import React from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context";

import CartPreviewItem from "./cart-item";
import './cart-preview.css'

const CartPreview = () =>{

    const {cartItems} = useContext(cartContext)
    const navigate = useNavigate();
    const navigateToCheckOut = () =>{
        navigate("/checkout");
    }

    return(
        <div className="cart-priview">
            <div className="cart-body">
                {
                    cartItems.length ? cartItems.map((item)=>(
                        <CartPreviewItem cartItem = {item}/>
                    )) :
                    <span>Your cart is empty</span>
                }
            </div>
            <div className="cart-footer">
                <button className="checkout-btn" onClick={navigateToCheckOut}>Check out</button>
            </div>
        </div>
    )
}

export default CartPreview