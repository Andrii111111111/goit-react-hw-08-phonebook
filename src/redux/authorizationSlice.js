import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signUp, userLocalStorage } from 'api/api';

const handleRejected = (state, action) => {
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.error = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },

  reducers: {}, 
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = {
          name: action.payload.user.name,
          email: action.payload.user.email,
        };
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = {
          name: action.payload.user.name,
          email: action.payload.user.email,
        };
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(userLocalStorage.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(userLocalStorage.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(signUp.rejected, handleRejected)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.rejected, handleRejected)
      .addCase(userLocalStorage.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;

