import { useFormik } from 'formik';
import { CloseCircle } from 'iconsax-react';
import { toPersianNumberic } from 'to-persian-letter-currency';
import {
  Button,
  BUTTON_TYPE,
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
import { usePostChargeWallet } from '@/services/hooks';

const OfferedPrice = ({ children, isActive, setVal, value }: OfferPriceType) => {
  return (
    <Text
      size={SIZE_ENUM.XS}
      className={cn(
        'w-full rounded-xl border-[1px] border-solid border-neutral-500 px-2 py-3 text-center text-white',
        isActive && 'border-primary bg-primary/10',
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

const IncreaseCredit = (props: PayInDialogType) => {
  const { mutate: mutateChargeWallet } = usePostChargeWallet(18);
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
        mutateChargeWallet(
          {
            amount: values.amount,
          },
          {
            onSuccess: (res) => {
              if (res?.payment_link) window.location.href = res.payment_link;
            },
          },
        );
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
          <Container className='relative'>
            <Input
              name='amount'
              errorMessage={values?.amount > 0 ? errors.amount : undefined}
              label={app.payDialog.inputTitle}
              hintClass='text-right -bottom-8'
              errorMessageClass='-bottom-8'
              hint={
                values.amount
                  ? `${toPersianNumberic(+String(values.amount).replaceAll(',', ''))}`
                  : ''
              }
              labelClassName='text-md text-bold'
              type={INPUT_TYPES.TEL}
              inputMode='numeric'
              className='rtl pb-2 text-right'
              maxLength={13}
              onBlur={handleBlur}
              onChange={(e) => {
                const value = e.target.value.replace(/,/g, '');
                if (!isNaN(+value)) {
                  setFieldValue('amount', Number(value));
                }
              }}
              value={values.amount > 0 ? formatNumberWithCommas(values.amount) : ''}
            />
            <CloseCircle
              color={COLOR_ENUM.WHITE}
              className='absolute left-3 top-3 size-7'
              onClick={() => setValues({ amount: 0 })}
            />
          </Container>
          <Container center className='mt-12 gap-4'>
            {offerList.map((item) => (
              <OfferedPrice
                isActive={values.amount === item.value}
                setVal={setValue}
                value={item.value}
                key={item.title}
              >
                {item.title}
              </OfferedPrice>
            ))}
          </Container>
          <Button
            type={BUTTON_TYPE.SUBMIT}
            disabled={!isValid}
            color={COLOR_ENUM.PRIMARY}
            size={SIZE_ENUM.XXL}
            className='mt-8 w-full'
          >
            {app.payDialog.button}
          </Button>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default IncreaseCredit;
