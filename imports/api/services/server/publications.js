import { Meteor } from 'meteor/meteor';
import { Services } from '../services';

Meteor.publish('services', () => Services.find({}));
