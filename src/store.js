import { configureStore } from "@reduxjs/toolkit";
import { domainsApi } from "./Hooks/useGetDomains";

export const store = configureStore({
    reducer: {
        [domainsApi.reducerPath]: domainsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(domainsApi.middleware),
});
