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
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { SkeletonText } from '@chakra-ui/react';
import useAuth from 'hooks/useAuth';
import { RestrictedRouteToComponent} from 'routs/RestrictedRouteToComponent';
import { PrivateRouteToContacts } from 'routs/PrivateRouteToContacts';
import authOperations from 'redux/auth/auth-operations';
import { SharedLayout } from './SharedLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import LogIn  from '../pages/LogIn';
import Register from '../pages/Register';
import { ErrorPage } from '../pages/ErrorPage';



export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useAuth().isRefreshingUser;

  useEffect(() => {
    console.log('App dispatch(refreshUser())>>');
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  //element={<RestrictedRouteToComponent component={<Home />} />}
  return (
      <>
        <Toaster />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={<SkeletonText isLoaded={!isRefreshingUser}>
                <Home />
              </SkeletonText>}
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
          </Route>{' '}
          {/* The next line is very important for the Navigate component to work */}
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="/redirect" element={<Navigate to="/error-page" />} />
        </Routes>
      </>
  );
};
