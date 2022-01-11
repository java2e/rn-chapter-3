import PRODUCTS from "../../data/dummy-data";
import {
    SET_PRODUCTS
  } from '../actions/products';

const initialState = {
    avaiableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState,action) => {
    switch (action.type) {
        case SET_PRODUCTS:
          return {
            avaiableProducts: action.products,
            userProducts: action.products.filter(prod => prod.ownerId === 'u1')
          };
        }
    return state;
}