var currMode;
var currSport;

$("#firstpagesubmit").click(function(){
	currSport = document.getElementById("skillorder").value;
	currMode = document.getElementById("modeorder").value;
	alert(currSport);
	window.location.href='index.html';
});