import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ElementScreen, ElementsScreen, HomepageScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const DefaultStackNavigator = ({
  currentCategory,
  ...rest
}: {
  currentCategory: string;
  rest: any;
}): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={currentCategory}
        component={HomepageScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        options={(...props) => ({
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#080808',
          },
          headerTintColor: 'white',
          headerBackTitle: `Back to homepage`,
          headerRight: () => (
            <Image
              source={require('../../assets/images/spaceX_logo_black.jpeg')}
              style={{ height: 40, width: 40 }}
            />
          ),
          gestureEnabled: false,
        })}
        name='Category'
        component={ElementsScreen}
      />
      <Stack.Screen
        name='SubCategories'
        component={ElementScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#080808',
          },
          headerTintColor: 'white',
          headerBackTitle: `Back to ${currentCategory}`,
          headerRight: () => (
            <Image
              source={require('../../assets/images/spaceX_logo_black.jpeg')}
              style={{ height: 40, width: 40 }}
            />
          ),
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default DefaultStackNavigator;
