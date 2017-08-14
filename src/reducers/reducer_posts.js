import { fetchPosts } from '../actions';
import c from '../actions/constants';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case c.FETCH_POST:

      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      // Above code = below code

      return {
        ...state,
        [action.payload.data.id]: action.payload.data
      };
    case c.FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case c.CREATE_POST:
      return state;
    default:
      return state;
  }

}
