import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const ElementScreen = ({ route }: { route: any }) => {
  const { currentID, APIEndpoint }: { currentID: string; APIEndpoint: string } =
    route.params;

  const [currentElementData, setCurrentElementData] = useState<{
    [key: string]: boolean | string | any[];
  }>({
    loading: false,
    currentData: [],
    error: '',
  });

  const updateElementData = (
    currentKey: string,
    currentValue: boolean | string | any[]
  ): void => {
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
      console.log(data);
    } catch (err) {
      updateElementData('error', (err as any).message);
    } finally {
      updateElementData('loading', false);
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
      <Text style={{ color: 'white' }}>Retrieve api for {currentID}</Text>
    </View>
  );
};

export default ElementScreen;
