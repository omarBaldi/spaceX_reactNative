import { useEffect, useState } from 'react';
import { MaincategoryArrayProps, MainCategoryProps } from '../API';
import axios from 'axios';

export interface APIDataI {
  loading: boolean;
  elementData: MainCategoryProps | MaincategoryArrayProps | null;
  error: string;
}

const APICustomHook = ({ APIEndpoint }: { APIEndpoint: string }) => {
  const [currentElementData, setCurrentElementData] = useState<APIDataI>({
    loading: false,
    elementData: null,
    error: '',
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
      console.log(data);
      updateElementData('elementData', data);
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
