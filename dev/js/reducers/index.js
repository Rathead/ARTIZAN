import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import LoggerUserReducer from './reducer-logged-user';
import ProductsReducer from './reducer-products';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    products: ProductsReducer,
    loggedUser: LoggerUserReducer,
});

export default allReducers
