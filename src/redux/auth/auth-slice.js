import { createSlice } from '@reduxjs/toolkit';
import  authOperations from './auth-operations';
import toast from 'react-hot-toast';

function retriveErrorMsg(errObj) { //FIXME:
  console.log('retriveErrorMsg>>', errObj);
  const msgArr = [errObj.type];
  msgArr.push(errObj.error.message);
  /*     if (errObj.payload.response) {
      msgArr.push(errObj.payload.data.message);
    } */
  if (errObj.payload) {
    msgArr.push(errObj.payload); //.name + errObj.payload.message);
  }

  const msg = msgArr.join('. '); // msgArr[msgArr.length-1];
    //  console.log(msgArr, msg);
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
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,

  isRefreshingUser: false,
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
      .addCase(authOperations.login.fulfilled, (state, action) => {
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
        console.log('handleRejected>>auth', action);
        state.isLoggedIn = false;
        state.errorMsg = retriveErrorMsg(action);
      });
  },
});

export default authSlice.reducer;
