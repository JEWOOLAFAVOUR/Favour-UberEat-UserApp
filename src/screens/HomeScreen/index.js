import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ResturantItem from '../../../src/component/ResturantItem/index'
import restaurant from '../../../assets/data/restaurants.json';

const HomeScreen = () => {
  return (
    
      <FlatList
        data={restaurant}
        renderItem={({item})=><ResturantItem restaurant={item}/>}
          showsVerticalScrollIndicator={false}
          />      
  )
}

export default HomeScreen;

const styles = StyleSheet.create({});