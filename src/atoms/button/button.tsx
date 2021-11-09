import React, { FC } from 'react';
import { Pressable, View, Text } from 'react-native';
import { CustomButtonProps } from '.';
import { createButtonStyle } from './style';

const CustomButton: FC<CustomButtonProps> = ({
  title,
  size,
  additionalStyle,
  callbackFunc,
}: CustomButtonProps): JSX.Element => {
  const buttonStyle = createButtonStyle(additionalStyle, size);

  return (
    <Pressable onPress={callbackFunc}>
      <View style={buttonStyle.buttonContainer}>
        <Text style={buttonStyle.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;
