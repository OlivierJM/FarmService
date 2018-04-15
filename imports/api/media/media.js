import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Media = new FS.Collection('media', {
  stores: [new FS.Store.FileSystem('media', { path: `${process.env.PWD}/public/uploads/` })],
  filter: {
    maxSize: 1000000, // in bytes ==> 1mb
    allow: {
      contentTypes: ['image/*'],
      extensions: ['png', 'jpg', 'jpeg'],
    },
    deny: {
      contentTypes: ['application/*'],
      extensions: ['mov', 'exe'],
    },
    beforeWrite(fileObj) {
      console.log(fileObj);
    },
    transformWrite(fileObj, readStream, writeStream) {
      readStream.pipe(writeStream);
      console.log(fileObj);
    },
    onInvalid(message) {
      if (Meteor.isClient) {
        alert(message);
      } else {
        console.log(message);
      }
    },
  },
});

Media.deny({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Media.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

export const Images = new Mongo.Collection('images');

Images.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Images.deny({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Meteor.methods({
  imagesUpsert(id, doc) {
    // check(id, Stri)
    Images.upsert(id, doc);
  },
});
