import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { DragonsI, MainCategories, RocketsI, ShipsI } from '../../API';
import { CardElement } from '../../molecules/cardElement';

const ElementsScreen = ({ route }: { route: any }) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const {
    APIEndpoint,
    currentScreenName,
  }: { APIEndpoint: string; currentScreenName: string } = route.params;

  const [apiData, setAPIData] = useState<{ [key: string]: any }>({
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

  useEffect(() => {
    retrieveData();
  }, [APIEndpoint]);

  const buttonPropsToPass = (currentID: string) => {
    return {
      title: 'See More',
      callbackFunc: () => {
        navigation.navigate({
          name: 'SubCategories',
          params: { currentID, APIEndpoint },
        });
      },
      additionalStyle: { marginTop: 20 },
    };
  };

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
          <CardElement
            key={currentElementIndex}
            {...{
              id: rocketID,
              name: rocketName,
              description,
              imageSrc: rocketImages[0],
              buttonData: buttonPropsToPass(rocketID),
            }}
          />
        );
      case MainCategories.DRAGONS:
        const {
          id: dragonID,
          name: dragonName,
          flickr_images: dragonImages,
        } = currentElementData as DragonsI;
        return (
          <CardElement
            key={currentElementIndex}
            {...{
              id: dragonID,
              name: dragonName,
              imageSrc: dragonImages[0],
              buttonData: buttonPropsToPass(dragonID),
            }}
          />
        );
      case MainCategories.SHIPS:
        const {
          id: shipID,
          name: shipName,
          image,
        } = currentElementData as ShipsI;
        return (
          <CardElement
            key={currentElementIndex}
            {...{
              id: shipID,
              name: shipName,
              imageSrc: image,
              buttonData: buttonPropsToPass(shipID),
            }}
          />
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
