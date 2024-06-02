import cn from '@/lib/clsxm';

import ListItem from '@/components/@base/list/item';
import { Props } from '@/components/@base/list/type';

export default function List({ className, children }: Props) {
  return <ul className={cn('', className)}>{children}</ul>;
}

export { ListItem };
