import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'

const ResturantItem = ({restaurant}) => {
    return(
      <View style={styles.restaurantContainer}>
          <Image 
            source={{
                uri: restaurant.image
            }}
            style={styles.image}/>
            <View>
              <Text style={styles.title}>{restaurant.name}</Text>
              <Text style={styles.subTitle}>
                $ ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
                {restaurant.maxDeliveryTime} minutes</Text>
            </View>
        </View>
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
})