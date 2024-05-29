import { Switch } from '@headlessui/react';

import cn from '@/lib/clsxm';

import { COLOR_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import Props from '@/components/@base/input/check-box/type';

export default function CheckBox({ onChange, checked = false, text, color }: Props) {
  return (
    <Switch checked={checked} onChange={onChange}>
      <label className='inline-flex cursor-pointer items-center'>
        <Container
          className={cn(
            "relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] ",
            checked &&
              'bg-blue-600 after:translate-x-full after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:after:-translate-x-full',
            color === COLOR_ENUM.SUCCESS &&
              checked &&
              'bg-green-600 after:translate-x-full after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rtl:after:-translate-x-full',
          )}
        />
        <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
          {text}
        </span>
      </label>
    </Switch>
  );
}
