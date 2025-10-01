import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./about/aboutSlice"
import productReducer from "./product/productSlice"
import categoryReducer from "./category/categorySlice"
import foodReducer from './seafood/seafoodSlice'

export const myStore = configureStore({
    reducer: {
        count: aboutReducer,
        flower: productReducer,
        category: categoryReducer,
        food: foodReducer
    }
})
