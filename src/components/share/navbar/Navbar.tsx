import { CardAdd, InfoCircle } from 'iconsax-react';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import React from 'react';

const Navbar = () => {
  return (
    <Container center className='mx-3 my-5 justify-between'>
      <InfoCircle color='#fff' size={30} />
      <Text>حساب ها</Text>
      <CardAdd color='#fff' size={30} />
    </Container>
  );
};

export default Navbar;
