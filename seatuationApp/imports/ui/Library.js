import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Libs } from '../api/libs.js';
import './css/Library.css';
import ChineseF1 from './Libraries/Chinese/ChineseF1.js';
import ChineseF2 from './Libraries/Chinese/ChineseF2.js';
import CentralF1 from './Libraries/Central/CentralF1.js';
import CentralF2 from './Libraries/Central/CentralF2.js';
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

	renderFirstFloor(){ //for each library add a case to return its first floor
		switch(this.props.lib.name){
			case "Chinese Library":
				return <ChineseF1 floor={this.props.lib.floors[0]} validTable=''/>;
				break;
			case "Central Library":
				return <CentralF1 floor={this.props.lib.floors[0]} validTable=''/>;
				break;
		}

	}

	processSearchResults(result){ //pass this method down to searchResults component
		var splitResult = result.split(' - ');
		var searchedFloor = splitResult[0];
		var searchedTable = splitResult[1];
		this.setState({
			displaySearch: true,
			searchedFloor: searchedFloor, //when result is returned after search result button is clicked, set state accordingly and re-render to display correct layout
			searchedTable: searchedTable
		});
	}

	render(){
		return(
			<div className="mainLayout container-fluid">
				<nav className="navbar navbar-inverse">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>                        
				      </button>
				      <a className="libTitle navbar-brand" href="#">{this.props.lib.name}</a>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav">
						{this.renderFloorButtons()}
				      </ul>
				    </div>
				  </div>
				</nav>
				
				
					<div id="display" className="col-xs-8"> 
						{/*if first time load AND not displaying search results*/}
						{(this.state.firstLoad && !this.state.displaySearch)? this.renderFirstFloor() : ''/*show first floor always on first load*/}

						{/*if not first time load AND not displaying search results i.e. clicked floor button*/}
						{(!this.state.displaySearch && !this.state.firstLoad)?
							(this.props.lib.name=="Chinese Library" && this.state.floor.name=="floor 1" && <ChineseF1 floor={this.props.lib.floors[0]} validTable=''/>)
							|| (this.props.lib.name=="Chinese Library" && this.state.floor.name=="floor 2" && <ChineseF2 floor={this.props.lib.floors[1]} ValidTable=''/>)
							|| (this.props.lib.name=="Central Library" && this.state.floor.name=="floor 1" && <CentralF1 floor={this.props.lib.floors[0]} validTable=''/>)
							|| (this.props.lib.name=="Central Library" && this.state.floor.name=="floor 2" && <CentralF1 floor={this.props.lib.floors[1]} validTable=''/>)
							: ''
						}

						{/* displaying search results */}
						{this.state.displaySearch ?
							(this.props.lib.name=="Chinese Library" && this.state.searchedFloor=="floor 1" && <ChineseF1 floor={this.props.lib.floors[0]} validTable={this.state.searchedTable}/>)
							|| (this.props.lib.name=="Chinese Library" && this.state.searchedFloor=="floor 2" && <ChineseF2 floor={this.props.lib.floors[1]} validTable={this.state.searchedTable}/>)
							|| (this.props.lib.name=="Central Library" && this.state.searchedFloor=="floor 1" && <CentralF1 floor={this.props.lib.floors[0]} validTable={this.state.searchedTable}/>)
							|| (this.props.lib.name=="Central Library" && this.state.searchedFloor=="floor 2" && <CentralF1 floor={this.props.lib.floors[1]} validTable={this.state.searchedTable}/>)

							: ''
						}

					</div>
					<div id="sidebar" className="sidebar col-xs-4">
						<Sidebar lib={this.props.lib} onSearch={this.processSearchResults.bind(this)}/>
					</div>
				</div>
			
 		);
	}
}
