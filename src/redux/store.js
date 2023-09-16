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
 
const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token']
}
 
const persistedReducer = persistReducer(persistConfig, authSlice.reducer)
 

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store)
