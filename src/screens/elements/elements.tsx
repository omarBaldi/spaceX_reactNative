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
import APICustomHook from '../../hooks/API-hook';
import { CardElement } from '../../molecules/cardElement';

/* TODO: replace unique key index with element ID */

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
          params: { APIEndpoint: `${APIEndpoint}/${currentID}`, category },
        });
      },
      additionalStyle: { marginTop: 20 },
    };
  };

  const renderDOMElement = (
    currentElementData: LandpadsI | RocketsI | DragonsI | CrewI,
    currentElementIndex: number
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
            key={currentElementIndex}
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
            key={currentElementIndex}
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
          full_name,
          name: landpadName,
          status,
          type,
          locality,
          region,
          landing_attempts,
          landing_successes,
          wikipedia,
          details: landpadDescription,
          launches,
          images: { large: landpadImages },
        } = currentElementData as LandpadsI;
        return (
          <CardElement
            key={currentElementIndex}
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
          agency,
          image: crewPortait,
          wikipedia: wikipediaCrewLink,
          launches: crewLaunches,
        } = currentElementData as CrewI;
        return (
          <CardElement
            key={currentElementIndex}
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
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator size='large' color='white' />
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

        {/* TODO: use "FlatList" react-native built-in core */}
        {renderElements(elementData as MaincategoryArrayProps | null)}
      </View>
    </ScrollView>
  );
};

export default ElementsScreen;
