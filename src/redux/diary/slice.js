import { createSlice } from "@reduxjs/toolkit";
import { fetchFoodIntake, postFoodIntake, updateFoodIntake } from "./operations";

const initialState={
    food:{
        breakfast:[],
        lunch:[],
        dinner:[],
        snack:[],
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
    state.food={...action.payload.data}
}

const handleFulfildPost = (state, action) => {
    state.isLoading = false;
    state.error = null;
    const type=Object.keys(action.payload.data)[0];
    state.food[type]=[...state.food[type], ...action.payload.data[type]]
}

const handleFulfildUpdate = (state, action) => {
    state.isLoading = false;
    state.error = null;
    // {dinner:{name:', id} }
    const type=Object.keys(action.payload.data)[0];
    const indexOfFood=state.food[type].findIndex(item=>item.id===action.payload.data[type].id);
    state.food[type][indexOfFood]=action.payload.data[type];
}

export const foodIntakeSlice = createSlice({
    name: 'foodIntake',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFoodIntake.fulfilled, handleFulfildGet)
            .addCase(fetchFoodIntake.pending, handlePending)
            .addCase(fetchFoodIntake.rejected, handleRejected)
            .addCase(postFoodIntake.fulfilled, handleFulfildPost) 
            .addCase(postFoodIntake.pending, handlePending)
            .addCase(postFoodIntake.rejected, handleRejected)
            .addCase(updateFoodIntake.fulfilled, handleFulfildUpdate) 
            .addCase(updateFoodIntake.pending, handlePending)
            .addCase(updateFoodIntake.rejected, handleRejected)
    }
})
