import { Switch } from '@headlessui/react';
import { IoMdCheckmark } from 'react-icons/io';

import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import Toggle from '@/components/@base/input/check-box/toggle';
import Props from '@/components/@base/input/check-box/type';
import { Text } from '@/components/@base/typography';

import { ICON_COLOR } from '@/constant/icon-size-color';

export default function CheckBox({ onChange, checked = false, className, text }: Props) {
  return (
    <Switch checked={checked} onChange={onChange}>
      <Container className={cn(text && 'flex items-center gap-2.5')}>
        <Container
          className={cn(
            'flex h-[18px] w-[18px] items-center justify-center rounded border-2 border-i-gray',
            checked && 'border-primary-50 bg-primary-50',
            className,
          )}
        >
          <IoMdCheckmark color={ICON_COLOR.white} className={cn(!checked && 'opacity-0')} />
        </Container>
        {text && <Text bold>{text}</Text>}
      </Container>
    </Switch>
  );
}

export { Toggle };
