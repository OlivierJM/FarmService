/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { PropTypes } from 'prop-types';
import { Services } from '../../../api/services/services';

export class MyServices extends Component {
  renderServices() {
    const { services } = this.props;
    if (!services) {
      return null;
    }
    return services.map(service => (
      <li key={service._id} className="collection-item">
        <div>
          {service.service_name}
          <a href="#!" className="secondary-content">
            <i className="material-icons">send</i>
          </a>
        </div>
      </li>
    ));
  }
  render() {
    return (
      <Fragment>
        <ul className="collection with-header">
          <li className="collection-header">
            <h5>My Published Services</h5>
          </li>
          {this.renderServices()}
        </ul>
      </Fragment>
    );
  }
}

MyServices.propTypes = {
  services: PropTypes.array.isRequired,
};

export default withTracker(() => {
  Meteor.subscribe('services');
  return {
    services: Services.find({ owner: Meteor.userId() }).fetch(),
  };
})(MyServices);
