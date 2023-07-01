import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRouteToComponent = ({ component: Component }) => {
  const { isRefreshingUser, isLoggedIn } = useAuth();
  return isRefreshingUser ? (
    <></>
  ) : isLoggedIn ? (
    <Navigate to="/contacts" />
  ) : (
    Component
  );
};
/*
export const RestrictedRouteToComponent = ({ component: Component}) => {
  const {isRefreshingUser, isLoggedIn} = useAuth();
  return isLoggedIn ? <Navigate to="/contacts" /> : Component;
}; */
