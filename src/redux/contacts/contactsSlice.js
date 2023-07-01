import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { fetchContacts, addContact, deleteContact } from './contacts-operations';

/* function retriveErrorMsg(errObj) {
 // console.log('retriveErrorMsg>>', errObj);
  const msgArr = [errObj.message];
  if (errObj.payload) {
    msgArr.push(errObj.payload.name + errObj.payload.message);
    if (errObj.payload.response) {
      msgArr.push(errObj.payload.data.message);
    }
  }
//  console.log(msgArr);
  return msgArr[msgArr.lastIndexOf];
} */
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

  const msg = msgArr.join('. '); // msgArr[msgArr.length-1];
  console.log(msgArr);
  toast.error(msg);
  return msg;
}

const isRejectedAction = action => {
  return (
    action.type.startsWith('contacts/') && action.type.endsWith('rejected')
  );
};

const isPendingAction = action => {
  return action.type.startsWith('contacts/') && action.type.endsWith('pending');
};

const handlePending = state => {
  state.isLoading = true;
  state.rejectMsg = '';
};

const handleRejected = (state, action) => {
 // console.log('handleRejected>>', action);
  state.isLoading = false;
  state.rejectMsg = retriveErrorMsg(action);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, rejectMsg: '' },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log('fetchContacts.fulfilled>>', action);
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload); //state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(contact => {
          return contact.id === action.payload.id;
        });
        state.items.splice(index, 1);
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
