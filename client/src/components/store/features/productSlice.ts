import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface Product{
    id:string | undefined ,
    sizes:string | undefined, 
    price:number | undefined,
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
    products: [],
    cartQuantity: 0

}

export const ProductSlice=createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart:(state,action:PayloadAction<Product>) => {
            const itemIndex = state.products.findIndex(item => item.id === action.payload.id);
            if(itemIndex >= 0) {
                if(state.products.find(item => item.sizes === action.payload.sizes)) {
                    alert("Already in cart")
                }else {
                    const tempProduct = {...action.payload, cartQuantity: 1}
                state.products.push(tempProduct);
                }
            }else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.products.push(tempProduct);
            }
        }
    }
})

export default ProductSlice.reducer;
export const {addToCart} = ProductSlice.actions;