/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { PropTypes } from 'prop-types';
import { Services } from '../../api/services/services';

export class ServiceDetails extends Component {
  render() {
    return (
      <Fragment>
        <div className="card">Here is the card</div>
      </Fragment>
    );
  }
}

ServiceDetails.propTypes = {
  services: PropTypes.object,
};

export default withTracker((params) => {
  Meteor.subscribe('services');
  return {
    services: Services.findOne({ _id: params.service._id }),
  };
})(ServiceDetails);
