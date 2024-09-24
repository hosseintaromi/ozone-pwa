import { useFormik } from 'formik';
import { CloseCircle } from 'iconsax-react';
import { BUTTON_TYPE, COLOR_ENUM, Container, INPUT_TYPES, SIZE_ENUM } from 'ozone-uikit';
import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { object } from 'yup';

import { convertPhoneNumber, convertToEnglishNumber } from '@/lib/helper';
import useDeviceDetection from '@/hooks/useDeviceDetection';

import Button from '@/components/share/button';
import { Input } from '@/components/share/input';
import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';

import validation from '@/constant/validation-rules';
import { locale } from '@/locale';
import { useLoginInit } from '@/services/hooks';

import { LOGIN_STEPS, SetPhoneType, SetStepType } from '../Login.module';
import { LOGIN_ROLES } from '@/models/auth.model';
import Carousel, { CarouselItem } from '@/components/@base/carousel';
import useLoginStore from '@/store/login-store';

const PhoneNumber = ({
  setStep,
  setPhoneNumber,
}: {
  setStep: SetStepType;
  setPhoneNumber: SetPhoneType;
}) => {
  const isIos = useDeviceDetection();

  const { login, common } = locale;
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useLoginInit();
  const { setGoToSetPassword } = useLoginStore();
  const { handleSubmit, values, errors, handleChange, dirty, resetForm } = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    validationSchema: object().shape({
      phoneNumber: validation.mobile,
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (e) => {
      const phoneNumber = convertPhoneNumber(e.phoneNumber);
      mutate(
        {
          cellphone: phoneNumber,
          clients: [LOGIN_ROLES.CUSTOMER],
          send_otp: false,
        },
        {
          onSuccess({ data }) {
            setStep(data.has_password ? LOGIN_STEPS.PASSWORD : LOGIN_STEPS.OTP);
            setGoToSetPassword(!data.has_password);
            setPhoneNumber(phoneNumber);
          },
        },
      );
    },
  });

  const persianNumToEnNumChange = (e) => {
    e.target.value = convertToEnglishNumber(e.target.value);
    handleChange(e);
  };

  return (
    <Container className='flex h-dvh flex-col items-center justify-between p-4'>
      <Container className='flex w-full flex-col items-center'>
        <Container className='mt-5 w-14 xs:w-16'>
          <XImage
            placeholder
            src='/images/logo/Logo.svg'
            alt='Picture of the author'
            width={1000}
            height={1000}
            data-testid='logo'
          />
        </Container>

        <Text className='text-1xl mt-5 xs:text-2xl' bold data-testid='welcome-text'>
          {common.to} <span className='text-primary'>{common.ozoneCard}</span> {common.welcome}
        </Text>

        <Container className='m-5 w-44'>
          <Carousel
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3000,
            }}
            data-testid='carousel'
          >
            {[
              '/images/guide/New-1.mp4',
              '/images/guide/New-2.mp4',
              '/images/guide/New-3.mp4',
            ].map((item) => (
              <CarouselItem key={item}>
                <video
                  width='100%'
                  height='100%'
                  className='h-90'
                  playsInline
                  onClick={(e) => e.preventDefault()}
                  data-testid='carousel-video'
                >
                  <source src={item} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </CarouselItem>
            ))}
          </Carousel>
        </Container>
      </Container>

      <form onSubmit={handleSubmit} className='mb-20 flex w-full flex-col px-5 xs:pt-5'>
        <Input
          name='phoneNumber'
          label={common.phoneNumber}
          className='text-right'
          type={INPUT_TYPES.TEL}
          inputMode='numeric'
          errorMessage={errors.phoneNumber} // فقط پیام خطا به صورت رشته
          maxLength={11}
          value={values.phoneNumber}
          onChange={isIos ? persianNumToEnNumChange : handleChange}
          LeftIcon={() => (
            <CloseCircle
              data-testid='reset-icon'
              color={COLOR_ENUM.WHITE}
              className='size-7'
              onClick={() => resetForm()}
            />
          )}
          data-testid='phone-input'
        />

        {errors.phoneNumber && (
          <span data-testid='phone-error' className='error-message'>
            {errors.phoneNumber}
          </span>
        )}

        <Container className='mt-10'>
          <Button
            data-testid='submit-button'
            type={BUTTON_TYPE.SUBMIT}
            size={SIZE_ENUM.XL}
            className='w-full'
            disabled={!dirty || isPending}
          >
            {common.record}
          </Button>

          <Text className='mt-6 w-full text-center'>
            <span
              className='text-primary'
              onClick={() => setOpen(true)}
              data-testid='terms-link'
            >
              {login.TermsAndConditions}
            </span>
            {login.readAndAgree}
          </Text>
        </Container>
      </form>

      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        blocking={false}
        snapPoints={({ maxHeight }) => [maxHeight]}
        header
        data-testid='bottom-sheet'
      >
        <Container className='px-4 py-3 text-justify'>
          {[1, 2, 3, 4, 5].map((i) => (
            <Container key={i + 'terms'}>
              <Text color={COLOR_ENUM.PRIMARY}>۱. شرط</Text>
              <Text color={COLOR_ENUM.LIGHT_GRAY}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و و فرهنگ پیشرو در زبان فارسی
                ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                استفاده قرار گیرد.
              </Text>
            </Container>
          ))}
        </Container>
      </BottomSheet>
    </Container>
  );
};

export default PhoneNumber;
