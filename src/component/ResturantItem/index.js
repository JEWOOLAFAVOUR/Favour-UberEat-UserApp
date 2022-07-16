import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ResturantItem = ({restaurant}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Restaurant", {id: restaurant.id})
  }
    return(
      <Pressable onPress={onPress} 
        style={styles.restaurantContainer}>
          <Image 
            source={{
                uri: restaurant.image
            }}
            style={styles.image}/>
            <View style={styles.row}>
            <View>
              <Text style={styles.title}>{restaurant.name}</Text>
              <Text style={styles.subTitle}>
                $ ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
                {restaurant.maxDeliveryTime} minutes</Text>
            </View>
            <View style={styles.rating}>
              <Text>{restaurant.rating}</Text>
            </View>
            </View>
        </Pressable>
    )
  }

export default ResturantItem

const styles = StyleSheet.create({
      restaurantContainer:{
        width: '100%',
        marginVertical: 10,
      },
      image:{
        width: '100%',
        height: 200,
        marginBottom: 5,
      },
      title:{
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 5,
      },
      subTitle:{
        color: 'grey',
      },
      row:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      rating:{
        marginLeft:'auto',
        backgroundColor: 'lightgrey',
        width: 25,
        height: 25,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 20,
      },
})