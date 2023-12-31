// ************************************************************
/* 8 - Книга контактів
Виконайте рефакторинг коду програми «Книга контактів».
Додай у програму «Книга контактів» реєстрацію, логін та оновлення користувача,
а також роботу з приватною колекцією контактів.

Бекенд
  -  https://connections-api.herokuapp.com/docs/
  -  підтримує всі необхідні операції з колекцією контактів,
  -  також реєстрацію, логін та оновлення користувача з JWT.
*/
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { RestrictedRouteToComponent } from 'routs/RestrictedRouteToComponent';
import { PrivateRouteToContacts } from 'routs/PrivateRouteToContacts';
import authOperations from 'redux/auth/auth-operations';
import { SharedLayout } from './SharedLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={<RestrictedRouteToComponent component={<Register />} />}
          />
          <Route
            path="login"
            element={<RestrictedRouteToComponent component={<LogIn />} />}
          />
          <Route path="contacts" element={<PrivateRouteToContacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
