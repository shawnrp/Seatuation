import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import uniqid from 'uniqid';

export default class SearchResult extends Component{
	constructor(props){
		super(props);
	}

	renderResults(){
		var libName = this.props.lib.name;
		var validTables = this.props.validTables;
		return validTables.map((result) => {
			return (
				<button key={uniqid()} className="btn-block btn-default btn">{result}</button>
			);
		});

	}

	render(){
		if (this.props.validTables.length > 0){
			return(
				<div className = "container-fluid">
					<div className="panel panel-success">
							<div className="panel-heading">Available Tables:</div>
							<div className="panel-body btn-group-vertical btn-block">
								{this.renderResults()}
							</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className = "container-fluid">
					<div className="panel panel-danger">
							<div className="panel-heading">No available tables found!</div>
					</div>
				</div>
			);
		}
	}
}