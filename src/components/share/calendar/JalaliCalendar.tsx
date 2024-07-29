import React, { useEffect, useState } from 'react';
import * as jalaali from 'jalaali-js';
import './style.css';
import Wheel from './Wheel';
import { toJalaali } from 'jalaali-js';

interface JalaliDate {
  year: number;
  month: number;
  day: number;
}

// const getJalaliDaysInMonth = (year: number, month: number) => {
//     const daysInMonth = jalaali.jalaaliMonthLength(year, month);
//     const days: any = [];
//     for (let day = 1; day <= daysInMonth; day++) {
//         days.push(day);
//     }
//     return days;
// };

// const getTodayJalali = (): JalaliDate => {
//     const today = new Date();
//     const { jy, jm, jd } = jalaali.toJalaali(today.getFullYear(), today.getMonth() + 1, today.getDate());
//     return { year: jy, month: jm, day: jd };
// };

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

const JalaliCalendar: React.FC = () => {
  // console.log(toJalaali(new Date()).jy, toJalaali(new Date()).jm);
  const [selectedYear, setSelectedYear] = useState(toJalaali(new Date()).jy - 1370);
  const [selectedMonth, setSelectedMonth] = useState(toJalaali(new Date()).jm - 1);
  const [selectedDay, setSelectedDay] = useState(toJalaali(new Date()).jd - 1);
  const [dayList, setDayList] = useState(29);

  useEffect(() => {
    setDayList(jalaali.jalaaliMonthLength(selectedYear, selectedMonth));
  }, [selectedYear, selectedMonth]);

  // useEffect(() => {
  //     console.log('dayList', dayList);
  // }, [dayList])

  const setYear = (e: number) => {
    e = e + 1370;
    setSelectedYear(e);
  };
  const setMonth = (e: number) => {
    e = e + 1;
    setSelectedMonth(e);
  };
  const setDay = (e: number) => {
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
