 const el = document.getElementById("text");
 function chgRedColor(){
	 /*var el = document.getElementById("text");*/
	 el.style.color = "red";
 }
 
  function chgOrangeColor(){
	 /*var el = document.getElementById("text");*/
	 el.style.color = "Orange";
 }
 
 const blueBtn = document.getElementById("blueBtn");
 const limeBtn = document.getElementById("limeBtn");
 
 blueBtn.addEventListener("click", function(){
	 								el.style.color = "blue";
 })
 
 limeBtn.addEventListener("click", function(){
	 								el.style.color = "lime";
 })