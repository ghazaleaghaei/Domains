import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../Services/HttpService';

export const domainsApi = createApi({
    reducerPath: 'domainsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['domains'],
    endpoints: (builder) => ({
        getDomains: builder.query({
            query: () => '/',
            providesTags: ['domains'],
        }),
        createDomain: builder.mutation({
            query: (data) => ({
                url: '/',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['domains'],
        }),
        editDomain: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['domains'],
        }),
        deleteDomain: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['domains'],
        }),
    }),
});

export const {
    useGetDomainsQuery,
    useCreateDomainMutation,
    useEditDomainMutation,
    useDeleteDomainMutation,
} = domainsApi;
