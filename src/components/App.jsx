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
import { useDispatch } from 'react-redux'; //, useSelector
import { Route, Routes } from 'react-router-dom';
import { RestrictedRouteToComponent} from 'routs/RestrictedRoute';
import { PrivateRouteToContacts } from 'routs/PrivateRoute';
//import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { getUser } from 'redux/auth/operations'; //refreshUser TODO:
import { SharedLayout } from './SharedLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import LogIn  from '../pages/LogIn';
import Register  from '../pages/Register';
//import Contacts  from '../pages/Contacts';
import { useAuth } from '../hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isRefreshing, user } = useAuth();
console.log('App useAuth()>>', isLoggedIn, isRefreshing, user);
  // Викликаємо операцію
  useEffect(() => {
    console.log('dispatch(getUser())>>');
    dispatch(getUser());
  }, [dispatch]);
  //

  // Рендерим розмітку в залежності від значень у стані
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={<RestrictedRouteToComponent component={<Home />} />}
        />
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
  );
};
/*  isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
     */
/*
{<RestrictedRoute element={LogIn} redirectTo="/contacts" />}
*/
/* {
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
 */
/*  element={
              <RestrictedRoute element={Register} redirectTo="/contacts" />
            } */

//element={<PrivateRoute element={Contacts}
//redirectTo = "/login" />}
//<Navigate to={redirectTo} />
