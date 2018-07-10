import { GET_AIRLINES_DATA, SET_CUSTOM_INPUT_VALUE } from '../constants';
import getDataFromAPI from '../../helpers/get-data-from-api';
const filename = 'airlines-from-aviation-edge-russia.json';
const url = `//${document.location.host}/data/${filename}`;

export function getAirlinesFromAPI() {
  return (dispatch) => {
    dispatch({
      type: GET_AIRLINES_DATA,
      payload: getDataFromAPI(url)
    });
  };
}

export function changeCustomInputValue(value) {
  return function(dispatch) {
    dispatch({
      type: SET_CUSTOM_INPUT_VALUE,
      payload: value
    });
  };
}