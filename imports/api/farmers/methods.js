import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';

Meteor.methods({
  'farmer.create': (user) => {
    check(user, {
      email: String,
      password: String,
      profile: Object,
    });
    Accounts.createUser(user);
  },
  'account.check': (email) => {
    check(email, String);
    const user = Accounts.findUserByEmail(email);
    if (!user) {
      return false;
    }

    return false;
  },
});
