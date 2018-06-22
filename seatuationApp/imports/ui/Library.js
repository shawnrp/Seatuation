import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Libs } from '../api/libs.js';
import './css/Library.css';
import ChineseF1 from './Chinese/ChineseF1.js';
import ChineseF2 from './Chinese/ChineseF2.js';
import Sidebar from './Sidebar.js';

export default class Library extends Component {
	constructor(props){
		super(props);

		this.state = {
			floor: {},
			firstLoad: true,
			displaySearch: false,
			searchedFloor: '',
			searchedTable: ''
		}
	}

	handleClick(floor){
		this.setState({
			floor: floor, //floor is object with 'name' and 'tables' fields
			firstLoad: false,
			displaySearch: false,
			searchedResult: '',
			searchedTable: ''
		})
	}

	renderFloorButtons(){
		var name = this.props.lib.name
		var floors = this.props.lib.floors;
		return floors.map((floor) => {
			return (
					<li key={name + floor.name}>
						<a className="floorBtns" onClick={() => this.handleClick(floor)}>{floor.name}</a>
					</li>			
			);
		})
	}

	/*componentWillReceiveProps(nextProps){ //to hide the seatMap when you click another library button 
		this.setState({
			firstLoad: true
		})
	}*/

	renderFirstFloor(){ //for each library add a case to return its first floor
		switch(this.props.lib.name){
			case "Chinese Library":
				console.log("rendering first floor");
				return <ChineseF1 floor={this.props.lib.floors[0]} validTable=''/>;
				break;
		}

	}

	processSearchResults(result){ //pass this method down to searchResults component
		var splitResult = result.split(' - ');
		var searchedFloor = splitResult[0];
		var searchedTable = splitResult[1];
		this.setState({
			displaySearch: true,
			searchedFloor: searchedFloor,
			searchedTable: searchedTable
		});
	}

	fillSeat(){
		Meteor.call('libs.fillSeat', "Chinese Library.1.1.1", function(err){
			if(err) alert(err);
		})
	}

	unfillSeat(){
		Meteor.call('libs.unfillSeat', "Chinese Library.1.1.1", function(err){
			if(err) alert(err);
		})
	}

	render(){
		return(
			<div className="mainLayout container">
				<nav className = "navbar navbar-inverse">
					<div className = "navbar-header">
						<div className="libTitle navbar-brand">{this.props.lib.name}</div>
					</div>
					<ul className = "nav navbar-nav">
						{this.renderFloorButtons()}
					</ul>
				</nav>

				<div className="row">
					<div id="display" className="col-xs-8"> 
						{/*if first time load AND not displaying search results*/}
						{(this.state.firstLoad && !this.state.displaySearch)? this.renderFirstFloor() : ''/*show first floor always on first load*/}

						{/*if not first time load AND not displaying search results i.e. clicked floor button*/}
						{(!this.state.displaySearch && !this.state.firstLoad)?
							(this.props.lib.name=="Chinese Library" && this.state.floor.name=="floor 1" && <ChineseF1 floor={this.props.lib.floors[0]} validTable=''/>)
							|| (this.props.lib.name=="Chinese Library" && this.state.floor.name=="floor 2" && <ChineseF2 floor={this.props.lib.floors[1]} ValidTable=''/>)
							: ''
						}

						{/* displaying search results */}
						{this.state.displaySearch ?
							(this.props.lib.name=="Chinese Library" && this.state.searchedFloor=="floor 1" && <ChineseF1 floor={this.props.lib.floors[0]} validTable={this.state.searchedTable}/>)
							|| (this.props.lib.name=="Chinese Library" && this.state.searchedFloor=="floor 2" && <ChineseF2 floor={this.props.lib.floors[1]} validTable={this.state.searchedTable}/>)
							: ''
						}

					</div>
					<div id="sidebar" className="sidebar col-xs-4">
						<Sidebar lib={this.props.lib} onSearch={this.processSearchResults.bind(this)}/>
					</div>
				</div>
				<div>
					<button onClick={this.fillSeat.bind(this)}>FOR TESTING: Fill Ch Floor1 Table1 Seat1</button>
					<button onClick={this.unfillSeat.bind(this)}>FOR TESTING: Unfill Ch Floor1 Table1 Seat1</button> 
				</div>
			</div>
 		);
	}
}
