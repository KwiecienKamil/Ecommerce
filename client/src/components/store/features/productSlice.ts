import { createSlice } from "@reduxjs/toolkit"
import {toast} from "react-toastify"

export interface Product{
    id:string | undefined ,
    sizes:string | undefined, 
    price:number,
    img: string | undefined, 
    brand: string | undefined, 
    name: string | undefined ,
    category: string | undefined,
    cartQuantity: number
}

interface ProductsState {
    products: Product[],
    cartQuantity: 0
}

const initialState:ProductsState = {
    products: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products") || `[]`) : [],
    cartQuantity: 0

}

export const ProductSlice=createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart:(state,action) => {
            const itemIndex = state.products.findIndex(item => item.id === action.payload.id);
            if(itemIndex >= 0) {
                if(state.products.find(item => item.sizes === action.payload.sizes)) {
                    toast.error("Already in cart", {
                    position: "bottom-left"
                })
                }else {
                    const tempProduct = {...action.payload, cartQuantity: 1}
                    state.products.push(tempProduct);
                    toast.success("Added product to cart", {
                        position: "bottom-left"
                    })
                }
            }else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.products.push(tempProduct);
                toast.success("Added product to cart", {
                    position: "bottom-left"
                })
            }       
            localStorage.setItem("products", JSON.stringify(state.products))
         },
         removeFromCart: (state,action) => {
            const updatedCart = state.products.filter((item) => item.sizes !== action.payload.sizes)
            state.products = updatedCart
            localStorage.setItem("products", JSON.stringify(state.products))
            toast.success("Product removed", {
                position: "bottom-left"
            })
         },
         increaseQuantity: (state,action) => {
            const curP = state.products.find(item => item.sizes === action.payload.sizes)
            curP!.cartQuantity += 1
            localStorage.setItem("products", JSON.stringify(state.products))
         },
         decreaseQuantity: (state,action) => {
            const curP = state.products.find(item => item.sizes === action.payload.sizes)
            if(curP!.cartQuantity > 1) {
            curP!.cartQuantity -= 1; 
            }
            localStorage.setItem("products", JSON.stringify(state.products))
         }
    }
    
})

export default ProductSlice.reducer;
export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = ProductSlice.actions;