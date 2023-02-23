//각 요소마다 버블링방식으로 click 이벤트 리스너를 등록함
//버블링 : 겹틸때 자신부터 큰거 순서로
document.getElementById("divBox").addEventListener("click", clickDiv);
document.getElementById("paraBox").addEventListener("click", clickPara);
document.getElementById("spanBox").addEventListener("click", clickSpan);

function clickDiv(event){
	document.getElementById("text").innerHTML += "div요소를 클릭함<br>";
}

function clickPara(event){
	document.getElementById("text").innerHTML += "p요소를 클릭함<br>";
}

function clickSpan(event){
	document.getElementById("text").innerHTML += "span요소를 클릭함<br>";
}