import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ResturantItem from './src/component/ResturantItem';
import restaurant from './assets/data/restaurants.json';
import HomeScreen from '../screens/HomeScreen';
import RestautantDetailPage from '../screens/RestaurantDetailScreen';
import DishDetailsScreen from './src/screens/DishDetailScreen';
import Basket from './src/screens/Basket';
import OrderScreen from './src/screens/OrderScreen';
import OrderDetails from './src/screens/OrderDetails';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export default RootNavigator;