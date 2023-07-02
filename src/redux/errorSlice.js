import { createSlice } from '@reduxjs/toolkit';

const ACTION_UNKNOWN = 'Something unexpected happened...'; // TODO:
const initialState = [];

const errorSlice = createSlice({
  name: 'errorMessage',
  initialState,
  reducers: {
    setErrorMessage(state=[], action) {
      const { type, errorObj } = action;
      console.log('setErrorCombined reducer>>', type, errorObj);
      switch (type) { //TODO:
        case 'RESET':
          return initialState;
        case 'SET_ERROR_MESSAGE':
          console.log(type, errorObj);
          return 'errorObj TODO:';
        default:
          console.log(ACTION_UNKNOWN, action.payload) ;
          return ACTION_UNKNOWN;
      }
    },
  },
});

export const { setErrorMessage } = errorSlice.actions;
export const errorMessageReducer = errorSlice.reducer;

