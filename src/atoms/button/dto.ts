import { StyleProp } from 'react-native';

export enum ButtonSize {
  LARGE = 1,
  MEDIUM = 2,
  SMALL = 3,
}

type CustomButtonProps = {
  title: string;
  callbackFunc?: any;
  additionalStyle?: StyleProp<any>;
  size?: ButtonSize;
};

export default CustomButtonProps;
