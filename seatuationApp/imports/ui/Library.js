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

		this.state ={
			floor: {},
			showComponent: false
		}
	}

	handleClick(floor){
		this.setState({
			floor: floor, //floor is object with 'name' and 'tables' fields
			showComponent: true
		})
	}

	renderFloorButtons(){
		var name = this.props.lib.name
		var floors = this.props.lib.floors;
		return floors.map((floor) => {
			return (
					<button className="floorBtn btn btn-primary" key={name + floor.name} 
					onClick ={() => this.handleClick(floor)}>{floor.name}</button>			
			);
		})
	}

	componentWillReceiveProps(nextProps){ //to hide the seatMap when you click another library button 
		this.setState({
			showComponent: false
		})
	}

	renderFirstFloor(){
		switch(this.props.lib.name){
			case "Chinese Library":
				return <ChineseF1 floor={this.props.lib.floors[0]}/>;
				break;
		}
	}


	render(){
		return ReactDOM.createPortal(
			<div className="container">
				<div>
					<h1 className="child libName">{this.props.lib.name}</h1>
					<div className="child">
						{this.renderFloorButtons()}
					</div>
				</div> 

				{this.state.showComponent? '': this.renderFirstFloor() /*show first floor always*/}

				{this.state.showComponent ?
					(this.props.lib.name=="Chinese Library" && this.state.floor.name=="floor 1" && <ChineseF1 floor={this.state.floor}/>)
					|| (this.props.lib.name=="Chinese Library" && this.state.floor.name=="floor 2" && <ChineseF2 floor={this.state.floor}/>)
					: ''
				}

				<Sidebar lib={this.props.lib}/>
				
			</div>,  document.getElementById('libTitle')
 		);
	}
}
