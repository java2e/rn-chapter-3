import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";

import Colors from "../constants/Colors";

import { Platform } from "react-native";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";


const ProductNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? '' : Colors.color1
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
            },
            headerTintColor: Colors.color2
        }
    }

);

export default createAppContainer(ProductNavigator);