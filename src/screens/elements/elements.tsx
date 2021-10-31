import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, Text, Pressable } from 'react-native';
import { DragonsI, MainCategories, RocketsI, ShipsI } from '../../API';

const ElementsScreen = ({ route }: { route: any }) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const {
    APIEndpoint,
    currentScreenName,
  }: { APIEndpoint: string; currentScreenName: string } = route.params;

  const [apiData, setAPIData] = useState({
    loading: false,
    currentData: [],
    error: '',
  });

  const updateAPIdata = (currentKey: string, updatedValue: any): void => {
    setAPIData((prevState) => {
      return { ...prevState, [currentKey]: updatedValue };
    });
  };

  /* TODO: create custom hook to call API endpoint */
  const retrieveData = async (): Promise<void> => {
    updateAPIdata('loading', true);

    try {
      const { data } = await axios({ method: 'GET', url: APIEndpoint });
      updateAPIdata('currentData', data);
    } catch (err) {
      updateAPIdata('error', (err as any).message as string);
    } finally {
      updateAPIdata('loading', false);
    }
  };

  const PressableElementContainer = ({
    currentID,
    children,
  }: {
    currentID: string;
    children: JSX.Element;
  }) => (
    <Pressable
      onPress={() =>
        navigation.navigate({
          name: 'SubCategories',
          params: { currentID, APIEndpoint },
        })
      }
    >
      {children}
    </Pressable>
  );

  useEffect(() => {
    retrieveData();
  }, [APIEndpoint]);

  const renderDOMElement = (
    currentElementData: ShipsI | RocketsI | DragonsI,
    currentElementIndex: number
  ) => {
    switch (currentScreenName) {
      case MainCategories.ROCKETS:
        const {
          id: rocketID,
          name: rocketName,
          description,
          flickr_images: rocketImages,
        } = currentElementData as RocketsI;
        return (
          <PressableElementContainer currentID={rocketID}>
            <View
              key={currentElementIndex}
              style={{
                width: '100%',
                marginBottom: 30,
              }}
            >
              {/* Image */}
              <View
                style={{
                  height: 170,
                  width: '100%',
                  overflow: 'hidden',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <Image
                  source={{ uri: rocketImages[0] }}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              {/* Text */}
              <View
                style={{
                  paddingTop: 20,
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingBottom: 20,
                  backgroundColor: '#222',
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: 30,
                    marginBottom: 10,
                  }}
                >
                  {rocketName}
                </Text>
                <Text
                  numberOfLines={3}
                  style={{
                    color: 'lightgrey',
                    fontWeight: '500',
                    fontSize: 15,
                  }}
                >
                  {description}
                </Text>
              </View>
            </View>
          </PressableElementContainer>
        );
      case MainCategories.DRAGONS:
        const {
          id: dragonID,
          name: dragonName,
          crew_capacity,
          flickr_images: dragonImages,
        } = currentElementData as DragonsI;
        return (
          <PressableElementContainer currentID={dragonID}>
            <View
              key={currentElementIndex}
              style={{
                width: '100%',
                marginBottom: 30,
              }}
            >
              {/* Image */}
              <View
                style={{
                  height: 170,
                  width: '100%',
                  overflow: 'hidden',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <Image
                  source={{ uri: dragonImages[0] }}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              {/* Text */}
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 10,
                  backgroundColor: '#222',
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: '#a21232',
                    fontWeight: '700',
                    fontSize: 20,
                  }}
                >
                  Name: {dragonName}
                </Text>
                <Text
                  style={{ color: 'white', fontWeight: '500', fontSize: 15 }}
                >
                  Crew capacity: {crew_capacity}
                </Text>
              </View>
            </View>
          </PressableElementContainer>
        );
      case MainCategories.SHIPS:
        const {
          id: shipID,
          name: shipName,
          image,
          type,
          home_port,
        } = currentElementData as ShipsI;
        return (
          <PressableElementContainer currentID={shipID}>
            <View
              key={currentElementIndex}
              style={{
                width: '100%',
                marginBottom: 30,
              }}
            >
              {/* Image */}
              <View
                style={{
                  height: 170,
                  width: '100%',
                  overflow: 'hidden',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                {/* TODO: test on Image URL if null/undefined */}
                <Image
                  source={{ uri: image }}
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              {/* Text */}
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 10,
                  //backgroundColor: '#222',
                  backgroundColor: '#181818',
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: 20,
                    marginBottom: 15,
                  }}
                >
                  Name: {shipName}
                </Text>
                <Text
                  style={{
                    color: 'lightgrey',
                    marginBottom: 5,
                    fontWeight: '500',
                    fontSize: 15,
                  }}
                >
                  Type: {type}
                </Text>
                <Text
                  style={{
                    color: 'lightgrey',

                    fontWeight: '500',
                    fontSize: 15,
                  }}
                >
                  Home port: {home_port}
                </Text>
              </View>
            </View>
          </PressableElementContainer>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 50,
          backgroundColor: '#080808',
          minHeight: '100%',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: 45,
            marginBottom: 30,
          }}
        >
          {currentScreenName}
        </Text>

        {apiData.loading ? (
          <View>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              Loading...
            </Text>
          </View>
        ) : (
          <></>
        )}

        {apiData.error ? (
          <View>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              {apiData.error}
            </Text>
          </View>
        ) : (
          <></>
        )}
        {apiData.currentData.map(renderDOMElement)}
      </View>
    </ScrollView>
  );
};

export default ElementsScreen;
