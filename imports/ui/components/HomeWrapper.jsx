/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';

export default class HomeWrapper extends Component {
  render() {
    return (
      <Fragment>
        <div className="container page-wrapper">
          <div className="row">
            <div className="col s12 m2 l4">
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
                      <span className="white-text name">{'Not Logged in'}</span>
                    </a>
                    <a href="#email">
                      <span className="white-text email">{'email when logged-in'}</span>
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
            <div className="col s10 m10 l8">{this.props.landing}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
