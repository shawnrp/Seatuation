import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Libs } from '../api/libs.js';
import Library from './Library.js';
import './css/App.css';

class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			lib: {}, 
			showLibName: false,
		} 

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(lib){ //set lib to be the library document with name, floors, tables etc. 
		this.setState ({
			lib: lib,
			showLibName: true,
		})
	}


	//render the 8 library buttons
	renderLibraryButtons(){
		var libs = this.props.libs; //array of library documents
		return libs.map((lib) => {
			return (
				<div key={lib.name} className="libContainer col-xs-3" 
				onClick={() => {this.handleClick(lib)}}>
					<img className="libImage" src="http://library.yale-nus.edu.sg/wp-content/uploads/2015/10/69A6635.jpg" 
					alt="Lib"/>
					<div className="centered">{lib.name}</div>
				</div>
			);
		})
	}

	render(){
		return(
			<div>
				<div className="container">
					<h2 className="selLib">Select a library below</h2>
					{this.renderLibraryButtons()}
				</div>
				<div id="libTitle" className="row">
					{this.state.showLibName ? 
						<Library lib={this.state.lib}/> : ''
					}
				</div>
			</div>
		); //pass the selected library 
	}
}

export default withTracker(() => {
	Meteor.subscribe('libs');
	return {
		libs: Libs.find().fetch() //fetch return an array of objects
	};
})(App);