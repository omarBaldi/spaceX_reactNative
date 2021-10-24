import React, { FC } from 'react';
import { TabNavigatorProps } from '.';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabScreenI } from './dto';

const Tab = createMaterialTopTabNavigator();

const TabNavigator: FC<TabNavigatorProps> = ({
  tabNavigatorData,
}: TabNavigatorProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: 'none',
        },
      }}
    >
      {tabNavigatorData.map((tabScreenData: TabScreenI, index: number) => {
        return <Tab.Screen key={index} {...tabScreenData} />;
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
