import React from 'react';
import { View, Text, Image } from 'react-native';
import { cardCategoryStyle as Styles } from './style';

const CardCategory = () => {
  const randomURLImages: string[] = [
    'https://randomwordgenerator.com/img/picture-generator/55e2d4474352a814f1dc8460962e33791c3ad6e04e507440742878d39244cc_640.jpg',
    'https://randomwordgenerator.com/img/picture-generator/5ee8d4435754a809ea898279c02132761022dfe05b567648722c7cd4_640.jpg',
    'https://randomwordgenerator.com/img/picture-generator/54e6d5464f52ae14f1dc8460962e33791c3ad6e04e50744172297cdc9e48c3_640.jpg',
    'https://randomwordgenerator.com/img/picture-generator/57e5d14a4c51a514f1dc8460962e33791c3ad6e04e507440752f78d09745c2_640.jpg',
  ];

  const getRandomURL = (min = 0, max = 3): string => {
    const randomIndex: number = Math.floor(Math.random() * (max - min) + min);
    return randomURLImages[randomIndex];
  };

  return (
    <View style={Styles.mainContainer}>
      <Image source={{ uri: getRandomURL() }} style={Styles.cardImage} />
    </View>
  );
};

export default CardCategory;
