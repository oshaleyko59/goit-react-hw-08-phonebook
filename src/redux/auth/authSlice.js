import { createSlice } from '@reduxjs/toolkit';
import { login, register, logout, refreshUser } from './operations';

const isRejectedAction = action => {
  return action.type.startsWith('auth/') && action.type.endsWith('rejected');
};

const isPendingAction = action => {
  return action.type.startsWith('auth/') && action.type.endsWith('pending');
};

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: '',
};

const handlePending = state => {
  state.isRefreshing = true;
  state.error = '';
};

const handleRejected = (state, action) => {
  console.debug('handleRejected>>', action);
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.error = action.payload
    ? action.payload //.response.data.message
    : action.error.message;

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
		logOut: (state) => {
			state.access_token = ''
			state.isLoading = false
			state.error = ''
			state.profile = null
		},
	},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
/*       .addCase(v.rejected, (state, action) => {
        handleRejected(state, action);
        state.token = null;
      }) */
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export default authSlice.reducer;
export const { logOut } = authSlice.actions;
