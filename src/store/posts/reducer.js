import * as types from './actionTypes';

const INITIAL_STATE = [];

const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default posts;
