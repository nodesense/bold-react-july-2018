// contains all action creators for redux-cart module

import * as ActionTypes from './action-types';

export const addItem = (item) =>   ({
        type: ActionTypes.ADD_ITEM,
        payload: {
            item
        }
    })

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {
        id
    }
})

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id,
        qty: parseInt(qty)
    }
})

export const empty = () => ({
    type: ActionTypes.EMPTY_CART
})