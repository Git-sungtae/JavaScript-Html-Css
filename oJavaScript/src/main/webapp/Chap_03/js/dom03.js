//파라미터로 받은 name을 보유한 모든 요소"들"을 불러와서
//"배열로" 저장함
var el = document.getElementsByName("first");


function chgColor3(){
	for(var i of el){
		i.style.color = "red";
	}
}

function chgColor2(){
	el.forEach(function(item){
		item.style.color = "red";
	})
}
	

function chgColor(){
	for(var i = 0; i < el.length; i++){
		el.item(i).style.color = "red";
	}
}