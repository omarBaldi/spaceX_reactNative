import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SubCategoriesScreen } from '../../../App';
import { HomepageScreen } from '../../screens/homepage';
import { ElementsScreen } from '../../screens/elements';
import { View } from 'react-native';
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
        options={{
          headerShown: true,
          /* headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <GoBackButton />
            </View>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#080808',
          }, */
        }}
        name='Category'
        component={ElementsScreen}
      />
      <Stack.Screen name='SubCategories' component={SubCategoriesScreen} />
    </Stack.Navigator>
  );
};
export default DefaultStackNavigator;
