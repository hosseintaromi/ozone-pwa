import { Datepicker } from 'headless-datetimepicker';
import { config } from 'headless-datetimepicker/jalali';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import Props from '@/components/@base/date-picker/type';

export default function DatePicker({ onChange, value }: Props) {
  return (
    <Container center>
      <Datepicker value={value} onChange={onChange} config={config} startOfWeek={6}>
        <Datepicker.Picker defaultType='day' alwaysOpen className='rounded-md bg-white p-4'>
          {({ monthName, year }) => (
            <>
              <Container
                center
                className='w-full justify-between space-x-6 py-2 rtl:space-x-reverse'
              >
                <Datepicker.Button
                  action='prev'
                  className='rounded-full p-2 text-sm font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180'
                >
                  <FaChevronLeft />
                </Datepicker.Button>
                <Container>
                  <Datepicker.Button
                    action='toggleMonth'
                    className='leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white'
                  >
                    {monthName}
                  </Datepicker.Button>
                  <Datepicker.Button
                    action='toggleYear'
                    className='leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white'
                  >
                    {year}
                  </Datepicker.Button>
                </Container>
                <Datepicker.Button
                  action='next'
                  className='rounded-full p-2 text-sm font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180'
                >
                  <FaChevronRight />
                </Datepicker.Button>
              </Container>
              <Datepicker.Items
                className={({ type }) =>
                  cn(
                    'grid w-full auto-rows-max gap-4 overflow-y-auto overflow-x-hidden scroll-smooth',
                    type == 'day' && 'grid-cols-7',
                    type == 'month' && 'grid-cols-3',
                    type == 'year' && 'max-h-[274px] grid-cols-4',
                  ) || ''
                }
              >
                {({ items }) =>
                  items.map((item) => (
                    <Datepicker.Item
                      key={item.key}
                      item={item}
                      className={cn(
                        'grid select-none items-center justify-center rounded-full py-1.5 text-sm font-medium hover:text-white',
                        item.isHeader ? 'cursor-default' : 'hover:bg-gray-700',
                        item.type === 'day' && 'h-10 w-10',
                        item.isToday && 'border border-gray-500',
                        ('isInCurrentMonth' in item && item.isInCurrentMonth) || item.isHeader
                          ? item.isSelected
                            ? 'bg-primary text-white'
                            : 'text-black'
                          : 'text-gray-400',
                        'isInCurrentMonth' in item &&
                          item.isInCurrentMonth &&
                          item.value.getDay() === 5 &&
                          'text-red-600',
                      )}
                      action={
                        item.type === 'day'
                          ? 'close'
                          : item.type === 'month'
                            ? 'showDay'
                            : 'showMonth'
                      }
                    >
                      {item.isHeader ? item.text.substring(0, 2) : item.text}
                    </Datepicker.Item>
                  ))
                }
              </Datepicker.Items>
            </>
          )}
        </Datepicker.Picker>
      </Datepicker>
    </Container>
  );
}
