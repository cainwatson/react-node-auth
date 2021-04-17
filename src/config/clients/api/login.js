import { api } from '../api';

export async function login(username, password) {
  try {
    const user = await api
      .post('auth/signin', {
        json: {
          username,
          password,
        },
      })
      .json();

    return user;
  } catch (error) {
    if (error.response?.status === 401) {
      error.message =
        'We could not find any user with that username and password';
    } else {
      console.error(error);
      error.message =
        'Sorry! Something unexpected happened on our side, try again in a moment.';
    }
    throw error;
  }
}
