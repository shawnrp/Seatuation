import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import uniqid from 'uniqid';
import './css/Sidebar.css';
import checkTable from '../api/SeatAlgorithm.js';
import SearchResult from './SearchResult.js';

export default class Sidebar extends Component{
	constructor(props){
		super(props);

		this.state = {
			validTables: []
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(){ //method to search for tables that can accomodate seats
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
						validTables.push(floor.name + " - " + tableName)
					}
				} else { //just check that the number of empty seats can accommodate number of seats required
					if (tablesArr[j].numEmpty >= numSeats){
						validTables.push(floor.name + " - " + tableName)
					}
				}
			}
		}
		this.renderSearchResults(validTables);
	}

	renderSearchResults(validTables){
		ReactDOM.render(<SearchResult validTables={validTables} lib={this.props.lib} onSearch={this.props.onSearch}/>, 
						ReactDOM.findDOMNode(this.refs.results));
	}

	render(){
		return (
			<div className="container-fluid">
				{/* legend for the seat map*/}
				<div className="legend box">
					<h2 className="legendTitle">Legend</h2>
					<ul className="list-inline legendList">
						<li>
							<div className="inline taken"></div>
							<span className="legendSub">Taken seat</span>
						</li> 
						<li> 
							<div className="inline empty"></div> 
							<span className="legendSub">Empty seat</span> 
						</li>
						<li> 
							<div className="inline tableMatch"></div> 
							<span className="legendSub">Matching table</span> 
						</li>
					</ul>
				</div>

			{/* seat selector */}
				<div className="search box">
					<h2 className="legendTitle"> Find a table with required seats: </h2> 
					<label>
						<input type="checkbox" ref="adjacent"/>
						<span className="responsiveText">Seats must be adjacent or opposite</span>
					</label>
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
					<div ref="results"></div> {/* render search results here */}
				</div> 

			</div>
		);
	}
}