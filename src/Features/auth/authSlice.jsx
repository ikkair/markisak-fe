import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    token: null,
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      localStorage.setItem('token', payload.token);
      localStorage.setItem('refreshToken', payload.refreshToken);

      state.user = payload.data;
      state.token = payload.refreshToken;
    },

    logout: (state, action) => {
      localStorage.clear;
      (state.user = undefined), (state.token = null);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
