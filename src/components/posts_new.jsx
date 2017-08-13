import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

  renderField(field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">List Posts</Link>
        </div>
        <form>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Tags"
            name="tags"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
        </form>
      </div>
    );
  }

}

export default reduxForm({
  form: 'PostsNewForm',
})(PostsNew);
