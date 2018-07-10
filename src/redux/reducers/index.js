import handleActions from 'redux-actions/lib/handleActions';
import initialState from '../data';
import {
  GET_AIRLINES_DATA_LOADING,
  GET_AIRLINES_DATA_SUCCESS,
  GET_AIRLINES_DATA_ERROR
} from '../constants';

export default handleActions({
  [GET_AIRLINES_DATA_LOADING]: (state) => ({
    ...state,
    isLoadingAirlines: true,
  }),
  [GET_AIRLINES_DATA_SUCCESS]: (state, action) => ({
    ...state,
    isLoadingAirlines: false,
    errorLoadingAirlines: false,
    textError: '',
    airlinesData: [
      ...action.payload
    ]
  }),
  [GET_AIRLINES_DATA_ERROR]: (state, action) => ({
    ...state,
    isLoadingAirlines: false,
    errorLoadingAirlines: true,
    textError: action.payload,
  }),
}, initialState.airlines);