import Base from '@/components/@base/@helpers/types';
import InputProps from '@/components/@base/input/text/type';

type Props = Omit<InputProps, 'onChange'> & {
  initialValue?: string;
  debounce?: number;
  onChange: (q: string) => void;
  wrapperClassName?: Base['className'];
};
export default Props;
