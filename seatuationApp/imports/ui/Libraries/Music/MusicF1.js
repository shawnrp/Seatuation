import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import SeatMusicF1 from './SeatMusicF1.js';
import uniqid from 'uniqid';

export default class ChineseF1 extends Component{
	constructor(props){
		super(props);

	}

	renderSeats(){
		var tables = this.props.floor.tables; //array with each element having a seats array
		var arr = [];
		for (var i = 0; i < tables.length; i++){ //loop through the tables on the floor
			var seatsArr = tables[i].seats; //seats at each table 
			seatsArr.map((seat) => { //for each seat, generate seat component
				arr.push(<SeatMusicF1 key={uniqid()} cx={seat.x} cy={seat.y} seatStatus={seat.status}/>) //x and y values to be generated via svg first, then stored in database
			})
		};
		return arr.map((x) => {return x});		
	}
	
	componentDidMount() {
    	const element = document.getElementById('display');
    	element.scrollIntoView({behavior: 'smooth'});
  	}

  	componentDidUpdate() {
    	const element = document.getElementById('display');
    	element.scrollIntoView({behaviour: 'smooth'});
    }

  	//convert SVG to JSX then insert below ]
  	//ensure tables hv conditional fill based on validTable props
  	//ensure database has correct x and y coordinates for the seats
  	//add database name and floor to Library.js
  	render(){
  		return(
			<svg id="Layer_1" version="1.1" viewBox="0 0 840 472.5">
				<rect id='room' fill='#FFF' stroke='#000' strokeMiterlimit='10' width='840' height='472.5' />
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="9.542" x2="830.995" y1="236.563" y2="22.563"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="9.542" x2="9.542" y1="235.934" y2="340.604"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="9.542" x2="39.317" y1="339.716" y2="448.716"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="39.317" x2="335.321" y1="447.827" y2="447.827"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="335.321" x2="402.753" y1="447.827" y2="412.086"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="369.037" x2="436.907" y1="368.686" y2="447.827"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="436.907" x2="830.995" y1="447.827" y2="447.827"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="830.995" x2="830.995" y1="450.009" y2="21.009"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="436.907" x2="436.907" y1="447.827" y2="305.714"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="436.907" x2="816.982" y1="305.714" y2="305.714"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="816.982" x2="830.995" y1="305.714" y2="305.714"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="203.083" x2="204.834" y1="215.511" y2="253.805"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="204.834" x2="118.135" y1="253.805" y2="258.91"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="118.135" x2="118.135" y1="258.91" y2="284.44"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="118.135" x2="217.97" y1="284.44" y2="258.91"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="217.97" x2="231.106" y1="258.91" y2="295.502"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="231.106" x2="118.135" y1="295.502" y2="324.437"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="118.135" x2="59.459" y1="324.437" y2="295.502"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="59.459" x2="59.459" y1="295.502" y2="246.997"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="59.459" x2="104.999" y1="246.997" y2="220.616"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="110.253" x2="203.083" y1="220.616" y2="215.511"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="104.999" x2="118.135" y1="220.616" y2="220.183"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="126.017" x2="127.768" y1="218.49" y2="255.933"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="127.768" x2="127.768" y1="253.805" y2="253.805"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="141.403" x2="143.154" y1="218.064" y2="255.506"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="158.857" x2="160.608" y1="215.936" y2="253.379"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="174.621" x2="176.372" y1="215.936" y2="253.379"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="187.319" x2="189.07" y1="218.49" y2="255.933"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="136.095" x2="146.657" y1="280.295" y2="317.579"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="166.712" x2="177.275" y1="271.329" y2="308.613"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="151.386" x2="161.95" y1="276.859" y2="314.144"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="182.914" x2="193.476" y1="268.303" y2="305.587"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="196.979" x2="207.542" y1="263.354" y2="300.64"/>
				<polygon fill="none" points="707.774,125.539 499.269,177.626 &#xA;&#x9;482.303,113.5 690.809,61.412 " stroke="#010101" strokeWidth="5"/>
				<line fill="none" stroke="#010101" strokeWidth="9" x1="517.288" x2="534.99" y1="172.25" y2="225.722"/>
				<line fill="none" stroke="#010101" strokeWidth="9" x1="547.435" x2="565.137" y1="163.314" y2="216.787"/>
				<line fill="none" stroke="#010101" strokeWidth="9" x1="580.057" x2="597.761" y1="154.889" y2="208.363"/>
				<line fill="none" stroke="#010101" strokeWidth="9" x1="612.746" x2="630.448" y1="147.214" y2="200.687"/>
				<line fill="none" stroke="#010101" strokeWidth="9" x1="643.007" x2="660.711" y1="139.981" y2="193.455"/>
				<line fill="none" stroke="#010101" strokeWidth="9" x1="671.989" x2="689.693" y1="134.024" y2="187.498"/>
				<line fill="none" stroke="#010101" strokeWidth="9" x1="698.047" x2="715.749" y1="125.855" y2="179.327"/>
				<rect id="table 1" height="51.06" width="35.031" fill={this.props.validTable=='table 1'? '#fff196': '#FFF'} stroke="#010101" strokeWidth="3" x="467.949" y="246.587"/>
				<rect height="29.458" width="17.952" fill="none" x="475.878" y="258.486"/>
				<text fontFamily="Segoe UI" fontSize="30.6351" transform="matrix(1.0291 0 0 1 476.7676 280.2373)">1</text>
				<rect height="64.674" width="277.612" fill="none" x="493.83" y="362.729"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="20.4234" transform="matrix(1.0291 0 0 1 570.9521 377.8467)">Library Office</text>
				<polygon fill="none" points="736.864,166.44 563.031,206.491 542.421,122.034 716.255,81.981 "/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="20.4554" transform="matrix(0.9998 -0.2303 0.2371 0.9715 546.0107 136.7432)">CDs &amp; DVDs</text>
				<g>
					<path d="M384.281,160.526v-0.041h-0.142h-25.331h-0.141v0.041c-0.829,0.056-1.447,0.704-1.545,1.489v0.139v16.385&#xA;&#x9;&#x9;c0,0.317,0.084,0.585,0.224,0.826c0.324,0.559,0.801,0.841,1.461,0.841h9.244v2.29h-1.755c-0.436,0-0.773,0.333-0.773,0.758&#xA;&#x9;&#x9;c0,0.427,0.337,0.76,0.773,0.76h10.355c0.435,0,0.787-0.333,0.787-0.76c0-0.425-0.352-0.758-0.787-0.758h-1.756v-2.29h9.244&#xA;&#x9;&#x9;c0.662,0,1.143-0.282,1.462-0.841c0.145-0.253,0.238-0.523,0.238-0.826v-16.385v-0.139&#xA;&#x9;&#x9;C385.741,161.229,385.081,160.582,384.281,160.526z M384.281,162.153v16.385c0,0.097-0.042,0.139-0.142,0.139h-25.331&#xA;&#x9;&#x9;c-0.099,0-0.141-0.042-0.141-0.139v-16.385v-0.139h25.613V162.153L384.281,162.153z" fill="#010101"/>
				</g>
				<g>
					<path d="M398.639,190.092v-0.042h-0.141h-25.332h-0.14v0.042c-0.828,0.056-1.446,0.703-1.545,1.488v0.139v16.384&#xA;&#x9;&#x9;c0,0.318,0.083,0.586,0.225,0.827c0.323,0.559,0.801,0.842,1.461,0.842h9.244v2.288h-1.755c-0.436,0-0.773,0.333-0.773,0.76&#xA;&#x9;&#x9;c0,0.427,0.337,0.759,0.773,0.759h10.354c0.436,0,0.786-0.332,0.786-0.759c0-0.427-0.351-0.76-0.786-0.76h-1.756v-2.288h9.245&#xA;&#x9;&#x9;c0.661,0,1.142-0.283,1.461-0.842c0.145-0.253,0.239-0.523,0.239-0.827v-16.384v-0.139&#xA;&#x9;&#x9;C400.1,190.795,399.439,190.147,398.639,190.092z M398.639,191.719v16.384c0,0.097-0.042,0.139-0.141,0.139h-25.332&#xA;&#x9;&#x9;c-0.098,0-0.14-0.042-0.14-0.139v-16.384v-0.139h25.612V191.719L398.639,191.719z" fill="#010101"/>
				</g>
				<g>
					<path d="M433.067,149.038v-0.041h-0.142h-25.331h-0.141v0.041c-0.829,0.057-1.447,0.704-1.545,1.489v0.138v16.385&#xA;&#x9;&#x9;c0,0.317,0.084,0.586,0.226,0.827c0.323,0.56,0.799,0.842,1.461,0.842h9.244v2.289h-1.756c-0.436,0-0.773,0.332-0.773,0.759&#xA;&#x9;&#x9;c0,0.426,0.337,0.758,0.773,0.758h10.355c0.436,0,0.786-0.333,0.786-0.758c0-0.427-0.351-0.759-0.786-0.759h-1.756v-2.289h9.243&#xA;&#x9;&#x9;c0.661,0,1.144-0.283,1.462-0.842c0.145-0.252,0.239-0.523,0.239-0.827v-16.385v-0.138&#xA;&#x9;&#x9;C434.528,149.742,433.868,149.094,433.067,149.038z M433.067,150.665v16.385c0,0.097-0.042,0.139-0.142,0.139h-25.331&#xA;&#x9;&#x9;c-0.098,0-0.141-0.042-0.141-0.139v-16.385v-0.138h25.613V150.665L433.067,150.665z" fill="#010101"/>
				</g>
				<g>
					<path d="M447.426,181.731v-0.042h-0.142h-25.332h-0.139v0.042c-0.829,0.056-1.446,0.704-1.546,1.489v0.139v16.385&#xA;&#x9;&#x9;c0,0.317,0.084,0.585,0.225,0.826c0.324,0.56,0.801,0.842,1.462,0.842h9.244v2.289h-1.756c-0.436,0-0.772,0.333-0.772,0.76&#xA;&#x9;&#x9;c0,0.427,0.337,0.76,0.772,0.76h10.354c0.438,0,0.788-0.333,0.788-0.76c0-0.427-0.351-0.76-0.788-0.76h-1.755v-2.289h9.243&#xA;&#x9;&#x9;c0.662,0,1.143-0.282,1.462-0.842c0.146-0.252,0.238-0.523,0.238-0.826v-16.385v-0.139&#xA;&#x9;&#x9;C448.886,182.435,448.226,181.787,447.426,181.731z M447.426,183.358v16.385c0,0.096-0.041,0.138-0.142,0.138h-25.332&#xA;&#x9;&#x9;c-0.097,0-0.139-0.042-0.139-0.138v-16.385v-0.139h25.612V183.358L447.426,183.358z" fill="#010101"/>
				</g>
				<g>
					<path d="M318.436,213.999v-0.042h-0.141h-25.332h-0.14v0.042c-0.828,0.056-1.447,0.704-1.545,1.488v0.139v16.385&#xA;&#x9;&#x9;c0,0.317,0.084,0.585,0.225,0.826c0.324,0.56,0.801,0.842,1.461,0.842h9.244v2.289h-1.755c-0.437,0-0.773,0.333-0.773,0.76&#xA;&#x9;&#x9;c0,0.426,0.336,0.758,0.773,0.758h10.354c0.436,0,0.787-0.332,0.787-0.758c0-0.427-0.351-0.76-0.787-0.76h-1.756v-2.289h9.244&#xA;&#x9;&#x9;c0.661,0,1.143-0.282,1.461-0.842c0.145-0.253,0.238-0.523,0.238-0.826v-16.385v-0.139&#xA;&#x9;&#x9;C319.896,214.703,319.237,214.055,318.436,213.999z M318.436,215.626v16.385c0,0.096-0.042,0.138-0.141,0.138h-25.332&#xA;&#x9;&#x9;c-0.098,0-0.14-0.042-0.14-0.138v-16.385v-0.139h25.613V215.626L318.436,215.626z" fill="#010101"/>
				</g>
				<g>
					<path d="M328.945,241.654v-0.039h-0.141h-25.332h-0.14v0.039c-0.829,0.058-1.447,0.704-1.545,1.49v0.138v16.386&#xA;&#x9;&#x9;c0,0.317,0.084,0.585,0.225,0.826c0.323,0.56,0.8,0.842,1.461,0.842h9.244v2.289h-1.756c-0.436,0-0.772,0.332-0.772,0.76&#xA;&#x9;&#x9;c0,0.426,0.336,0.759,0.772,0.759h10.354c0.436,0,0.787-0.333,0.787-0.759c0-0.428-0.351-0.76-0.787-0.76h-1.756v-2.289h9.244&#xA;&#x9;&#x9;c0.661,0,1.143-0.282,1.461-0.842c0.145-0.253,0.239-0.522,0.239-0.826v-16.386v-0.138&#xA;&#x9;&#x9;C330.406,242.358,329.746,241.712,328.945,241.654z M328.945,243.282v16.386c0,0.097-0.042,0.139-0.141,0.139h-25.332&#xA;&#x9;&#x9;c-0.098,0-0.14-0.042-0.14-0.139v-16.386v-0.138h25.612V243.282L328.945,243.282z" fill="#010101"/>
				</g>
				<rect height="24.679" width="111.22" fill="none" x="400.198" y="218.063"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 400.1982 226.8818)">E-Resources</text>
				<g>
					<g>
						<path d="M720.797,242.995h-12.676l-2.463-1.647l14.786-5.736c0.591-0.229,0.886-0.896,0.658-1.49&#xA;&#x9;&#x9;&#x9;c-0.229-0.596-0.894-0.891-1.486-0.662l-16.652,6.459h-8.212c-1.901,0-3.447,1.554-3.447,3.462v26.534&#xA;&#x9;&#x9;&#x9;c0,1.908,1.546,3.461,3.447,3.461h26.045c1.899,0,3.445-1.553,3.445-3.461v-23.458&#xA;&#x9;&#x9;&#x9;C724.242,244.55,722.696,242.995,720.797,242.995z M721.945,269.915c0,0.636-0.517,1.153-1.148,1.153h-26.045&#xA;&#x9;&#x9;&#x9;c-0.634,0-1.148-0.518-1.148-1.153v-18.459h28.342V269.915L721.945,269.915z M721.945,249.148h-28.342v-5.768&#xA;&#x9;&#x9;&#x9;c0-0.637,0.515-1.154,1.148-1.154h8.079l4.306,2.883c0.188,0.127,0.41,0.194,0.638,0.194h13.022c0.632,0,1.148,0.517,1.148,1.153&#xA;&#x9;&#x9;&#x9;V249.148L721.945,249.148z" fill="#010101"/>
					</g>
				</g>
				<g>
					<g>
						<path d="M270.661,188.603h-12.674l-2.463-1.649l14.785-5.734c0.592-0.23,0.886-0.897,0.658-1.492&#xA;&#x9;&#x9;&#x9;c-0.228-0.594-0.894-0.891-1.486-0.66l-16.652,6.459h-8.212c-1.901,0-3.447,1.552-3.447,3.46v26.534&#xA;&#x9;&#x9;&#x9;c0,1.909,1.546,3.461,3.447,3.461h26.044c1.9,0,3.447-1.553,3.447-3.461v-23.458C274.108,190.156,272.562,188.603,270.661,188.603&#xA;&#x9;&#x9;&#x9;z M271.81,215.521c0,0.637-0.516,1.154-1.149,1.154h-26.044c-0.633,0-1.149-0.517-1.149-1.154v-18.459h28.342V215.521&#xA;&#x9;&#x9;&#x9;L271.81,215.521z M271.81,194.756h-28.342v-5.769c0-0.636,0.516-1.154,1.149-1.154h8.078l4.307,2.883&#xA;&#x9;&#x9;&#x9;c0.189,0.126,0.411,0.194,0.637,0.194h13.022c0.633,0,1.149,0.517,1.149,1.153V194.756L271.81,194.756z" fill="#010101"/>
					</g>
				</g>
				<rect height="24.679" width="28.575" fill="none" x="335.32" y="232.971"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 335.3203 241.79)">LINC</text>
				<rect height="24.679" width="111.221" fill="none" x="279.71" y="181.116"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 279.71 189.9346)">Printer</text>
				<rect height="24.678" width="81.16" fill="none" x="669.611" y="276.633"/>
				<text transform="matrix(1.0291 0 0 1 681.0342 285.4521)">
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="0" y="0">Photocopy</tspan>
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="5.901" y="14.296">Machine</tspan>
				</text>
				<ellipse cx="782.391" cy="268.468" fill="none" rx="28.461" ry="27.704" stroke="#000000" strokeWidth="3"/>
				<line fill="none" stroke="#000000" strokeWidth="3" x1="782.391" x2="782.391" y1="296.172" y2="240.764"/>
				<line fill="none" stroke="#000000" strokeWidth="3" x1="753.93" x2="810.852" y1="268.468" y2="268.468"/>
				<rect height="24.678" width="111.22" fill="none" x="726.78" y="208.279"/>
				<text transform="matrix(1.0291 0 0 1 751.6699 217.0977)">
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="0" y="0">Multimedia</tspan>
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="8.787" y="14.296">Stations</tspan>
				</text>
				<line fill="none" stroke="#010101" strokeWidth="9" x1="262.633" x2="262.633" y1="447.827" y2="384.004"/>
				<line fill="none" stroke="#010101" strokeWidth="9" x1="231.106" x2="231.106" y1="447.827" y2="384.004"/>
				<rect height="24.676" width="111.22" fill="none" x="190.814" y="352.094"/>
				<text transform="matrix(1.0291 0 0 1 226.145 360.9131)">
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="0" y="0">Current</tspan>
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="-1.725" y="14.296">Journals</tspan>
				</text>
				<ellipse cx="84.856" cy="408.209" fill="none" rx="28.462" ry="27.704" stroke="#000000" strokeWidth="3"/>
				<ellipse cx="166.712" cy="408.209" fill="none" rx="28.462" ry="27.704" stroke="#000000" strokeWidth="3"/>
				<rect height="24.68" width="111.22" fill="none" x="116.384" y="362.729"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 116.3838 371.5479)">Sofas</text>
				<line stroke="#000000" strokeWidth="6" x1="174.621" x2="233.733" y1="320.181" y2="304.359"/>
				<rect height="24.678" width="111.22" fill="none" x="178.124" y="324.436"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 178.124 333.2549)">New Arrivals</text>
				<line fill="none" stroke="#010101" strokeWidth="9" x1="371.481" x2="371.481" y1="372.516" y2="308.692"/>
				<line fill="none" stroke="#010101" strokeWidth="9" x1="370.916" x2="436.598" y1="307.842" y2="307.763"/>
				<polygon fill="none" points="340.024,432.826 341.128,324.758 366.523,325 365.418,433.07 "/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="12.2604" transform="matrix(-0.0099 0.9717 -1 -0.0096 357.4487 324.9121)">Loans</text>
				<rect height="24.678" width="71.26" fill="none" x="368.274" y="290.838"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 368.2744 299.6582)">Information</text>
				<rect height="24.678" width="38.258" fill="none" x="23.691" y="266.57"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 23.6914 275.3896)">Stairs</text>
				<rect height="12.34" width="111.22" fill="none" x="364.658" y="439.316"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 364.6582 448.1367)">Entrance</text>
				<rect height="54.463" width="191.789" fill="none" x="7.731" y="24.671"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="40.8468" transform="matrix(1.0291 0 0 1 7.7314 53.6724)">LEVEL ONE</text>
				<rect id="table 2" height="51.06" width="35.031" fill={this.props.validTable=='table 2'? '#fff196': '#FFF'} stroke="#010101" strokeWidth="3" x="587.381" y="246.587"/>
				<rect height="29.459" width="17.953" fill="none" x="595.309" y="258.486"/>
				<text fontFamily="Segoe UI" fontSize="30.6351" transform="matrix(1.0291 0 0 1 596.1992 280.2383)">2</text>
				{this.renderSeats()}
			</svg>
  			)
  	}
  }

