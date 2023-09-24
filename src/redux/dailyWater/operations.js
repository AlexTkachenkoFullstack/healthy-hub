import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://backend-healthyhub.onrender.com/'
});


export const fetchWaterIntake=createAsyncThunk(
    'waterIntake/get',
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const persistToken = state.auth.token;
            if (!persistToken) {
                return thunkAPI.rejectWithValue('No token');
            } 
            const response=await instance('api/user/water-intake')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
        
    }
)


export const postWaterIntake=createAsyncThunk(
    'waterIntake/post',
    async (credentials, thunkAPI) => {
        try {
            const response = await instance.post('api/user/water-intake', credentials)
            console.log(response.data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
        
    }
)