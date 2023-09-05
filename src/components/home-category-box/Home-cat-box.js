import React from "react";
import './home-cat-box.css'
import { useNavigate } from "react-router-dom";

const HomeCategoryBox = ({title}) =>{
    const navigate = useNavigate ();

    const navigateTo = (param) =>{
        navigate(`/shop/${param}`)
    }
    return (
        <div className="home-cat-container">
            <span className="category-title">{title.toUpperCase()}</span>
            <button className="category-btn"  onClick={()=> navigateTo(title)}>Shop Now</button>
        </div>
    )
}

export default HomeCategoryBox