/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Services } from '../../api/services/services';

export class Results extends Component {
  render() {
    return (
      <Fragment>
        Results Page
        <ul>
          <li>tresults</li>
        </ul>
      </Fragment>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('services');
  return {
    services: Services.find({ service_name: FlowRouter.getQueryParam('q') }).fetch(),
  };
})(Results);
