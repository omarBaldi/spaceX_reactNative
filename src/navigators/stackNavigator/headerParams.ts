import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { StyleProp } from 'react-native';

export const headerParams = ({
  headerShown,
  headerTitle,
  headerBackTitle,
  headerCustomStyle,
  headerCustomTintColor,
  headerRightComponent,
}: {
  headerShown: boolean;
  headerTitle?: string;
  headerBackTitle?: string;
  headerCustomStyle?: StyleProp<any>;
  headerCustomTintColor?: string;
  headerRightComponent?: any;
}) => {
  return {
    headerShown,
    headerTitle: headerTitle ?? '',
    headerStyle: headerCustomStyle ?? { backgroundColor: '#080808' },
    headerTintColor: headerCustomTintColor ?? 'white',
    headerBackTitle: headerBackTitle ?? 'Back to homepage',
    headerRight: () => headerRightComponent ?? null,
  } as NativeStackNavigationOptions;
};
