/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { PropTypes } from 'prop-types';
import { Services } from '../../api/services/services';

export class Home extends Component {
  componentDidMount() {
    $('.sidenav').sidenav();
  }
  render() {
    const { services } = this.props;
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
            <div className="col s10 m10 l8">
              {services
                ? services.map(service => (
                    <div className="col m5 l4 s12" key={service._id}>
                      <div className="card small">
                        <div className="card-image waves-effect waves-block waves-light">
                          <img className="activator" src="/harvest.jpeg" />
                        </div>
                        <div className="card-content">
                          <span className="card-title activator grey-text text-darken-4">
                            {service.service_type}
                            <i className="material-icons right">more_vert</i>
                          </span>
                          <p>
                            <a href="#">This is a link</a>
                          </p>
                        </div>
                        <div className="card-reveal">
                          <span className="card-title grey-text text-darken-4">
                            {service.service_name}
                            <i className="material-icons right">close</i>
                          </span>
                          <p>{service.service_desc}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : 'no service yet'}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
Home.propTypes = {
  services: PropTypes.array.isRequired,
};

export default withTracker(() => {
  Meteor.subscribe('services');
  return {
    services: Services.find({}).fetch(),
  };
})(Home);
