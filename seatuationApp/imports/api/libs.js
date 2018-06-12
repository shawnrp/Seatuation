import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Libs = new Mongo.Collection('libs')//collection of libraries

if (Meteor.isServer) {
  // This code only runs on the server
  	Meteor.publish('libs', function libsPublication() {
  		return Libs.find();
  	});
 }

/*Meteor.methods({

});*/