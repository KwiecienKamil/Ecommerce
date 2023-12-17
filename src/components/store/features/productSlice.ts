import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface Product{
    id:string | undefined,
    sizes:string | undefined, 
    price:number | undefined,
    img: string | undefined, 
    brand: string | undefined, 
    name: string | undefined ,
    category: string | undefined,
}

interface ProductsState {
    products: Product[],
    
}

const initialState:ProductsState = {
    products: [],

}

export const ProductSlice=createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart:(state,action:PayloadAction<Product>) => {
            state.products.push({
                id:action.payload.id,
                sizes:action.payload.sizes,
                price:action.payload.price,
                img:action.payload.img,
                brand:action.payload.brand,
                name:action.payload.name,
                category:action.payload.category,    
            });
        }
    }
})

export default ProductSlice.reducer;
export const {addToCart} = ProductSlice.actions;