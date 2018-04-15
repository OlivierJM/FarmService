/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { PropTypes } from 'prop-types';
import { Services } from '../../api/services/services';

export class ServiceDetails extends Component {
  componentDidMount() {
    $('.tabs').tabs();
  }
  render() {
    return (
      <Fragment>
        <div className="card">
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of information. I am
              convenient because I require little markup to use effectively.
            </p>
          </div>
          <div className="card-tabs">
            <ul className="tabs tabs-fixed-width">
              <li className="tab">
                <a href="#test4">Test 1</a>
              </li>
              <li className="tab">
                <a className="active" href="#test5">
                  Test 2
                </a>
              </li>
              <li className="tab">
                <a href="#test6">Test 3</a>
              </li>
            </ul>
          </div>
          <div className="card-content grey lighten-4">
            <div id="test4">Test 1</div>
            <div id="test5">Test 2</div>
            <div id="test6">Test 3</div>
          </div>
        </div>
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
