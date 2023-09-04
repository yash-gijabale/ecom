import React, { useEffect, useState } from "react";
import { createContext } from "react";

const addToCart = (cartItems, productToAdd) =>{

    const existing = cartItems.find((cartitem)=> cartitem.id === productToAdd.id)
    
    if(existing){
       return cartItems.map((cartItem)=>(
            cartItem.id === productToAdd.id ? {...cartItem, qauntity: cartItem.qauntity +1} : {...cartItem}
        ))
    }

    // return productToAdd
    return [...cartItems, {...productToAdd, qauntity : 1}]
}

const removeFromCart = (cartItems, productToRemove) =>{
    const existing = cartItems.find((cartitem)=> cartitem.id === productToRemove.id)
    
    if(existing){
       return cartItems.map((cartItem)=>(
            cartItem.id === productToRemove.id && productToRemove.qauntity > 1  ? {...cartItem, qauntity: cartItem.qauntity - 1} : {...cartItem}
        ))
    }
}

const deleteFromCart = (cartItems, productToDelete) =>{
    return cartItems.filter((item)=> item.id !== productToDelete.id)
}

export const cartContext = createContext({
    cartItems : [],
    addCartItem : () => {},
    cartItemCount : 0,
    isCartOpen : false,
    setIsCartOpen : ()=>{},
    removeProduct : ()=>{},
    deleteProduct : ()=>{}

})
export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([])
    const [cartItemCount, setCartItemCount] = useState(0)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const addCartItem = (productToAdd) =>{
        setCartItems(addToCart(cartItems, productToAdd))
        // console.log(addToCart(cartItems, productToAdd))
    }

    const removeProduct = (productToAdd) =>{
        setCartItems(removeFromCart(cartItems, productToAdd))
        // console.log(addToCart(cartItems, productToAdd))
    }

    const deleteProduct = (productToDelete) =>{
        setCartItems(deleteFromCart(cartItems, productToDelete))

    }


        useEffect(()=>{
            const cartCount = cartItems.reduce((total, item)=> total = total + item.qauntity ,0)
            setCartItemCount(cartCount)
        },[cartItems])

    const value = {
        cartItems,
        addCartItem,
        cartItemCount,
        isCartOpen,
        setIsCartOpen,
        removeProduct,
        deleteProduct
    }

    return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}
