import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "../../CONSTANTS/types";

const initialState: product[] = []

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (_, action: PayloadAction<product[]>) => {
            return action.payload
        },

        
    }
})

export const { addProducts } = productsSlice.actions

export default productsSlice.reducer