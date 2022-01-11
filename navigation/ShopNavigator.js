import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";

import Colors from "../constants/Colors";

import { Platform } from "react-native";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";


const ProductNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail : ProductDetailScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? '' : Colors.color1 
            },
            headerTintColor: Colors.color2
        }
    }

);

export default createAppContainer(ProductNavigator);