//각 요소마다 캡처링방식으로 click 이벤트 리스너를 등록함
//캡쳐링 : 겹쳤을 때 큰거부터 자신까지
document.getElementById("divBox").addEventListener("click", clickDiv, true);
document.getElementById("paraBox").addEventListener("click", clickPara, true);
document.getElementById("spanBox").addEventListener("click", clickSpan, true);

function clickDiv(){
	document.getElementById("text").innerHTML += "div요소를 클릭함<br>";
}

function clickPara(){
	document.getElementById("text").innerHTML += "p요소를 클릭함<br>";
}

function clickSpan(){
	document.getElementById("text").innerHTML += "span요소를 클릭함<br>";
}