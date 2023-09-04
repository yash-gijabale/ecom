import React from "react";
import './home-cat-box.css'

const HomeCategoryBox = ({title}) =>{
    return (
        <div className="home-cat-container">
            <span className="category-title">{title.toUpperCase()}</span>
            <button className="category-btn">Shop Now</button>
        </div>
    )
}

export default HomeCategoryBox