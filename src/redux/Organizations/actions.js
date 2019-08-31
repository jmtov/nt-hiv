import { createTypes, completeTypes } from 'redux-recompose';

import PillsService from '~services/PillsService';

import { PILLS_TARGET, CURRENT_PILL_TARGET } from './constants';

export const actions = createTypes(completeTypes(['GET_PILLS'], ['SET_CURRENT_PILL']), '@@PILLS');

export const actionCreators = {
  getPills: name => ({
    type: actions.GET_PILLS,
    target: PILLS_TARGET,
    payload: name,
    service: PillsService.getPills,
    successSelector: response => response.data
  }),
  setCurrentPill: pill => ({
    type: actions.SET_CURRENT_PILL,
    target: CURRENT_PILL_TARGET,
    payload: pill
  }),
  clearCurrentPill: () => ({
    type: actions.SET_CURRENT_PILL,
    target: CURRENT_PILL_TARGET,
    payload: null
  })
};
