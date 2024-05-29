import { Rating, RatingProps } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

export default function Rate({ ...props }: RatingProps) {
  return <Rating {...props} />;
}
