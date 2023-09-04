import React, { Fragment } from "react";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CartPreview from "../cart-preview/cart-preview";

import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context";

import './navbar.css'

import { Link } from "react-router-dom";

const Navbar = () =>{

    const {cartItemCount} = useContext(cartContext)
    const {isCartOpen, setIsCartOpen} = useContext(cartContext)

    const toggleCart = () =>{
        console.log(isCartOpen)
        setIsCartOpen(!isCartOpen)
    }

    return(
        <Fragment>
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="logo-container">
                        <Link to={'/'}><span className="logo">ecom</span></Link>
                    </div>
                    <div className="navlinks-container">
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/shop'}>Shop</Link></li>
                            <li className="cart-bag" onClick={toggleCart}><ShoppingBagOutlinedIcon color="ligth" sx={{ fontSize: 30 }}/><span>{cartItemCount}</span></li>
                        </ul>
                    </div>
                </div>
                {isCartOpen && <CartPreview/> }
                
            </div>
        </Fragment>
    )
}

export default Navbar;