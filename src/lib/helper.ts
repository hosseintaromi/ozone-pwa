import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { ReadonlyURLSearchParams } from 'next/navigation';

import { API_GATE_WAY, STORAGE_URL } from '@/constant/routes';
import StorageKey from '@/constant/storage-key';
import locale from '@/locale';
const {
  common: { rial },
} = locale;

export function dateUntilFutureDate(
  futureDateStr: string,
  mode: 'day' | 'minute' | 'second',
  type: 'max' | 'min',
): number {
  const futureDate = new Date(futureDateStr);
  const now = new Date();
  const differenceInMillis = futureDate.getTime() - now.getTime();
  let divider = 1; // 24 * 60 * 60 * 1000;
  switch (mode) {
    case 'day':
      divider = 24 * 60 * 60 * 1000;
      break;
    case 'minute':
      divider = 60 * 1000;
      break;
    case 'second':
      divider = 1000;
  }
  if (type === 'max') {
    return Math.ceil(differenceInMillis / divider);
  } else return Math.floor(differenceInMillis / divider);
}

export function APIUrlGenerator({
  route,
  service,
  qry,
  scope = '/app',
}: {
  route: string;
  service?: string;
  qry?: object;
  scope?: string;
}): string {
  const query = qry || {};
  const queryKeys = Object.keys(query);
  const version = 'v1';
  let apiUrl = `${API_GATE_WAY}${service}/${version}${scope}${route}`;

  // const scope = 'app';

  queryKeys.map((item, index) => {
    if (index === 0) {
      apiUrl += '?';
    }
    if (query[item] !== null && query[item] !== undefined) {
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
export const logout = () => {
  Cookies.remove('token');
  Cookies.remove('expires_in');
  Cookies.remove('refresh_token');
  Cookies.remove('user');
  window.location.href = '/login';
};
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

export function persianDateGenerator(date: Date, type?: 'noDash') {
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
  const hour = persianDate[8].value;
  const minute = persianDate[10].value;
  if (type === 'noDash') {
    return `${weekday} ${day} ${month} ${year}  ${hour}:${minute}`;
  } else return `${weekday} ${day} ${month} ${year} - ${hour}:${minute}`;
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
    .replace(/[^۰-۹0-9]/g, '')
    .replace(/([۰-۹])/g, (persianNumber) =>
      String.fromCharCode(persianNumber.charCodeAt(0) - 1728),
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

export function formatCurrency(amount: number): string {
  // Define the currency units and their labels
  const units = [
    { divisor: 1e12, label: ' تریلیون تومان' },
    { divisor: 1e9, label: ' میلیارد تومان' },
    { divisor: 1e6, label: ' میلیون تومان' },
    { divisor: 1e3, label: ' هزار تومان' },
  ];

  // Recursive function to format large numbers
  function formatLargeNumber(num: number): string {
    for (const unit of units) {
      if (num >= unit.divisor) {
        return (num / unit.divisor).toFixed(0) + unit.label;
      }
    }
    return num.toFixed(0) + ' تومان';
  }

  // Check if amount is negative
  const isNegative = amount < 0;
  amount = Math.abs(amount);

  // Use the recursive function for large numbers
  if (amount >= 1e6) {
    return (isNegative ? '-' : '') + formatLargeNumber(amount);
  } else {
    return (isNegative ? '-' : '') + amount.toFixed(0) + ' تومان';
  }
}

export const numberInputProps = (
  callback: (formattedValue: string) => void,
): {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} => {
  return {
    onChange: (e) => {
      const { value } = e.target;
      let numberValue = value.replace(/,/g, '');
      if (isIOS()) numberValue = convertToEnglishNumber(numberValue);
      if (!isNaN(Number(numberValue)) && Number.isFinite(+numberValue)) {
        const formattedValue =
          Number(numberValue) > 0 ? numberValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
        callback(formattedValue);
      }
    },
  };
};

export const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const convertPhoneNumber = (number) => {
  return '+98' + String(number).substr(1);
};

export const rialCurrency = (rialInput: number) => {
  return `${rialInput.toLocaleString()} ${rial}`;
};

export const formatPhoneNumber = (phoneNumber) => {
  if (phoneNumber.startsWith('+98')) {
    return '0' + phoneNumber.slice(3);
  }
  return phoneNumber;
};
