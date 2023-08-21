import { combineReducers } from 'redux';
import loadingActionReducer from './reducer'; // Import your existing reducer

const RootReducer = combineReducers({
  user: loadingActionReducer, // Replace with the appropriate key and reducer
  // Add other reducers if needed
});

export default RootReducer;