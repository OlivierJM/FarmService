import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Services } from './services';

Meteor.methods({
  serviceCreate(type, name, desc, location, quantity, owner) {
    check(type, String);
    check(name, String);
    check(desc, String);
    check(location, String);
    check(quantity, String);
    check(owner, String);
    Services.insert({
      owner,
      service_type: type,
      service_name: name,
      service_desc: desc,
      location,
      quantity,
      createdAt: new Date(),
    });
  },
});
