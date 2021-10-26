import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { MainCategories, mainCategoriesAPIEndpoint } from './src/API';
import { NavigationContainer } from '@react-navigation/native';
import { TabScreenI } from './src/navigators/tabNavigator/dto';
import { TabNavigator } from './src/navigators/tabNavigator';
import axios from 'axios';
import { DefaultStackNavigator } from './src/navigators/stackNavigator';

/* Render the page of a specific item from ID */
export const SubCategoriesScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SubCategories Screen</Text>
    </View>
  );
};

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
