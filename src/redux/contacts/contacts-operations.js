import { createAsyncThunk } from '@reduxjs/toolkit';
import apiContacts from '../../api/contacts';
import { setFilter } from './filterSlice';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await apiContacts.getAll();
      return contacts;

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ( newContact, thunkAPI) => {
    try {
      const contacts = await apiContacts.post(newContact);
      thunkAPI.dispatch(setFilter(''));
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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


