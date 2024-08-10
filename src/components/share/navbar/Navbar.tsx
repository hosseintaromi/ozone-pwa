import { Container } from 'ozone-uikit';
import React, { ReactNode } from 'react';

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <Container center className='relative mx-5 justify-between pt-5'>
      {children}
    </Container>
  );
};

export default Navbar;
