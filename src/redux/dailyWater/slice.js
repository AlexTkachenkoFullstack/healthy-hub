import { createSlice } from "@reduxjs/toolkit";
import { fetchWaterIntake } from "./operations";

const initialState={
    water:{
        quantity:0,
        date:null
    },
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

const handleFulfildGet = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.water.quantity=action.payload.water;
    state.water.date=action.payload.date;
}

export const waterIntakeSlice = createSlice({
    name: 'waterIntake',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWaterIntake.fulfilled, handleFulfildGet)
            .addCase(fetchWaterIntake.pending, handlePending)
            .addCase(fetchWaterIntake.rejected, handleRejected)
    }
})


// const date = new Date();
// const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
// const formattedDate = date.toLocaleDateString('ru-RU', options);