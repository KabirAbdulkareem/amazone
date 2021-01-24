import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Cookies from "js-cookie";
import { cartReducer } from "./reducers/cartReducers";
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";

const cartItems = Cookies.getJSON("cartItems") || [];
const initialState = { cart: {cartItems}};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
});

const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
