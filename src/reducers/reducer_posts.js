import { fetchPosts } from '../actions';
import c from '../actions/constants';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case c.FETCH_POST:
      return {
        ...state,
        // [creates a new key]
        [action.payload.data.id]: action.payload.data
      };
    case c.FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case c.CREATE_POST:
      return state;
    case c.DELETE_POST:
      return state;
    default:
      return state;
  }

}
