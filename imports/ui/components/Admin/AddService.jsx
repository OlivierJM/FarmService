/* eslint class-methods-use-this: "off" */
import React, { Component, Fragment } from 'react';

export default class AddService extends Component {
  constructor() {
    super();
    this.state = {
      service_type: '',
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
    //   get the data from the form and save it
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
                  <select className="icons" name="service" onChange={this.checkService} required>
                    <option value="" defaultValue>
                      Choose your option
                    </option>
                    <option value="farm_service" data-icon="images/sample-1.jpg">
                      Farm Service
                    </option>
                    <option value="tractor_service" data-icon="images/office.jpg">
                      Tractor Service
                    </option>
                    <option value="farm_equipments" data-icon="images/yuna.jpg">
                      Farm Equipments
                    </option>
                  </select>
                  <label>Types of Service</label>
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
                        name="tractor"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="tractor">Tractor Name</label>
                    </div>
                    <div className="input-field col s12">
                      <textarea
                        id="textarea1"
                        name="tractor_desc"
                        className="materialize-textarea"
                      />
                      <label htmlFor="textarea1"> Description</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        id="location"
                        name="tractor_location"
                        type="text"
                        className="validate"
                        required
                      />
                      <label htmlFor="location">Location</label>
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
