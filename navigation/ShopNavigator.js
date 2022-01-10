import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import { Platform } from 'react-native';

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';

import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.color1 : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.color1
        }
    }
);

export default createAppContainer(ProductsNavigator);