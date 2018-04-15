/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { PropTypes } from 'prop-types';
import { Services } from '../../api/services/services';

export class Home extends Component {
  render() {
    const { services } = this.props;
    return (
      <Fragment>
        <div className="container page-wrapper">
          <div className="row">
            <div className="col s12">
              {services
                ? services.map(service => (
                    <div className="col m4 s6" key={service._id}>
                      <div className="card ">
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
