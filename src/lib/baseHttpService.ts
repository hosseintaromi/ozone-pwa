import axios, { AxiosRequestConfig } from 'axios';

import StorageKey from '@/constant/storage-key';
axios.defaults.baseURL = process.env.REACT_APP_API_URL!;
axios.defaults.timeout = +process.env.REACT_APP_REQUEST_TIMEOUT!;
import Cookies from 'js-cookie';

import { API_GATE_WAY } from '@/constant/routes';

import { showToast } from './toast';
const baseURL = API_GATE_WAY,
  isServer = typeof window === 'undefined';
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
type HttpMethod =
  | 'get'
  | 'delete'
  | 'head'
  | 'options'
  | 'post'
  | 'put'
  | 'patch'
  | 'purge'
  | 'link'
  | 'unlink';

type RequestConfig = Exclude<AxiosRequestConfig, 'method' | 'url'>;

export const httpGetRequest = <T>(endpoint: string, config?: RequestConfig) =>
  api<T>({
    method: 'get',
    url: endpoint,
    ...config,
  });

export const httpPostRequest = <T>(endpoint: string, data: any, config?: RequestConfig) =>
  api<T>({
    method: 'post',
    url: endpoint,
    data,
    ...config,
  });

export const httpPutRequest = <T>(endpoint: string, data: any, config?: RequestConfig) =>
  api<T>({
    method: 'put',
    url: endpoint,
    data,
    ...config,
  });

export const httpPatchRequest = <T>(endpoint: string, data: any, config?: RequestConfig) =>
  api<T>({
    method: 'patch',
    url: endpoint,
    data,
    ...config,
  });

export const httpDeleteRequest = <T>(endpoint: string, config?: RequestConfig) =>
  api<T>({
    method: 'delete',
    url: endpoint,
    ...config,
  });

export const httpCustomRequest = <T>(
  url: string,
  method: HttpMethod,
  data?: any,
  config?: RequestConfig,
) =>
  api<T>({
    method,
    url,
    data,
    ...config,
  });

// INTERCEPTORS
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
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const num = error.response.status;

    if (num === 401) {
      window.location.href = '//domain/path';
    } else if (num === 404) {
      window.location.href = '//notFound';
    } else if (num === 422) {
      throw error;
    } else if (num >= 400 && num <= 499) {
      showToast(error.response.data.message);
    }
    // if(error.response.status === 400)
    //   toast general
    // if(error.response.status === 401)
    //   login
    // if(error.response.status === 403)
    //   redirect
    // if(error.response.status === 404)
    //   redirect
    // if(error.response.status === 422)
    //   zire input
    // if(error.response.status === 422)
  },
);
