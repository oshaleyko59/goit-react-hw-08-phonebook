const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUser = state => state.auth.user;

//added
const selectIsRefreshing = state => state.auth.isRefreshingUser;
const selectErrorMsg = state => state.auth.errorMsg;
const selectToken = state => state.auth.token; //access_token //FIXME: check  if really needed





const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectErrorMsg,
  selectToken, // FIXME: check  if really needed selectIsAuth
};
export default authSelectors;
