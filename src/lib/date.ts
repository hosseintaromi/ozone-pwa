import moment from 'jalali-moment';

export function addToTime(
  baseTime: string | number | Date,
  addCount: number,
  { unit = 'MINUTES' }: { unit: 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS' },
): Date {
  const currentDate = baseTime instanceof Date ? baseTime : new Date(baseTime);
  const currentDateTime = currentDate?.getTime();
  return new Date(
    {
      HOURS: () => addCount * 60 * 60 * 1000 + currentDateTime,
      MINUTES: () => addCount * 60 * 1000 + currentDateTime,
      SECONDS: () => addCount * 1000 + currentDateTime,
    }[unit](),
  );
}

export const convertRfcToJalali = (date: string) => {
  if (!date) return;
  const gregorianDate = moment(date);

  return gregorianDate.format('jYYYY/jMM/jDD');
};

export const convertJalaliToRfc = (date: string) => {
  const jalaliDate = moment(date, 'jYYYY-jMM-jDD');

  return jalaliDate.toISOString();
};

export const convertRfcToJalaliWithClock = (date: string) => {
  if (!date) return;

  // Convert the input date to a moment object
  const gregorianDate = moment(date);

  // Mapping days of the week to Persian
  const daysOfWeek = {
    Saturday: 'شنبه',
    Sunday: 'یکشنبه',
    Monday: 'دوشنبه',
    Tuesday: 'سه‌شنبه',
    Wednesday: 'چهارشنبه',
    Thursday: 'پنج‌شنبه',
    Friday: 'جمعه',
  };

  // Mapping months to Persian
  const months = {
    Farvardin: 'فروردین',
    Ordibehesht: 'اردیبهشت',
    Khordad: 'خرداد',
    Tir: 'تیر',
    Mordaad: 'مرداد',
    Shahrivar: 'شهریور',
    Mehr: 'مهر',
    Aabaan: 'آبان',
    Aazar: 'آذر',
    Dey: 'دی',
    Bahman: 'بهمن',
    Esfand: 'اسفند',
  };

  // Format the date to include day of the week, day, month, year, and time
  let jalaliDate = gregorianDate.format('dddd jD jMMMM jYYYY - HH:mm');

  // Replace English day with Persian day
  Object.keys(daysOfWeek).forEach((day) => {
    if (jalaliDate.includes(day)) {
      jalaliDate = jalaliDate.replace(day, daysOfWeek[day]);
    }
  });

  // Replace English month with Persian month
  Object.keys(months).forEach((month) => {
    if (jalaliDate.includes(month)) {
      jalaliDate = jalaliDate.replace(month, months[month]);
    }
  });

  return jalaliDate;
};
