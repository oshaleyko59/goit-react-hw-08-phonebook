import { createSelector } from "@reduxjs/toolkit";

export const selectContactList = state => state.contacts.items;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.rejectMsg;
export const selectFilter = state => state.filter;

export const selectShownContacts = createSelector(
  [selectContactList, selectFilter],
  (contacts, filter) =>
    !filter
      ? contacts
      : contacts.filter(contact => contact.name.toLowerCase().includes(filter))
);

