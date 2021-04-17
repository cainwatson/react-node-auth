import User from './user.js';

export default async function signUp(payload) {
  const { username, password } = payload;
  const user = await User.save({
    username,
    password,
  });

  return user;
}
