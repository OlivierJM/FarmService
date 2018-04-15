/* eslint class-methods-use-this: "off" */
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Login extends Component {
  componentDidMount() {
    $('select').formSelect();
    $('.tooltipped').tooltip();
  }
  loginUser = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    Meteor.loginWithPassword(email, password, err => {
      err ? M.toast({ html: err.reason }) : (M.toast({ html: 'Successfully logged-in' }), FlowRouter.go('/my_services'));
    });
    $('.field').val(''); // find a better way to clean static inputs
  };
  render() {
    return (
      <div className="register-page">
        <div className="container account-container">
          <div className="row">
            <form className="col s12" id="reg-form" onSubmit={this.loginUser}>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate field" required />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    className="validate field"
                    minLength="6"
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <button
                    className="btn btn-large btn-register waves-effect waves-light"
                    type="submit"
                  >
                    Login
                    <i className="material-icons right">done</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <a
            title="Register"
            href="/join"
            className="ngl btn-floating btn-large waves-effect waves-light tooltipped red"
            data-tooltip="Register"
          >
            <i className="material-icons">input</i>
          </a>
        </div>
      </div>
    );
  }
}
