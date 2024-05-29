import { createElement } from 'react';

import cn from '@/lib/clsxm';

import { COLOR_ENUM } from '@/components/@base/@helpers/types';
import Props, { HEADING_TYPE } from '@/components/@base/typography/heading/type';

export default function Heading({
  type = HEADING_TYPE.H3,
  color = COLOR_ENUM.TEXT,
  className,
  children,
}: Props) {
  const colorClassNames = cn(
    color === COLOR_ENUM.TEXT && 'text-i-typography',
    color === COLOR_ENUM.INVERT && 'text-i-typography-invert',
    color === COLOR_ENUM.SUCCESS && 'text-success',
    color === COLOR_ENUM.WARN && 'text-warn',
    color === COLOR_ENUM.ERROR && 'text-error',
  );
  const typeClassNames = cn(
    HEADING_TYPE.H2 && 'text-lg font-bold',
    HEADING_TYPE.H3 && 'text-lg font-bold',
    HEADING_TYPE.H4 && 'text-lg font-bold',
    HEADING_TYPE.H5 && 'text-base font-bold',
  );
  return createElement(
    type,
    {
      className: cn('text-2xl font-bold', typeClassNames, colorClassNames, className),
    },
    children,
  );
}
