import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Comments } from './comments';

Meteor.methods({
  insertComments(title, comment, serviceId) {
    check(title, String);
    check(comment, String);
    check(serviceId, String);
    Comments.insert({
      userId: this.userId,
      title,
      comment,
      serviceId,
      createdAt: new Date(),
    });
  },
});
