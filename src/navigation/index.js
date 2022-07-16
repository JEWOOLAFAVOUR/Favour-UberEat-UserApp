import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
// import ResturantItem from './src/component/ResturantItem';
// import restaurant from './assets/data/restaurants.json';
import RestautantDetailPage from '../screens/RestaurantDetailScreen';
// import DishDetailsScreen from './src/screens/DishDetailScreen';
// import Basket from './src/screens/Basket';
import OrderScreen from '../screens/OrderScreen';
// import OrderDetails from './src/screens/OrderDetails';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        // <Stack.Navigator initialRouteName="Restaurant">
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Restaurant" component={RestautantDetailPage} 
                options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTab = () => {
    return(
        <Tab.Navigator 
            screenOptions={{tabBarStyle: {backgroundColor: "white"}}}>
            <Tab.Screen name='Home' component={HomeScreen}
                options={{tabBarIcon: ({color})=> (
                <Foundation name="home" size={24} color={color} 
                />)}}/>
            <Tab.Screen name='Orders' component={OrderScreen}
                options={{tabBarIcon: ({color})=> (
                    <MaterialIcons name="list-alt" size={24} color={color} />)}}
                    />
            <Tab.Screen name='Profile' component={OrderScreen}
                options={{tabBarIcon: ({color})=> (
                    <FontAwesome5 name="user-alt" size={24} color={color} />)}}
                    />
        </Tab.Navigator> 
    )
}

export default HomeTab

// export default RootNavigator;