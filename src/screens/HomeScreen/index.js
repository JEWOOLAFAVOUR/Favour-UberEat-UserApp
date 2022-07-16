import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import ResturantItem from '../../../src/component/ResturantItem/index'
import restaurant from '../../../assets/data/restaurants.json';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurant}
        renderItem={({item})=><ResturantItem restaurant={item}/>}
          showsVerticalScrollIndicator={false}
          />      
          </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
});