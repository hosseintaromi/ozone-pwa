// components/SkeletonLoader.js
import React from 'react';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = 'w-full',
  height = 'h-fit',
  className = '',
}) => {
  return (
    <div
      className={`${width} ${height} animate-pulse rounded bg-neutral-700 ${className}`}
    ></div>
  );
};

const SkeletonLoaderText: React.FC = () => {
  return (
    <div className='space-y-2'>
      <SkeletonLoader width='w-3/4' />
      <SkeletonLoader width='w-1/2' />
      <SkeletonLoader width='w-full' />
    </div>
  );
};

const SkeletonLoaderAvatar: React.FC = () => {
  return (
    <div className='flex items-center '>
      <SkeletonLoader width='w-12' height='h-12' className='rounded-full' />
      <SkeletonLoaderText />
    </div>
  );
};

export { SkeletonLoader, SkeletonLoaderText, SkeletonLoaderAvatar };
