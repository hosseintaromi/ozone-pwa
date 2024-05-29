import { CiSearch } from 'react-icons/ci';

import cn from '@/lib/clsxm';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import DebounceInput from '@/components/shared/components/debounce-input';
import Props from '@/components/shared/components/debounce-input/type';

export default function Search({ className, placeholder, wrapperClassName, ...props }: Props) {
  return (
    <Container className={cn('py-4', wrapperClassName)}>
      <DebounceInput
        size={SIZE_ENUM.LG}
        className={cn(className)}
        Icon={CiSearch}
        placeholder={placeholder}
        {...props}
      />
    </Container>
  );
}
