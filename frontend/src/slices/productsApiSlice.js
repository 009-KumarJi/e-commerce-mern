import {PRODUCTS_URL} from "../constants";
import {apiSlice} from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({url: PRODUCTS_URL}),
            keepUnusedDataFor: 5, // Keep unused data for 5 secs. This is useful for when we switch between pages.
        }),
    }),
});

export const {useGetProductsQuery} = productsApiSlice;