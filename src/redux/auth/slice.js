import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, registrationThunk, logOutThunk, refreshThunk } from "./operations";

const initialState = {
    user: { 
        name: null, 
        email: null,
        goal:'',
        age:null,
        height:null,
        avatarUrl:'',
        gender:'Male',
        weight:null, 
        activity: '1.2'
    },
    token: null,
    isLoading: false,
    error:null,
}

const handlePending = (state) => {
    state.isLoading = true;
}

const handleFulfild = (state) => {
    state.isLoading = false;
    state.error = null;
}

const handleFulfildReg = (state, action) => {
    handleFulfild(state)
    console.log(action)
    state.user = {...state.user, ...action.payload.user};
    state.token = action.payload.token;
}

const handleFulfildLogIn = (state, action) => {
    handleFulfild(state);
    state.user = {...state.user, ...action.payload.user};
    state.token = action.payload.token;
}

const handleFulfildLogOut = (state) => {
    handleFulfild(state)
    state.user = initialState.user;
    state.token = null;
}

const handleFulfildRefresh = (state, action) => {
    handleFulfild(state)
    state.user = action.payload;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error=action.payload
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registrationThunk.fulfilled, handleFulfildReg)
            .addCase(loginThunk.fulfilled, handleFulfildLogIn)
            .addCase(logOutThunk.fulfilled, handleFulfildLogOut)
            .addCase(logOutThunk.rejected, (state, action) => {
                state.user = initialState.user;
                state.token = null;
                handleRejected()
            })
            .addCase(refreshThunk.pending, (state, action) => {
                state.isLoading=true
            })
            .addCase(refreshThunk.fulfilled, handleFulfildRefresh)
            .addMatcher(isAnyOf(registrationThunk.pending, loginThunk.pending, logOutThunk.pending), handlePending)
            .addMatcher(isAnyOf(registrationThunk.rejected,loginThunk.rejected,refreshThunk.rejected), handleRejected)
    }
})