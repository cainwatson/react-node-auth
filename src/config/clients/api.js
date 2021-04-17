import ky from 'ky';
import { API_CLIENT_URL } from '../index';

export const api = ky.create({
  prefixUrl: API_CLIENT_URL,
});
