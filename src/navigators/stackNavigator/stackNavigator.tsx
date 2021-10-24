import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SubCategoriesScreen } from '../../../App';
import { HomepageScreen } from '../../screens/homepage';
import { ElementsScreen } from '../../screens/elements';

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
        name='Category'
        component={ElementsScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: 'black' },
        }}
      />
      <Stack.Screen name='SubCategories' component={SubCategoriesScreen} />
    </Stack.Navigator>
  );
};
export default DefaultStackNavigator;
