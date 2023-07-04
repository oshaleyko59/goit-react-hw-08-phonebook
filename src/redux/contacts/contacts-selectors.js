import { createSelector } from "@reduxjs/toolkit";

export const selectContactList = state => state.contacts.items;
export const selectContactsIsBusy = state => state.contacts.isBusy;
export const selectContactsError = state => state.contacts.errorMsg;
export const selectFilter = state => state.filter;

export const selectShownContacts = createSelector(
  [selectContactList, selectFilter],
  (contacts, filter) => {
    if (!contacts) return 0;

    if (!filter) return contacts;
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    if (filtered.length === 0) {
      return 0;
    }
    return filtered;
});

export const selectIsEmpty = createSelector(
  [selectContactList],
  (contacts) => {

    if (contacts) {
      return contacts.length === 0;
    }
    return true;
  }
);
