import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Props } from '@/components/@base/toast/type';

export default function Toast({ ...props }: Props) {
  return (
    <ToastContainer
      toastClassName='m-2 rounded-xl'
      position='top-center'
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme='colored'
      {...props}
    />
  );
}

export { toast };
