import { StyleProp, StyleSheet } from 'react-native';
import { CustomButtonProps } from '.';

export const createButtonStyle = (additionalStyle: StyleProp<any>) => {
  return StyleSheet.create({
    buttonContainer: {
      padding: 18,
      borderRadius: 10,
      backgroundColor: 'white',
      ...additionalStyle,
    },
    buttonText: {
      color: 'black',
      fontWeight: '700',
      textAlign: 'center',
      fontSize: 16,
    },
  });
};
