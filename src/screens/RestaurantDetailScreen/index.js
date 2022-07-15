import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, FlatList } from 'react-native';
import restaurants from "../../../assets/data/restaurants.json"
import DishListItem from '../../component/DIshListItem';
import Header from './Header';
import styles from './styles';

const restaurant= restaurants[0]
const RestautantDetailPage = () => {
  return (
    <View style={styles.page}>
    {/* <DishListItem dish={restaurant.dishes[0]}/>
    <DishListItem dish={restaurant.dishes[2]}/> */}
    <FlatList data={restaurant.dishes}
        ListHeaderComponent={()=><Header restaurant={restaurant}/>}
        renderItem={({item})=><DishListItem dish={item}/>}
    />
        <Ionicons name="arrow-back-circle" size={30} color="white" style={styles.iconContainer}/>
    </View>
  )
}

export default RestautantDetailPage;

