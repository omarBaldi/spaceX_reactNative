import React, { FC } from 'react';
import { Text } from 'react-native';
import { CustomTextProps } from '.';
import { TextHierarchy } from './dto';
import { createTextStyle } from './style';

const CustomText: FC<CustomTextProps> = ({
  value,
  hierarchy,
  additionalStyle,
}: CustomTextProps): JSX.Element => {
  const textStyle = createTextStyle({
    hierarchy: hierarchy ?? TextHierarchy.PRIMARY,
    additionalStyle,
  });

  return <Text style={textStyle.textContainer}>{value}</Text>;
};

export default CustomText;
