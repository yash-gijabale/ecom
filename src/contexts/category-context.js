import React from "react";
import {createContext, useEffect, useState} from "react";
import {getCollectionData} from '../components/firebase'


const getReformCatData = (rowobj) =>{
    const categories = rowobj.map((category)=>(
        category.data().title.toLowerCase()
    ))
    return categories
}

export const categoryContext = createContext({
    categories : [],
    setCategories : ()=>{}
})

export const CategoryProvider = ({children}) =>{
    const [categories, setCategories] = useState(null)

    useEffect(()=>{
        const getCat = async() =>{
            const data = await getCollectionData()
            setCategories(getReformCatData(data))
        }
        getCat()
    },[])

    const value = {
        categories
    }
    return <categoryContext.Provider value={value}>{children}</categoryContext.Provider>
}