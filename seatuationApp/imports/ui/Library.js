import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Libs } from '../api/libs.js';
import Floor from './Floor.js';
import './Library.css';
import Anychart from 'anychart';
import ChineseF1 from './Chinese/ChineseF1.js';
import ChineseF2 from './Chinese/ChineseF2.js';

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

	componentWillReceiveProps(nextProps){ //to hide the seatMap when you click another library button 
		this.setState({
			showComponent: false
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
				<div>
					<h1 className="child libName">{this.props.lib.name}</h1>
					<div className="child">
						{this.renderFloorButtons()}
					</div>
				</div> 
				{this.state.showComponent ?
					(this.props.lib.name=="Chinese Library" && this.state.floor.name=="floor 1" && <ChineseF1 floor={this.state.floor}/>)
					|| (this.props.lib.name=="Chinese Library" && this.state.floor.name=="floor 2" && <ChineseF2 floor={this.state.floor}/>)
					: ''
				}
			</div>,  document.getElementById('libTitle')
 		);
	}
}
