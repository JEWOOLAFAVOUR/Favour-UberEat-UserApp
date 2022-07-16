import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, FlatList } from 'react-native';
import restaurants from "../../../assets/data/restaurants.json"
import DishListItem from '../../component/DIshListItem';
import Header from './Header';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';

const restaurant= restaurants[0]
const RestautantDetailPage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  console.warn(id);
    
  return (
    <View style={styles.page}>
    {/* <DishListItem dish={restaurant.dishes[0]}/>
    <DishListItem dish={restaurant.dishes[2]}/> */}
    <FlatList data={restaurant.dishes}
        ListHeaderComponent={()=><Header restaurant={restaurant}/>}
        renderItem={({item})=><DishListItem dish={item}/>}
        keyExtractor={(item)=>item.name}
    />
        <Ionicons onPress={()=>navigation.goBack()}
          name="arrow-back-circle" size={30} color="white" 
          style={styles.iconContainer}/>
    </View>
  )
}

export default RestautantDetailPage;

