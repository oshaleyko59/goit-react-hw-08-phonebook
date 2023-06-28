import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const isRejectedAction = action => {
  return (
    action.type.startsWith('contacts/') && action.type.endsWith('rejected')
  );
};

const isPendingAction = action => {
  return action.type.startsWith('contacts/') && action.type.endsWith('pending');
};

const updateStateOnFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: '' },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log('fetchContacts.fulfilled>>', action);
        //updateStateOnFulfilled(state);
        state.isLoading = false;
        state.error = '';
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        updateStateOnFulfilled(state);
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        updateStateOnFulfilled(state);
        const index = state.items.findIndex(contact => {
          return contact.id === action.payload.id;
        });
        state.items.splice(index, 1);
      })
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addMatcher(isRejectedAction, (state, action) => {
        console.log('isRejectedAction>>', action);
        state.isLoading = false;
        state.error = action.payload
          ? action.payload //.response.data.message
          : action.error.message;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
