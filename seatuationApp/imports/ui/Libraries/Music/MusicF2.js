import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import SeatMusicF2 from './SeatMusicF2.js';
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
				arr.push(<SeatMusicF2 key={uniqid()} cx={seat.x} cy={seat.y} seatStatus={seat.status}/>) //x and y values to be generated via svg first, then stored in database
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
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="8.542" x2="829.995" y1="236.563" y2="22.563"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="8.542" x2="8.542" y1="235.934" y2="340.604"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="8.542" x2="38.317" y1="339.716" y2="448.716"/>
				<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="829.995" x2="829.995" y1="450.009" y2="21.009"/>
				<g>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="171.083" x2="172.834" y1="337.443" y2="299.149"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="174.834" x2="88.135" y1="299.149" y2="294.044"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="88.135" x2="88.135" y1="295.279" y2="267.279"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="88.135" x2="187.97" y1="268.514" y2="294.044"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="184.97" x2="198.106" y1="294.044" y2="257.452"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="201.106" x2="88.135" y1="257.452" y2="228.518"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="89.297" x2="30.297" y1="227.518" y2="256.452"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="31.459" x2="31.459" y1="254.094" y2="308.094"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="29.459" x2="74.999" y1="306.957" y2="333.338"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="75.386" x2="173.386" y1="333.467" y2="338.572"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="96.017" x2="97.768" y1="334.465" y2="297.021"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="97.768" x2="97.768" y1="299.149" y2="299.149"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="111.403" x2="113.154" y1="334.891" y2="297.448"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="128.857" x2="130.608" y1="337.018" y2="299.575"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="144.621" x2="146.372" y1="337.018" y2="299.575"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="159.319" x2="161.07" y1="336.465" y2="299.021"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="106.095" x2="116.657" y1="272.659" y2="235.375"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="136.712" x2="147.275" y1="281.625" y2="244.341"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="121.386" x2="131.95" y1="276.095" y2="238.811"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="152.914" x2="163.476" y1="284.651" y2="247.367"/>
					<line fill="#5E5E5E" stroke="#010101" strokeWidth="5" x1="170.979" x2="181.542" y1="289.6" y2="252.314"/>
				</g>
				<polygon fill="none" points="706.774,125.539 498.269,177.626 &#xA;&#x9;481.303,113.5 689.809,61.412 " stroke="#010101" strokeWidth="5"/>
				<g>
					<path d="M401.125,151.437v-0.042h-0.141h-25.332h-0.14v0.042c-0.828,0.056-1.447,0.704-1.545,1.488v0.139v16.385&#xA;&#x9;&#x9;c0,0.317,0.084,0.585,0.225,0.826c0.324,0.56,0.801,0.842,1.461,0.842h9.244v2.289h-1.755c-0.437,0-0.773,0.333-0.773,0.76&#xA;&#x9;&#x9;c0,0.426,0.336,0.758,0.773,0.758h10.354c0.436,0,0.787-0.332,0.787-0.758c0-0.427-0.351-0.76-0.787-0.76h-1.756v-2.289h9.244&#xA;&#x9;&#x9;c0.661,0,1.143-0.282,1.461-0.842c0.145-0.253,0.238-0.523,0.238-0.826v-16.385v-0.139&#xA;&#x9;&#x9;C402.585,152.141,401.925,151.493,401.125,151.437z M401.125,153.064v16.385c0,0.096-0.042,0.138-0.141,0.138h-25.332&#xA;&#x9;&#x9;c-0.098,0-0.14-0.042-0.14-0.138v-16.385v-0.139h25.613V153.064L401.125,153.064z" fill="#010101"/>
				</g>
				<g>
					<path d="M411.633,179.092v-0.039h-0.141h-25.332h-0.14v0.039c-0.829,0.058-1.447,0.704-1.545,1.49v0.138v16.386&#xA;&#x9;&#x9;c0,0.317,0.084,0.585,0.225,0.826c0.323,0.56,0.8,0.842,1.461,0.842h9.244v2.289h-1.756c-0.436,0-0.772,0.332-0.772,0.76&#xA;&#x9;&#x9;c0,0.426,0.336,0.759,0.772,0.759h10.354c0.436,0,0.787-0.333,0.787-0.759c0-0.428-0.351-0.76-0.787-0.76h-1.756v-2.289h9.244&#xA;&#x9;&#x9;c0.661,0,1.143-0.282,1.461-0.842c0.145-0.253,0.239-0.522,0.239-0.826V180.72v-0.138&#xA;&#x9;&#x9;C413.094,179.796,412.434,179.15,411.633,179.092z M411.633,180.72v16.386c0,0.097-0.042,0.139-0.141,0.139h-25.332&#xA;&#x9;&#x9;c-0.098,0-0.14-0.042-0.14-0.139V180.72v-0.138h25.612V180.72L411.633,180.72z" fill="#010101"/>
				</g>
				<g>
					<g>
						<path d="M611.622,166.739h-10.661l-2.071-1.329l12.436-4.621c0.498-0.186,0.746-0.723,0.554-1.203&#xA;&#x9;&#x9;&#x9;c-0.192-0.479-0.751-0.718-1.25-0.531l-14.007,5.205h-6.906c-1.599,0-2.899,1.25-2.899,2.789v21.382&#xA;&#x9;&#x9;&#x9;c0,1.538,1.301,2.789,2.899,2.789h21.906c1.599,0,2.898-1.251,2.898-2.789v-18.903&#xA;&#x9;&#x9;&#x9;C614.521,167.991,613.221,166.739,611.622,166.739z M612.589,188.431c0,0.513-0.434,0.93-0.967,0.93h-21.906&#xA;&#x9;&#x9;&#x9;c-0.533,0-0.967-0.417-0.967-0.93v-14.875h23.84V188.431L612.589,188.431z M612.589,171.698h-23.84v-4.649&#xA;&#x9;&#x9;&#x9;c0-0.512,0.434-0.93,0.967-0.93h6.795l3.622,2.323c0.159,0.102,0.346,0.157,0.536,0.157h10.953c0.533,0,0.967,0.417,0.967,0.929&#xA;&#x9;&#x9;&#x9;V171.698L612.589,171.698z" fill="#010101"/>
					</g>
				</g>
				<rect height="24.679" width="28.575" fill="none" x="418.009" y="170.409"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 418.0088 179.228)">LINC</text>
				<ellipse id="table 9" cx="490.044" cy="335.467" fill={this.props.validTable=='table 9'? '#fff196': 'none'} rx="18.215" ry="17.73" stroke="#000000" strokeWidth="3"/>
				<line fill="none" stroke="#808285" x1="490.045" x2="490.045" y1="319.147" y2="352.197"/>
				<line fill="none" stroke="#808285" x1="473.25" x2="506.732" y1="335.467" y2="335.467"/>
				<rect height="24.678" width="38.258" fill="none" x="17.027" y="326.233"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 17.0273 335.0527)">Stairs</text>
				<rect height="54.463" width="216.807" fill="none" x="6.731" y="24.671"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="40.8468" transform="matrix(1.0291 0 0 1 6.7314 53.6724)">LEVEL TWO</text>
				<rect id="table 2" height="40.848" width="20.705" fill={this.props.validTable=='table 2'? '#fff196': '#FFF'} stroke="#010101" strokeWidth="3" x="203.281" y="398.079"/>
				<rect height="23.566" width="14.362" fill="none" x="206.224" y="407.686"/>
				<text fontFamily="Segoe UI" fontSize="24.5081" transform="matrix(1.0291 0 0 1 206.6069 425.8271)">2</text>
				<line fill="none" stroke="#010101" strokeWidth="5" x1="36.156" x2="832.156" y1="448.716" y2="450.009"/>
				<line fill="none" stroke="#010101" strokeWidth="5" x1="199.106" x2="199.106" y1="258.251" y2="189.251"/>
				<line fill="none" stroke="#010101" strokeWidth="5" x1="171.958" x2="171.958" y1="449.15" y2="337.15"/>
				<rect id="table 3" height="40.848" width="20.705" fill={this.props.validTable=='table 3'? '#fff196': '#FFF'} stroke="#010101" strokeWidth="3" x="302.786" y="398.079"/>
				<rect height="23.566" width="14.362" fill="none" x="305.728" y="407.599"/>
				<text fontFamily="Segoe UI" fontSize="24.5081" transform="matrix(1.0291 0 0 1 306.1113 425.7402)">3</text>
				<rect id="table 4" height="40.848" width="20.705" fill={this.props.validTable=='table 4'? '#fff196': '#FFF'} stroke="#010101" strokeWidth="3" x="391.108" y="398.079"/>
				<rect height="23.566" width="14.362" fill="none" x="394.05" y="407.599"/>
				<text fontFamily="Segoe UI" fontSize="24.5081" transform="matrix(1.0291 0 0 1 394.4336 425.7402)">4</text>
				<rect id="table 5" height="40.848" width="20.705" fill={this.props.validTable=='table 5'? '#fff196': '#FFF'} stroke="#010101" strokeWidth="3" x="480.706" y="398.079"/>
				<rect height="23.566" width="14.362" fill="none" x="483.648" y="407.512"/>
				<text fontFamily="Segoe UI" fontSize="24.5081" transform="matrix(1.0291 0 0 1 484.0322 425.6533)">5</text>
				<rect id="table 6" height="40.848" width="20.705" fill={this.props.validTable=='table 6'? '#fff196': '#FFF'} stroke="#010101" strokeWidth="3" x="575.543" y="398.079"/>
				<rect height="23.566" width="14.362" fill="none" x="578.485" y="407.599"/>
				<text fontFamily="Segoe UI" fontSize="24.5081" transform="matrix(1.0291 0 0 1 578.8691 425.7402)">6</text>
				<rect id="table 7" height="40.848" width="20.705" fill={this.props.validTable=='table 7'? '#fff196': '#FFF'} stroke="#010101" strokeWidth="3" x="660.661" y="398.079"/>
				<rect height="23.566" width="14.362" fill="none" x="663.604" y="407.251"/>
				<text fontFamily="Segoe UI" fontSize="24.5081" transform="matrix(1.0291 0 0 1 663.9873 425.3926)">7</text>
				<rect id="table 8" height="40.848" width="20.705" fill={this.props.validTable=='table 8'? '#fff196': '#FFF'} stroke="#010101" strokeWidth="3" x="745.764" y="398.079"/>
				<rect height="23.566" width="14.362" fill="none" x="748.706" y="407.338"/>
				<text fontFamily="Segoe UI" fontSize="24.5081" transform="matrix(1.0291 0 0 1 749.0898 425.4795)">8</text>
				<rect height="7.824" width="50.99" fill="none" stroke="#010101" transform="matrix(0.971 -0.239 0.239 0.971 -13.7765 165.1893)" x="648.741" y="135.487"/>
				<rect height="11.36" width="83.221" fill="none" x="665.164" y="147.716"/>
				<text fontFamily="Segoe UI" fontSize="12" transform="matrix(1 0 0 1 665.1641 156.5986)">Emergency Exit</text>
				<rect height="24.678" width="81.16" fill="none" x="607.434" y="166.714"/>
				<text transform="matrix(1.0291 0 0 1 618.8564 175.5337)">
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="0" y="0">Photocopy</tspan>
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="5.901" y="14.296">Machine</tspan>
				</text>
				<rect id="table 1" height="40.848" width="20.705" fill={this.props.validTable=='table 1'? '#fff196': '#FFF'} stroke="#010101" strokeWidth="3" x="309.237" y="181.917"/>
				<rect height="23.566" width="14.362" fill="none" x="312.18" y="191.437"/>
				<text fontFamily="Segoe UI" fontSize="24.5081" transform="matrix(1.0291 0 0 1 312.563 209.5786)">1</text>
				<ellipse cx="203.281" cy="365.587" fill="none" rx="20.411" ry="24.981" stroke="#000000" strokeWidth="2"/>
				<rect height="13.41" width="41.741" fill="none" transform="matrix(0.9998 0.0213 -0.0213 0.9998 7.8295 -4.2451)" x="182.411" y="358.881"/>
				<text fontFamily="Segoe UI" fontSize="12" transform="matrix(1 0 0 1 189.1499 367.3213)">Sofas</text>
				<ellipse cx="229.308" cy="220.618" fill="none" rx="20.411" ry="24.981" stroke="#000000" strokeWidth="2"/>
				<rect height="13.41" width="41.74" fill="none" transform="matrix(0.9998 0.0213 -0.0213 0.9998 4.7491 -4.8321)" x="208.438" y="213.913"/>
				<text fontFamily="Segoe UI" fontSize="12" transform="matrix(1 0 0 1 215.1763 222.3525)">Sofas</text>
				<line fill="none" stroke="#808285" strokeWidth="20" x1="281.839" x2="291.682" y1="257.647" y2="382.647"/>
				<rect height="12.958" width="73.243" fill="none" x="272.739" y="235.888"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 272.7393 244.707)">Music Scores</text>
				<line fill="none" stroke="#808285" strokeWidth="20" x1="330.343" x2="340.185" y1="252.797" y2="377.797"/>
				<line fill="none" stroke="#808285" strokeWidth="20" x1="377.404" x2="387.246" y1="248.243" y2="373.243"/>
				<line fill="none" stroke="#808285" strokeWidth="20" x1="421.813" x2="431.655" y1="244.314" y2="369.314"/>
				<line fill="none" stroke="#808285" strokeWidth="20" x1="541.622" x2="551.464" y1="233.457" y2="358.457"/>
				<line fill="none" stroke="#808285" strokeWidth="20" x1="587.249" x2="597.091" y1="229.457" y2="354.457"/>
				<line fill="none" stroke="#808285" strokeWidth="20" x1="632.863" x2="642.705" y1="225.457" y2="350.457"/>
				<line fill="none" stroke="#808285" strokeWidth="20" x1="679.085" x2="688.927" y1="220.075" y2="345.075"/>
				<line fill="none" stroke="#808285" strokeWidth="20" x1="726.966" x2="736.808" y1="216.544" y2="341.544"/>
				<line fill="none" stroke="#808285" strokeWidth="20" x1="773.469" x2="783.311" y1="212.151" y2="337.151"/>
				<rect height="25.474" width="117.214" fill="none" x="368.536" y="215.276"/>
				<text transform="matrix(1.0291 0 0 1 368.5361 224.0947)">
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="0" y="0">Miniature &amp; Oversize</tspan>
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="0" y="14.297">Scores</tspan>
				</text>
				<rect height="24.678" width="81.16" fill="none" x="541.666" y="211.412"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 565.8994 220.2314)">Books</text>
				<rect height="24.678" width="60.295" fill="none" x="669.779" y="188.863"/>
				<text transform="matrix(1.0291 0 0 1 682.2725 197.6826)">
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="0" y="0">Bound</tspan>
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="-4.276" y="14.296">Journals</tspan>
				</text>
				<rect height="24.678" width="81.16" fill="none" x="732.889" y="183.296"/>
				<text transform="matrix(1.0291 0 0 1 748.1816 192.1157)">
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="0" y="0">Collected</tspan>
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="7.958" y="14.296">Works</tspan>
				</text>
				<rect height="14.202" width="18.667" fill="none" x="272.506" y="260.723"/>
				<text fontFamily="Segoe UI" fontSize="18" transform="matrix(1 0 0 1 276.6621 274.0469)">1</text>
				<rect height="14.202" width="18.667" fill="none" x="321.931" y="255.797"/>
				<text fontFamily="Segoe UI" fontSize="18" transform="matrix(1 0 0 1 326.0869 269.1211)">2</text>
				<rect height="14.202" width="18.667" fill="none" x="369.07" y="251.15"/>
				<text fontFamily="Segoe UI" fontSize="18" transform="matrix(1 0 0 1 373.2266 264.4746)">3</text>
				<rect height="14.202" width="18.667" fill="none" x="412.936" y="247.916"/>
				<text fontFamily="Segoe UI" fontSize="18" transform="matrix(1 0 0 1 417.0918 261.2402)">4</text>
				<rect height="14.202" width="18.667" fill="none" x="532.333" y="237.24"/>
				<text fontFamily="Segoe UI" fontSize="18" transform="matrix(1 0 0 1 536.4893 250.5645)">5</text>
				<rect height="14.202" width="18.667" fill="none" x="577.482" y="231.884"/>
				<text fontFamily="Segoe UI" fontSize="18" transform="matrix(1 0 0 1 581.6387 245.208)">6</text>
				<rect height="14.202" width="18.667" fill="none" x="623.529" y="228.783"/>
				<text fontFamily="Segoe UI" fontSize="18" transform="matrix(1 0 0 1 627.6855 242.1074)">7</text>
				<rect height="14.202" width="18.667" fill="none" x="669.752" y="223.355"/>
				<text fontFamily="Segoe UI" fontSize="18" transform="matrix(1 0 0 1 673.9082 236.6797)">8</text>
				<rect height="14.202" width="18.667" fill="none" x="717.633" y="219.356"/>
				<text fontFamily="Segoe UI" fontSize="18" transform="matrix(1 0 0 1 721.7891 232.6802)">9</text>
				<rect height="14.202" width="28.667" fill="none" x="759.135" y="215.974"/>
				<text fontFamily="Segoe UI" fontSize="18" transform="matrix(1 0 0 1 763.1152 229.2983)">10</text>
				<line fill="none" stroke="#010101" strokeWidth="2" x1="761.469" x2="761.469" y1="39.112" y2="125.667"/>
				<line fill="none" stroke="#010101" strokeWidth="2" x1="760.469" x2="829.995" y1="124.667" y2="124.667"/>
				<rect height="43.616" width="70.647" fill="none" x="759.731" y="62.051"/>
				<text transform="matrix(1.0291 0 0 1 776.7334 70.8701)">
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="0" y="0">Library</tspan>
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="-12.149" y="14.296">Conference</tspan>
					<tspan fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" x="2.129" y="28.593">Room</tspan>
				</text>
				<rect height="46.602" width="10.329" fill="none" stroke="#010101" x="818.666" y="394.731"/>
				<rect height="24.679" width="28.575" fill="none" x="802.761" y="379.811"/>
				<text fill="#010101" fontFamily="Segoe UI" fontSize="11.9136" transform="matrix(1.0291 0 0 1 802.7607 388.6289)">Lift</text>
				<rect height="23.566" width="14.362" fill="none" x="482.864" y="324.684"/>
				<ellipse id="table 10" cx="481.75" cy="266.414" fill={this.props.validTable=='table 10'? '#fff196': 'none'} rx="18.215" ry="17.73" stroke="#000000" strokeWidth="3"/>
				<text fontFamily="Segoe UI" fontSize="24.5081" transform="matrix(1.0291 0 0 1 483.248 342.8252)">9</text>
				<line fill="none" stroke="#808285" x1="481.75" x2="481.75" y1="250.095" y2="283.145"/>
				<line fill="none" stroke="#808285" x1="464.955" x2="498.438" y1="266.414" y2="266.414"/>
				<rect height="23.566" width="28.892" fill="none" x="466.864" y="256.631"/>
				<text fontFamily="Segoe UI" fontSize="24.5081" transform="matrix(1.0291 0 0 1 467.7139 274.7725)">10</text>
				{this.renderSeats()}
			</svg>
  			)
  	}
  }

