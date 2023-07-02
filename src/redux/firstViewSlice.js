import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const firstViewSlice = createSlice({
  name: 'firstView',
  initialState,
  reducers: {
    setFirstView(state, { payload }) {
      console.log('setFirstView reducer>>', { payload });
      return payload;
    },
  },
});

export const { setFirstView } = firstViewSlice.actions;
export const firstViewReducer = firstViewSlice.reducer;

