import { Meteor } from 'meteor/meteor';
import { Comments } from '../comments';

Meteor.publish('comments', () => Comments.find({}));
