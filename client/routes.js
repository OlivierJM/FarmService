import React from 'react';
import { mount } from 'react-mounter';
import Home from '../imports/ui/components/Home';
import Register from '../imports/ui/components/accounts/Register';
import Login from '../imports/ui/components/accounts/Login';
import Accounts from '../imports/ui/components/accounts/Accounts';
import DashBoard from '../imports/ui/components/Admin/DashBoard';
import AddService from '../imports/ui/components/Admin/AddService';
import MyServices from '../imports/ui/components/Admin/MyServices';
import NotFound from '../imports/ui/layouts/NotFound';
import UpdateService from '../imports/ui/components/Admin/UpdateService';
import HomeWrapper from '../imports/ui/components/HomeWrapper';
import ServiceDetails from '../imports/ui/components/ServiceDetails';
import Results from '../imports/ui/components/Results';
import BuyTractor from '../imports/ui/components/BuyTractor';
import Bank from '../imports/ui/components/Bank';
import Supplier from '../imports/ui/components/Supplier';

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
    mount(HomeWrapper, { landing: <Home /> });
  },
});
FlowRouter.route('/more/:_id', {
  name: 'Home',
  action(params) {
    mount(HomeWrapper, { landing: <ServiceDetails service={params} /> });
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
loggedIn.route('/buy_tractor', {
  name: 'BuyTractor',
  action() {
    mount(DashBoard, { yield: <BuyTractor /> });
  },
});
loggedIn.route('/tractor', {
  name: 'tractor',
  action() {
    mount(DashBoard, { yield: <BuyTractor /> });
  },
});
loggedIn.route('/bank', {
  name: 'Bank',
  action() {
    mount(DashBoard, { yield: <Bank /> });
  },
});
loggedIn.route('/supplier', {
  name: 'Supplier',
  action() {
    mount(DashBoard, { yield: <Supplier /> });
  },
});
loggedIn.route('/my_services/:_id', {
  name: 'UpdateService',
  action(params) {
    mount(DashBoard, { yield: <UpdateService service_id={params.service_id} /> });
  },
});
// UpdateService

FlowRouter.notFound = {
  action() {
    mount(NotFound, {});
  },
};

exposed.route('/search', {
  name: 'ResultsPage',
  action(params) {
    mount(Results, {});
  },
});
