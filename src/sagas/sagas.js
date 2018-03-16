import "regenerator-runtime/runtime";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import * as ACTIONS from '../constants/actionTypes';

//API
const getVenues = () => {
  return axios.get(
    'https://s3.amazonaws.com/br-codingexams/restaurants.json'
  ).then(response => response.data)
    .catch(err => {
      throw err;
    });
}

// worker Sagas
function* fetchVenues(action) {
  try {
    const venues = yield call(getVenues);
    yield put({type: ACTIONS.RECIEVED_VENUES, payload: venues.resturants});
  } catch (err) {
    yield put({type: ACTIONS.RECIEVED_VENUES_FAILED, payload: err.message});
  }
}

function* rootSaga() {
  yield takeLatest(ACTIONS.FETCH_VENUES, fetchVenues);
}

export default rootSaga;
