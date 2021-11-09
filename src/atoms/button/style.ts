import { StyleProp, StyleSheet } from 'react-native';
import { ButtonSize } from './dto';

export const createButtonStyle = (
  additionalStyle: StyleProp<any>,
  size: ButtonSize | undefined
) => {
  const buttonCustomSizes = {
    [ButtonSize.LARGE]: {
      buttonContainerPadding: 18,
      buttonTextSize: 16,
    },
    [ButtonSize.MEDIUM]: {
      buttonContainerPadding: 14,
      buttonTextSize: 12,
    },
    [ButtonSize.SMALL]: {
      buttonContainerPadding: 10,
      buttonTextSize: 8,
    },
  };

  return StyleSheet.create({
    buttonContainer: {
      padding: size
        ? buttonCustomSizes[size].buttonContainerPadding
        : buttonCustomSizes[ButtonSize.MEDIUM].buttonContainerPadding,
      borderRadius: 10,
      backgroundColor: 'white',
      ...additionalStyle,
    },
    buttonText: {
      color: 'black',
      fontWeight: '700',
      textAlign: 'center',
      fontSize: size
        ? buttonCustomSizes[size].buttonTextSize
        : buttonCustomSizes[ButtonSize.MEDIUM].buttonTextSize,
    },
  });
};
