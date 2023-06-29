import { createSlice } from '@reduxjs/toolkit';
import { login, register, logout, refreshUser } from './operations';
import toast from 'react-hot-toast';

function retriveErrorMsg(errObj) {
  console.log('retriveErrorMsg>>', errObj);
  const msgArr = [errObj.type];
  msgArr.push(errObj.error.message);
/*     if (errObj.payload.response) {
      msgArr.push(errObj.payload.data.message);
    } */
  if (errObj.payload) {
    msgArr.push(errObj.payload); //.name + errObj.payload.message);

  }

  const msg = msgArr.join('. ') // msgArr[msgArr.length-1];
  console.log(msgArr, msg);
  toast.error(msg);
  return msg;
}

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
  console.debug('handleRejected>>auth', action);
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.error = retriveErrorMsg(action);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  /* reducers: {
		logOut: (state) => {
			state.access_token = ''
			state.isLoading = false
			state.error = ''
			state.profile = null
		},
	}, */
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
//TODO: ???? export const { logOut } = authSlice.actions;
