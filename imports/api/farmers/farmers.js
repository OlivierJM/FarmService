import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.users.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Meteor.users.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

const UserProfile = new SimpleSchema({
  name: String,
  gender: String,
});

const User = new SimpleSchema({
  emails: Array,
  'emails.$': Object,
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  'emails.$.verified': Boolean,
  profile: UserProfile,
  createdAt: Date,
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  roles: {
    type: Array,
    optional: true,
    blackbox: true,
  },
  'roles.$': String,
});

Meteor.users.attachSchema(User);
