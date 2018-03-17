import * as types from '../constants/actionTypes';

export function closeVenueViewer() {
  console.log('clsing');
  return {
    type: types.CLOSE_VENUE_VIEWER
  };
}

export function selectCurrentVenue( currentVenue ) {
  return {
    type: types.SELECT_VENUE,
    payload: currentVenue
  };
}

export function fetchVenues() {
  return {
    type: types.FETCH_VENUES,
  };
}

