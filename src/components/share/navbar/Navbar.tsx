import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import React, { ReactNode } from 'react';

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <Container center className='mx-3 my-5 justify-between'>
      {children}
    </Container>
  );
};

export default Navbar;
