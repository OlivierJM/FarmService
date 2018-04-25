/* eslint class-methods-use-this: "off" */
/* eslint no-unused-expressions: "off" */
import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';

export default class CommentBox extends Component {
  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.submit}>
          <div className="input-field col s12">
            <input id="title" name="title" type="text" className="validate" required />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field col s12">
            <textarea
              id="textarea1"
              name="review"
              onChange={this.props.getText}
              className="materialize-textarea"
            />
            <label htmlFor="textarea1"> Description</label>
          </div>
          <button className="btn" role="submit">
            <i className="material-icons">send</i> submit
          </button>
        </form>
      </Fragment>
    );
  }
}
CommentBox.propTypes = {
  getText: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};
