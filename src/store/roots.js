import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

// reducers
import posts from './posts/reducer';

export const rootReducer = combineReducers({
  posts
});

export function* rootSagas() {}
