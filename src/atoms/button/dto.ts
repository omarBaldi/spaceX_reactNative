import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleProp,
} from 'react-native';

type CustomButtonProps = {
  title: string;
  callbackFunc?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  additionalStyle?: StyleProp<any>;
};

export default CustomButtonProps;
