import { Props } from './type';

export default function ModalBody({ className, children }: Props) {
  return <div className={className}>{children}</div>;
}
