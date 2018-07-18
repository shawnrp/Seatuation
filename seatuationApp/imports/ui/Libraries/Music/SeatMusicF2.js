import React, { Component } from 'react'; 
import { Meteor } from 'meteor/meteor';

export default class Seat extends Component{
	constructor(props){
		super(props);

	}

	checkValidity(){
		return (this.props.cx > 0 && this.props.cy > 0 && 
			(this.props.seatStatus == "empty" || this.props.seatStatus == "filled"))
	}

	//return small rectangle, green if empty, red if filled
	render(){
		if (this.checkValidity()){
			return(	
				<rect x={this.props.cx} y={this.props.cy} width="17.6" height="17.6" 
				fill={(this.props.seatStatus == "empty")? "#008000": "#FF0000"} stroke="#000" strokeWidth="2"/>
			);
		} else {
			return null;
		}
	}	
}