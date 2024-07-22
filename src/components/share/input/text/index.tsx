import { forwardRef } from 'react';

import './index.css';

import cn from '@/lib/clsxm';

import { COLOR_ENUM, INPUT_TYPES, SIZE_ENUM } from '@/@types';
import TextInputType from '@/@types/input/textInput.model';

import Container from '../../container';
import { Text } from '../../typography';

function TextInput(
  {
    id = '',
    value = '',
    className,
    labelClassName,
    type = INPUT_TYPES.TEXT,
    size = SIZE_ENUM.XXL,
    label,
    Icon,
    LeftIcon,
    stickyText,
    errorMessage,
    LeftIconClass,
    background = 'bg-neutral-900',
    hint,
    ...other
  }: TextInputType,
  ref: any,
) {
  return (
    <Container>
      <Container className='relative'>
        <Container className='float-label-input  relative bg-inherit	'>
          {Icon && (
            <Container center className='absolute inset-y-0 right-0 w-8'>
              <Icon />
            </Container>
          )}
          {LeftIcon === undefined && stickyText && (
            <Container center className='absolute inset-y-0 left-4'>
              <Text>{stickyText}</Text>
            </Container>
          )}
          {LeftIcon && (
            <Container
              center
              className={cn('absolute left-4 top-2/4 -translate-y-2/4', LeftIconClass)}
            >
              <LeftIcon />
            </Container>
          )}
          <input
            placeholder=' '
            className={cn(
              'focus:shadow-outline block w-full appearance-none rounded-lg  border border-neutral-500  bg-gray-50 p-2.5 px-3 py-3 text-sm  leading-normal text-white outline-none focus:border-primary focus:outline-none',
              size === SIZE_ENUM.XXS && 'h-4',
              size === SIZE_ENUM.XS && 'h-6',
              size === SIZE_ENUM.SM && 'h-7',
              size === SIZE_ENUM.MD && 'h-8',
              size === SIZE_ENUM.LG && 'h-10',
              size === SIZE_ENUM.XL && 'h-12',
              size === SIZE_ENUM.XXL && 'h-14',
              background,
              Icon && 'pr-8',
              stickyText && 'pl-8',
              errorMessage &&
                'border-solid border-danger focus:border-danger-500 focus:ring-0',
              className,
            )}
            ref={ref}
            value={value && value}
            type={type}
            id={id}
            {...other}
          />

          {label && (
            <label
              htmlFor={id}
              className={cn(
                'text-grey-darker pointer-events-none absolute right-3 top-2/4 block -translate-y-2/4 px-2 py-0 text-white transition duration-200  ease-in-out',
                size === SIZE_ENUM.XXS && 'text-xs',
                size === SIZE_ENUM.XS && 'text-xs',
                size === SIZE_ENUM.SM && 'text-xs',
                size === SIZE_ENUM.MD && 'text-xs',
                size === SIZE_ENUM.LG && 'text-sm',
                size === SIZE_ENUM.XL && 'text-base',
                size === SIZE_ENUM.XXL && 'text-lg',
                background,
                labelClassName,
                errorMessage && 'text-danger',
              )}
              style={Icon && { fontSize: '80%', top: 0 }}
            >
              {label}
            </label>
          )}
        </Container>
        {errorMessage && (
          <Text
            className='absolute -bottom-10 px-2 leading-7'
            size={SIZE_ENUM.SM}
            color={COLOR_ENUM.ERROR}
          >
            {errorMessage}
          </Text>
        )}
        {!errorMessage && hint && (
          <Text
            className='absolute -bottom-10 px-2  leading-7'
            color={COLOR_ENUM.XLIGHT_GRAY}
            size={SIZE_ENUM.SM}
          >
            {hint}
          </Text>
        )}
      </Container>
    </Container>
  );
}

export default forwardRef(TextInput);
