import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Services } from './services';

Meteor.methods({
  serviceCreate(id, type, name, desc, location, quantity) {
    check(id, String);
    check(type, String);
    check(name, String);
    check(desc, String);
    check(location, String);
    check(quantity, Match.OneOf(String, null));
    Services.insert({
      _id: id,
      owner: this.userId,
      service_type: type,
      service_name: name,
      service_desc: desc,
      location,
      quantity,
      images: [],
      createdAt: new Date(),
    });
  },
});
