import { ColorValue } from 'react-native';

export enum SpinnerSize {
  SMALL = 'small',
  LARGE = 'large',
}

type SpinnerProps = {
  color?: ColorValue;
  size?: SpinnerSize | number;
};

export default SpinnerProps;
