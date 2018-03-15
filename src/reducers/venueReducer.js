//import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
//import {necessaryDataIsProvidedToCalculateSavings, calculateSavings} from '../utils/fuelSavings'; todo::remove
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function venueReducer(state = initialState.venues, action) {
  let newState;

  switch (action.type) {
    case 'RECIEVED_NEW_VENUES'://todo::patch back into action
      return objectAssign({}, state, {venue: true});

      return newState;

    default:
      return state;
  }
}
