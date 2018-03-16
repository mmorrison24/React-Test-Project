import {TOGGLE_VENUE_VIEWER} from '../constants/actionTypes';
import initialState from './initialState';

export default function venueReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_VENUE_VIEWER:
      return {
        ...state,
        isVenueViewerOpen: !state.isVenueViewerOpen
      };
    default:
      return state;
  }

}
