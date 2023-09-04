import React, { Fragment } from "react";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import './navbar.css'

import { Link } from "react-router-dom";

const Navbar = () =>{

    return(
        <Fragment>
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="logo-container">
                        <span className="logo">ecom</span>
                    </div>
                    <div className="navlinks-container">
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/shop'}>Shop</Link></li>
                            <li><ShoppingBagOutlinedIcon color="secondary" sx={{ fontSize: 30 }}/></li>
                        </ul>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Navbar;