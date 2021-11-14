import React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import {
  ImageBackground,
  View,
  Text,
  ImageBackgroundProps,
} from 'react-native';
import {
  getImagePathRequire,
  MainCategories,
  mainCategoriesAPIEndpoint,
} from '../../API';
import { PressableElement } from '../../organisms/pressableElement';

const HomepageScreen = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<ParamListBase>;
  route: any;
}) => {
  const { name: currentScreenName }: { name: MainCategories } = route;

  const APIEndpoint: string = mainCategoriesAPIEndpoint[currentScreenName];
  const getBackgroundImage: ImageBackgroundProps =
    getImagePathRequire[currentScreenName];

  return (
    <PressableElement
      callbackPressFunction={() =>
        navigation.navigate({
          name: 'Category',
          params: { APIEndpoint, currentScreenName },
        })
      }
      content={
        <>
          <ImageBackground
            source={getBackgroundImage}
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
        </>
      }
    ></PressableElement>
  );
};

export default HomepageScreen;
