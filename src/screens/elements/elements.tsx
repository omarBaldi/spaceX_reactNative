import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { MainCategories, mainCategoriesAPIEndpoint } from '../../API';

const ElementsScreen = ({
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

  const updateAPIdata = (currentKey: string, updatedValue: any): void => {
    setAPIData((prevState) => {
      return { ...prevState, [currentKey]: updatedValue };
    });
  };

  const retrieveData = async (): Promise<void> => {
    updateAPIdata('loading', true);

    try {
      const { data } = await axios({ method: 'GET', url: APIEndpoint });
      //As soon as I retrieve the data, I need to check which APIEndpoint is that
      //and using the code below
      /* 
        let currentData;
        switch(APIEndpoint) {
            case (): 
                currentData = data as RocketsI[];
                break;
            case (): 
                currentData = data as Dragons[];
                break;
            case (): 
                currentData = data as Ships[];
                break;
        }
      */
      updateAPIdata('currentData', data);
    } catch (err) {
      updateAPIdata('error', (err as any).message);
    } finally {
      updateAPIdata('loading', false);
    }
  };

  useEffect(() => {
    retrieveData();
  }, [APIEndpoint]);

  const renderDOMElement = (
    currentElementData: any,
    currentElementIndex: number
  ) => {
    switch (currentScreenName) {
      case MainCategories.ROCKETS:
        return (
          <View key={currentElementIndex}>
            <Text style={{ color: 'white' }}>Render Rocket element here</Text>
          </View>
        );
      case MainCategories.DRAGONS:
        return (
          <View key={currentElementIndex}>
            <Text style={{ color: 'white' }}>Render Dragons element here</Text>
          </View>
        );
      case MainCategories.SHIPS:
        return (
          <View key={currentElementIndex}>
            <Text style={{ color: 'white' }}>Render Ships element here</Text>
          </View>
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
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 50,
          backgroundColor: 'black',
          minHeight: '100%',
        }}
      >
        {apiData.currentData.map(renderDOMElement)}
      </View>
    </ScrollView>
  );
};

export default ElementsScreen;
