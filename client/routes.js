import React from 'react';
import { mount } from 'react-mounter';
import Home from '../imports/ui/components/Home';
import Register from '../imports/ui/components/accounts/Register';
import Login from '../imports/ui/components/accounts/Login';
import Accounts from '../imports/ui/components/accounts/Accounts';

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

const adminRoutes = FlowRouter.group({
  triggersEnter: [
    () => {
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        return FlowRouter.go('/login');
      } else if (!Roles.userIsInRole(Meteor.userId(), ['content-manager', 'admin'])) {
        return FlowRouter.go('/');
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
