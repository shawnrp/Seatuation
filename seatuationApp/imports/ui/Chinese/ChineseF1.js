import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import Seat from '../Seat.js'
import uniqid from 'uniqid'

export default class ChineseF1 extends Component{
	constructor(props){
		super(props);

	}

	renderSeats(){
		var tables = this.props.floor.tables; //array with each element having a seats array
		var arr = [];
		for (var i = 0; i < tables.length; i++){ //loop through the tables on the floor
			var seatsArr = tables[i].seats; //seats at each table 
			seatsArr.map((seat) => { //for each seat, generate seat component
				arr.push(<Seat key={uniqid()} cx={seat.x} cy={seat.y} filled={seat.status}/>) //x and y values to be generated via svg first, then stored in database
			})
		};
		return arr.map((x) => {return x});		
	}
	
	componentDidMount() {
    	const element = document.getElementById('scrollHere');
    	element.scrollIntoView({behavior: 'smooth'});
    }

  	componentDidUpdate() {
    	const element = document.getElementById('display');
    	element.scrollIntoView({behavior: 'smooth'});
  	}

  	//convert SVG to JSX then insert below 
	render(){
		return ReactDOM.createPortal(
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
				<rect id="table2" x="730" y="294" fill="#FFF" stroke="#000" strokeMiterlimit="10"
			width="124" height="186" />
				{this.renderSeats()}
			</svg>, document.getElementById('display')
		)
	}
}