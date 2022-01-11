import React from 'react';
import { FlatList, Text, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const OrderScreen = props => {
  const orders = useSelector(state => state.orders.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

OrderScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Siparişler',
    headerLeft: (<Ionicons name="cart" size={23} color="white" onPress={() => {
        navData.navigation.toggleDrawer();
    }} />)
  };
};

export default OrderScreen;
