import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { DragonsI, MainCategories, RocketsI, ShipsI } from '../../API';

const ElementScreen = ({ route }: { route: any }) => {
  const {
    currentID,
    APIEndpoint,
    category,
  }: { currentID: string; APIEndpoint: string; category: MainCategories } =
    route.params;

  const [currentElementData, setCurrentElementData] = useState({
    loading: false as boolean,
    elementData: {} as RocketsI | DragonsI | ShipsI,
    error: '' as string,
  });

  const updateElementData = (currentKey: string, currentValue: any): void => {
    setCurrentElementData((prevState) => {
      return { ...prevState, [currentKey]: currentValue };
    });
  };

  const retrieveDataCurrentElement = async (): Promise<void> => {
    updateElementData('loading', true);

    try {
      const { data } = await axios({
        method: 'GET',
        url: `${APIEndpoint}/${currentID}`,
      });
      updateElementData('elementData', data as RocketsI | DragonsI | ShipsI);
    } catch (err) {
      updateElementData('error', (err as any).message);
    } finally {
      updateElementData('loading', false);
    }
  };

  const renderElementData = (): JSX.Element | null => {
    switch (category) {
      case MainCategories.ROCKETS:
        const {
          name: rocketName,
          description,
          height: { meters: rocketHeight },
          diameter: { meters: rocketDiameter },
          mass: { kg },
        } = currentElementData.elementData as RocketsI;
        return (
          <View style={{ flex: 1, width: '100%', padding: 30 }}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 35 }}>
              {rocketName}
            </Text>
            <Text
              style={{ color: 'lightgrey', fontWeight: '700', fontSize: 20 }}
            >
              {description}
            </Text>
            <Text style={{ color: 'lightgrey', fontSize: 20 }}>Height</Text>
            <Text
              style={{ color: 'white', fontWeight: '700', fontSize: 30 }}
            >{`${rocketHeight} M`}</Text>
            <Text style={{ color: 'lightgrey', fontSize: 20 }}>Diameter</Text>
            <Text
              style={{ color: 'white', fontWeight: '700', fontSize: 30 }}
            >{`${rocketDiameter} M`}</Text>
            <Text style={{ color: 'lightgrey', fontSize: 20 }}>Mass</Text>
            <Text
              style={{ color: 'white', fontWeight: '700', fontSize: 30 }}
            >{`${new Intl.NumberFormat('en-US').format(Number(kg))} KG`}</Text>
          </View>
        );
      case MainCategories.DRAGONS:
        const {} = currentElementData.elementData as DragonsI;
        return <View></View>;
      case MainCategories.SHIPS:
        const {} = currentElementData.elementData as ShipsI;
        return <View></View>;
      default:
        return null;
    }
  };

  useEffect(() => {
    retrieveDataCurrentElement();
  }, [currentID]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#080808',
      }}
    >
      {Object.keys(currentElementData.elementData).length &&
        renderElementData()}
    </View>
  );
};

export default ElementScreen;
