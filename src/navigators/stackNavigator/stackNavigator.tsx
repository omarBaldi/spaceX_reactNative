import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CategoryScreen,
  CommonTabNavigatorScreen,
  SubCategoriesScreen,
} from '../../../App';

const Stack = createNativeStackNavigator();

const DefaultStackNavigator = ({
  currentCategory,
  ...rest
}: {
  currentCategory: string;
  rest: any;
}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={currentCategory}
        component={CommonTabNavigatorScreen}
      />
      <Stack.Screen
        name='Category'
        component={CategoryScreen}
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
