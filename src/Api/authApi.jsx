import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_ENDPOINT,
  credentials: 'same-origin',
  prepareHeaders: (headers, { getState }) => {
    if (getState().auth.accessToken) {
      const token = getState().auth.accessToken;
      headers.set('authorization', `Bearer ${token}`);
    } else {
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
      console.log('tes', dataUser);
      const { iat, exp, ...other } = refreshResult.data.data.data;
      api.dispatch(setCredentials({ user: other, token: refreshResult.data.data.token }));

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
