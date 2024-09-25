import { Container } from 'ozone-uikit';
import React from 'react';
import XImage from '../share/x-image';
import { Text } from '../share/typography';

function NormalGuide({
  title,
  subTitle,
  image,
}: {
  title: string;
  subTitle: string;
  image: string;
}) {
  return (
    <Container className='h-full !cursor-pointer bg-neutral-900 px-10 py-20 text-center text-white'>
      <Text className='mb-5 w-full text-xl' bold>
        {title}
      </Text>
      <Text className='mb-14 text-sm' light>
        {subTitle}
      </Text>
      <XImage src={image} alt='Picture of the author' width={1000} height={1000} />
    </Container>
  );
}

export default NormalGuide;
