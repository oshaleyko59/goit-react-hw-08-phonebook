import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/contacts/contacts-operations';

import { setFirstView } from 'redux/firstViewSlice';

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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* ************** login and fetch contacts ***************
 * POST @ /users/login * body: { email, password }
 * После успешного логина => токен в HTTP-заголовок */
const loginPlus = createAsyncThunk('auth/loginPlus', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    thunkAPI.dispatch(fetchContacts());
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/* ********** logout from server and remove token from axios **********
 * POST @ /users/logout * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка  */
const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.remove();

  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    //FIXME: return rejectWithValue(error.response.data.message)
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
      thunkAPI.dispatch(setFirstView(false)); //TODO:
      return thunkAPI.rejectWithValue('NO_TOKEN'); //'No token in the local storage'
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      thunkAPI.dispatch(fetchContacts());
      return data;
    } catch (error) {
      console.debug(error); //FIXME: retriveErrorMsg?
      return thunkAPI.rejectWithValue(error.message);
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

//    con sole.log('auth/logout>>');
//    conso le.log('auth/loginPlus>>data', data);
//     co nsole.log('auth/register>>userData', userData);