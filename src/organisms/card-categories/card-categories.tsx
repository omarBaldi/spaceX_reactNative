import React, { FC } from 'react';
import { View } from 'react-native';
import { CardCategory, CardCategoryProps } from '../../molecules/cardCategory';
import CardCategoriesProps from './dto';

const CardCategories: FC<CardCategoriesProps> = ({
  mainCategories,
}: CardCategoriesProps) => {
  return (
    <View style={{ width: '100%', padding: 16 }}>
      {mainCategories.map(
        (currentCategory: CardCategoryProps, index: number) => {
          return (
            <View key={index} style={{ marginBottom: 20 }}>
              <CardCategory {...{ ...currentCategory }} />
            </View>
          );
        }
      )}
    </View>
  );
};

export default CardCategories;
