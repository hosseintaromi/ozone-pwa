'use client';
import { Container, Input, INPUT_TYPES, SIZE_ENUM } from 'ozone-uikit';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FaChevronLeft } from 'react-icons/fa6';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (e: FieldValues) => {
    // console.log(e)
  };

  return (
    <Container center className=' h-dvh  bg-[#333333] '>
      {/* <Button isLoading color={COLOR_ENUM.PRIMARY}>hello</Button>
      <Text bold semiBold color={COLOR_ENUM.PRIMARY} >hello</Text> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type={INPUT_TYPES.TEXT}
          label='hello'
          background='bg-[#333333]'
          labelClassName='text-white '
          size={SIZE_ENUM.SM}
          stickyText='sfasf'
          // value={'hello2'}
          LeftIcon={() => <FaChevronLeft />}
          errorMessage={errors.type?.message as string}
          {...register('type', {
            required: 'errorMessages(valType.Required)',
          })}
        />

        <button type='submit'>ok</button>
      </form>
    </Container>
  );
};

export default Login;
