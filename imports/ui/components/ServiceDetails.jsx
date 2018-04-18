/* eslint class-methods-use-this: "off" */
/* eslint no-unused-expressions: "off" */
import React, { Component, Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { PropTypes } from 'prop-types';
import { Services } from '../../api/services/services';
import { Comments } from '../../api/comments/comments';
import CommentBox from './Comments';

export class ServiceDetails extends Component {
  componentDidMount() {
    Meteor.setTimeout(() => {
      $('.tabs').tabs();
    }, 200);
  }

  renderService() {
    const { services } = this.props;
    services ? (
      <div key={services._id}>
        <img
          className="responsive-img materialboxed"
          src={`/uploads/media-${services.file._id}-${services.file.original.name}`}
        />
        Title: <span>{services.service_name}</span> <br />
        Location: <span>{services.location}</span> <br />
        Supplier: <span>{services.owner}</span> <br />
      </div>
    ) : (
      ''
    );
  }

  getText = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  submit = e => {
    e.preventDefault();
    const { comment } = this.state;
    const title = e.target.title.value;
    const { service } = this.props;
    Meteor.call('insertComments', title, comment, service._id, err => {
      err ? M.toast({ html: err.reason }) : M.toast({ html: 'submitted a review' });
    });
  };

  render() {
    const { services, comments } = this.props;
    return (
      <Fragment>
        <div className="">
          <div className="">
            {services ? (
              <>
                <img
                  className="responsive-img materialboxed"
                  src={`/uploads/media-${services.file._id}-${services.file.original.name}`}
                />
                Title: <span>{services.service_name}</span> <br />
                Location: <span>{services.location}</span> <br />
                Supplier: <span>{services.owner}</span> <br />
                <div className="card-tabs">
                  <ul className="tabs tabs-fixed-width">
                    <li className="tab">
                      <a href="#test4">Description</a>
                    </li>
                    <li className="tab">
                      <a className="active" href="#test5">
                        Reviews
                      </a>
                    </li>
                    <li className="tab">
                      <a href="#test6">Test 3</a>
                    </li>
                  </ul>
                </div>
                <div className="card-content grey lighten-4">
                  <div id="test4">
                    Title: <span>{services.service_name}</span> <br />
                    Description: <span>{services.service_desc}</span> <br />
                    Location: <span>{services.location}</span> <br />
                    Supplier: <span>{services.owner}</span> <br />
                  </div>
                  <div id="test5">
                    <h6>Add Your Review</h6>
                    <CommentBox getText={this.getText} submit={this.submit} />
                    {comments
                      ? comments.map(com => (
                          <div key={com._id}>
                            <h6>{com.title}</h6>
                            <p>{com.comment}</p>
                            by: {com.userId}
                          </div>
                        ))
                      : 'No Reviews Yet'}
                  </div>
                  <div id="test6">Test 3</div>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

ServiceDetails.propTypes = {
  services: PropTypes.object,
};

export default withTracker(params => {
  Meteor.subscribe('services');
  Meteor.subscribe('comments');
  return {
    services: Services.findOne({ _id: params.service._id }),
    comments: Comments.find({ serviceId: params.service._id }).fetch(),
  };
})(ServiceDetails);
