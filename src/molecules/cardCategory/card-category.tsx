import React, { FC } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { CardCategoryProps } from '.';
import { cardCategoryStyle as Styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const CardCategory: FC<CardCategoryProps> = ({
  title,
  imageURL,
  apiURL,
}: CardCategoryProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate({
          name: 'Category',
          params: { apiURL },
        })
      }
    >
      <View style={Styles.mainContainer}>
        <Image source={{ uri: imageURL }} style={Styles.cardImage} />
        <View style={Styles.cardImageOverlay} />
        <Text style={Styles.cardText}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CardCategory;
