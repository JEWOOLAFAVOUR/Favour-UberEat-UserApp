import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import restaurants from "../../../assets/data/restaurants.json"

const restaurant= restaurants[0]
const RestautantDetailPage = () => {
  return (
    <View style={styles.page}>
        <Image source={{uri: restaurant.image}} style={styles.image}/>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subTitle}>
        $ ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
        {restaurant.maxDeliveryTime} minutes</Text>    
    </View>
  )
}

export default RestautantDetailPage;

const styles = StyleSheet.create({
    page:{
        flex: 1,
        padding: 10,
    },
    image:{
        width: '100%',
        aspectRatio: 4 / 3,
    },
});