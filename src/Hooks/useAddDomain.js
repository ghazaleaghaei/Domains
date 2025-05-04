import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from "../Services/HttpService";

export const addDomainApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        createDomain: builder.mutation({
            query: (data) => ({
                url: '/',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['domains']
        }),
    }),
});

export const { useCreateDomainMutation } = addDomainApi;
