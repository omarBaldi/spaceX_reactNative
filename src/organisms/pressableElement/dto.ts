import { GestureResponderEvent } from 'react-native';

type PressableElementProps = {
  callbackPressFunction: (event: GestureResponderEvent) => void;
  content: JSX.Element;
};

export default PressableElementProps;
