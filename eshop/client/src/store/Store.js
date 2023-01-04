import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { apiSlice } from './ApiSlice';
import appSlice from './AppSlice';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['ecomApi'],
  };

  const reducers = combineReducers({appSlice });
  
  const persistedReducer = persistReducer(persistConfig,reducers);

const store = configureStore({

    reducer : {persistedReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),

});


export default store;