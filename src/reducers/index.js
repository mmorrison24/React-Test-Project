import { combineReducers } from 'redux';
import venueReducer from './venueReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  venueReducer,
  routing: routerReducer
});

export default rootReducer;
