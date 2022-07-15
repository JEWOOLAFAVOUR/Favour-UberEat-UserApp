import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import restaurants from "../../../assets/data/restaurants.json"
import DishListItem from '../../component/DIshListItem';

const restaurant= restaurants[0]
const RestautantDetailPage = () => {
  return (
    <View style={styles.page}>
        <Image source={{uri: restaurant.image}} style={styles.image}/>
    <View style={styles.iconContainer}>
        <Ionicons name="arrow-back-circle" size={30} color="white" style={styles.imageIcon}/>
    </View>
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subTitle}>
        $ ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
        {restaurant.maxDeliveryTime} minutes</Text>    
    </View>
    {/* <DishListItem dish={restaurant.dishes[0]}/>
    <DishListItem dish={restaurant.dishes[2]}/> */}
    <FlatList data={restaurant.dishes}
        renderItem={({item})=><DishListItem dish={item}/>}
    />
    </View>
  )
}

export default RestautantDetailPage;

const styles = StyleSheet.create({
    page:{
        flex: 1,
    },
    image:{
        width: '100%',
        aspectRatio: 4 / 3,
    },
    container:{
        margin: 10,
    },
    iconContainer:{
        position: 'absolute',
        top: 50,
        left: 10,
    },
    title:{
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10,
    },
    subTitle:{
        color: '#525252',
        fontSize: 15,
    },
});