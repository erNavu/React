import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SWIGGY_BASE_URL, SWIGGY_URL, SWIGGY_RESTAURANT_MENU_URL } from "../utils/contants"

export const restaurantApis = createApi({
    reducerPath: "restaurantsList",
    baseQuery: fetchBaseQuery({ baseUrl: SWIGGY_BASE_URL }),
    endpoints: (builder) => ({
        getAllRestaurantsList: builder.query({
            query: () => SWIGGY_URL
        }),
        getRestaurantMenu: builder.query({
            query: (restaurantId) => `${SWIGGY_RESTAURANT_MENU_URL}restaurantId=${restaurantId}`
        })
    })
})

export const { useGetAllRestaurantsListQuery, useGetRestaurantMenuQuery } = restaurantApis