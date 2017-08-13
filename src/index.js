import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route exact path="/" component={PostsIndex} />
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
