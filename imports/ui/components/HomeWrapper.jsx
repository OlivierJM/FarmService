/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';

export default class HomeWrapper extends Component {
  render() {
    let email = '';

    if (Meteor.user()) {
      const user = Meteor.user();
      email = user.emails[0].address;
    }
    return (
      <Fragment>
        <div className="container page-wrapper">
          <div className="row">
            <div className="col s2">
              <ul id="slide-out" className="sidenav sidenav-fixed">
                <li>
                  <div className="user-view">
                    <div className="background">
                      <img src="farm-nav.jpg" />
                    </div>
                    <a href="#user">
                      <i className="material-icons">account_circle</i>
                    </a>
                    <a href="#name">
                      <span className="white-text name">{email}</span>
                    </a>
                  </div>
                </li>
                <li>
                  <a className="subheader">Filter</a>
                </li>
                <li>
                  <a href="/tractor">Tractor Services</a>
                </li>
                <li>
                  <a href="/farm">Farm Service</a>
                </li>
                <li>
                  <div className="divider" />
                </li>
                <li>
                  <a className="subheader">Your Services</a>
                </li>
                <li>
                  <a className="waves-effect" href="/my_services">
                    My Services
                  </a>
                </li>
                <li>
                  <a className="waves-effect" href="/add_service">
                    Publish Service
                  </a>
                </li>
              </ul>
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
            </div>
            <div className="col s10">{this.props.landing}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
