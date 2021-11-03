import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomepageScreen } from '../../screens/homepage';
import { ElementsScreen } from '../../screens/elements';
import { View, Text } from 'react-native';
import { ElementScreen } from '../../screens/element';

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
            <View>
              <Text style={{ color: 'white' }}>{currentCategory}</Text>
            </View>
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
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default DefaultStackNavigator;
