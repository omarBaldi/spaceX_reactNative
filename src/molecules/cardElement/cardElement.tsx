import React, { FC } from 'react';
import { View, Image, Text } from 'react-native';
import { CardElementProps } from '.';
import { CustomButton } from '../../atoms/button';

const CardElement: FC<CardElementProps> = ({
  imageSrc,
  name,
  id,
  description,
  buttonData,
}: CardElementProps) => {
  return (
    <View
      style={{
        width: '100%',
        marginBottom: 30,
      }}
    >
      {/* Image */}
      <View
        style={{
          height: 170,
          width: '100%',
          overflow: 'hidden',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <Image
          source={{ uri: imageSrc }}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      {/* Text */}
      <View
        style={{
          paddingTop: 20,
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 20,
          backgroundColor: '#222',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: 30,
            marginBottom: 10,
          }}
        >
          {name}
        </Text>
        {description ? (
          <Text
            numberOfLines={3}
            style={{
              color: 'lightgrey',
              fontWeight: '500',
              fontSize: 15,
            }}
          >
            {description}
          </Text>
        ) : (
          <></>
        )}
        <CustomButton {...buttonData} />
      </View>
    </View>
  );
};

export default CardElement;
