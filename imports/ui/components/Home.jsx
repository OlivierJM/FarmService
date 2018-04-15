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
                      <a href={`/more/${service._id}`}>This is a link</a>
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
