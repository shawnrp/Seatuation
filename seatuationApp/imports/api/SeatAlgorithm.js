
export default function checkTable(table, reqSeats){
	var count = 0;
	var prev = "";
	//search happens through middle row (row 1)
	for(var i = 0; i < table[1].length; i++){
      if (table[1][i] == 1){ //corner seats at ends of table. 1 represents an empty seat, 0 is occupied
      	count++;
      } else { //table
      	var top = table[0][i];
      	var btm = table[2][i];
        if (top == 0 && btm == 0){ //opp sides occupied
        	if (table[1].length == 3 && i == 1){ //square table, 4 seats
        	} else {
        		count = 0;
        	}
        } else if (top == 1 && btm == 0){
			if(prev == ""){ //first seat found
				prev = "top";
				count++;
			} else if (prev == "top"){ //same side
				count++;
			} else { //opposite side but diagonal, so dont accept
				count = 1;
				prev = "btm"; //restart count from this btm 
			}
	    } else if (top == 0 && btm == 1){
	        if(prev == ""){ //first seat found
	          	prev = "btm";
	          	count++;
	        } else if (prev == "btm"){ //same side
	          	count++;
	        } else { //opposite side but diagonal, so dont accept
	          	count = 1;
	            prev = "top"; //restart count from this top
	        }
	    } else if (top == 1 && btm == 1){
	    	count += 2;
	    }
	}

	if (count >= reqSeats) return true; 
	}

	return false;
}
