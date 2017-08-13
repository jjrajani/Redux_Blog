import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
            <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
