import axios from 'axios';

import c from './constants';

const BLOG_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = `?key=humdrum_redux_blog`

export default function fetchPosts() {
  const request = axios.get(`${BLOG_URL}/posts${API_KEY}`);

  return {
    type: c.FETCH_POSTS,
    payload: request,
  }
}
