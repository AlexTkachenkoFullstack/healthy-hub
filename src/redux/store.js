import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/slice";
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { recommendedFoodSlice } from "./recommendedFood/slice";
import { dailyGoalSlice } from "./dailyGoal/slice";
import { waterIntakeSlice } from "./dailyWater/slice";
 
const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token']
}
 
const persistedReducer = persistReducer(persistConfig, authSlice.reducer)
 

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    goal: dailyGoalSlice.reducer,
    recommendedFood:recommendedFoodSlice.reducer,
    waterIntake:waterIntakeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store)
