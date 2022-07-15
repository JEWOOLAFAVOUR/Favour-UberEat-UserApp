import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import orders from '../../../assets/data/orders.json';
import restaurant from '../../../assets/data/restaurants.json';
import DishListItem from '../../component/DIshListItem';
import styles from './styles';

const order = orders[0];

const OrderDetailHeader = () => {
  return (
    <View style={styles.page}>
      <View>
        <Image source={{uri: order.Restaurant.image}} style={styles.image}/>
    </View>
    <View style={styles.container}>
      <Text style={styles.title}>{order.Restaurant.name}</Text>
      <Text style={styles.subTitle}>{order.status} &#8226; 2 days ago</Text>
        <Text style={styles.menuTitle}>Your orders</Text>    
    </View>
    </View>
  );
};

const OrderDetails = () => {
    return(
        <FlatList 
            ListHeaderComponent={OrderDetailHeader}
            data={restaurant[0].dishes}
            renderItem={({item})=><DishListItem dish={item}/>}
            />
    )
}
export default OrderDetails
