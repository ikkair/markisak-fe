import { apiSlice } from '../../Api/authApi';

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),

      transformResponse: (response, meta, args) => response,
    }),

    registerUser: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),

      transformResponse: (response, meta, args) => response,
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
