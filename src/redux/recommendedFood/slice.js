import { createSlice } from "@reduxjs/toolkit";
import { fetchRecommendedFood } from "./operations";

const initialState={
    products:[],
    isLoading: false,
    error:null,
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error=action.payload
}

const handlePending = (state) => {
    state.isLoading = true;
}

const handleFulfild = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.products=action.payload;
}

export const recommendedFoodSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendedFood.fulfilled, handleFulfild)
            .addCase(fetchRecommendedFood.pending, handlePending)
            .addCase(fetchRecommendedFood.rejected, handleRejected)
    }
})