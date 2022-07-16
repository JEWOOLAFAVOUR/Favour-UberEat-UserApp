import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons';
import DishListItem from '../../component/DIshListItem';
const restaurant = restaurants[0];


const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={{fontWeight:'bold', marginTop: 20,
        fontSize: 19,}}>Your items</Text>
      <FlatList data={restaurant.dishes}
        renderItem={({item})=><BasketDishItem basketDish={item}/>}
      />
      <View style={styles.separator} />
      <View style={styles.button}>
        <Text style={styles.btnText}>Create order</Text>
      </View>
    </View>
  );
};

export default Basket

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 40,
        padding: 10,
    },
    name:{
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10,
    },
    description:{
        color:'grey',
    },
    separator:{
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    quantity:{
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    button:{
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
    },
    btnText:{
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    },
    quantityContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },
})