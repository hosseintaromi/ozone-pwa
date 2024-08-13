import { useFormik } from 'formik';
import { CloseCircle } from 'iconsax-react';
import Num2persian from 'num2persian';
import {
  Button,
  COLOR_ENUM,
  Container,
  Input,
  INPUT_TYPES,
  SIZE_ENUM,
  Text,
} from 'ozone-uikit';
import React from 'react';
import { object } from 'yup';

import cn from '@/lib/clsxm';
import { formatNumberWithCommas } from '@/lib/helper';

import validation from '@/constant/validation-rules';
import locale from '@/locale';

import { OfferPriceType, PayInDialogType } from '../type';
import Modal, { ModalBody, ModalHead } from '../../../share/modal';

const OfferedPrice = ({ children, isActive, setVal, value }: OfferPriceType) => {
  return (
    <Text
      size={SIZE_ENUM.XS}
      className={cn(
        'w-full rounded-xl border-[1px] border-solid border-neutral-500 px-2 py-3 text-center text-white',
        isActive && 'bg-primary-400 border-primary',
      )}
      onClick={() => {
        setVal?.(value);
      }}
    >
      {children}
    </Text>
  );
};

const offerList = [
  {
    title: '1,000,000 تومان',
    value: 10000000,
  },
  {
    title: '3,000,000 تومان',
    value: 30000000,
  },
  {
    title: '5,000,000 تومان',
    value: 50000000,
  },
];

const PayInDialog = (props: PayInDialogType) => {
  const { show, setShow } = props;
  const { app } = locale;

  const { handleSubmit, values, errors, isValid, setValues, setFieldValue, handleBlur } =
    useFormik({
      initialValues: {
        amount: 1000000,
      },
      validationSchema: object().shape({
        amount: validation.amountCheck,
      }),
      onSubmit: () => {
        // console.log('call api', values, action);
      },
    });
  const setValue = (val) => {
    setValues({ amount: val });
  };

  return (
    <Modal show={show} onClose={() => setShow(false)} dialogPanelClassName='bg-neutral-900'>
      <ModalHead setShow={setShow}>
        <Text size={SIZE_ENUM.LG} medium>
          {app.payDialog.title}
        </Text>
        <Text size={SIZE_ENUM.SM} medium color={COLOR_ENUM.XLIGHT_GRAY} className='mt-4'>
          {app.payDialog.subTitle}
        </Text>
      </ModalHead>
      <ModalBody className='flex flex-col gap-2.5 text-white '>
        <form onSubmit={handleSubmit}>
          <Input
            name='amount'
            errorMessage={errors.amount}
            size={SIZE_ENUM.XL}
            label={app.payDialog.inputTitle}
            hint={
              values.amount
                ? `${Num2persian(Math.round(+String(values.amount).replaceAll(',', '') / 10))} تومان`
                : ''
            }
            labelClassName='text-md text-bold'
            type={INPUT_TYPES.TEL}
            inputMode='numeric'
            className='rtl text-right'
            maxLength={13}
            onBlur={handleBlur}
            onChange={(e) => {
              const value = e.target.value.replace(/,/g, '');
              if (!isNaN(+value)) {
                setFieldValue('amount', Number(value));
              }
            }}
            value={formatNumberWithCommas(values.amount)}
            LeftIcon={() => (
              <CloseCircle
                color={COLOR_ENUM.WHITE}
                className='size-7'
                onClick={() => setValues({ amount: 0 })}
              />
            )}
          />
        </form>

        <Container center className='mt-8 gap-4'>
          {offerList.map((item) => (
            <OfferedPrice
              isActive={values.amount === item.value}
              setVal={setValue}
              value={item.value}
            >
              {item.title}
            </OfferedPrice>
          ))}
        </Container>
        <Button
          onClick={() => {
            setFieldValue('amount', 10);
          }}
          disabled={!isValid}
          color={COLOR_ENUM.PRIMARY}
          size={SIZE_ENUM.XXL}
          className='mt-8'
        >
          {app.payDialog.button}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default PayInDialog;
