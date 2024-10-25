import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "../../CONSTANTS/types";

const initialState: product[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<product>) => {
            if (state.filter((product) => {
                return product.id === action.payload.id
            }).length === 0) {
                return [...state, { ...action.payload, quantity: 1 }]
            }
            else {
                return state.map((product) => {
                    if (product.id === action.payload.id) {
                        return { ...product, quantity: product.quantity + 1 }
                    }
                    else {
                        return product
                    }
                })
            }
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            return state.filter((product) => {
                return product.id !== action.payload
            })
        },

        changeQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            return state.map((product) => {
                if (product.id === action.payload.id)
                    if (product.quantity === 1 && action.payload.quantity === -1)
                        return product
                    else
                        return { ...product, quantity: product.quantity + action.payload.quantity }

                else
                    return product
            })
        },

        resetCard: () => {
            return []
        }
    }
})

export const { addToCart, removeFromCart, changeQuantity, resetCard } = cartSlice.actions

export default cartSlice.reducer