import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ResturantItem from './src/component/ResturantItem';
import restaurant from './assets/data/restaurants.json';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Resturant Item */}
      <ResturantItem title="First Resturant"/>
      <ResturantItem title="Second Resturant"/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});