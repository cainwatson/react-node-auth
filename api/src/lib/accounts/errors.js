class InvalidCredentialsException extends Error {
  constructor() {
    super('No user found with provided credentials.');
    this.statusCode = 401;
  }
}

const errors = {
  InvalidCredentialsException,
};

export default errors;
