var len;
do{
	var str = prompt("6자 이하로 입력하세요","");
	len = str.length();
	if(len == 0){
		alert("입력하지 않음");
	}
}  while(len > 06 || len < 1);