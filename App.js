import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ResturantItem from './src/component/ResturantItem';
import restaurant from './assets/data/restaurants.json';
import HomeScreen from './src/screens/HomeScreen';
import RestautantDetailPage from './src/screens/RestaurantDetailScreen';
import DishDetailsScreen from './src/screens/DishDetailScreen';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Resturant Item */}
      {/* <ResturantItem restaurants={restaurants[0]}/>
      <ResturantItem restaurants={restaurants[1]}/> */}
          {/* <HomeScreen/>     */}
          {/* <RestautantDetailPage/> */}
          <DishDetailsScreen/>
          <StatusBar style='light'/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  // padding: 10,
  //   paddingVertical: 30,  
  },
});