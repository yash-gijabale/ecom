import React, { Fragment } from "react";
import ProductCard from "../product-card/product-card";
import './product-preview.css'
import { useParams,Link } from "react-router-dom";

const ProductPreview = ({productsData}) =>{
    const {title, items} = productsData
    console.log(items)
    const naviget = useParams()
    return(
        <Fragment>
            <div className="cat-title">
                <h2><Link to={title.toLowerCase()}>{title.toUpperCase()}</Link></h2>
            </div>
            <div className="preview-container">
                <div className="preview-box">
                    {
                        items.filter((_,inx)=> inx < 4).map((productItem)=>(
                            <ProductCard productItem = {productItem}/>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default ProductPreview