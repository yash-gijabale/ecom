import React, { Fragment } from "react";
import ProductCard from "../product-card/product-card";
// import './product-preview.css'
import { useParams } from "react-router-dom";

const CategoryProducts = ({productsData}) =>{
    console.log(productsData)
    const {title, items} = productsData
    const naviget = useParams()
    return(
        <Fragment>
            <div className="cat-title">
                <h2>{title.toUpperCase()}</h2>
            </div>
            <div className="preview-container">
                <div className="preview-box">
                    {
                        items.map((productItem)=>(
                            <ProductCard productItem = {productItem}/>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default CategoryProducts