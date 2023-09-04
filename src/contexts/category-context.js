import React from "react";
import {createContext, useEffect, useState} from "react";
import {getCollectionData} from '../components/firebase'


const getReformCatData = (rowobj) =>{
    const categories = rowobj.map((category)=>(
        category.data().title.toLowerCase()
    ))
    return categories
}

const getProducts = (rowobj) =>{
    const categories = rowobj.map((category)=>(
        category.data()
    ))
    return categories
}

export const categoryContext = createContext({
    categories : [],
    setCategories : ()=>{},
    products : []
})

export const CategoryProvider = ({children}) =>{
    const [categories, setCategories] = useState(null)
    const [products, setProducts] = useState(null)

    useEffect(()=>{
        const getCat = async() =>{
            const data = await getCollectionData()
            setCategories(getReformCatData(data))
            setProducts(getProducts(data))
        }
        getCat()
    },[])

    const value = {
        categories,
        products
    }
    return <categoryContext.Provider value={value}>{children}</categoryContext.Provider>
}