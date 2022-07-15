import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ResturantItem from './src/component/ResturantItem';
import restaurant from './assets/data/restaurants.json';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Resturant Item */}
      {/* <ResturantItem restaurants={restaurants[0]}/>
      <ResturantItem restaurants={restaurants[1]}/> */}

      <FlatList
        data={restaurant}
        renderItem={({item})=><ResturantItem restaurant={item}/>}
          showsVerticalScrollIndicator={false}
          />      
          <StatusBar style='auto'/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingVertical: 30,
  },
});