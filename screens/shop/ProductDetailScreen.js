import React from "react";

import { StyleSheet, View, Text, Image, Button } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import * as cartActions from '../../store/actions/cart';


const ProductDetailScreen = props => {


    const productId = props.navigation.getParam('productId');

    const selectedProduct = useSelector(state => state.products.avaiableProducts.find(prod => prod.id === productId));

    const dispatch = useDispatch();


    return (
        <View>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.actions}>
                <Button title="Sepete Ekle" onPress={() => {
                    dispatch(cartActions.addToCart(selectedProduct));
                }} />
            </View>
            <Text style={styles.price}>{selectedProduct.price.toFixed(2)} TL</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
    )
}

ProductDetailScreen.navigationOptions = data => {
    return {
        headerTitle: data.navigation.getParam('productTitle')
    };
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontFamily: 'open-sans',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    }
})

export default ProductDetailScreen;