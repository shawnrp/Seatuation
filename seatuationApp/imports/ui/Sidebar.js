import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import uniqid from 'uniqid';
import './css/Sidebar.css';
import checkTable from '../api/SeatAlgorithm.js';

export default class Sidebar extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
	}


	handleSubmit(){
		var numSeats = ReactDOM.findDOMNode(this.refs.dropdown).value
		var reqAdjacent = ReactDOM.findDOMNode(this.refs.adjacent).checked
		var floorsArr = this.props.lib.floors;
		var validTables = [];
		for (var i = 0; i < floorsArr.length; i++){ //loop through floors
			var floor = floorsArr[i];
			var tablesArr = floor.tables;
			for (var j = 0; j < tablesArr.length; j++){ //loop through tables on each floor
				if (numSeats > tablesArr[j].numEmpty) continue; //seats required is more than number of empty seats
				var tableName = tablesArr[j].name;
				var seatArr = tablesArr[j].seatsArr; //array of seats per table
				if (seatArr == undefined) break;
				if (reqAdjacent){
					if (checkTable(seatArr, numSeats)){ //check for adjacent seats on each table 
						validTables.push(floor.name + " " + tableName)
					}
				} else { //just check that the number of empty seats can accommodate number of seats required
					if (tablesArr[j].numEmpty >= numSeats){
						validTables.push(floor.name + " " + tableName)
					}
				}
			}
		}
		console.log(validTables);
	}

	render(){
		return ReactDOM.createPortal(
			<div>
				<div className="legend box">

					<h2 className="legendTitle">Legend</h2>
					
					<div className="legendGrp">
						<div className="child taken"></div>
						<h3 className="child legendSub">Taken seat</h3>
					</div> 
					
					<div className="legendGrp"> 
						<div className="child empty"></div> 
						<h3 className="child legendSub">Empty seat</h3> 
					</div>

				</div>

				<div className="search box">
					<h2> Find a table with required seats: </h2> 
					<label><input type="checkbox" ref="adjacent"/>Check if you need adjacent seats</label>
					<div className="input-group">
						<select className="form-control" ref="dropdown">
							<option value="" disabled hidden>Please select</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option> 
						</select>
						<span className="input-group-btn">
							<button className="btn btn-block btn-primary" onClick={this.handleSubmit}>Search</button>
						</span>
					</div>	
				</div> 
			</div>, document.getElementById('sidebar')
		);
	}
}