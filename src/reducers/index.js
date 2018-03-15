import { combineReducers } from 'redux';
import venue from './venueReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  venue,
  routing: routerReducer
});

export default rootReducer;
