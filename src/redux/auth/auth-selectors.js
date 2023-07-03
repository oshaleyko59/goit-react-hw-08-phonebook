const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;

const selectIsRefreshing = state => state.auth.isRefreshingUser;
const selectErrorMsg = state => state.auth.errorMsg;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectErrorMsg,
};
export default authSelectors;
