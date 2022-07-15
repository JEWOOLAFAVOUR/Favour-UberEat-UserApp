import { StyleSheet, Text, View, FlatList } from 'react-native'
import OrderListItem from '../../component/OrderListItem'
import orders from '../../../assets/data/orders.json'

const OrderScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList 
        data={orders}
        renderItem={({item})=> <OrderListItem order={item}/>}
      />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    page:{
        flex: 1,
        width: '100%',
        paddingTop: 50,
    },
})