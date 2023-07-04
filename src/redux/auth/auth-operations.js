import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { removeContacts } from '../contacts/contactsSlice';
import { setFilter } from '../contacts/filterSlice';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//******************* token helper ***********************
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  remove() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const transformErrorMsg = ({ data, status, statusText }) => {
 // console.log(`Response:  ${status} ${statusText} ${data}`); //data, status, statusText
  return status;
};

/* ****************** register new user **************************
 * POST @ /users/signup * body: { name, email, password }
 * После успешной регистрации => токен в HTTP-заголовок */
const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      const msg = transformErrorMsg(error.response);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

/* ************** login and fetch contacts ***************
 * POST @ /users/login * body: { email, password }
 * После успешного логина => токен в HTTP-заголовок
 * plus fetch contacts for the user */
const loginPlus = createAsyncThunk(
  'auth/loginPlus',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      thunkAPI.dispatch(fetchContacts());
      return data;
    } catch (error) {
      const msg = transformErrorMsg(error.response);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
/* ********** logout from server and remove token from axios **********
 * POST @ /users/logout * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка  */
const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.remove();
    thunkAPI.dispatch(removeContacts());
          thunkAPI.dispatch(setFilter(''));
  } catch (error) {
    const msg = transformErrorMsg(error.response);
    return thunkAPI.rejectWithValue(msg);
  }
});

/* ******************* refresh User ********************
 * GET @ /users/current
 * headers: *    Authorization: Bearer token
 * 1. Забираем токен из стейта
 * 2. Если токена нет, выходим
 * 3. токен => в HTTP-заголовок и выполянем get  */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(''); //'No token in the local storage'
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      thunkAPI.dispatch(fetchContacts());
      return data;
    } catch (error) {
      const msg = transformErrorMsg(error.response);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const authOperations = {
  register,
  logout,
  loginPlus,
  fetchCurrentUser,
};
export default authOperations;
