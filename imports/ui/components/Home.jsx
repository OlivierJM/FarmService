/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { PropTypes } from 'prop-types';
import { Services } from '../../api/services/services';
import { Media } from '../../api/media/media';

export class Home extends Component {
  componentDidMount() {
    $('.sidenav').sidenav();
    Meteor.setTimeout(() => {
      $('.materialboxed').materialbox();
    }, 50);
  }
  render() {
    const { services } = this.props;
    return (
      <Fragment>
        {services
          ? services.map(service => (
              <div key={service._id} className="col s4 " style={{ marginTop: 20 }}>
                <img
                  className="responsive-img materialboxed"
                  src={`/uploads/media-${service.images[0].file._id}-${
                    service.images[0].file.original.name
                  }`}
                />
                Title: <span>{service.service_name}</span> <br />
                Location: <span>{service.location}</span> <br />
                Supplier: <span>{service.owner}</span> <br />
                <a
                  href=""
                  className=" "
                  style={{ backgroundColor: '#edf2fa', padding: '1px 10px 5px', cursor: 'pointer' }}
                >
                  Talk to Owner
                </a>{' '}
                <a
                  href=""
                  className=" "
                  style={{ backgroundColor: '#edf2fa', padding: '1px 10px 5px', cursor: 'pointer' }}
                >
                  More Details
                </a>
              </div>
            ))
          : ''}
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
    media: Media.find({}).fetch(),
  };
})(Home);
