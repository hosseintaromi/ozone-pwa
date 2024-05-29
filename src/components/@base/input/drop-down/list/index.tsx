import cn from '@/lib/clsxm';

import Props from '@/components/@base/input/drop-down/list/type';
import BaseList from '@/components/@base/list';

export default function List({ className, children }: Props) {
  return <BaseList className={cn('flex flex-col gap-2.5', className)}>{children}</BaseList>;
}
