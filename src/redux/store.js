import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterReducer } from "./contacts/filterSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import authReducer from './auth/auth-slice';
import { firstViewReducer } from "./firstViewSlice";
import { errorMessageReducer } from "./errorSlice";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer), //authSlice),
    filter: filterReducer,
    contacts: contactsReducer,
    firstView: firstViewReducer,
    errorMessageReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development', //FIXME: added, ??? check
});

export const persistor = persistStore(store);
