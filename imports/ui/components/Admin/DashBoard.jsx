/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';

export default class DashBoard extends Component {
  componentDidMount() {
    $('.sidenav').sidenav();
  }
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col s12 m4 l3">
            <ul id="slide-out" className="sidenav sidenav-fixed">
              <li>
                <a href="/my_services">My Services</a>
              </li>
              <li>
                <a href="/add_service">Publish Service</a>
              </li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
          </div>

          <div className="col s12 m8 l9">{this.props.yield}</div>
        </div>
      </Fragment>
    );
  }
}
DashBoard.propTypes = {
  yield: PropTypes.node.isRequired,
};
