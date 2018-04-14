/* eslint class-methods-use-this: "off" */
import React, { Component } from 'react';

export default class Register extends Component {
  componentDidMount() {
    $('select').formSelect();
  }
  /**
   * grab all user details
   */
  registerUser = e => {
    const name = e.target.full_name.value;
    const email = e.target.email.value;
  };
  render() {
    return (
      <div className="register-page">
        <div className="container account-container">
          <div className="row">
            <form className="col s12" id="reg-form" onSubmit={this.registerUser}>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="first_name"
                    type="text"
                    className="validate"
                    required
                    name="full_name"
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" required name="email" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    minLength="6"
                    required
                    name="password"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="password_2"
                    type="password"
                    className="validate"
                    minLength="6"
                    required
                    name="password_2"
                  />
                  <label htmlFor="password_2">Confirm Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <p className="gender-male">
                    <label>
                      <input name="group1" type="radio" />
                      <span>Male</span>
                    </label>
                  </p>
                  <p className="gender-female">
                    <label>
                      <input name="group1" type="radio" />
                      <span>Female</span>
                    </label>
                  </p>
                </div>

                <div className="input-field col s6">
                  <button
                    className="btn btn-large btn-register waves-effect waves-light"
                    type="submit"
                  >
                    Register
                    <i className="material-icons right">done</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <a
            title="Login"
            href="/login"
            className="ngl btn-floating btn-large waves-effect waves-light red"
          >
            <i className="material-icons">input</i>
          </a>
        </div>
      </div>
    );
  }
}
