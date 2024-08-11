import React, { useEffect, useState } from 'react';
import './style.css';
import Wheel from './Wheel';
import jalaali, { toJalaali } from 'jalaali-js';
import { convertJalaliToRfc } from '@/lib/date';
const months = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];

const JalaliCalendar = ({
  setValue,
}: {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [selectedYear, setSelectedYear] = useState(toJalaali(new Date()).jy - 1370);
  const [selectedMonth, setSelectedMonth] = useState(toJalaali(new Date()).jm - 1);
  const [selectedDay, setSelectedDay] = useState(toJalaali(new Date()).jd - 1);

  useEffect(() => {
    setValue(convertJalaliToRfc(`${selectedYear}-${selectedMonth}-${selectedDay}`));
  }, [selectedYear, selectedMonth, selectedDay]);

  const setYear = (e: number) => {
    e = e + 1370;
    setSelectedYear(e);
  };
  const setMonth = (e: number) => {
    e = e + 1;
    setSelectedMonth(e);
  };
  const setDay = (e: number) => {
    e = e + 1;
    setSelectedDay(e);
  };
  const days = jalaali.jalaaliMonthLength(selectedYear, selectedMonth);

  return (
    <>
      <div className='flex h-60 items-center justify-center'>
        <div style={{ width: 180, height: 180 }}>
          <Wheel
            type='day'
            initIdx={selectedDay}
            length={days}
            width={10}
            label='روز'
            setCurrentVal={setDay}
            perspective='center'
            setValue={(relative, absolute) => (1 + absolute).toString()}
          />
        </div>
        <div style={{ width: 180, height: 180 }}>
          <Wheel
            type='month'
            initIdx={selectedMonth}
            length={12}
            width={160}
            label='ماه'
            perspective='center'
            setValue={(relative, absolute) => months[absolute] || '0'}
            setCurrentVal={setMonth}
          />
        </div>

        <div style={{ width: 180, height: 180 }}>
          <Wheel
            type='year'
            initIdx={selectedYear}
            label='سال'
            length={50}
            width={100}
            perspective='center'
            setValue={(relative, absolute) => (1370 + absolute)?.toString() || '0'}
            setCurrentVal={setYear}
          />
        </div>
      </div>
    </>
  );
};

export default JalaliCalendar;
