import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import {
  CrewI,
  DragonsI,
  LandpadsI,
  MainCategories,
  MaincategoryArrayProps,
  RocketsI,
} from '../../API';
import { Spinner } from '../../atoms/spinner';
import { CustomText } from '../../atoms/text';
import useFetch from '../../hooks/useFetch';
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
  } = useFetch({ APIEndpoint });

  const buttonPropsToPass = (currentID: string, category: MainCategories) => {
    return {
      title: 'See More',
      callbackFunc: () => {
        navigation.navigate({
          name: 'SubCategories',
          params: { APIEndpoint: `${APIEndpoint}/${currentID}`, category },
        });
      },
      additionalStyle: { marginTop: 20 },
    };
  };

  const renderDOMElement = (
    currentElementData: LandpadsI | RocketsI | DragonsI | CrewI,
    _: number
  ): JSX.Element | null => {
    switch (currentScreenName) {
      case MainCategories.ROCKETS:
        const {
          id: rocketID,
          name: rocketName,
          description: rocketDescription,
          flickr_images: rocketImages,
        } = currentElementData as RocketsI;
        return (
          <CardElement
            key={rocketID}
            {...{
              name: rocketName,
              description: rocketDescription,
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
          description: dragonDescription,
        } = currentElementData as DragonsI;
        return (
          <CardElement
            key={dragonID}
            {...{
              name: dragonName,
              description: dragonDescription,
              imageSrc: dragonImages[0],
              buttonData: buttonPropsToPass(dragonID, MainCategories.DRAGONS),
            }}
          />
        );
      case MainCategories.LANDPADS:
        const {
          id: landpadID,
          name: landpadName,
          details: landpadDescription,
          images: { large: landpadImages },
        } = currentElementData as LandpadsI;
        return (
          <CardElement
            key={landpadID}
            {...{
              name: landpadName,
              description: landpadDescription,
              imageSrc: landpadImages[0],
              buttonData: buttonPropsToPass(landpadID, MainCategories.LANDPADS),
            }}
          />
        );
      case MainCategories.CREW:
        const {
          id: crewID,
          name: crewName,
          image: crewPortait,
        } = currentElementData as CrewI;
        return (
          <CardElement
            key={crewID}
            {...{
              name: crewName,
              imageSrc: crewPortait,
              buttonData: buttonPropsToPass(crewID, MainCategories.CREW),
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
        <CustomText
          value={currentScreenName}
          additionalStyle={{ fontSize: 45, marginBottom: 30 }}
        />

        {loading ? (
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Spinner />
          </View>
        ) : (
          <></>
        )}

        {errorMessage ? (
          <CustomText
            value={errorMessage}
            additionalStyle={{ textAlign: 'center' }}
          />
        ) : (
          <></>
        )}

        {/* TODO: use "FlatList" react-native built-in core */}
        {renderElements(elementData as MaincategoryArrayProps | null)}
      </View>
    </ScrollView>
  );
};

export default ElementsScreen;
