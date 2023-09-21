import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://backend-healthyhub.onrender.com/'
});


export const fetchCaloriesIntake=createAsyncThunk(
    'caloriesGoal/get',
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const persistToken = state.auth.token;
            if (!persistToken) {
                return thunkAPI.rejectWithValue('No token');
            } 
            const response=await instance('api/user/dailyGoalCalories')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
        
    }
)


