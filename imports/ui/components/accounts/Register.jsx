/* eslint class-methods-use-this: "off" */
import React, { Component } from 'react';

export default class Register extends Component {
  componentDidMount() {
    $('select').formSelect();
  }
  render() {
    return <div className="register-page">
        <div className="container">
          <div className="row">
            <form className="col s12" id="reg-form">
              <div className="row">
                <div className="input-field col s6">
                  <input id="first_name" type="text" className="validate" required />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" required />
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" required />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" minLength="6" required />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                    <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Male</span>
                    </label>
                    </p>
                  <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Female</span>
                    </label>
                    </p>
                </div>

                <div className="input-field col s6">
                  <button className="btn btn-large btn-register waves-effect waves-light" type="submit" >
                    Register
                    <i className="material-icons right">done</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <a title="Login" href="/login" className="ngl btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons">input</i>
          </a>
        </div>
      </div>;
  }
}
