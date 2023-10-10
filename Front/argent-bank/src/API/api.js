import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/v1/user",
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url:"/login",
                method: "POST",
                body: credentials,
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        getUserProfile: builder.mutation({
            query: (token) => ({
                url:"/profile",
                method: "POST",
                body: "",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: token,
                },
            })
        }),
        updateUserProfile: builder.mutation({
            query: ({ token, updatedUserName }) => ({
                url:"/profile",
                method:"PUT",
                body: {
                    userName: updatedUserName,
                },
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: token,
                },
            }),
        }),
    }),
});

export const { useLoginMutation, useGetUserProfileMutation, useUpdateUserProfileMutation } = api;