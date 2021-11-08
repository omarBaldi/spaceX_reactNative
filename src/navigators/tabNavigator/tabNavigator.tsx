import React, { FC } from 'react';
import { TabNavigatorProps } from '.';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabScreenI } from './dto';
import { useNavigationState } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const TabNavigator: FC<TabNavigatorProps> = ({
  tabNavigatorData,
}: TabNavigatorProps) => {
  const navigationState = useNavigationState((state) => state);

  const shouldEnableSwipingOption = (): boolean => {
    /* If there is at least one index greater than 1 should set to swiping false */
    const allowSwiping: boolean =
      !navigationState?.routes.find((el) => el.state?.index) ?? true;
    return allowSwiping;
  };

  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          swipeEnabled: shouldEnableSwipingOption(),
          tabBarStyle: {
            display: 'none',
          },
        };
      }}
    >
      {tabNavigatorData.map((tabScreenData: TabScreenI, index: number) => {
        return <Tab.Screen key={index} {...tabScreenData} />;
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
