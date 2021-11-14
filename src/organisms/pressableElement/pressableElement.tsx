import React, { FC } from 'react';
import { Pressable } from 'react-native';
import { PressableElementProps } from '.';

const PressableElement: FC<PressableElementProps> = ({
  callbackPressFunction,
  content,
  additionalStyle,
}: PressableElementProps) => {
  return (
    <Pressable
      onPress={callbackPressFunction}
      style={{ ...(additionalStyle ?? {}) }}
    >
      {content}
    </Pressable>
  );
};

export default PressableElement;
