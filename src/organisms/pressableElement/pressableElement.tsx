import React, { FC } from 'react';
import { Pressable } from 'react-native';
import { PressableElementProps } from '.';

const PressableElement: FC<PressableElementProps> = ({
  callbackPressFunction,
  content,
}: PressableElementProps) => {
  return <Pressable onPress={callbackPressFunction}>{content}</Pressable>;
};

export default PressableElement;
