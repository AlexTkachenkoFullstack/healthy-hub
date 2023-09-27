import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { recommendedFoodSlice } from './recommendedFood/slice';
import { waterIntakeSlice } from './dailyWater/slice';
import { foodIntakeSlice } from './diary/slice';
import { caloriesGoalSlice } from './dialyGoalCalories/slice';
import { statisticsSlice } from './statistic/slice';

const persistConfig = {
  key: 'userRoot',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    recommendedFood: recommendedFoodSlice.reducer,
    waterIntake: waterIntakeSlice.reducer,
    foodIntake: foodIntakeSlice.reducer,
    caloriesGoal: caloriesGoalSlice.reducer,
    statistics: statisticsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
