import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

function retriveErrorMsg(errObj) {
  console.log('retriveErrorMsg>>', errObj);
  const msgArr = [errObj.type];
  msgArr.push(errObj.error.message);

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
  state.isBusy = true;
  state.rejectMsg = '';
};

const handleRejected = (state, action) => {
  // cons ole.log('handleRejected>>', action);
  state.isBusy = false;
  state.rejectMsg = retriveErrorMsg(action);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: null, //[]
    isBusy: false,
    isFetched: false,
    rejectMsg: '',
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isBusy = false;
        state.items = action.payload;
        state.isFetched = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isFetched = false; //TODO: ??? true???
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isBusy = false;
        state.items.unshift(action.payload);
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

export const contactsReducer = contactsSlice.reducer;

//        cons ole.log('fetchContacts.fulfilled>>', action);

/*     if (errObj.payload.response) {
      msgArr.push(errObj.payload.data.message);
    } */

/* function retriveErrorMsg(errObj) {
 // conso le.log('retriveErrorMsg>>', errObj);
  const msgArr = [errObj.message];
  if (errObj.payload) {
    msgArr.push(errObj.payload.name + errObj.payload.message);
    if (errObj.payload.response) {
      msgArr.push(errObj.payload.data.message);
    }
  }
//  conso le.log(msgArr);
  return msgArr[msgArr.lastIndexOf];
} */
