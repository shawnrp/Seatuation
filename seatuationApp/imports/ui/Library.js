import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Libs } from '../api/libs.js';
import Floor from './Floor.js';
import './Library.css';

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
					<button className="floorBtn btn btn-default" key={name + floor.name} 
					onClick ={() => this.handleClick(floor)}>{floor.name}</button>			
			);
		})
	}

	componentDidMount() {
    	const element = document.getElementById('libTitle');
    	element.scrollIntoView({behavior: 'smooth'});
  	}

  	componentDidUpdate() {
    	const element = document.getElementById('libTitle');
    	element.scrollIntoView({behaviour: 'smooth'});
  	}

	render(){
		return ReactDOM.createPortal(
			<div className="container">
				<h1 className="child libName">{this.props.lib.name}</h1>
				<div className="child">
					{this.renderFloorButtons()}
					{this.state.showComponent ?
						<Floor floor={this.state.floor} name={this.props.lib.name + this.state.floor.name}/> : ''
					}
				</div>
			</div>,  document.getElementById('libTitle')
 		);
	}
}
