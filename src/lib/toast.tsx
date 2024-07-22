import { toast } from 'react-toastify';

import { ErrorMsg } from '@/components/share/toast/toast';

export const showToast = (e) => {
  toast(<ErrorMsg text={e} />);
};
