import './style.css';

import Props from './type';
import Container from '../../../container/index';

export default function Circular({ children, checked }: Props) {
  return (
    <Container center className='w-full justify-between'>
      {children}
      <label className='form-control'>
        <input checked={checked} type='radio' name='radio' />
      </label>
    </Container>
  );
}
