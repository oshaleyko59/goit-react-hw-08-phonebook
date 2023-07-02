import { createSelector } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setErrorMessage} from "redux/errorSlice";
export const selectContactList = state => state.contacts.items;
export const selectContactsIsBusy = state => state.contacts.isBusy;
export const selectContactsError = state => state.contacts.rejectMsg;
export const selectIsFetched = state => state.contacts.isFetched;

export const selectFilter = state => state.filter;
export const selectFirstView = state => state.firstView;

export const selectShownContacts = createSelector(
  [selectContactList, selectFilter],
  (contacts, filter) => {
    if (!contacts) return 0;

    if (!filter) return contacts;
    const dispatch = useDispatch();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    if (filtered.length === 0) {
      dispatch(setErrorMessage({type:'SET_ERROR_MESSAGE', errObj: 'No contacts to show...'}));
      return 0;
    }
    return filtered;
});

export const selectIsEmpty = createSelector(
  [selectContactList],
  (contacts) => {
    console.log('selectIsEmpty>>', contacts);
    if (contacts) {
      return contacts.length === 0;
    }
    return true;
  }
);
