import React from 'react';
import { MainCategories } from './src/API';
import { NavigationContainer } from '@react-navigation/native';
import { TabScreenI } from './src/navigators/tabNavigator/dto';
import { TabNavigator } from './src/navigators/tabNavigator';
import { DefaultStackNavigator } from './src/navigators/stackNavigator';

/* APP - entry point */
export default function App() {
  const getMainCategoriesNavigators = () => {
    return Object.values(MainCategories).reduce((acc, value: string) => {
      const tabScreenName: string = value.concat('Navigator');
      return [
        ...acc,
        {
          name: tabScreenName,
          children: (props: any) => {
            return <DefaultStackNavigator currentCategory={value} {...props} />;
          },
        },
      ];
    }, [] as TabScreenI[]);
  };

  return (
    <NavigationContainer>
      <TabNavigator
        {...{
          tabNavigatorData: getMainCategoriesNavigators(),
        }}
      />
    </NavigationContainer>
  );
}
