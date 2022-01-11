import Product from '../../models/product';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => {
  return async dispatch => {
    // any async code you want!
    const response = await fetch(
      'https://react-native-education-default-rtdb.firebaseio.com/products.json'
    );

    const resData = await response.json();
    const loadedProducts = [];

    for (const key in resData) {
      loadedProducts.push(
        new Product(
          key,
          'u1',
          resData[key].title,
          resData[key].imageUrl,
          resData[key].description,
          resData[key].price
        )
      );
    }

    dispatch({ type: SET_PRODUCTS, products: loadedProducts });
  };
};