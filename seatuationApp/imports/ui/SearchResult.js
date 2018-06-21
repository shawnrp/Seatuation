import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import uniqid from 'uniqid';
import ChineseF1 from './Chinese/ChineseF1';
import ChineseF2 from './Chinese/ChineseF2';
import './css/SearchResult.css';

export default class SearchResult extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(result){ 
		this.props.onSearch(result); //result is propagated up to Library component, then re-rendered
	}

	renderResults(){ //prints the results buttons e.g. 'floor 1 - table 1'
		var libName = this.props.lib.name;
		var validTables = this.props.validTables;
		return validTables.map((result) => {
			return (
				<button key={uniqid()} className="btn-block btn-default btn" onClick={() => this.handleClick(result)}>
					{result}</button>
			);
		});

	}

	render(){ //if have search results, print them, otherwise print no tables found
		if (this.props.validTables.length > 0){
			return(
				<div>
					<div className="panel panel-success" style={{marginBottom: 0}}>
							<div className="panel-heading">Available Tables:</div>
							<div className="resultsPanel panel-body btn-group-vertical btn-block">
								{this.renderResults()}
							</div>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<div className="panel panel-danger">
							<div className="panel-heading">No available tables found!</div>
					</div>
				</div>
			);
		}
	}
}