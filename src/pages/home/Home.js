import React, { Fragment, useEffect, useState } from "react";
import HomeCategoryBox from "../../components/home-category-box/Home-cat-box";

import { useContext } from "react";
import {categoryContext} from '../../contexts/category-context'

import './home.css'

const Home = () =>{
    const {categories} = useContext(categoryContext)

    const [allCategories , setAllCategories] = useState([])

    useEffect(()=>{
        setAllCategories(categories)
    },[categories])


    return (
        <Fragment>
   
            <div className="home-container">
                {
                   allCategories && allCategories.map((title, inx)=>{
                        return (<HomeCategoryBox key={inx} title={title}/>)
                    })
                }
            </div>
        </Fragment>
    )
}

export default Home