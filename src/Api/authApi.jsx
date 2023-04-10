import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../Features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_ENDPOINT,
  credentials: 'same-origin',
  prepareHeaders: (headers, { getState }) => {
    if (getState().auth.accessToken) {
      const token = getState().auth.accessToken;
      console.log(token);
      headers.set('authorization', `Bearer ${token}`);
    }
    if (localStorage.getItem('access_token')) {
      headers.set('authorization', `Bearer ${localStorage.getItem('access_token')}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log('Sending Refresh Token');

    const refreshResult = await baseQuery(
      {
        url: 'user/refresh-token',
        method: 'POST',
        body: {
          refreshToken: localStorage.getItem('refresh_token'),
        },
      },
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      const dataUser = api.getState().auth;
      const { accessToken, refreshToken, user } = dataUser;
      api.dispatch(setCredentials({ data: user, token: accessToken, refreshToken }));

      result = await baseQuery(args, api, extraOptions);
    }
  }

  if (result?.error?.data?.status === 401) {
    api.dispatch(logout());
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
