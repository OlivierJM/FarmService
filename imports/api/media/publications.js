import { Meteor } from 'meteor/meteor';
import { Media, Images } from './media';

Meteor.publish(null, () => Media.find({}));
Meteor.publish(null, () => Images.find({}));
