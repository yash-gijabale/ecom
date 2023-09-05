import React, { Fragment } from "react";

import ShopPreview from "./shop-preview";
import { Route, Routes, useParams } from "react-router-dom";
import CategoryPreview from '../../components/category-preview/category-preview'


const Shop = () =>{
    const param = useParams()
    // console.log(param['*'])
    return (
        <Fragment>
            <Routes>
                <Route index element ={<ShopPreview />} ></Route>
                <Route path={param['*']} element ={<CategoryPreview />} ></Route>
            </Routes>
        </Fragment>
    )
}

export default Shop