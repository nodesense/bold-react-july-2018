import {createStore, combineReducers, 
        applyMiddleware} from 'redux';

import cartReducer from "./redux-cart/state/cartReducer";
import productReducer from "./redux-cart/state/productReducer";

const rootReducer = combineReducers({
    //counter: counterReducer
    items: cartReducer,
    product: productReducer
})

// logger middleware
function loggerMiddleware(store) {
    return function (nextFn) {
        return function(action) {
            console.log("Logger ", action);
            
            // if (action.type == 'CART.EMPTY_CART')
            //     return true;

            //forward to next middleware/reducer
            let result = nextFn(action); 
            return result;
        }
    }
}

const store = createStore(rootReducer, 
                            {  items: []},
                           applyMiddleware(loggerMiddleware) 
                        )

// store.getState().items

export default store;