var color = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

function chk(num){
	document.body.style.backgroundColor = color[num];
	if(num == 0){
		document.body.style.color = color[6];	
	} else {
		document.body.style.color = color[num - 1];
	}
}