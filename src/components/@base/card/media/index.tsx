import cn from '@/lib/clsxm';

import Props from '@/components/@base/card/media/type';
import XImage from '@/components/@base/x-image';

export default function CardMedia({ className, alt = '', ...props }: Props) {
  return <XImage className={cn('object-cover', className)} alt={alt} {...props} />;
}
