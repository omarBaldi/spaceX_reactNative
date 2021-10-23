/* eslint-disable */
import React, { useEffect, useMemo, useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { BASE_API_URL, MainCategoriesAPI, shipsAPI } from './src/API';
import { primaryColor } from './src/common/styles/colors';
import { CardCategories } from './src/organisms/card-categories';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const configStackScreenAnimation = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const getMainCategories = () => {
  return [
    {
      title: 'Rockets',
      imageURL:
        'https://randomwordgenerator.com/img/picture-generator/53e0d4464257ab14f1dc8460962e33791c3ad6e04e507440762a7cd0934fc5_640.jpg',
      apiURL: MainCategoriesAPI.ROCKETS_API_URL,
    },
    {
      title: 'Dragons',
      imageURL:
        'https://randomwordgenerator.com/img/picture-generator/53e0d4464257ab14f1dc8460962e33791c3ad6e04e507440762a7cd0934fc5_640.jpg',

      apiURL: MainCategoriesAPI.DRAGONS_API_URL,
    },
    {
      title: 'Launches',
      imageURL:
        'https://randomwordgenerator.com/img/picture-generator/53e0d4464257ab14f1dc8460962e33791c3ad6e04e507440762a7cd0934fc5_640.jpg',

      apiURL: MainCategoriesAPI.LAUNCHES_API_URL,
    },
  ];
};

enum MainCategories {
  ROCKETS = 'Rockets',
  DRAGONS = 'Dragons',
  SHIPS = 'Ships',
}

const mainCategoriesAPIEndpoint = {
  [MainCategories.ROCKETS]: `${BASE_API_URL}/rockets`,
  [MainCategories.DRAGONS]: `${BASE_API_URL}/dragons`,
  [MainCategories.SHIPS]: `${BASE_API_URL}/ships`,
};

/* Render the IMAGE for the MAIN CATEGORIES */
const CommonTabNavigatorScreen = ({
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
const CategoryScreen = ({
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
const SubCategoriesScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SubCategories Screen</Text>
    </View>
  );
};

/* Main Categories Screens */

const RocketsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* The first route will be an image of the rockets page */}
      <Stack.Screen
        name={MainCategories.ROCKETS}
        component={CommonTabNavigatorScreen}
      />
      {/* The second one will be the rockets retieved from the API */}
      <Stack.Screen
        name='Category'
        component={CategoryScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: 'black' },
        }}
      />
      {/* The third and last one will be a specific rocket (retrieved from ID) */}
      <Stack.Screen name='SubCategories' component={SubCategoriesScreen} />
    </Stack.Navigator>
  );
};

const DragonsScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* The first route will be an image of the rockets page */}
      <Stack.Screen
        name={MainCategories.DRAGONS}
        component={CommonTabNavigatorScreen}
      />
      {/* The second one will be the rockets retieved from the API */}
      <Stack.Screen
        name='Category'
        component={CategoryScreen}
        options={{ headerShown: true, backgroundColor: 'black' }}
      />
      {/* The third and last one will be a specific rocket (retrieved from ID) */}
      <Stack.Screen name='SubCategories' component={SubCategoriesScreen} />
    </Stack.Navigator>
  );
};

const ShipsScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* The first route will be an image of the rockets page */}
      <Stack.Screen
        name={MainCategories.SHIPS}
        component={CommonTabNavigatorScreen}
      />
      {/* The second one will be the rockets retieved from the API */}
      <Stack.Screen
        name='Category'
        component={CategoryScreen}
        options={{ headerShown: true, backgroundColor: 'black' }}
      />
      {/* The third and last one will be a specific rocket (retrieved from ID) */}
      <Stack.Screen name='SubCategories' component={SubCategoriesScreen} />
    </Stack.Navigator>
  );
};

/* APP - entry point */

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            display: 'none',
          },
        }}
      >
        <Tab.Screen name={MainCategories.ROCKETS} component={RocketsScreen} />
        <Tab.Screen name={MainCategories.DRAGONS} component={DragonsScreen} />
        <Tab.Screen name={MainCategories.SHIPS} component={ShipsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
