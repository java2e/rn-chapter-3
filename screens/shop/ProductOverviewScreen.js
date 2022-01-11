import React from "react";

import { FlatList, Text } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from '../../store/actions/cart';
import { Ionicons } from '@expo/vector-icons';



const ProductOverviewScreen = props => {

    const products = useSelector(state => state.products.avaiableProducts);

    const dispatch = useDispatch();

    return <FlatList data={products}
        keyExtractor={item => item.id}
        renderItem={
            itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        props.navigation.navigate('ProductDetail', { productId: itemData.item.id, productTitle: itemData.item.title });
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item))
                    }}
                />
        }
    />
}

ProductOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: "Ürünler Listesi",
        headerLeft: (<Ionicons name="menu" size={23} color="white" onPress={() => {
            navData.navigation.toggleDrawer();
        }} />),
        headerRight: (<Ionicons name="cart" size={23} color="white" onPress={() => {
            navData.navigation.navigate('Cart')
        }} />)
    }

}

export default ProductOverviewScreen;