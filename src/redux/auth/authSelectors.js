export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsAuth = state => state.auth.access_token; //TODO: ??? not used

export const selectUser = state => state.auth.user; //TODO: ???
