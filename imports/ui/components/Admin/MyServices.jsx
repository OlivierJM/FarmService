/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Services } from '../../../api/services/services';

export class MyServices extends Component {
  render() {
    console.log(this.props.services);
    return <Fragment>Show the list of all the published services</Fragment>;
  }
}

export default withTracker(() => {
  Meteor.subscribe('services');
  return {
    services: Services.find({ userId: Meteor.userId() }).fetch(),
  };
})(MyServices);
