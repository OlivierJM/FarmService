import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Services = new Mongo.Collection('services', { idGeneration: 'STRING' });

Services.deny({
  insert: () => false,
  update: () => false,
  remove: () => false,
});
Services.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const ServiceSchema = new SimpleSchema({
  service_type: String,
  service_name: String,
  service_desc: String,
  location: String,
  quantity: {
    type: String,
    optional: true,
  },
  owner: String,
  images: Array,
  'images.$': Object,
  createdAt: Date,
});

// Services.attachSchema(ServiceSchema);
