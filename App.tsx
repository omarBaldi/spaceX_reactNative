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

/* Render the IMAGE for the MAIN CATEGORIES */
export const CommonTabNavigatorScreen = ({
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

/* Page that render the data from the API endpoint passed as a param depending on the main category clicked */
export const CategoryScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {
    APIEndpoint,
    currentScreenName,
  }: { APIEndpoint: string; currentScreenName: string } = route.params;

  const [apiData, setAPIData] = useState({
    loading: false,
    currentData: [],
    error: '',
  });

  const retrieveData = async (): Promise<void> => {
    try {
      const { data } = await axios({ method: 'GET', url: APIEndpoint });
      setAPIData((prevState) => {
        return { ...prevState, currentData: data as [], error: '' };
      });
    } catch (err) {
      setAPIData((prevState) => {
        return { ...prevState, currentData: [], error: (err as any).message };
      });
    }
  };

  useEffect(() => {
    retrieveData();
  }, [APIEndpoint]);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 50,
          backgroundColor: 'black',
          minHeight: '100%',
        }}
      >
        {apiData.currentData.map(
          (
            {
              //description,
              name,
              /* active,
              cost_per_launch, */
              flickr_images,
            }: /*  success_rate_pct,
              mass: { kg },
              height: { meters }, */
            {
              //description: string;
              name: string;
              /* active: boolean;
              cost_per_launch: number;
              success_rate_pct: number;
              mass: { kg: number };
              height: { meters: number }; */
              flickr_images: string[];
            },
            index: number
          ) => {
            return (
              <View
                key={index}
                style={{
                  width: '100%',
                  marginBottom: 30,
                }}
              >
                <View
                  style={{
                    height: 230,
                    width: '100%',
                    overflow: 'hidden',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                >
                  <Image
                    source={{ uri: flickr_images[0] }}
                    style={{ width: '100%', height: '100%' }}
                  />
                </View>
                <View
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 10,

                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <Text
                    style={{ color: 'white', fontWeight: '700', fontSize: 20 }}
                  >
                    {name}
                  </Text>
                  {/* <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text>{cost_per_launch}</Text>
                    <Text>{success_rate_pct}</Text>
                    <Text>{kg}</Text>
                    <Text>{meters}</Text>
                  </View> */}
                </View>
              </View>
            );
          }
        )}
      </View>
    </ScrollView>
  );
};

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
    return Object.entries(MainCategories).reduce(
      (acc, [_, value]: [string, string]) => {
        const tabScreenName: string = value.concat('Navigator');
        return [
          ...acc,
          {
            name: tabScreenName,
            children: (props: any) => {
              return (
                <DefaultStackNavigator currentCategory={value} {...props} />
              );
            },
          },
        ];
      },
      [] as TabScreenI[]
    );
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
