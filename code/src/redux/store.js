import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer from './cartSlice';
import { restaurantApis } from './apiSlice';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        [restaurantApis.reducerPath]: restaurantApis.reducer
    },
    // for cache purpose 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantApis.middleware),
})

setupListeners(store.dispatch)

export default store