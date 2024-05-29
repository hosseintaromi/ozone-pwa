import Props from '@/components/@base/input/drop-down/list/item/type';
import { ListItem } from '@/components/@base/list';

export default function Item({ className, children }: Props) {
  return <ListItem className={className}>{children}</ListItem>;
}
