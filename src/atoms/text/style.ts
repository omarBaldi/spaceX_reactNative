import { StyleProp, StyleSheet } from 'react-native';
import { TextHierarchy } from './dto';

export const createTextStyle = ({
  hierarchy,
  additionalStyle,
}: {
  hierarchy: TextHierarchy;
  additionalStyle: StyleProp<any>;
}) => {
  return StyleSheet.create({
    textContainer: {
      ...(hierarchy === TextHierarchy.PRIMARY
        ? {
            color: 'white',
            fontWeight: '700',
            fontSize: 30,
          }
        : {
            color: 'lightgrey',
            fontSize: 20,
          }),
      ...additionalStyle,
    },
  });
};
