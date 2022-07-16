import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from '../screens/HomeScreen';
// import ResturantItem from './src/component/ResturantItem';
// import restaurant from './assets/data/restaurants.json';
import RestautantDetailPage from '../screens/RestaurantDetailScreen';
// import DishDetailsScreen from './src/screens/DishDetailScreen';
// import Basket from './src/screens/Basket';
// import OrderScreen from './src/screens/OrderScreen';
// import OrderDetails from './src/screens/OrderDetails';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Restaurant">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Restaurant" component={RestautantDetailPage} 
                options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default RootNavigator;