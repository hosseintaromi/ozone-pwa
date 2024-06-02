import { IconType } from 'react-icons';

export type step = {
  name: string;
  id: number;
  Icon?: IconType;
  isActive?: boolean;
};
export interface Props {
  steps: step[];
}
