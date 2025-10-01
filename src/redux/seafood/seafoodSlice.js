import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

export const getFood = createAsyncThunk(
    "get/food",
    async (category, thunkAPI) => {
        try {
            const res = await axios.get(`${API}${category}`)
            return res.data.meals 
        } catch (error) {
            return thunkAPI.rejectWithValue("Not Found 404")            
        }
    }
)

const foodSlice = createSlice({
    name: "food",
    initialState: {
        food: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getFood.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(getFood.fulfilled, (state, action) => {
                    state.loading = false;
                    state.food = action.payload;
                })
                .addCase(getFood.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload
                })
    }
})
export default foodSlice.reducer