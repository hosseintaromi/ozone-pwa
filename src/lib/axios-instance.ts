import axios from 'axios';
import Cookies from 'js-cookie';

import { API_GATE_WAY } from '@/constant/routes';
import StorageKey from '@/constant/storage-key';

const baseURL = API_GATE_WAY,
  isServer = typeof window === 'undefined';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import('next/headers'),
      token = cookies().get(StorageKey.TOKEN)?.value;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  } else {
    const token = Cookies.get(StorageKey.TOKEN);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;
