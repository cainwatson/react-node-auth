const NODE_ENV = process.env.NODE_ENV ?? 'development';
const IS_DEVELOPMENT = NODE_ENV === 'development';
const config = {
  NODE_ENV,
  IS_DEVELOPMENT,
  PORT: process.env.PORT ?? '4000',
};

export default config;
