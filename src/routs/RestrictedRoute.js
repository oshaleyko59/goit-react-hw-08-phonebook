import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */
/*
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, user } = useAuth();
 // const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('RestrictedRoute>>', isLoggedIn, redirectTo, user);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}; */
export const RestrictedRouteToComponent = ({ component: Component}) => {
  const { isLoggedIn, user } = useAuth(); //, redirectTo = '/'
  //console.log(`RestrictedRoute>> is ${!isLoggedIn?'allowed':'not allowed'} for ${JSON.stringify(user)}`);
  return isLoggedIn ? <Navigate to="/contacts" /> : Component;
};
