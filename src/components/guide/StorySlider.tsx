import React from 'react';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';
import XImage from '../share/x-image';
import Container from '../share/container';
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
    <Container className='h-full bg-neutral-900 px-10 py-20 text-white'>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
      <XImage src={image} alt='Picture of the author' width={1000} height={1000} />
    </Container>
  );
}

export default function ComponentStories() {
  const stories = [
    {
      type: 'component',
      duration: 9000,
      component: () => (
        <NormalGuide
          title='Hannad Rehman says: Story 1'
          subTitle='a;sdlfas;df'
          image='/images/image/getPhysicalCard.svg'
        />
      ),
    },
    {
      type: 'component',
      duration: 30000,
      component: () => (
        <NormalGuide
          title='Hannad Rehman says: Story 1'
          subTitle='a;sdlfas;df'
          image='/images/image/getPhysicalCard.svg'
        />
      ),
    },
    {
      duration: 9000,
      type: 'component',
      component: () => (
        <NormalGuide
          title='Hannad Rehman says: Story 1'
          subTitle='a;sdlfas;df'
          image='/images/image/getPhysicalCard.svg'
        />
      ),
    },
  ];

  return (
    <Container
      center
      className='mb-4 w-full'
      style={{
        direction: 'ltr',
      }}
    >
      <Stories width='400px' height='600px' stories={stories} />
    </Container>
  );
}
