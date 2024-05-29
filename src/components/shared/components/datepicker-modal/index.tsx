import { useEffect } from 'react';

import DatePicker from '@/components/@base/date-picker';
import Props from '@/components/shared/components/datepicker-modal/type';

import useCommonModalStore from '@/store/common-modal-store';

export default function DatePickerModal({ isOpen, onChange, close, value }: Props) {
  const { setShow, show } = useCommonModalStore();

  useEffect(() => {
    if (!show) {
      close();
    }
  }, [show]);

  useEffect(() => {
    if (isOpen) {
      setShow(true, {
        Body: () => <DatePicker onChange={onChange} value={value} />,
      });
    } else {
      setShow(false);
    }
  }, [isOpen]);

  return null;
}
