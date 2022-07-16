import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import HomeTab from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
    <View style={styles.container}>
        {/* <RootNavigator/> */}
        <HomeTab/>
          <StatusBar style='light'/>
    </View>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  // padding: 10,
  //   paddingVertical: 30,  
  },
});