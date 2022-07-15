import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'

const ResturantItem = ({title}) => {
    return(
      <View style={styles.restaurantContainer}>
          <Image source={require('../../../assets/uberimage/restaurant1.jpeg')}
            style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>$ $1.99 15-30 minutes</Text>
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