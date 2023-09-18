export const getUserInfo = state => state.auth.user;
export const getIsLoading = state => state.auth.isLoading;
export const getError = state => state.auth.error;
export const getDateLastWeight = state => state.auth.dateLastWeight;
export const getAuthStatus = state => !!state.auth.token;
export const getWeight = state => state.auth.user.weight;