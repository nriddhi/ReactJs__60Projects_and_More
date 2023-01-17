import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({

  reducerPath:'crudApi',
  baseQuery: fetchBaseQuery({
    baseUrl:'http://localhost:5000/api'
  }),

  endpoints: (builder) => ({

    createData: builder.mutation({

        query: (data) => ({
               url:'/create',
               method: 'POST',
               data: data
        })

    }),

    editData: builder.mutation({
    
        query: (data) => ({
            url: '/edit',
            method: 'PATCH',
            data: data,
        }),

    }),

    deleteData: builder.mutation({
    
        query: (data) => ({
            url: '/delete',
            method: 'POST',
            data: data,
        }),

    }),
    
    deleteBatch: builder.mutation({
    
        query: (data) => ({
            url: '/deleteBatch',
            method: 'POST',
            data: data,
        }),

    }),



  })

});


export const { 
    useCreateDataMutation,
    useEditDataMutation,
    useDeleteDataMutation,
    useDeleteBatchMutation
} = apiSlice;