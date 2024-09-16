'use client';

import React, { useEffect, useState } from 'react';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';
import Container from '../share/container';
import NormalGuide from './NormalGuide';
import { guideData, StoryData } from './data';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ComponentStories() {
  const [stories, setStories] = useState<StoryData[]>([]);
  const searchParams = useSearchParams();

  const search = searchParams.get('page');
  const router = useRouter();

  useEffect(() => {
    const loadedStories: StoryData[] = [];
    if (!search || !guideData[search]) {
      router.push('/');
      return;
    }
    console.log(router.back);
    const data = guideData[search];
    for (let i = 0; i < data.length; i++) {
      loadedStories.push({
        type: 'component',
        duration: 9000,
        component: () => (
          <NormalGuide
            title={data[i].title}
            subTitle={data[i].subTitle}
            image={data[i].image}
          />
        ),
      });
    }

    setStories(loadedStories);
  }, []);

  return (
    <Container
      center
      className='mb-4 w-full'
      style={{
        direction: 'ltr',
      }}
    >
      <Stories
        width='400px'
        height='600px'
        stories={stories}
        onAllStoriesEnd={() => router.back()}
      />
    </Container>
  );
}
