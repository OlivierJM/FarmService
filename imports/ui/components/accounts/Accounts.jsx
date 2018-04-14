/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';

export default class Accounts extends Component {
  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}
Accounts.propTypes = {
  children: PropTypes.node.isRequired,
};
