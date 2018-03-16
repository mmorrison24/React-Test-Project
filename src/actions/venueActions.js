import axios from 'axios';

import * as types from '../constants/actionTypes';

export function toggleVenueViewer() {
  return {
    type: types.TOGGLE_VENUE_VIEWER
  };
}

export function selectCurrentVenue( id ) {
  return {
    type: types.SELECT_VENUE,
    payload: { id }
  };
}

export function fetchVenues() {
  return {
    type: types.FETCH_VENUES,
  };
}

