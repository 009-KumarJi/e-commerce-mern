import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
// createApi() is a function that returns an object with two properties: reducer and middleware
// fetchBaseQuery() is a function that returns a function that can be used as a baseQuery option in createApi()
// createApi() takes an object with two properties: baseQuery and endpoints
// baseQuery is a function that returns a function that takes an object with two properties: baseUrl and prepareHeaders

import {BASE_URL} from "../constants";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'Order', 'User'],
    endpoints: (builder) => ({
        // Product endpoints
    }),
});
