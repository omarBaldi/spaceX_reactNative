import React, { FC } from 'react';
import { Pressable, View, Text } from 'react-native';
import { CustomButtonProps } from '.';
import { createButtonStyle } from './style';

const CustomButton: FC<CustomButtonProps> = ({
  title,
  additionalStyle,
  callbackFunc,
}: CustomButtonProps): JSX.Element => {
  const buttonStyle = createButtonStyle(additionalStyle);

  return (
    <Pressable onPress={callbackFunc}>
      <View style={buttonStyle.buttonContainer}>
        <Text style={buttonStyle.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;
