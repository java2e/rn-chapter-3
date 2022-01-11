import React, { useEffect,useState } from "react";

import { FlatList, Text ,ActivityIndicator,View,StyleSheet} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from '../../store/actions/cart';
import * as productsActions from '../../store/actions/products';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';



const ProductOverviewScreen = props => {

    const [isLoading, setIsLoading] = useState(false);

    const products = useSelector(state => state.products.avaiableProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        const loadProducts = async () => {
            setIsLoading(true);
            await dispatch(productsActions.fetchProducts());
            setIsLoading(false);
        };
        loadProducts();
    }, [dispatch]);

    if (isLoading) {
        return (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color={Colors.color1} />
          </View>
        );
      }

      console.log(products)

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

const styles = StyleSheet.create({
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
  });

export default ProductOverviewScreen;