import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import React from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { MdOutlineAddCard } from 'react-icons/md';

const Navbar = () => {
  return (
    <Container center className='mx-3 my-5 justify-between'>
      <IoInformationCircleOutline color='#fff' size={30} />
      <Text>حساب ها</Text>
      <MdOutlineAddCard color='#fff' size={30} />
    </Container>
  );
};

export default Navbar;
