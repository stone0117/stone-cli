import {
  INIT_POST,
  ADD_POST,
} from '../constants/postActionTypes';

const initialState = {
  posts: [],
  name : 'stone',
};

export default (state = initialState, action) => {

  switch (action.type) {

    case INIT_POST:

      return Object.assign({}, state, {
        posts: action.payload,
      });
    case ADD_POST:

      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    default:
      return state;
  }
}

