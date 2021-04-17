import User from './user.js';
import errors from './errors.js';

export default async function signIn(payload) {
  const { username, password } = payload;
  const userWithUsername = await User.findByUsername(username);

  if (!userWithUsername) {
    throw new errors.InvalidCredentialsException();
  }

  const givenCorrectPassword = userWithUsername.password === password;

  if (!givenCorrectPassword) {
    throw new errors.InvalidCredentialsException();
  }

  return User.toJson(userWithUsername);
}
