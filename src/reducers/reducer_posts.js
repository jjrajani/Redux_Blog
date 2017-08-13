import { fetchPosts } from '../actions';
import c from '../actions/constants';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case c.FETCH_POSTS:
      console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }

}
