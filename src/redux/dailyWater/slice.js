import { createSlice } from "@reduxjs/toolkit";
import { addWaterIntake, fetchWaterIntake } from "./operations";

const initialState={
    water:{
        value:0,
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
    state.water.value=action.payload.value;
}

const handleFulfildAdd=(state, action)=>{
    state.isLoading = false;
    state.error = null;
    state.water.value=action.payload.value;
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
            .addCase(addWaterIntake.fulfilled, handleFulfildAdd)
            .addCase(addWaterIntake.pending, handlePending)
            .addCase(addWaterIntake.rejected, handleRejected)
    }
})


