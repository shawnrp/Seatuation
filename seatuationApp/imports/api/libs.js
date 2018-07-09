import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Geolocation } from 'meteor/mdg:geolocation';

export const Libs = new Mongo.Collection('libs')//collection of libraries

if (Meteor.isServer) {
  // This code only runs on the server
  	Meteor.publish('libs', function libsPublication() {
  		return Libs.find();
  	});
 }

function measure(lat1, lng1, lat2, lng2){  // generally used geo measurement function
	var R = 6378.137; // Radius of earth in KM
	var dLat = (lat2 - lat1) * Math.PI / 180;
	var dLon = (lng2 - lng1) * Math.PI / 180;
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
		Math.sin(dLon/2) * Math.sin(dLon/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	return Math.round(d * 1000); // meters
};

Meteor.methods({

	'libs.toggleSeat'(seatNum, currLat, currLng){
		var details = seatNum.split('.');
		var libName = details[0];
		var floorNum = details[1]-1;
		var tableNum = details[2]-1;
		var seatNum = details[3]-1;

		var lib = Libs.find({"name": libName}).fetch()[0];
		var row = lib.floors[floorNum].tables[tableNum].seats[seatNum].row;
		var col = lib.floors[floorNum].tables[tableNum].seats[seatNum].col;
		var currStatus = lib.floors[floorNum].tables[tableNum].seats[seatNum].status;
		var libLat = lib.latitude;
		var libLng = lib.longitude; 
		if (measure(currLat, currLng, libLat, libLng) >= 100){
			return("invalid");
		}
		if (currStatus == "empty"){
			var updateSeatFilled = { "$set" : {}, "$inc": {} }
				updateSeatFilled["$set"]["floors." + floorNum + ".tables."+ tableNum + ".seats." + seatNum + ".status"] = "filled";
				updateSeatFilled["$set"]["floors." + floorNum + ".tables." + tableNum + ".seatsArr." + row + "." + col] = 0;
				updateSeatFilled["$inc"]["floors." + floorNum + ".tables." + tableNum + ".numEmpty"] = -1;
				updateSeatFilled["$inc"]["empty"] = -1;
			Libs.update({"name": libName}, updateSeatFilled);
			return("userFilled");
		} else if (currStatus == "filled"){
			var updateSeatFilled = { "$set" : {}, "$inc": {} }
				updateSeatFilled["$set"]["floors." + floorNum + ".tables."+ tableNum + ".seats." + seatNum + ".status"] = "empty";
				updateSeatFilled["$set"]["floors." + floorNum + ".tables." + tableNum + ".seatsArr." + row + "." + col] = 1;
				updateSeatFilled["$inc"]["floors." + floorNum + ".tables." + tableNum + ".numEmpty"] = 1;
				updateSeatFilled["$inc"]["empty"] = 1;
			Libs.update({"name": libName}, updateSeatFilled);
			return("userLeft");
		} else {
			throw new Meteor.Error("ERROR");
		}
	}
});