import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { FC } from 'react';
import { Pressable, View } from 'react-native';

const GoBackButton: FC<{}> = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={{ backgroundColor: 'black' }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: '#333',
          backgroundColor: '#181818',
          height: 30,
          width: 30,
          borderRadius: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} color='white' />
        {/*  <Text style={{ color: 'white' }}>--</Text> */}
        {/* ---> Temporary */}
      </View>
    </Pressable>
  );
};

export default GoBackButton;
