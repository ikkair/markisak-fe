import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_ENDPOINT,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    // if (getState().auth.token) {
    //   const { token } = getState().auth.token;
    //   headers.set('authorization', `Bearer ${token}`);
    // }

    // if (localStorage.getItem('token')) {
    //   headers.set('authorization', `Bearer ${localStorage.getItem('token')}`);
    // }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // if (result?.error?.data?.status === 403) {
  //   console.log('Sending Refresh Token');

  //   const refreshResult = await baseQuery(`/auth/refresh-token`, api, extraOptions);
  //   if (refreshResult?.data) {
  //     const dataUser = api.getState();
  //     const { iat, exp, ...other } = refreshResult.data.data.data;
  //     api.dispatch(setCredentials({ user: other, token: refreshResult.data.data.token }));

  //     result = await baseQuery(args, api, extraOptions);
  //   }
  // }

  // if (result?.error?.data?.status === 401) {
  //   api.dispatch(logout());
  // }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
