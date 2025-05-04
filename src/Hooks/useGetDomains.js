import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../Services/HttpService";

export const domainsApi = createApi({
    reducerPath: 'domainsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getDomains: builder.query({
            query: () => '/',
            providesTags: ['domains']
        }),
    }),
});

export const { useGetDomainsQuery } = domainsApi;
