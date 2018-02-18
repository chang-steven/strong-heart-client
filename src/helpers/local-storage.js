export const loadAuthToken = () => {
  return sessionStorage.getItem('token');
};

export const saveAuthToken = authToken => {
  try {
    sessionStorage.setItem('token', authToken);
  } catch (e) {}
};

export const clearAuthToken = () => {
  try {
    sessionStorage.removeItem('token');
  } catch (e) {}
};
