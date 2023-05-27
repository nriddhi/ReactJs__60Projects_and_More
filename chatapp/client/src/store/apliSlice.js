import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import {login, logout, onetimeTrue} from './AppSlice';

export const apiSlice = createApi({

    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SERVER_URL
    }),

    endpoints: (builder) => ({
     
        registerUsers: builder.mutation({
        query : (data) => ({
          url: 'api/auth/register',
          method: 'POST',
          body:data,
        }) , }),

        getUserData: builder.query({
            query: () => ({
            url: 'api/admin/getuser',
            method: 'GET',
            credentials: "include" 
            })
        }),

        validToken:builder.mutation({
         query: (data) => ({
         url : 'valid/token',
         method:'POST',
         body: data
        }), }),

        resetPass:builder.mutation({
            query: (data) => ({
            url : 'users/resetPass',
            method:'POST',
            body: data
           }), }),

        loginUsers: builder.mutation({
         query: (data) => ({
         url: 'api/user/login',
         method: 'POST',
         body: data,
         credentials: "include" 
         }), }),


    }),
    
    

});

export const { 
    useRegisterUsersMutation, 
    useValidTokenMutation, 
    useLoginUsersMutation,
    useResetPassMutation,
    useGetUserDataQuery,
 } 

= apiSlice;