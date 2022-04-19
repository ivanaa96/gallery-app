export const userSelector = (state) => state.user.user;
export const isAuthenticated = (state) => (state.user.token ? true : false);
export const selectErrors = (state) => state.user.loginErrors;
export const selectRegisterErrors = (state) => state.user.registerErrors;
