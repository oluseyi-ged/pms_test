import { FC } from 'react';
import { SpringSpinner } from 'react-epic-spinners';

interface Props {
  color?: any;
}

export const Loader: FC<Props> = ({ color }) => {
  return <SpringSpinner color={color} />;
};
