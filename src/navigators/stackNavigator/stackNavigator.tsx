import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SubCategoriesScreen } from '../../../App';
import { HomepageScreen } from '../../screens/homepage';
import { ElementsScreen } from '../../screens/elements';
import { Pressable, View, Text } from 'react-native';
import { GoBackButton } from '../../atoms/goBackButton';

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
      <Stack.Screen name={currentCategory} component={HomepageScreen} />
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
        })}
        name='Category'
        component={ElementsScreen}
      />
      <Stack.Screen
        name='SubCategories'
        component={SubCategoriesScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#080808',
          },
          headerTintColor: 'white',
          headerBackTitle: `Back to ${currentCategory}`,
        }}
      />
    </Stack.Navigator>
  );
};
export default DefaultStackNavigator;
