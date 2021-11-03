import { FC, useEffect, useState } from 'react';
import { DragonsI, RocketsI, ShipsI } from '../API';
import axios from 'axios';

const APICustomHook = ({ APIEndpoint }: { APIEndpoint: string }) => {
  const [currentElementData, setCurrentElementData] = useState({
    loading: false as boolean,
    elementData: {} as any,
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
        url: APIEndpoint,
      });
      updateElementData('elementData', data as RocketsI | DragonsI | ShipsI);
    } catch (err) {
      updateElementData('error', (err as any).message);
    } finally {
      updateElementData('loading', false);
    }
  };

  useEffect(() => {
    retrieveDataCurrentElement();
  }, [APIEndpoint]);

  const { loading, elementData, error } = currentElementData;
  return { loading, elementData, error };
};

export default APICustomHook;
