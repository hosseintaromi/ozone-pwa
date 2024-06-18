import { ImageProps } from 'next/image';

export default interface Props extends Omit<ImageProps, 'placeholder' | 'blur'> {
  blur?: boolean;
  placeholder?: boolean;
}
