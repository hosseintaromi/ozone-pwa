import './style.css';
import Props from './type';
import cn from '@/lib/clsxm';

export default function Circular({ children, checked, className, justLabel }: Props) {
  return (
    <label
      className={cn(
        'form-control flex w-full items-center justify-between',
        className && className,
      )}
    >
      {children}
      {!justLabel && <input checked={checked} type='radio' name='radio' />}
    </label>
  );
}
