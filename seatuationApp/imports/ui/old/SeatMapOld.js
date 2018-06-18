import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class SeatMap extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="1024" height="768"
			viewBox="0 0 1024 768">
				<rect id="room" x="103" y="152" fill="#FFF" stroke="#000" strokeMiterlimit="10"
			width="840" height="519" />
				<rect id="entrance" x="138" y="607" fill="#FFF" stroke="#000" strokeMiterlimit="10"
			width="180" height="64" />
				<rect id="table1" x="194" y="292" fill="#FFF" stroke="#000" strokeMiterlimit="10"
			width="124" height="186" />
				<rect id="bookshelf_1_" x="418" y="203" fill="#FFF" stroke="#000" strokeMiterlimit="10"
			width="86" height="388" />
				<rect id="bookshelf" x="557" y="203" fill="#FFF" stroke="#000" strokeMiterlimit="10"
			width="85" height="388" />
				<g id="table1seats" fill="#FFF" stroke="#000" strokeMiterlimit="10">
					<rect id="seat1.1" x="236" y="248" width="40" height="40" fill="#0000FF"/>
					<rect id="seat1.2" x="323" y="323" width="40" height="40" />
					<rect id="seat1.3" x="323" y="393" width="40" height="40" />
					<rect id="seat1.6" x="149" y="323" width="40" height="40" />
					<rect id="seat1.5" x="149" y="393" width="40" height="40" />
					<rect id="seat1.4" x="236" y="482" width="40" height="40" />
				</g>
				<rect id="table2" x="730" y="294" fill="#FFF" stroke="#000" strokeMiterlimit="10"
			width="124" height="186" />
				<g id="table2seats" fill="#FFF" stroke="#000" strokeMiterlimit="10">
					<rect id="seat2.1" x="772" y="250" width="40" height="40" />
					<rect id="seat2.2" x="859" y="326" width="40" height="40" />
					<rect id="seat2.3" x="859" y="396" width="40" height="40" />
					<rect id="seat2.6" x="685" y="325" width="40" height="40" />
					<rect id="seat2.5" x="685" y="395" width="40" height="40" />
					<rect id="seat2.4" x="772" y="486" width="40" height="40" />
				</g>
			</svg>
		)
	}
}