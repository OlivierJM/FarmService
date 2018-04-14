import React from 'react';
import { mount } from 'react-mounter';
import Home from '../imports/ui/components/Home';
import Register from '../imports/ui/components/accounts/Register';
import Login from '../imports/ui/components/accounts/Login';
import Accounts from '../imports/ui/components/accounts/Accounts';
import DashBoard from '../imports/ui/components/Admin/DashBoard';
import AddService from '../imports/ui/components/Admin/AddService';
import MyServices from '../imports/ui/components/Admin/MyServices';

const exposed = FlowRouter.group({});

const loggedIn = FlowRouter.group({
  triggersEnter: [
    () => {
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        return FlowRouter.go('/login');
      }
    },
  ],
});

FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(Home, {});
  },
});
/**
 * Beginning of account routes
 */
exposed.route('/join', {
  name: 'Register',
  action() {
    mount(Accounts, { children: <Register /> });
  },
});

exposed.route('/login', {
  name: 'Login',
  action() {
    mount(Accounts, { children: <Login /> });
  },
});

/**
 * End of account routes
 * Beginning of Admin routes
 * for now admin routes will be exposed before we add the loggin
 */

loggedIn.route('/add_service', {
  name: 'AddService',
  action() {
    mount(DashBoard, { yield: <AddService /> });
  },
});
loggedIn.route('/my_services', {
  name: 'MyServices',
  action() {
    mount(DashBoard, { yield: <MyServices /> });
  },
});
