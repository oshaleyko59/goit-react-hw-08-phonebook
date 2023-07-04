import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import { transformErrorMsg } from '../../api/contactsApiErrors';

import toast from 'react-hot-toast';

const isRejectedAction = action => {
  return action.type.startsWith('auth/') && action.type.endsWith('rejected');
};

const isPendingAction = action => {
  return action.type.startsWith('auth/') && action.type.endsWith('pending');
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,

  isRefreshingUser: true,
  errorMsg: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.loginPlus.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshingUser = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state, action) => {
        state.isRefreshingUser = true;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, (state, action) => {
        state.isRefreshingUser = false;
        state.token = null;
      })
      .addMatcher(isPendingAction, state => {
        state.errorMsg = '';
      })
      .addMatcher(isRejectedAction, (state, action) => {

        state.isLoggedIn = false;
        const errm = transformErrorMsg(action.payload, action.type);
        state.errorMsg = errm;
        if (errm) {toast.error(errm);}
      });
  },
});

export default authSlice.reducer;
