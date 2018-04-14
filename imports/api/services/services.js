import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Services = new Mongo.Collection('services', { idGeneration: 'STRING' });

Services.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
Services.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

const ServiceSchema = new SimpleSchema({
  service_type: String,
  service_name: String,
  service_desc: String,
  location: String,
  quantity: String,
  owner: String,
  createdAt: Date,
});

Services.attachSchema(ServiceSchema);
