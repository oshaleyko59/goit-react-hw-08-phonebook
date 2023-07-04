import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { transformErrorMsg } from '../../api/contactsApiErrors';

const isRejectedAction = action => {
  return (
    action.type.startsWith('contacts/') && action.type.endsWith('rejected')
  );
};

const isPendingAction = action => {
  return action.type.startsWith('contacts/') && action.type.endsWith('pending');
};

const handlePending = state => {
  state.isBusy = true;
  state.errorMsg = '';
};

const handleRejected = (state, action) => {
  state.isBusy = false;
  state.errorMsg = transformErrorMsg(action.payload, action.type);
};

const initialState = {
  items: null,
  isBusy: false,
  errorMsg: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    removeContacts() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isBusy = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isBusy = false;
        if (state.items) { state.items.unshift(action.payload) } else {
          state.items = [action.payload];
        };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isBusy = false;
        const index = state.items.findIndex(contact => {
          return contact.id === action.payload.id;
        });
        state.items.splice(index, 1);
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const { removeContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
