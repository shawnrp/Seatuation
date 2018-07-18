import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import SeatTest from '../../SeatTest.js';
import uniqid from 'uniqid';

export default class CentralF1 extends Component{
	constructor(props){
		super(props);

	}

	renderSeats(){
		var tables = this.props.floor.tables; //array with each element having a seats array
		var arr = [];
		for (var i = 0; i < tables.length; i++){ //loop through the tables on the floor
			var seatsArr = tables[i].seats; //seats at each table 
			seatsArr.map((seat) => { //for each seat, generate seat component
				arr.push(<SeatTest key={uniqid()} cx={seat.x} cy={seat.y} seatStatus={seat.status}/>) //x and y values to be generated via svg first, then stored in database
			})
		};
		return arr.map((x) => {return x});		
	}
	
	componentDidMount() {
    	const element = document.getElementById('display');
    	element.scrollIntoView({behavior: 'smooth'});
  	}

  	componentDidUpdate() {
    	const element = document.getElementById('display');
    	element.scrollIntoView({behaviour: 'smooth'});
    }

  	//convert SVG to JSX then insert below 
  	render(){
  		return(
  			<svg id='Layer_1' xmlns='http://www.w3.org/2000/svg'
  			viewBox='0 0 840 519'>
	  			<g>
		  			<rect id='room' fill='#FFF' stroke='#000' strokeMiterlimit='10' width='840'
		  			height='519' />
	  				<text x='10' y='20' className='heavy' fill="black">{this.props.floor.name}</text>
	  			</g>
	  			<rect id='entrance' x='35' y='455' fill='#FFF' stroke='#000' strokeMiterlimit='10'
	  			width='180' height='64' />
	  			<g>
		  			<rect id='table 1' x='91' y='140' fill={this.props.validTable=='table 1'? '#fff196': '#FFF'} stroke='#000' strokeMiterlimit='10'
		  			width='124' height='186' />
		  			<text x='130' y='230' fill="black" className="heavy">table 1</text>
		  		</g>
	  			<rect id='bookshelf_1_' x='315' y='51' fill='#FFF' stroke='#000' strokeMiterlimit='10'
	  			width='86' height='388' />
	  			<rect id='bookshelf' x='454' y='51' fill='#FFF' stroke='#000' strokeMiterlimit='10'
	  			width='85' height='388' />
	  			<g>
		  			<rect id='table 2' x='627' y='142' fill={this.props.validTable=='table 2'? '#fff196': '#FFF'} stroke='#000' strokeMiterlimit='10'
		  			width='124' height='186' />
		  			<text x='666' y='230' fill="black" className="heavy">table 2</text>
		  		</g>
  				{this.renderSeats()}
  			</svg>
  			)
  	}
  }

