import React,{useContext} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { cartContext } from "../../contexts/cart-context";

const CheckOutItem = ({itemData}) =>{
    const {addCartItem, removeProduct, deleteProduct} = useContext(cartContext)
    const {name, price, qauntity, imageUrl} = itemData
    return(
        <div className="checkout-item-container">
            <div className="checkout-item-img-container">
                <img src={imageUrl} />
                <span className="product-name">{name}</span>
            </div>
            <div className="checkout-item-qauntity-container">
                    <span className="icon" onClick={()=>removeProduct(itemData)}><RemoveIcon /></span>
                    <span className="quantity">{qauntity}</span>
                    <span className="icon" onClick={()=>addCartItem(itemData)}><AddIcon /></span>
            </div>
            <div className="checkout-item-price-container">
                <span className="price"><strong>${qauntity*price}</strong></span>
            </div>
            <div className="item-remove-conatiner">
                    <span className="remove" onClick={()=>deleteProduct(itemData)}><HighlightOffIcon /></span>
            </div>
        </div>
    )
}

export default CheckOutItem;