import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { ReadonlyURLSearchParams } from 'next/navigation';

import { API_GATE_WAY, STORAGE_URL } from '@/constant/routes';
import StorageKey from '@/constant/storage-key';

export function APIUrlGenerator(route: string, qry?: object): string {
  const query = qry || {};
  const queryKeys = Object.keys(query);
  let apiUrl = `${API_GATE_WAY}${route}`;

  queryKeys.map((item, index) => {
    if (index === 0) {
      apiUrl += '?';
    }
    if (query[item] !== null) {
      if (queryKeys.length !== index + 1) {
        apiUrl += item + '=' + query[item] + '&';
      } else {
        apiUrl += item + '=' + query[item];
      }
    }
  });
  return apiUrl;
}

export function imageBuilder(
  name: string,
  { ext = 'webp' }: { ext: string } = { ext: 'webp' },
) {
  return `${STORAGE_URL}/images/${name}.${ext}`;
}

export function isLoggedIn() {
  return !!getFromLocalStorage(StorageKey.TOKEN);
}

export function isPWA() {
  return true;
}

export function addZeroIfUnder10(number: number | string) {
  if (+number < 10) {
    return `0${number}`;
  }
  return number;
}

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem(key);
  }
  return null;
}

export function setToLocalStorage(key: string, value?: string) {
  return localStorage.setItem(key, value || '');
}

export function deleteFromLocalStorage(key: string): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.removeItem(key);
  }
  return;
}

export function createPathQueryString(
  currentPath: string,
  params: {
    [key in string]: string;
  },
  searchParams?: ReadonlyURLSearchParams,
) {
  const newParams = new URLSearchParams(searchParams || undefined);
  Object.keys(params).forEach((item) => {
    if (item.length > 0) {
      item && newParams.set(item, params[item]);
    }
  });
  if (!newParams.toString()) {
    return currentPath;
  }
  return `${currentPath}?${newParams.toString()}`;
}

export function makePWARoute(route: string) {
  return `pwa:${route}`;
}

export function isPWARoute(route: string) {
  return route.indexOf('pwa:') > -1;
}
export function getPWARoute(route: string): string {
  if (isPWARoute(route)) {
    return route.split('pwa:')?.[1];
  }
  return '';
}

export function clearTokens() {
  deleteFromLocalStorage(StorageKey.TOKEN);
  Cookies.remove(StorageKey.TOKEN);
}

export function persianDateGenerator(date: Date) {
  const persianDate = new Intl.DateTimeFormat('fa', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long',
  }).formatToParts(date);
  const year = persianDate[0].value;
  const month = persianDate[2].value;
  const day = persianDate[4].value;
  const weekday = persianDate[6].value;
  return `${weekday} ${day} ${month} ${year}`;
}

export function isIOS(): boolean {
  if (typeof window === `undefined` || typeof navigator === `undefined`) {
    return false;
  }

  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function convertRialToToman(rial: number) {
  return rial / 10;
}
export function convertTomanToRial(rial: number) {
  return rial * 10;
}

export function getAxiosErrorMessageText(error: Error) {
  const returnError = error as AxiosError;
  const responseData = returnError?.response?.data as { [key in string]: string };
  if (responseData?.message) {
    return responseData?.message;
  }
  return returnError.message;
}

export function getLocationStandardURL(latitude: number, longitude: number) {
  if (isIOS()) {
    return `https://maps.apple.com/?ll=${latitude},${longitude}`;
  } else {
    return `geo:${latitude},${longitude}`;
  }
}

export function convertToEnglishNumber(num) {
  return num
    ?.toString()
    .replace(/([۰-۹])/g, (englishNumber) =>
      String.fromCharCode(englishNumber.charCodeAt(0) - 1728),
    );
}

export function isValidNationalCode(nationalCode: string) {
  if (!/^\d{10}$/.test(nationalCode)) return false;
  const check = +nationalCode[9];
  const sum =
    nationalCode
      .split('')
      .slice(0, 9)
      .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
  return sum < 2 ? check === sum : check + sum === 11;
}
