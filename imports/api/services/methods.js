import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Services } from './services';

Meteor.methods({
  serviceCreate(type, name, desc, location, quantity) {
    check(type, String);
    check(name, String);
    check(desc, String);
    check(location, String);
    check(quantity, Match.OneOf(String, null));
    Services.insert({
      owner: this.userId,
      service_type: type,
      service_name: name,
      service_desc: desc,
      location,
      quantity,
      createdAt: new Date(),
    });
  },
});
