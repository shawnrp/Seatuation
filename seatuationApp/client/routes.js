import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

function success(pos){ //obtained user's location, now proceed to toggle the seat and check location
	var location = pos.coords;
	var currLat = location.latitude;
	var currLng = location.longitude;
	var seatID = FlowRouter.getParam("seatID");
	if(currLat !== null && currLng !== null && seatID !== null){
		Meteor.call('libs.toggleSeat', seatID,  currLat, currLng, function(err, result){
			if(err) alert(err);
			if (result == "userFilled"){
				alert("Welcome! Thanks for marking your seat as filled! Please scan again when you leave!");
			} else if (result =="userLeft"){
				alert("Goodbye! Thanks for marking your seat as empty!");
			} else if (result == "invalid"){
				alert("Your current location is not in the library. Please refrain from abusing this service!");
			}
		})
		window.history.replaceState({}, document.title, "/"); //remove the param from url
	}
}

function locationErr(err){
	alert("Please allow location access to prevent system abuse! Scan again after enabling location access")
	window.history.replaceState({}, document.title, "/"); //remove the param from url
}

FlowRouter.route('/:seatID', { //data muse be encoded in the form /Chinese Library.1.1.1
	action: function(params, queryParams){
		navigator.geolocation.getCurrentPosition(success, locationErr);
	}
});

FlowRouter.route('/');
