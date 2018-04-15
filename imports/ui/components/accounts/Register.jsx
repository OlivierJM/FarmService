/* eslint class-methods-use-this: "off" */
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      password_2: '',
      error: null,
    };
  }
  componentDidMount() {
    $('select').formSelect();
  }

  checkPassword = e => {
    const password_2 = e.target.value;
    const { password } = this.state;
    Meteor.setTimeout(() => {
      if (password !== password_2) {
        this.setState({
          error: 'Passwords do not match',
        });
        return false;
      }
      this.setState({
        error: null,
      });
    }, 500);
  };
  setPassword = e => {
    this.setState({
      password: e.target.value,
    });
  };
  /**
   * grab all user details and create a user
   */
  registerUser = e => {
    e.preventDefault();
    const name = e.target.full_name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const password_2 = e.target.password_2.value;
    const gender = e.target.gender.value;
    //register the user
    const user = {
      email,
      password,
      profile: {
        name,
        gender,
      },
    };
    Meteor.call('farmer.create', user, err => {
      err
        ? M.toast({ html: err.reason })
        : (M.toast({ html: 'Account is Created ' }), FlowRouter.go('/login'));
    });
  };
  render() {
    const { error } = this.state;
    return (
      <div className="register-page">
        <div className="container account-container">
          <div className="row">
            <form className="col s12" id="reg-form" onSubmit={this.registerUser}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="first_name"
                    type="text"
                    className="validate"
                    required
                    name="full_name"
                  />
                  <label htmlFor="first_name">Full Name</label>
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
                    onChange={this.setPassword}
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
                    onChange={this.checkPassword}
                  />
                  <label htmlFor="password_2">Confirm Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <p className="gender-male">
                    <label>
                      <input name="gender" value="male" type="radio" />
                      <span>Male</span>
                    </label>
                  </p>
                  <p className="gender-female">
                    <label>
                      <input name="gender" value="female" type="radio" />
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
              {error ? <div className="row">{error}</div> : <span />}
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
