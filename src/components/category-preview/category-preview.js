import React, { useContext, useEffect, useState } from "react";
import { categoryContext } from "../../contexts/category-context";
import { useParams } from "react-router-dom";
import SkeletonAnimation from '../../components/skeleton/Skeleton'
import ProductPreview from "../../components/product-preview/product-preview";
import CategoryProducts from "./category-product";

const CategoryPreview = () => {
    const param = useParams()
    const { products } = useContext(categoryContext)
    const [catProduct, setCatProduct] = useState(null)


    useEffect(() => {
        const catProductArr = products && products.find((itmes) => (
            itmes.title.toLowerCase() === param['*']
        ))
        setCatProduct(catProductArr)
    }, [param, products])

    console.log(catProduct)
    return (
        <div>
            {
                catProduct ? <CategoryProducts productsData={catProduct} /> : <span>NO PRoducts</span>
            }
        </div>
    )
}

export default CategoryPreview;