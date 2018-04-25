import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Comments = new Mongo.Collection('comments', { idGeneration: 'STRING' });

Comments.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
Comments.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

const Commentschema = new SimpleSchema({
  userId: String,
  title: String,
  comment: String,
  serviceId: String,
  createdAt: Date,
});

Comments.attachSchema(Commentschema);
