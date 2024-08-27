import Stories from 'stories-react';
import 'stories-react/dist/index.css';
const storySource = [
  {
    type: 'image',
    url: '/images/guide/home/homeGuide1.svg',
    duration: 5000,
  },
  {
    type: 'image',
    url: '/images/guide/home/homeGuide2.svg',
    duration: 5000,
  },
];

function StorySlider() {
  return (
    <div style={{ direction: 'ltr' }} className='bg-red-700'>
      <Stories width='400px' height='640px' stories={storySource} className='bg-red-700' />
    </div>
  );
}

export default StorySlider;
