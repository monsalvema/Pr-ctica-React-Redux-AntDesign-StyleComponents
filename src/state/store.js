import { createStore, combineReducers } from 'redux';
import { productsList } from "./product/reducers";

const reducers = combineReducers({
    productsList
});

let store = createStore(reducers);

export default store;