// container is a component

import {connect} from 'react-redux';

import ReduxCart from '../components/ReduxCart';

import {addItem} from '../state/actions';

// state = store.getState()
// on every subscribe, end of dispatch
function mapStateToProps(state) {
    return {
        //prop Name: value from state
        cartLength: state.items.length
    }
}

//dispatch == store.dispatch
// called only once per container component creation
function mapDispatchToProps(dispatch) {
    return {
        // propName: function(){}
        addItem: function() {
            let id = Math.ceil(Math.random() * 10000);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }

            const action = addItem(item);
            dispatch(action);
        }
    }
}

// decorator
const connectFn = connect(mapStateToProps, 
                          mapDispatchToProps);

//create container
// Pure component
// Subscribe/Unsubscribe
//ReduxCart render called only when cartLength changed
// Container is a parent component, ReduxCart is child component

const CartContainerComponent = connectFn(ReduxCart)

export default CartContainerComponent;
