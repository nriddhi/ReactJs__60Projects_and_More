import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {login, logout, onetimeTrue} from './Appslice';

export const apiSlice = createApi({

    reducerPath: 'socialD',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000'
    }),

    endpoints: (builder) => ({
     
        registerUsers: builder.mutation({
        query : (data) => ({
          url: '/register',
          method: 'POST',
          body:data,
        }) , }),

        getUserData: builder.query({
            query: () => ({
            url: '/getuser',
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
         url: '/login',
         method: 'POST',
         body: data,
         credentials: "include" 
         }), }),

        authRefreshToken: builder.query({
            query: () => ({
            url: '/refreshtoken',
            method: 'GET',
            credentials: "include" 
            }),
            async onQueryStarted(id,{ dispatch, queryFulfilled }) {
                dispatch(login())
                try {
                  const { data } = await queryFulfilled;
                  dispatch(login());
                } catch (err) {
                  dispatch(logout());
                  if(err?.error?.data?.code==='lou400'){
                  dispatch(onetimeTrue());
                }
                }
              },
        }),

        getAllPosts: builder.query({
          query: () => ({
          url: '/getAllposts',
          method: 'GET',
          credentials: "include" 
          })
      }),

        fEmailSend :builder.mutation({
            query : (data) => ({
              url: 'api/auth/sendfEmail',
              method: 'POST',
              body:data,
            }) , }),

        logOut: builder.mutation({
              query: (data) => ({
              url: 'api/auth/logout',
              method: 'post',
              body: data,
              credentials: "include" 
              })
          }),


    }),
    
    

});

export const { 
    useRegisterUsersMutation, 
    useValidTokenMutation, 
    useLoginUsersMutation,
    useAuthRefreshTokenQuery,
    useFEmailSendMutation,
    useResetPassMutation,
    useGetUserDataQuery,
    useLogOutMutation,
    useGetAllPostsQuery

 } 

= apiSlice;