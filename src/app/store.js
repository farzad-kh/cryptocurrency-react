import { configureStore } from "@reduxjs/toolkit";
import { cryptoSlice } from "../services/cryptoSlice";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
   reducer:{
    [cryptoSlice.reducerPath]: cryptoSlice.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
   },
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
        cryptoSlice.middleware,
        cryptoNewsApi.middleware
    ]),
})

