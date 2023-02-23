var btn = document.getElementById("btn");

// 리스너 등록 --> Dom 에 Event를 두지 않고 JavaScript에서 등록
function clickRemoveBtn(){
	btn.removeEventListener("mouseover", mouseOverBtn);
	btn.removeEventListener("mouseout", mouseOutBtn);
	document.getElementById("text").innerText = "이벤트 리스터가 삭제되었어요";
}

function mouseOverBtn(){
	document.getElementById("text").innerText = "버튼 위에서 마우스 치워라";
}

function mouseOutBtn(){
	document.getElementById("text").innerText = "버튼 위로 마우스 올려라";
}


btn.addEventListener("mouseover", mouseOverBtn);
btn.addEventListener("mouseout", mouseOutBtn);
btn.addEventListener("click", clickRemoveBtn);


/*btn.addEventListener("click", function(){
	
})*/