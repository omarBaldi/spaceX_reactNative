import React from 'react';
import { View, Text } from 'react-native';
import {
  DragonsI,
  MainCategories,
  MainCategoryProps,
  RocketsI,
  ShipsI,
} from '../../API';
import { CustomText } from '../../atoms/text';
import { TextHierarchy } from '../../atoms/text/dto';
import APICustomHook from '../../hooks/API-hook';

const ElementScreen = ({ route }: { route: any }) => {
  const {
    currentID,
    APIEndpoint,
    category,
  }: { currentID: string; APIEndpoint: string; category: MainCategories } =
    route.params;

  const {
    loading,
    error: errorMessage,
    elementData,
  } = APICustomHook({ APIEndpoint: `${APIEndpoint}/${currentID}` });

  const renderElementData = (
    current: MainCategoryProps
  ): JSX.Element | null => {
    switch (category) {
      case MainCategories.ROCKETS:
        const {
          name: rocketName,
          description,
          height: { meters: rocketHeight },
          diameter: { meters: rocketDiameter },
          mass: { kg },
          cost_per_launch,
          country,
          success_rate_pct,
        } = current as RocketsI;
        console.log(current);
        return (
          <View style={{ flex: 1, width: '100%', padding: 30 }}>
            <CustomText value={rocketName} />
            {/* +--------------------------------------------------------- */}
            <CustomText
              value={description}
              hierarchy={TextHierarchy.SECONDARY}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Height' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText value={rocketHeight} />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Diameter' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText value={`${rocketDiameter} M`} />
            {/* +--------------------------------------------------------- */}
            <CustomText value='Mass' hierarchy={TextHierarchy.SECONDARY} />
            <CustomText
              value={`${new Intl.NumberFormat('en-US').format(Number(kg))} KG`}
            />
            {/* +--------------------------------------------------------- */}
            <CustomText
              value='Cost for launch'
              hierarchy={TextHierarchy.SECONDARY}
            />
            <CustomText value={cost_per_launch} />
            {/* +--------------------------------------------------------- */}
            <CustomText
              value='Success rate'
              hierarchy={TextHierarchy.SECONDARY}
            />
            <CustomText value={success_rate_pct} />
            {/* +--------------------------------------------------------- */}
          </View>
        );
      case MainCategories.DRAGONS:
        const {} = current as DragonsI;
        return <View></View>;
      case MainCategories.SHIPS:
        const {} = current as ShipsI;
        return <View></View>;
      default:
        return null;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#080808',
      }}
    >
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

      {!elementData || !Object.keys(elementData).length ? (
        <></>
      ) : (
        renderElementData(elementData as MainCategoryProps)
      )}
    </View>
  );
};

export default ElementScreen;
