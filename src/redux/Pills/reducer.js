import { completeState, completeReducer, createReducer, onReadValue } from 'redux-recompose';

import { actions } from './actions';
import { PILLS_TARGET, CURRENT_PILL_TARGET } from './constants';

const stateDescription = {
  [PILLS_TARGET]: [],
  [CURRENT_PILL_TARGET]: null
};

const initialState = completeState(stateDescription, [PILLS_TARGET, CURRENT_PILL_TARGET]);

const reducerDescription = {
  primaryActions: [actions.GET_PILLS],
  override: {
    [actions.SET_CURRENT_PILL]: onReadValue(),
    [actions.CLEAR_CURRENT_PILL]: onReadValue()
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
