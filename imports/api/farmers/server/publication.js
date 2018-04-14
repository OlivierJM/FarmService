import { Meteor } from 'meteor/meteor';

Meteor.publish(null, () => Meteor.users.find({}));
