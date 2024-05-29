import cn from '@/lib/clsxm';

import { Props } from '@/components/@base/label/type';

export default function Label({ id, className, children }: Props) {
  return (
    <label
      className={cn('mb-2 block text-base font-medium text-gray-700', className)}
      htmlFor={id}
    >
      {children}
    </label>
  );
}
