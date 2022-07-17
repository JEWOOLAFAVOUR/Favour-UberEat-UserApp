import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
// import ResturantItem from './src/component/ResturantItem';
// import restaurant from './assets/data/restaurants.json';
import RestautantDetailPage from '../screens/RestaurantDetailScreen';
import DishDetailsScreen from '../screens/DishDetailScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        // <Stack.Navigator initialRouteName="Restaurant">
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeTabs" component={HomeTab}/>
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTab = () => {
    return(
        <Tab.Navigator barStyle={{backgroundColor: "white"}}>
            <Tab.Screen name='Home' component={HomeStackNavigator}
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

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Restaurants' component={HomeScreen}/>
            <HomeStack.Screen name='Restaurant' component={RestautantDetailPage}/>
            <HomeStack.Screen name='Dish' component={DishDetailsScreen}/>
            <HomeStack.Screen name='Basket' component={Basket}/>
        </HomeStack.Navigator>
    )
}
// export default HomeTab

export default RootNavigator;