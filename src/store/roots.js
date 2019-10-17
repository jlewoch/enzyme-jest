import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

// reducers
import success from './api/successReducer';

export const rootReducers = combineReducers({
  success
});

export function* rootSagas() {}
