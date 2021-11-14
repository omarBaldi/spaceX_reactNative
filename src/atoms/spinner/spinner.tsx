import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { SpinnerProps } from '.';
import { SpinnerSize } from './dto';

const Spinner: FC<SpinnerProps> = ({
  color = 'white',
  size = SpinnerSize.SMALL,
}: SpinnerProps): JSX.Element => {
  return <ActivityIndicator {...{ color, size }} />;
};

export default Spinner;
