/* eslint class-methods-use-this: "off" */
import React, { Component } from 'react';

export default class Login extends Component {
  componentDidMount() {
    $('select').formSelect();
  }
  render() {
    return <div className="register-page">
        <div className="container">
          <div className="row">
            <form className="col s12" id="reg-form">
             
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
                  <button className="btn btn-large btn-register waves-effect waves-light" type="submit" >
                    Login
                    <i className="material-icons right">done</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <a title="Register" href="/join" className="ngl btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons">input</i>
          </a>
        </div>
      </div>;
  }
}
