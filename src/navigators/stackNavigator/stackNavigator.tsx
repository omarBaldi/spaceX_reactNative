import React, { useMemo } from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ElementScreen, ElementsScreen, HomepageScreen } from '../../screens';
import { headerParams } from './headerParams';

const Stack = createNativeStackNavigator();

export const defaultHeaderRightElement: JSX.Element = (
  <Image
    source={require('../../assets/images/spaceX_logo_black.jpeg')}
    style={{ height: 40, width: 40 }}
  />
);

const DefaultStackNavigator = ({
  currentCategory,
}: {
  currentCategory: string;
}): JSX.Element => {
  const commonScreens = useMemo(() => {
    return [
      {
        name: 'Category',
        component: ElementsScreen,
        options: headerParams({
          headerShown: true,
          headerRightComponent: defaultHeaderRightElement,
        }),
      },
      {
        name: 'SubCategories',
        component: ElementScreen,
        options: headerParams({
          headerShown: true,
          headerBackTitle: `Back to ${currentCategory}`,
          headerRightComponent: defaultHeaderRightElement,
        }),
      },
    ];
  }, []);

  return (
    <Stack.Navigator>
      {[
        {
          name: currentCategory,
          component: HomepageScreen,
          options: headerParams({ headerShown: false }),
        },
        ...commonScreens,
      ].map((screenData, index) => {
        return <Stack.Screen key={index} {...screenData} />;
      })}
    </Stack.Navigator>
  );
};
export default DefaultStackNavigator;
