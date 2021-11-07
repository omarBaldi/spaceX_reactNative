import { StyleProp } from 'react-native';

export enum TextHierarchy {
  PRIMARY = 1,
  SECONDARY = 2,
}

type CustomTextProps = {
  value: string | number;
  hierarchy?: TextHierarchy;
  additionalStyle?: StyleProp<any>;
};

export default CustomTextProps;
