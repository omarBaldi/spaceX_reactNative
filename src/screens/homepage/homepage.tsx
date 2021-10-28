import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Pressable, View, Text } from 'react-native';
import {
  getImagePathRequire,
  MainCategories,
  mainCategoriesAPIEndpoint,
} from '../../API';

const HomepageScreen = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<ParamListBase>;
  route: any;
}) => {
  const { name: currentScreenName }: { name: MainCategories } = route;
  const APIEndpoint: string = mainCategoriesAPIEndpoint[currentScreenName];

  const getBackgroundImage = () => {
    return getImagePathRequire[currentScreenName];
  };

  return (
    <Pressable
      onPress={() =>
        navigation.navigate({
          name: 'Category',
          params: { APIEndpoint, currentScreenName },
        })
      }
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={getBackgroundImage()}
        resizeMode='cover'
        style={{ flex: 1 }}
      />

      <View
        style={{
          flex: 1,
          zIndex: 10,
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.4,
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
        }}
      ></View>

      <Text
        style={{
          color: 'white',
          fontSize: 60,
          position: 'absolute',
          bottom: 80,
          left: 25,
          fontWeight: '700',
          zIndex: 20,
        }}
      >
        {currentScreenName}
      </Text>
    </Pressable>
  );
};

export default HomepageScreen;
