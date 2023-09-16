import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instance = axios.create({
    baseURL: 'https://backend-healthyhub.onrender.com/'
});

export const setAuthHeader = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const delAuthHeader = () => {
    instance.defaults.headers.common.Authorization = '';
}


export const registrationThunk = createAsyncThunk(
    'auth/registration',
    async (credentials, thunkAPI) => {
        try {
            const response = await instance.post('api/users/register', credentials)
            console.log(response.data)
            setAuthHeader(response.data.token)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
        
    }
)

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await instance.post('api/users/login', credentials)
            console.log(response.data)
            setAuthHeader(response.data.token)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
        
    }
)

export const logOutThunk = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
         try {
           await instance.post('api/users/logout')
             delAuthHeader()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const refreshThunk = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const persistToken = state.auth.token;
        if (persistToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        
        try {
            setAuthHeader(persistToken);
           const response = await instance('api/users/current');
           return response.data
        } catch (error) {
          return  thunkAPI.rejectWithValue(error.message)
        }
    }
)