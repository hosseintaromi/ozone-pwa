import cn from '@/lib/clsxm';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import { BUTTON_TYPE, Props, VARIANT_ENUM } from '@/components/@base/button/type';
import Container from '@/components/@base/container';

const ButtonLoading = () => {
  return (
    <svg
      aria-hidden='true'
      role='status'
      className='me-3 inline h-4 w-4 animate-spin text-white'
      viewBox='0 0 100 101'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
        fill='#E5E7EB'
      />
      <path
        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default function Button({
  children,
  color,
  className,
  size = SIZE_ENUM.MD,
  variant = VARIANT_ENUM.DEFAULT,
  disabled = false,
  isLoading = false,
  type = BUTTON_TYPE.BUTTON,
  Icon,
  ...props
}: Props) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        'flex items-center justify-center rounded-xl font-semibold text-white transition ease-in-out focus:outline-none',
        size === SIZE_ENUM.XXS && 'h-4 rounded-md px-1 text-[10px]',
        size === SIZE_ENUM.XS && 'h-6 rounded-lg px-2 py-0.5 text-xs',
        size === SIZE_ENUM.SM && 'h-7 rounded-lg px-2 py-2 text-xs',
        size === SIZE_ENUM.MD && 'h-8 px-3 py-1.5 text-xs leading-5',
        size === SIZE_ENUM.LG && 'h-10 px-8 py-3 text-sm',
        size === SIZE_ENUM.XL && 'text-md h-12 px-10 py-4',
        variant === VARIANT_ENUM.OUTLINED &&
          'border border-secondary text-secondary hover:bg-secondary hover:text-white',
        variant === VARIANT_ENUM.DEFAULT &&
          'bg-secondary hover:bg-secondary/80 focus:ring-2 focus:ring-opacity-50',
        variant === VARIANT_ENUM.TEXT &&
          'text-secondary  hover:bg-secondary/10 focus:ring-2 focus:ring-opacity-50',
        color === COLOR_ENUM.PRIMARY &&
          variant === VARIANT_ENUM.DEFAULT &&
          'bg-primary hover:bg-primary/80',
        color === COLOR_ENUM.PRIMARY &&
          variant === VARIANT_ENUM.OUTLINED &&
          'border-primary text-primary hover:bg-primary',
        color === COLOR_ENUM.TEXT &&
          variant === VARIANT_ENUM.DEFAULT &&
          'bg-transparent hover:bg-transparent focus:ring-0',
        color === COLOR_ENUM.PRIMARY &&
          variant === VARIANT_ENUM.TEXT &&
          'text-primary hover:bg-primary/10',
        disabled && 'cursor-not-allowed opacity-50',
        disabled && VARIANT_ENUM.DEFAULT && 'bg-i-gray hover:bg-i-gray/50',
        disabled && VARIANT_ENUM.OUTLINED && 'border-gray-50 text-gray-50',
        Icon && 'gap-1',
        className,
      )}
      type={type}
    >
      {Icon && <Icon />}
      <Container center>
        {isLoading && <ButtonLoading />}
        {children}
      </Container>
    </button>
  );
}
