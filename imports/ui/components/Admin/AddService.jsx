/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';
import { Media, Images } from '../../../api/media/media';

export default class AddService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service_type: 'farm_service',
      files: [],
    };
  }
  componentDidMount() {
    $('select').formSelect();
  }
  checkService = e => {
    this.setState({
      service_type: e.target.value,
    });
  };
  publishDate = e => {
    e.preventDefault();
    const { service_type, files } = this.state;
    const name = e.target.service_name.value;
    const desc = e.target.service_desc.value;
    const location = e.target.service_location.value;
    const quantity = service_type ? e.target.quantity.value : '';
    const service_id = new Meteor.Collection.ObjectID().valueOf();
    const file_id = new Meteor.Collection.ObjectID().valueOf();

    Meteor.call('serviceCreate', service_id, service_type, name, desc, location, quantity, err => {
      if (err) {
        return M.toast({ html: err.reason });
      } else {
        for (let file = 0; file < files.length; file++) {
          const fileObj = Media.insert(files[file]);
          Images.update(
            { _id: service_id },
            {
              $addToSet: {
                files: {
                  $each: [
                    {
                      _id: file_id,
                      name,
                      service_type,
                      desc,
                      location,
                      quantity,
                      file: fileObj,
                      createdAt: new Date(),
                    },
                  ],
                },
              },
            },
            err => {
              if (err) {
                M.toast({ html: err.reason });
              }
            },
          );
        }
      }
    });
  };

  grabFile = e => {
    this.setState({
      files: e.target.files,
    });
  };
  render() {
    const { service_type } = this.state;
    return (
      <Fragment>
        <div className="container service-container">
          <div className="row">
            <form className="col s12" id="reg-form" onSubmit={this.publishDate}>
              <div className="row">
                <div className="input-field col s12">
                  <select
                    className="icons"
                    name="service"
                    value={service_type}
                    onChange={this.checkService}
                    required
                  >
                    <option value="farm_service" data-icon="images/sample-1.jpg">
                      Farm Service & Drone Service
                    </option>
                    <option value="tractor_service" data-icon="images/office.jpg">
                      Tractor Service & Farm Equipments
                    </option>
                  </select>
                  <label>Choose Types of Service</label>
                </div>
              </div>
              {service_type === 'farm_service' ? (
                <Fragment>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="service"
                        name="service_name"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="service">Service Name</label>
                    </div>
                    <div className="input-field col s12">
                      <textarea
                        id="textarea1"
                        name="service_desc"
                        className="materialize-textarea"
                      />
                      <label htmlFor="textarea1">Service Description</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        id="location"
                        name="service_location"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="location">Location</label>
                    </div>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="tractor"
                        name="service_name"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="tractor">Tractor Name</label>
                    </div>
                    <div className="input-field col s12">
                      <textarea
                        id="textarea1"
                        name="service_desc"
                        className="materialize-textarea"
                      />
                      <label htmlFor="textarea1"> Description</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        id="location"
                        name="service_location"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="location">Location</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        className="validate"
                        required
                      />
                      <label htmlFor="quantity">Quantity</label>
                    </div>

                    <div className="input-field col s12">
                      <div className="input-file-container">
                        <input
                          className="input-file"
                          id="my-file"
                          type="file"
                          multiple
                          onChange={this.grabFile}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
              <div className="row">
                <div className="input-field col s6">
                  <button
                    className="btn btn-large btn-register waves-effect waves-light"
                    type="submit"
                  >
                    Publish
                    <i className="material-icons right">done</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
