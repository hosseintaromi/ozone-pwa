import DatePickerProps from '@/components/@base/date-picker/type';

type Props = DatePickerProps & {
  isOpen: boolean;
  close: () => void;
};

export default Props;
