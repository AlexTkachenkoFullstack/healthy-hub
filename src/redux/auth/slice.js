import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, registrationThunk, logOutThunk, refreshThunk, updateGoalThunk, updateWeightThunk, updateProfileThunk, updateAvatarThunk } from "./operations";
const initialState = {
    user: { 
        name: null, 
        email: null,
        goal:'',
        age:null,
        height:null,
        avatarURL:'',
        gender:'male',
        weight:null, 
        activity: '1.2'
    },
    token: null,
    isLoading: false,
    error:null,
    dateLastWeight:null,
}

const handlePending = (state) => {
    state.isLoading = true;
}

const handleFulfild = (state) => {
    state.isLoading = false;
    state.error = null;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error=action.payload
}

const handleFulfildReg = (state, action) => {
    handleFulfild(state)
    state.user = {...state.user, ...action.payload.user};
    state.token = action.payload.token;
}

const handleFulfildLogIn = (state, action) => {
    handleFulfild(state);
    state.user = {...state.user, ...action.payload.user};
    state.token = action.payload.token;
    state.dateLastWeight=action.payload.dateLastWeight
}

const handleFulfildLogOut = (state) => {
    handleFulfild(state)
    state.user = initialState.user;
    state.token = null;
}

const handleFulfildRefresh = (state, action) => {
    handleFulfild(state)
    state.user = action.payload.user;
    state.dateLastWeight=action.payload.dateLastWeight
}

const handleRejectedRefresh=(state, action)=>{
    handleRejected(state, action)
    state.token=null
}

const handleFulfildUpdateGoal=(state, action)=>{
    handleFulfild(state);
    state.user.goal = action.payload.data.goal;
}

const handleFulfildUpdateWeight=(state, action)=>{
    handleFulfild(state);
    state.user.weight = action.payload.data.weight;
    state.dateLastWeight=action.payload.data.date;
}

const handleFulfildUpdateProfile=(state, action)=>{
    handleFulfild(state);
    // {profileInfo:{name:'Alex', age:23, height:176, gender: 'male', activity: 1.2},
    // }
    state.user = {...state.user, ...action.payload.data};
}

const handleFulfildUpdateAvatar=(state, action)=>{
    handleFulfild(state);
    console.log(action.payload)
    state.user.avatarURL = action.payload;
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
            .addCase(refreshThunk.fulfilled, handleFulfildRefresh)
            .addCase(refreshThunk.rejected, handleRejectedRefresh)
            .addCase(updateGoalThunk.fulfilled, handleFulfildUpdateGoal)
            .addCase(updateWeightThunk.fulfilled, handleFulfildUpdateWeight)
            .addCase(updateProfileThunk.fulfilled, handleFulfildUpdateProfile)
            .addCase(updateAvatarThunk.fulfilled, handleFulfildUpdateAvatar)
            .addMatcher(isAnyOf(registrationThunk.pending, loginThunk.pending, logOutThunk.pending, refreshThunk.pending, updateGoalThunk.pending, updateWeightThunk.pending, updateProfileThunk.pending, updateAvatarThunk.pending), handlePending)
            .addMatcher(isAnyOf(registrationThunk.rejected,loginThunk.rejected, updateGoalThunk.rejected, updateWeightThunk.rejected, updateProfileThunk.rejected, updateAvatarThunk.rejected), handleRejected)
    }
})
