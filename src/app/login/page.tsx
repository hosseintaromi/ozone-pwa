'use client';
import Image from 'next/image';
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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RxCrossCircled } from 'react-icons/rx';
import { convertToEnglishNumber, isIOS } from '@/lib/helper';
import { mobile } from '@/constant/validation-rules';

export const PostSchema = Yup.object().shape({
  phoneNumber: Yup.number().required(''),
});
const Login = () => {
  const isIos = isIOS();

  const { handleSubmit, values, errors, handleChange, isValid, dirty, resetForm } = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    validationSchema: Yup.object().shape({
      phoneNumber: mobile,
    }),
    onSubmit: (values, action) => {
      // console.log('call api', values, action);
    },
  });
  const persianNumToEnNumChange = (e) => {
    e.target.value = convertToEnglishNumber(e.target.value);
    handleChange(e);
  };
  return (
    <Container className='flex w-full flex-col items-center'>
      {/* FIXME: change Image with xImage */}
      <Image
        src='/images/logo/Logo.svg'
        width={76}
        height={76}
        className='mt-16'
        alt='Picture of the author'
      />
      <Text className='mt-10' size={SIZE_ENUM.XL} bold>
        به
        <span className='text-primary'> اوزون کارت </span>
        خوش آمدید
      </Text>
      <Text size={SIZE_ENUM.MD} className='mt-2 text-neutral-300'>
        شماره موبایل خود را وارد کنید
      </Text>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col px-5 pt-16'
        autoComplete='off'
      >
        <Input
          name={'phoneNumber'}
          errorMessage={errors.phoneNumber}
          label='شماره موبایل'
          type={isIos ? INPUT_TYPES.TEL : INPUT_TYPES.NUMBER}
          inputMode='numeric'
          className='text-right'
          value={values.phoneNumber}
          onChange={isIos ? persianNumToEnNumChange : handleChange}
          LeftIcon={() => (
            <RxCrossCircled
              color={COLOR_ENUM.WHITE}
              className='size-7'
              onClick={() => resetForm()}
            />
          )}
        />
        <Container className='absolute bottom-10 left-5 right-5'>
          <Button
            type={BUTTON_TYPE.SUBMIT}
            size={SIZE_ENUM.XL}
            className='w-full'
            disabled={!isValid || !dirty}
          >
            ثبت
          </Button>
          <Text className='mt-6 w-full text-center'>
            قوانین و شرایط را مطالعه کردم و با آن موافق هستم
          </Text>
        </Container>
      </form>
    </Container>
  );
  // return (
  //   <Container className='flex items-center flex-col w-full'>
  //     <Image
  //       src='/images/logo/Logo.svg'
  //       width={70}
  //       height={70}
  //       alt="Picture of the author" />
  //     <Text>به اوزون کارت خوش آمدید</Text>
  //     <Text>شماره موبایل خود را وارد کنید</Text>
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <Input
  //         label='شماره موبایل'
  //       value={'hello2'}
  //       />

  //       <Button type={BUTTON_TYPE.SUBMIT} color={COLOR_ENUM.PRIMARY} size={SIZE_ENUM.LG} >ثبت</Button>
  //     </form>
  //   </Container>
  // );
};

export default Login;
