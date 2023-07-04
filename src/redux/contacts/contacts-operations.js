import { createAsyncThunk } from '@reduxjs/toolkit';
import apiContacts from '../../api/contacts';
import { setFilter } from './filterSlice';

const transformErrorMsg = ({ status }) => {
  return status;
};


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await apiContacts.getAll();
      return contacts;

    } catch (error) {
      const msg = transformErrorMsg(error.response);
      return thunkAPI.rejectWithValue(msg);
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
      const msg = transformErrorMsg(error.response);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const contacts = await apiContacts.deleteById(id);
      return contacts;
    } catch (error) {
      const msg = transformErrorMsg(error.response);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);


