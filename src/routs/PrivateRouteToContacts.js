import { Navigate } from 'react-router-dom';
import  useAuth  from '../hooks/useAuth';
import Contacts from '../pages/Contacts';

// /contacts - приватний маршрут для роботи зі списком контактів користувача

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRouteToContacts = () => {
  const { isRefreshingUser, isLoggedIn } = useAuth();

  return isRefreshingUser ? <></> :!isLoggedIn ? <Navigate to="/" /> : <Contacts />;
};
