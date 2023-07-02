import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFirstView } from 'redux/firstViewSlice';
import apiContacts from '../../api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await apiContacts.getAll();
      thunkAPI.dispatch(setFirstView(true)); //TODO:
      console.log('fetchContacts>>');//, contacts
      return contacts;

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
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
    try {
      const contacts = await apiContacts.deleteById(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


