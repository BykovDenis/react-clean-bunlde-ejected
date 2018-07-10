import { combineReducers } from 'redux';
import airlines from './reducers';
import customData from './reducers/custom-data';

export default combineReducers({
  airlines,
  customData
});