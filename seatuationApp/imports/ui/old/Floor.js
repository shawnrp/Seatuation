import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import uniqid from 'uniqid';
//import Table from './Table.js';

export default class Floor extends Component{
	constructor(props){
		super(props);

		this.state = {
			seatsArr: [],
			showComponent: false
		}
	}

	renderTables(){
		var floor = this.props.floor; //floor object with 'name' and 'tables' fields
		var tables = floor.tables; //array
		return tables.map((table) => {
			return(
				<table key={uniqid()}>
					<tbody>
						<tr>
							<th>{table.name}</th>
						</tr>

						{table.seats.map((seatRow) => {
							return (
								<tr key = {uniqid()}><td>{seatRow}</td></tr>
							);
						})}
					</tbody>
				</table> 
			);
		}) 

	}

	render(){
		return(
			<div className = "container">
				{this.renderTables()}
			</div>
		);
	}
}