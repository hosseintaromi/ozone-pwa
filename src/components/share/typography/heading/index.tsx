import { COLOR_ENUM, HEADING_TYPE, HeadingType } from 'ozone-uikit';
import { createElement } from 'react';

import cn from '@/lib/clsxm';

export default function Heading({
  type = HEADING_TYPE.H3,
  color = COLOR_ENUM.WHITE,
  className,
  children,
}: HeadingType) {
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
