import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">Add A Post</Link>
        </div>
        List Posts
      </div>
    );
  }

}
export default PostsNew;