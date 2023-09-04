import React, { Fragment, useContext } from "react";
import { cartContext } from "../../contexts/cart-context";
import CheckOutItem from './check-out-item'

import './check-out.css'

const CheckOut = () =>{
    const {cartItems} = useContext(cartContext)
    let  total = 0;
    console.log(cartItems)
    return (
        <Fragment>
            <div className="checkout-container">
                {
                    cartItems.map((item)=>{
                        total = total + item.price*item.qauntity
                        return (<CheckOutItem key={item.id} itemData = {item}/>)
                        })
                }
                <div className="total-container">
                    <span>Total: ${total}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default CheckOut;