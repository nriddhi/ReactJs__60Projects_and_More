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
               body: data
        })

    }),

    getData: builder.query({

        query: (data) => ({
               url:'/getData',
               method: 'GET',
               body: data
        })

    }),

    editData: builder.mutation({
    
        query: (data) => ({
            url: `/edit/${data.id}`,
            method: 'PATCH',
            body:data,
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
    useGetDataQuery,
    useEditDataMutation,
    useDeleteDataMutation,
    useDeleteBatchMutation
} = apiSlice;