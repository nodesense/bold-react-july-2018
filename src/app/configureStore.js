import {createStore, combineReducers} from 'redux';

import cartReducer from "./redux-cart/state/cartReducer";

const rootReducer = combineReducers({
    //counter: counterReducer
    items: cartReducer
})

const store = createStore(rootReducer, {  items: []})

// store.getState().items

export default store;