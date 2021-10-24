import React, { FC, useEffect } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { MainCategories, mainCategoriesAPIEndpoint } from '../../API';

const HomepageScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { name: currentScreenName }: { name: MainCategories } = route;
  const APIEndpoint: string = mainCategoriesAPIEndpoint[currentScreenName];

  return (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate({
          name: 'Category',
          params: { APIEndpoint, currentScreenName },
        })
      }
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: 5,
            fontSize: 30,
          }}
        >
          {currentScreenName}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default HomepageScreen;
