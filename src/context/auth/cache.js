const KEY = 'credentials';

export const authCache = {
  save(credentials) {
    console.info('Saving credentials to cache', credentials);
    return localStorage.setItem(KEY, JSON.stringify(credentials));
  },
  load() {
    const credentials = JSON.parse(localStorage.getItem(KEY));
    console.info('Loading credentials from cache', credentials);
    return credentials;
  },
  clear() {
    localStorage.removeItem(KEY);
  },
};
