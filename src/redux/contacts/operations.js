import { createAsyncThunk } from '@reduxjs/toolkit';
import apiContacts from '../../api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    console.log('contacts/fetchAll>>');
    try {
      const contacts = await apiContacts.getAll();
      console.log('fetchContacts>>', contacts);
      return contacts;

    } catch (error) {
      console.log('fetchContacts>>', error);
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    console.log('contacts/addContact>>');
    try {
      const contacts = await apiContacts.post(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    console.log('contacts/deleteContact>>');
    try {
      const contacts = await apiContacts.deleteById(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


