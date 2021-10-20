import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { shipsAPI } from './src/API';
import { primaryColor } from './src/common/styles/colors';
import { CardCategory } from './src/molecules/cardCategory';

export default function App() {
  const testCallAPI = async (): Promise<void> => {
    try {
      const ships = await shipsAPI.getAll();
      console.log(ships);
    } catch (err) {
      console.log((err as any).message);
    }
  };

  useEffect(() => {
    testCallAPI();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {[...new Array(10)].map((_, index) => {
        return (
          <View key={index} style={{ marginBottom: 10 }}>
            <CardCategory />;
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    padding: 32,
  },
});
