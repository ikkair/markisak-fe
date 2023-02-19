import { apiSlice } from '../../Api/authApi';

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: 'user/login',
        method: 'POST',
        body: data,
      }),

      transformResponse: (response, meta, args) => response,
    }),

    registerUser: builder.mutation({
      query: (data) => ({
        url: 'user/register',
        method: 'POST',
        body: data,
      }),

      transformResponse: (response, meta, args) => response,
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: 'user/refresh-token',
        method: 'POST',
        body: data,
      }),

      transformResponse: (response, meta, args) => response,
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
