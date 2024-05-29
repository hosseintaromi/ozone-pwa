import axios, { AxiosRequestConfig } from 'axios';
import StorageKey from '@/constant/storage-key';
axios.defaults.baseURL = process.env.REACT_APP_API_URL!;
axios.defaults.timeout = +process.env.REACT_APP_REQUEST_TIMEOUT!;
import Cookies from 'js-cookie';
import { API_GATE_WAY } from '@/constant/routes';
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
  axios<T>({
    method: 'get',
    url: endpoint,
    ...config,
  });

export const httpPostRequest = <T>(endpoint: string, data: any, config?: RequestConfig) =>
  axios<T>({
    method: 'post',
    url: endpoint,
    data,
    ...config,
  })
    .then((res) => res.data)
    .catch((err) => err.response.data);

export const httpPutRequest = <T>(endpoint: string, data: any, config?: RequestConfig) =>
  axios<T>({
    method: 'put',
    url: endpoint,
    data,
    ...config,
  }).then((res) => res.data);

export const httpPatchRequest = <T>(endpoint: string, data: any, config?: RequestConfig) =>
  axios<T>({
    method: 'patch',
    url: endpoint,
    data,
    ...config,
  }).then((res) => res.data);

export const httpDeleteRequest = <T>(endpoint: string, config?: RequestConfig) =>
  axios<T>({
    method: 'delete',
    url: endpoint,
    ...config,
  }).then((res) => res.data);

export const httpCustomRequest = <T>(
  url: string,
  method: HttpMethod,
  data?: any,
  config?: RequestConfig,
) =>
  axios<T>({
    method,
    url,
    data,
    ...config,
  }).then((res) => res.data);

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
