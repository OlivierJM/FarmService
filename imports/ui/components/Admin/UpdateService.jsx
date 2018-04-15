/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Services } from '../../../api/services/services';

export class UpdateService extends Component {
  render() {
    const { services } = this.props;

    return (
      <Fragment>
        <div>Hello rthere</div>
      </Fragment>
    );
  }
}

UpdateService.propTypes = {
  services: PropTypes.object.isRequired,
};

export default withTracker(() => {
  Meteor.subscribe('services');
  return {
    services: Services.findOne({ _id: FlowRouter.getParam('_id') }),
  };
})(UpdateService);
