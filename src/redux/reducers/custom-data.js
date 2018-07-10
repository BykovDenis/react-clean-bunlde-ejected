import handleActions from 'redux-actions/lib/handleActions';
import initialState from '../data';

import { SET_CUSTOM_INPUT_VALUE } from '../constants';

export default handleActions({
  [SET_CUSTOM_INPUT_VALUE]: (state, action) => ({
    ...state,
    customData: {
      ...state.customData,
      customInputData: action.payload,
    }
  })
}, initialState.customData);
