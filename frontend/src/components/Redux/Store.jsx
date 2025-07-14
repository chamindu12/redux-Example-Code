import { createStore } from 'redux';
import authReducer from './Reducer'; 

// Create the Redux store
const store = createStore(authReducer);

export default store;
