/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

export class MyServices extends Component {
  render() {
    return <Fragment>Show the list of all the published services</Fragment>;
  }
}

export default withTracker(() => ({
  services: {},
}))(MyServices);
