import React, { Component } from 'react'; 
import { Meteor } from 'meteor/meteor';

export default class Seat extends Component{
	constructor(props){
		super(props);

	}

	checkValidity(){
		if (this.props.cx > 0 && this.props.cy > 0){
			return true; 
		}
	}

	render(){
		if (this.checkValidity()){
			return(	
				<rect x={this.props.cx} y={this.props.cy} width="40" height="40" 
				fill={(this.props.filled == "empty")? "#008000": "#FF0000"} stroke="#000" strokeMiterlimit="10"/>
			);
		} else {
			return null;
		}
	}	
}