import ReactSkeleton, { SkeletonProps } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

export default function Skeleton(props: SkeletonProps) {
  return <ReactSkeleton {...props} />;
}
