import cn from '@/lib/clsxm';

import { Props } from '@/components/@base/list/item/type';

export default function ListItem({ className = '', children, ...props }: Props) {
  return (
    <li className={cn('list-none', className)} {...props}>
      {children}
    </li>
  );
}
