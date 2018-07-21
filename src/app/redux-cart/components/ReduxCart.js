import React from 'react';

export default function ReduxCart(props) {
    return (
        <div>
            <h2>Redux Cart</h2>
            <p>Cart Length {props.cartLength}</p>
            <button onClick={props.addItem} >
                Add Item
            </button>
        </div>
    )
}