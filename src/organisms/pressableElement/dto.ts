import { GestureResponderEvent, StyleProp } from 'react-native';

type PressableElementProps = {
  callbackPressFunction: (event: GestureResponderEvent) => void;
  content: JSX.Element;
  additionalStyle?: StyleProp<any>;
};

export default PressableElementProps;
