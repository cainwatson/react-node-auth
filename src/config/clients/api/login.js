import { api } from '../api';

export async function login(username, password) {
  const user = await api
    .post('auth/signin', {
      json: {
        username,
        password,
      },
    })
    .json();

  return user;
}
