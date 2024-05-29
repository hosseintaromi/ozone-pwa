import { createElement } from 'react';

import cn from '@/lib/clsxm';

import { CONTAINER_TAG_TYPE, Props } from '@/components/@base/container/type';

export default function Container({
  className,
  center = false,
  type = CONTAINER_TAG_TYPE.DIV,
  children,
  ...props
}: Props) {
  return createElement(
    type,
    {
      className: cn(center && 'flex items-center justify-center', className),
      ...props,
    },
    children,
  );
}
