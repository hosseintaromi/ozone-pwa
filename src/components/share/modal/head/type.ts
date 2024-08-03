import Base from '../../@helpers/types';

export interface Props extends Base {
  isCustomHead?: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}
