import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dates';

export function calculateFuelSavings(settings, fieldName, value) {
  return {
    type: types.CALCULATE_FUEL_SAVINGS,
    dateModified: getFormattedDateTime(),
    settings,
    fieldName,
    value
  };
}
