/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { PropTypes } from 'prop-types';
import Slider from 'react-slick';
import { Services } from '../../api/services/services';
import { Media, Images } from '../../api/media/media';

export class Home extends Component {
  componentDidMount() {
    $('.sidenav').sidenav();
    $('.slider').slider();
  }
  render() {
    const { services } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    let index = 1;
    return (
      <Fragment>
        {services
          ? services.map(service => (
              <div key={service._id} className="card col s12 l6">
                <h5>{service.service_name}</h5>
                <Slider {...settings} key={index++}>
                  {service.images.map(image => (
                    <div key={image._id}>
                      <img
                        className="responsive-img"
                        src={`/uploads/media-${image.file._id}-${image.file.original.name}`}
                      />
                    </div>
                  ))}
                </Slider>
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
                    {service.service_type}
                    <i className="material-icons right">close</i>
                  </span>
                  <p>{service.service_desc}</p>
                </div>
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
