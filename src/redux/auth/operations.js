import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {fetchContacts} from 'redux/contacts/operations'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  remove() {
    axios.defaults.headers.common.Authorization = '';
    //delete instance.defaults.headers.common['Authorization']
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      console.log('auth/register>>userData', userData);
      const { data } = await axios.post('/users/signup', userData);
          console.log('auth/register>>data', data);
      token.set(data.token);
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    console.log('auth/login>>credentials', credentials);
    const { data } = await axios.post('/users/login', credentials);
    console.log('auth/login>>data', data);
    token.set(data.token); //if ('access_token' in data) setToken(data.access_token)
    //dispatch(fetchContacts());
    /* dispatch(getUser()) //TODO:
			return data
       */
    return data;
  } catch (error) {

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    console.log('auth/logout>>');
    await axios.post('/users/logout');
    token.remove();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    //TODO: return rejectWithValue(error.response.data.message)
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  console.log('refreshUser>>auth/refresh');
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('No token in the local storage');
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    console.debug(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
