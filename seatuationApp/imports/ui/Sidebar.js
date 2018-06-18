import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import uniqid from 'uniqid';
import './css/Sidebar.css';

export default class Sidebar extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
	}


	handleSubmit(){
		alert(ReactDOM.findDOMNode(this.refs.dropdown).value);
		alert(ReactDOM.findDOMNode(this.refs.adjacent).checked);
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
							<option value="" selected disabled hidden>Please select</option>
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