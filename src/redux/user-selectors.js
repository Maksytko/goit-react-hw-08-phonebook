const getIsLoggedIn = (state) => state.user.isLoggedIn;

const getToken = (state) => state.user.token;

const getEmail = (state) => state.user.email;

export { getIsLoggedIn, getToken, getEmail };
