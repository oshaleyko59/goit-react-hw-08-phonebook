import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import authOperations from '../redux/auth/auth-operations';

const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshingUser = useSelector(authSelectors.selectIsRefreshing);
  const user = useSelector(authSelectors.selectUser);
  const errorMsg = useSelector(authSelectors.selectErrorMsg);
  const dispatch = useDispatch();

const onRefreshUser = () => dispatch(authOperations.fetchCurrentUser());
  const onLogout = () => dispatch(authOperations.logout());
  return {
    isLoggedIn,
    isRefreshingUser,
    user,
    errorMsg,
    onLogout,
    onRefreshUser,
  };
};

export default useAuth;
