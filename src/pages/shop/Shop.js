import React, { Fragment } from "react";
import { useContext } from "react";
import { categoryContext } from "../../contexts/category-context";
import SkeletonAnimation from '../../components/skeleton/Skeleton'
import ProductPreview from "../../components/product-preview/product-preview";
import { Route, Routes, useParams } from "react-router-dom";
import CategoryPreview from '../../components/category-preview/category-preview'

const Shop = () =>{
    const {products} = useContext(categoryContext)
    console.log(products)
    let {param} = useParams()
    // console.log(:param)
    return (
        <Fragment>
            <div className="shop-container">
                {
                    products ? products.map((val)=>{
                        return(<ProductPreview productsData = {val} />)
                    }) : 
                    <SkeletonAnimation />
                }
                
            </div>

            {/* <Routes>
                <Route path="/shop/hats" element={<CategoryPreview />} />
            </Routes> */}
        </Fragment>
    )
}

export default Shop