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

Meteor.methods({
	'libs.fillSeat'(seatNum){ //seatNum will take format of e.g. Chinese Library.1.1.1, as chinese lib, floor1, table1, seat1
		check(seatNum, String);

		var details = seatNum.split('.');
		var libName = details[0];
		var floorNum = details[1]-1;
		var tableNum = details[2]-1;
		var seatNum = details[3]-1;

		var lib = Libs.find({"name": libName}).fetch()[0];
		var row = lib.floors[floorNum].tables[tableNum].seats[seatNum].row;
		var col = lib.floors[floorNum].tables[tableNum].seats[seatNum].col;
		var currStatus = lib.floors[floorNum].tables[tableNum].seats[seatNum].status;

		if (currStatus == "empty"){
			var updateSeatFilled = { "$set" : {}, "$inc": {} }
				updateSeatFilled["$set"]["floors." + floorNum + ".tables."+ tableNum + ".seats." + seatNum + ".status"] = "filled";
				updateSeatFilled["$set"]["floors." + floorNum + ".tables." + tableNum + ".seatsArr." + row + "." + col] = 0;
				updateSeatFilled["$inc"]["floors." + floorNum + ".tables." + tableNum + ".numEmpty"] = -1;
			Libs.update({"name": libName}, updateSeatFilled);
		} else {
			throw new Meteor.Error("Seat is already filled!");
		}
	},

	'libs.unfillSeat'(seatNum){ //seatNum will take format of e.g. Chinese Library.1.1.1, as chinese lib, floor1, table1, seat1
		check(seatNum, String);

		var details = seatNum.split('.');
		var libName = details[0];
		var floorNum = details[1]-1;
		var tableNum = details[2]-1;
		var seatNum = details[3]-1;

		var lib = Libs.find({"name": libName}).fetch()[0];
		var row = lib.floors[floorNum].tables[tableNum].seats[seatNum].row;
		var col = lib.floors[floorNum].tables[tableNum].seats[seatNum].col;
		var currStatus = lib.floors[floorNum].tables[tableNum].seats[seatNum].status;

		if (currStatus == "filled"){
			var updateSeatFilled = { "$set" : {}, "$inc": {} }
				updateSeatFilled["$set"]["floors." + floorNum + ".tables."+ tableNum + ".seats." + seatNum + ".status"] = "empty";
				updateSeatFilled["$set"]["floors." + floorNum + ".tables." + tableNum + ".seatsArr." + row + "." + col] = 1;
				updateSeatFilled["$inc"]["floors." + floorNum + ".tables." + tableNum + ".numEmpty"] = 1;
			Libs.update({"name": libName}, updateSeatFilled);
		} else {
			throw new Meteor.Error("Seat is already empty!");;
		}
	}
});