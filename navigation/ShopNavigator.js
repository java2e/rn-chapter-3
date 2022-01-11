import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import { Ionicons } from '@expo/vector-icons';

import Colors from "../constants/Colors";

import { Platform } from "react-native";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrderScreen from "../screens/shop/OrderScreen";


const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Colors.color1
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: 'white'
};


const ProductNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
},
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons
                    name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }

);

const OrdersNavigator = createStackNavigator(
    {
        Orders: OrderScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons
                    name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultNavOptions
    }
);

const ShopNavigator = createDrawerNavigator(
    {
        Products: ProductNavigator,
        Orders: OrdersNavigator
    },
    {
        contentOptions: {
            activeTintColor: Colors.primary
        }
    }
);


export default createAppContainer(ShopNavigator);