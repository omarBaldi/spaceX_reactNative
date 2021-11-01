import { StyleProp, StyleSheet } from 'react-native';
import { CustomButtonProps } from '.';

export const createButtonStyle = (additionalStyle: StyleProp<any>) => {
  return StyleSheet.create({
    buttonContainer: {
      padding: 11,
      borderRadius: 10,
      textAlign: 'center',
      backgroundColor: 'white',
      ...additionalStyle,
    },
    buttonText: {
      color: 'black',
      fontWeight: '700',
    },
  });
};
