import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import {
  DragonsI,
  MainCategories,
  MaincategoryArrayProps,
  MainCategoryProps,
  RocketsI,
  ShipsI,
} from '../../API';
import APICustomHook from '../../hooks/API-hook';
import { CardElement } from '../../molecules/cardElement';

const ElementsScreen = ({ route }: { route: any }) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const {
    APIEndpoint,
    currentScreenName,
  }: { APIEndpoint: string; currentScreenName: string } = route.params;

  const {
    loading,
    error: errorMessage,
    elementData,
  } = APICustomHook({ APIEndpoint });

  const buttonPropsToPass = (currentID: string, category: MainCategories) => {
    return {
      title: 'See More',
      callbackFunc: () => {
        navigation.navigate({
          name: 'SubCategories',
          params: { currentID, APIEndpoint, category },
        });
      },
      additionalStyle: { marginTop: 20 },
    };
  };

  const renderDOMElement = (
    currentElementData: ShipsI | RocketsI | DragonsI,
    currentElementIndex: number
  ): JSX.Element | null => {
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
              buttonData: buttonPropsToPass(rocketID, MainCategories.ROCKETS),
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
              buttonData: buttonPropsToPass(dragonID, MainCategories.DRAGONS),
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
              buttonData: buttonPropsToPass(shipID, MainCategories.SHIPS),
            }}
          />
        );
      default:
        return null;
    }
  };

  const renderElements = (
    currentData: MaincategoryArrayProps | null
  ): JSX.Element | (JSX.Element | null)[] => {
    if (!currentData || !currentData.length) return <></>;
    return currentData.map(renderDOMElement);
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

        {loading ? (
          <View>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              Loading...
            </Text>
          </View>
        ) : (
          <></>
        )}

        {errorMessage ? (
          <View>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              {errorMessage}
            </Text>
          </View>
        ) : (
          <></>
        )}

        {renderElements(elementData as MaincategoryArrayProps | null)}
      </View>
    </ScrollView>
  );
};

export default ElementsScreen;
