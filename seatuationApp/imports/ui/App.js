import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Libs } from '../api/libs.js';
import Library from './Library.js';
import './css/App.css';
import {Line} from 'rc-progress';
import QrReader from 'react-qr-reader';	

class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			libName: '', 
			showLibName: false,
			showQR: false,
			data: ''
		} 

		this.handleClick = this.handleClick.bind(this)
		this.getCorrectLibrary = this.getCorrectLibrary.bind(this)
		this.handleScan = this.handleScan.bind(this)
		this.handleError = this.handleError.bind(this)
		this.showQR = this.showQR.bind(this)
	}

	handleClick(lib){ //set lib to be the library document with name, floors, tables etc. 
		this.setState ({
			libName: lib.name,
			showLibName: true
		})
	}


	//render the 8 library buttons
	renderLibraryButtons(){
		var libs = this.props.libs; //array of library documents
		return libs.map((lib) => {
			var empty = lib.empty;
			var total = lib.totalCapacity;
			var occupancy = Math.round(((total-empty)/total)*100);
			return (
				<div key={lib.name} className="libContainer col-xs-3" 
				onClick={() => {this.handleClick(lib)}}>
					<img className="libImage" src="https://library.yale-nus.edu.sg/wp-content/uploads/2015/10/69A6635.jpg" 
					alt="Lib"/>
					<div className="centered">
					{lib.name}
					<div className="occupancy">Occupancy({occupancy}%):</div>
					<Line className="progBar" percent={occupancy} strokeWidth="5" trailWidth="5"/>
					</div>
				</div>
			);
		})
	}

	getCorrectLibrary(){ //so that Library is rendered with data directly from subscription
		var targetLib = this.state.libName;
		var libs = this.props.libs;
		for (var i = 0; i < libs.length; i++){
			if(libs[i].name == targetLib){
				return libs[i];
			}
		}
	}

	handleScan(data){ //when scanned a QR code, hide the scanner
		if(data){
			this.setState({
				showQR: false,
			});
			window.location.href= data; 
		}
	}

	handleError(err){
		console.error(err);
	}


	showQR(){ //handle click of QR code button

		this.setState({
			showQR: !this.state.showQR,
			showLibName: false,
		});
	}

	render(){
		return(
			<div>
				<div className="topHalf container">
					<button className="btn btn-primary QRbtn" onClick={this.showQR}>Help the community! Simply click to scan the QR code when you sit and once again when you leave!</button>
					<div ref="QR">
						{this.state.showQR?
							<div>
								<QrReader
									delay={300}
									onScan={this.handleScan}
									style={{width: '30em'}}
									onError={this.handleError}
									className="QRcam"
								/>
							</div>: ''
						}
					</div>
					<h2 className="selLib">Select a library below</h2>
					{this.renderLibraryButtons()}
				</div>
				<div id="libTitle">
					{this.state.showLibName ? 
						<Library lib={this.getCorrectLibrary()}/> : ''
					}
				</div>
			</div>
		); //pass the selected library 
	}
}

export default withTracker(() => {
	Meteor.subscribe('libs');
	return {
		libs: Libs.find({}, {sort: {name: 1}}).fetch() //fetch return an array of objects, returned in ascending alphabetical order
	};
})(App);