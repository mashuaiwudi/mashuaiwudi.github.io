// var vid_skel = videojs('vid_skel');
var id_vid_real 		= ["vid_real_1", "vid_real_2", "vid_real_3", "vid_real_4"];
var id_vid_sim 			= ["vid_sim_1", "vid_sim_2", "vid_sim_3", "vid_sim_4"];
var id_panel_video 		= ["panel_video_1", "panel_video_2", "panel_video_3", "panel_video_4"];
var id_panel_question 	= ["panel_question_1", "panel_question_2", "panel_question_3", "panel_question_4"];
var id_btn_sim 			= ["btn_sim_1", "btn_sim_2", "btn_sim_3", "btn_sim_4"];
var id_btn_fin 			= ["btn_fin_1", "btn_fin_2", "btn_fin_3", "btn_fin_4"];

var vid_real 		= [];
var vid_sim 		= [];
var panel_video 	= [];
var panel_question 	= [];
var btn_sim 		= [];
var btn_fin 		= [];

var n_clicks        = [];

for (var i = 0; i < id_vid_real.length; i++) {
	vid_real.push(videojs(id_vid_real[i]));
	//vid_sim.push(videojs(id_vid_sim[i]));

	panel_video.push(document.getElementById(id_panel_video[i]));
	panel_question.push(document.getElementById(id_panel_question[i]));
	btn_sim.push(document.getElementById(id_btn_sim[i]));
	btn_fin.push(document.getElementById(id_btn_fin[i]));

	n_clicks.push(0);
}

//must input personal info
function checkFormInfo(objData){
	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			alert("Please input value: " + objData[i].name);
			return false;
		}
	}
	return true;
}

//after watching, must input sport type
function checkFormSportType(objData){
	if (objData.length == 0) {
		alert("Please watch the coach's demonstration and pick the skill type in Step 1");
		return false;
	}
	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			alert("Please watch the coach's demonstration and pick the skill type in Step 1");
			return false;
		}
	}

	return true;
}

//must input personal info
function checkIterationFormInfo_final(objData){
	
	if (objData.length < 7) {
		alert("Please answer all questions after watching");
		return false;
	}

	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			alert("Please answer question: " + objData[i].name);
			return false;
		}
	}
	return true;
}



//must input personal info
function checkIterationFormInfo(objData){
	
	if (objData.length < 5) {
		alert("Please answer all questions after watching");
		return false;
	}

	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			alert("Please answer question: " + objData[i].name);
			return false;
		}
	}
	return true;
}


//must answer all questions
function checkQuestionRating(objData){
	if (objData.length == 0) {
		alert("Please rate the robot learning performances in Step 2");
		return false;
	}

	var items = ["attention", "mimic", "engagement", "master", "why", "acceptable", "intelligence", "demonstration", "comments"];
	if (objData.length != 9){
		var num = objData.length+1;
		for (var i = 0; i < objData.length; i++) {
			if (objData[i].name != items[i]){
				num = i;
				break;
			}
		}
		if (num < 4){
			alert("Please answer Q" + (i+1) + " in Step 2");
			return false;
		}
		if (num == 4){
			alert("Please answer why question for Q4 in Step 2");
			return false;
		}
		if (num == 8){
			return true;
		}
		if (num > 4){
			alert("Please answer Q" + i + " in Step 2");
			return false;
		}
	}
	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			if (i < 4){
				alert("Please answer Q" + (i+1) + " in Step 2");
				return false;
			}
			if (i == 4){
				alert("Please answer why question for Q4 in Step 2");
				return false;
			}
			if (i == 8){
				return true;
			}
			if (i > 4){
				alert("Please answer Q" + i + " in Step 2");
				return false;
			}
		}
	}

	return true;
}

/*
function checkQuestionOverall(objData){
	if (objData.length == 0) {
		alert("Please rate the robot learning outcome in Step 3");
		return false;
	}

	var items = ["outcome", "expectation", "why"];
	if (objData.length != 3){
		var num = objData.length + 1;
		for (var i = 0; i < objData.length; i++) {
			if (objData[i].name != items[i]){
				num = i+1;
				break;
			}
		}
		alert("Please answer Q" + (num+4) + " in Step 3");
		return false;
	}

	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			alert("Please answer Q" + (i+5) + " in Step 3");
			return false;
		}
	}


	return true;
}
*/

var data_info = null;
//save the sport type
var data_man_1 = null;
var data_man_2 = null;
var data_man_3 = null;
var data_man_4 = null;
//save the questions
var data_question_1_rating = null;
var data_question_2_rating = null;
var data_question_3_rating = null;
var data_question_4_rating = null;

//save the question in many iterations
var question_collection_1 = null;
var question_collection_2 = null;
var question_collection_3 = null;

/*
var data_question_1_overall = null;
var data_question_2_overall = null;
var data_question_3_overall = null;
var data_question_4_overall = null;
*/


$("#pager-0").click(function(){

	var objData = $("#form_info").serializeArray();
	if(!checkFormInfo(objData)){
		return;
	}
	else{
		data_info = objData;
	}
    $(".nav-tabs a[href='#newdemo1']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$('#popupPage-1').modal('show');
	setTimeout(function() {
	    $('#popupPage-1').modal('hide');
	}, 1000);
});

$("#pager-1").click(function(){
	var objDataMan = $("#panel_man_1").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_1 = objDataMan;
	}

	var objDataQRating = $("#panel_question_1_1").serializeArray();
	if (!checkQuestionRating(objDataQRating)){
		return;
	}
	else{
		data_question_1_rating = objDataQRating;
	}

	/*
	var objDataQOverall = $("#panel_question_1_2").serializeArray();
	if (!checkQuestionOverall(objDataQOverall)){
		return;
	}
	else{
		data_question_1_overall = objDataQOverall;
	}
	*/

    $(".nav-tabs a[href='#demo2']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

	$('#popupPage-2').modal('show');
	setTimeout(function() {
	    $('#popupPage-2').modal('hide');
	}, 2000);
});

$("#pager-2").click(function(){
	var objDataMan = $("#panel_man_2").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_2 = objDataMan;
	}

	var objDataQRating = $("#panel_question_2_1").serializeArray();
	if (!checkQuestionRating(objDataQRating)){
		return;
	}
	else{
		data_question_2_rating = objDataQRating;
	}

	/*
	var objDataQOverall = $("#panel_question_2_2").serializeArray();
	if (!checkQuestionOverall(objDataQOverall)){
		return;
	}
	else{
		data_question_2_overall = objDataQOverall;
	}
	*/

    $(".nav-tabs a[href='#demo3']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
	
	$('#popupPage-3').modal('show');
	setTimeout(function() {
	    $('#popupPage-3').modal('hide');
	}, 2000);
});

$("#pager-3").click(function(){
	var objDataMan = $("#panel_man_3").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_3 = objDataMan;
	}

	var objDataQRating = $("#panel_question_3_1").serializeArray();
	if (!checkQuestionRating(objDataQRating)){
		return;
	}
	else{
		data_question_3_rating = objDataQRating;
	}

	/*
	var objDataQOverall = $("#panel_question_3_2").serializeArray();
	if (!checkQuestionOverall(objDataQOverall)){
		return;
	}
	else{
		data_question_3_overall = objDataQOverall;
	}
	*/

    $(".nav-tabs a[href='#demo4']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
	
	$('#popupPage-4').modal('show');
	setTimeout(function() {
	    $('#popupPage-4').modal('hide');
	}, 2000);
});

$("#pager-4").click(function(){
	var objDataMan = $("#panel_man_4").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_4 = objDataMan;
	}

	var objDataQRating = $("#panel_question_4_1").serializeArray();
	if (!checkQuestionRating(objDataQRating)){
		return;
	}
	else{
		data_question_4_rating = objDataQRating;
	}

	/*
	var objDataQOverall = $("#panel_question_4_2").serializeArray();
	if (!checkQuestionOverall(objDataQOverall)){
		return;
	}
	else{
		data_question_4_overall = objDataQOverall;
	}
	*/

    // $(".nav-tabs a[href='#demo4']").tab('show');
	// $("html, body").animate({ scrollTop: 0 }, "slow");
	submitData();

	$("#finishModal").modal('show');
});

function submitData(){
	var xhr = new XMLHttpRequest();
	//var url = "http://165.227.108.67/mingfei/submit.php"
	var url = "http://172.17.130.40/userstudy/submit.php"
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.getElementById('user_id').innerHTML = xhr.responseText;
	        // console.log(xhr.responseText);
	    }
	};
	data = {"uid": user_id,
			"info": data_info,
			"mode": currMode,
			"sport": currSport,
			"man_1": data_man_1, 
			"man_2": data_man_2, 
			"man_3": data_man_3, 
			"man_4": data_man_4, 
			"q1_rating": data_question_1_rating,
			"q2_rating": data_question_2_rating,
			"q3_rating": data_question_3_rating,
			"q4_rating": data_question_4_rating
			/*
			"q1_overall": data_question_1_overall,
			"q2_overall": data_question_2_overall,
			"q3_overall": data_question_3_overall,
			"q4_overall": data_question_4_overall
			*/
		}
	var dataJson = JSON.stringify(data);
	xhr.send(dataJson);
}




function submitData_ms(){
	var xhr = new XMLHttpRequest();
	//var url = "http://165.227.108.67/mingfei/submit.php"
	var url = "https://shuaima.info/userstudy/submit.php"
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.getElementById('user_id').innerHTML = xhr.responseText;
			console.log(xhr.responseText);
			//alert("Your response has been saved successfully!");
			$("#learning_finishModal").modal('show');
	    }
	};

	data = {"uid": user_id,
			"info": data_info,
			"mode": currMode,
			"sport": currSport,
			"man_1": data_man_1,
			"man_2": data_man_2,
			"man_3": data_man_3,
			"man_4": data_man_4,
			"question1_1": question1_1,
			"question1_2": question1_2,
			"question1_3": question1_3,
			"question1_4": question1_4,
			"question1_5": question1_5,
			"question1_final": question1_final,
			"question2_1": question2_1,
			"question2_2": question2_2,
			"question2_3": question2_3,
			"question2_4": question2_4,
			"question2_5": question2_5,
			"question2_final": question2_final,
			"question3_1": question3_1,
			"question3_2": question3_2,
			"question3_3": question3_3,
			"question3_4": question3_4,
			"question3_5": question3_5,
			"question3_final": question3_final,
			"question4_1": question4_1,
			"question4_2": question4_2,
			"question4_3": question4_3,
			"question4_4": question4_4,
			"question4_5": question4_5,
			"question4_final": question4_final,


			"demonwatch1_clicktime": demonwatch1_clicktime,
			"demonwatch2_clicktime": demonwatch2_clicktime,
			"demonwatch3_clicktime": demonwatch3_clicktime,
			"demonwatch4_clicktime": demonwatch4_clicktime,
			"opencamera1_clicktime": opencamera1_clicktime,
			"opencamera2_clicktime": opencamera2_clicktime,
			"opencamera3_clicktime": opencamera3_clicktime,
			"opencamera4_clicktime": opencamera4_clicktime,
			"start_user_demonstration1_clicktime": start_user_demonstration1_clicktime,
			"start_user_demonstration2_clicktime": start_user_demonstration2_clicktime,
			"start_user_demonstration3_clicktime": start_user_demonstration3_clicktime,
			"start_user_demonstration4_clicktime": start_user_demonstration4_clicktime,
			"end_user_demonstration1_clicktime": end_user_demonstration1_clicktime,
			"end_user_demonstration2_clicktime": end_user_demonstration2_clicktime,
			"end_user_demonstration3_clicktime": end_user_demonstration3_clicktime,
			"end_user_demonstration4_clicktime": end_user_demonstration4_clicktime,
			"finishrecord1_clicktime": finishrecord1_clicktime,
			"finishrecord2_clicktime": finishrecord2_clicktime,
			"finishrecord3_clicktime": finishrecord3_clicktime,
			"finishrecord4_clicktime": finishrecord4_clicktime,
			"recordagain1_clicktime": recordagain1_clicktime,
			"recordagain2_clicktime": recordagain2_clicktime,
			"recordagain3_clicktime": recordagain3_clicktime,
			"recordagain4_clicktime": recordagain4_clicktime,


			"learning1_watchbutton1_clicktime": learning1_watchbutton1_clicktime,
			"learning1_watchbutton2_clicktime": learning1_watchbutton2_clicktime,
			"learning1_watchbutton3_clicktime": learning1_watchbutton3_clicktime,
			"learning1_watchbutton4_clicktime": learning1_watchbutton4_clicktime,
			"learning1_watchbutton5_clicktime": learning1_watchbutton5_clicktime,
			"learning2_watchbutton1_clicktime": learning2_watchbutton1_clicktime,
			"learning2_watchbutton2_clicktime": learning2_watchbutton2_clicktime,
			"learning2_watchbutton3_clicktime": learning2_watchbutton3_clicktime,
			"learning2_watchbutton4_clicktime": learning2_watchbutton4_clicktime,
			"learning2_watchbutton5_clicktime": learning2_watchbutton5_clicktime,
			"learning3_watchbutton1_clicktime": learning3_watchbutton1_clicktime,
			"learning3_watchbutton2_clicktime": learning3_watchbutton2_clicktime,
			"learning3_watchbutton3_clicktime": learning3_watchbutton3_clicktime,
			"learning3_watchbutton4_clicktime": learning3_watchbutton4_clicktime,
			"learning3_watchbutton5_clicktime": learning3_watchbutton5_clicktime,
			"learning4_watchbutton1_clicktime": learning4_watchbutton1_clicktime,
			"learning4_watchbutton2_clicktime": learning4_watchbutton2_clicktime,
			"learning4_watchbutton3_clicktime": learning4_watchbutton3_clicktime,
			"learning4_watchbutton4_clicktime": learning4_watchbutton4_clicktime,
			"learning4_watchbutton5_clicktime": learning4_watchbutton5_clicktime,

			"init1_1_clicktime": init1_1_clicktime,
			"init1_2_clicktime": init1_2_clicktime,
			"init1_3_clicktime": init1_3_clicktime,
			"init1_4_clicktime": init1_4_clicktime,
			"init1_5_clicktime": init1_5_clicktime,
			"init2_1_clicktime": init2_1_clicktime,
			"init2_2_clicktime": init2_2_clicktime,
			"init2_3_clicktime": init2_3_clicktime,
			"init2_4_clicktime": init2_4_clicktime,
			"init2_5_clicktime": init2_5_clicktime,
			"init3_1_clicktime": init3_1_clicktime,
			"init3_2_clicktime": init3_2_clicktime,
			"init3_3_clicktime": init3_3_clicktime,
			"init3_4_clicktime": init3_4_clicktime,
			"init3_5_clicktime": init3_5_clicktime,
			"init4_1_clicktime": init4_1_clicktime,
			"init4_2_clicktime": init4_2_clicktime,
			"init4_3_clicktime": init4_3_clicktime,
			"init4_4_clicktime": init4_4_clicktime,
			"init4_5_clicktime": init4_5_clicktime,

			"close_demon1_1_clicktime": close_demon1_1_clicktime,
			"close_demon1_2_clicktime": close_demon1_2_clicktime,
			"close_demon1_3_clicktime": close_demon1_3_clicktime,
			"close_demon1_4_clicktime": close_demon1_4_clicktime,
			"close_demon1_5_clicktime": close_demon1_5_clicktime,
			"close_demon2_1_clicktime": close_demon2_1_clicktime,
			"close_demon2_2_clicktime": close_demon2_2_clicktime,
			"close_demon2_3_clicktime": close_demon2_3_clicktime,
			"close_demon2_4_clicktime": close_demon2_4_clicktime,
			"close_demon2_5_clicktime": close_demon2_5_clicktime,
			"close_demon3_1_clicktime": close_demon3_1_clicktime,
			"close_demon3_2_clicktime": close_demon3_2_clicktime,
			"close_demon3_3_clicktime": close_demon3_3_clicktime,
			"close_demon3_4_clicktime": close_demon3_4_clicktime,
			"close_demon3_5_clicktime": close_demon3_5_clicktime,
			"close_demon4_1_clicktime": close_demon4_1_clicktime,
			"close_demon4_2_clicktime": close_demon4_2_clicktime,
			"close_demon4_3_clicktime": close_demon4_3_clicktime,
			"close_demon4_4_clicktime": close_demon4_4_clicktime,
			"close_demon4_5_clicktime": close_demon4_5_clicktime,

			"learnagain1_1_clicktime": learnagain1_1_clicktime,
			"learnagain1_2_clicktime": learnagain1_2_clicktime,
			"learnagain1_3_clicktime": learnagain1_3_clicktime,
			"learnagain1_4_clicktime": learnagain1_4_clicktime,
			"learnagain1_5_clicktime": learnagain1_5_clicktime,
			"learnagain2_1_clicktime": learnagain2_1_clicktime,
			"learnagain2_2_clicktime": learnagain2_2_clicktime,
			"learnagain2_3_clicktime": learnagain2_3_clicktime,
			"learnagain2_4_clicktime": learnagain2_4_clicktime,
			"learnagain2_5_clicktime": learnagain2_5_clicktime,
			"learnagain3_1_clicktime": learnagain3_1_clicktime,
			"learnagain3_2_clicktime": learnagain3_2_clicktime,
			"learnagain3_3_clicktime": learnagain3_3_clicktime,
			"learnagain3_4_clicktime": learnagain3_4_clicktime,
			"learnagain3_5_clicktime": learnagain3_5_clicktime,
			"learnagain4_1_clicktime": learnagain4_1_clicktime,
			"learnagain4_2_clicktime": learnagain4_2_clicktime,
			"learnagain4_3_clicktime": learnagain4_3_clicktime,
			"learnagain4_4_clicktime": learnagain4_4_clicktime,
			"learnagain4_5_clicktime": learnagain4_5_clicktime,
		}

	var dataJson = JSON.stringify(data);
	//xhr.send(dataJson);
	var blob = new Blob([dataJson], {type: "text/plain;charset=utf-8"});
    saveAs(blob, user_id + ".json");
}





$("#pager-1-prev").click(function(){
    $(".nav-tabs a[href='#home']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#pager-2-prev").click(function(){
    $(".nav-tabs a[href='#demo1']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#pager-3-prev").click(function(){
    $(".nav-tabs a[href='#demo2']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$("#pager-4-prev").click(function(){
    $(".nav-tabs a[href='#demo3']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});



function openModal1(){
	document.getElementById('div_sim_10').style.display = "block";
}

var question1_1 = null;
var question1_2 = null;
var question1_3 = null;
var question1_4 = null;
var question1_5 = null;
var question1_final = null;


$("#next-1-1").click(function(){
	get_clicklog();
	var objData = $("#learning1_iteration_question_1").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question1_1 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(question1_1);
		//缺少存储json数据的代码，后面也是一样
	}
	document.getElementById('learning1_watchbutton1').style.display = 'none';
	document.getElementById('learning1_watchbutton2').style.display = 'block';
	document.getElementById('learning1_iteration_question_1').style.display = 'none';
	//alert("YEAH");
	//submitData_ms();
	document.getElementById('progressbar1').style.width = '5%';
	document.getElementById('progressbar1').textContent = '5%';
	//submitData_ms();
});

$("#next-1-2").click(function(){
	var objData = $("#learning1_iteration_question_2").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question1_2 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-2').style.display = 'none';
	//document.getElementById('learning1_demonscroll-3').style.display = 'block';
	document.getElementById('learning1_watchbutton2').style.display = 'none';
	document.getElementById('learning1_watchbutton3').style.display = 'block';
	document.getElementById('learning1_iteration_question_2').style.display = 'none';
	document.getElementById('progressbar1').style.width = '10%';
	document.getElementById('progressbar1').textContent = '10%';
});

$("#next-1-3").click(function(){
	var objData = $("#learning1_iteration_question_3").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question1_3 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-3').style.display = 'none';
	//document.getElementById('learning1_demonscroll-4').style.display = 'block';
	document.getElementById('learning1_watchbutton3').style.display = 'none';
	document.getElementById('learning1_watchbutton4').style.display = 'block';
	document.getElementById('learning1_iteration_question_3').style.display = 'none';
	document.getElementById('progressbar1').style.width = '15%';
	document.getElementById('progressbar1').textContent = '15%';

});

$("#next-1-4").click(function(){
	var objData = $("#learning1_iteration_question_4").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question1_4 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning1_watchbutton4').style.display = 'none';
	document.getElementById('learning1_watchbutton5').style.display = 'block';
	document.getElementById('learning1_iteration_question_4').style.display = 'none';
	document.getElementById('progressbar1').style.width = '20%';
	document.getElementById('progressbar1').textContent = '20%';
});

$("#next-1-5").click(function(){
	var objData = $("#learning1_iteration_question_5").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question1_5 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning1_watchbutton5').style.display = 'none';
	document.getElementById('learning1_iteration_question_5').style.display = 'none';
	document.getElementById('learning1_iteration_question_final').style.display = 'block';
	document.getElementById('progressbar1').style.width = '24%';
	document.getElementById('progressbar1').textContent = '24%';
	document.documentElement.scrollTop = 0;
});

/*$("#next-1-6").click(function(){
	var objData = $("#learning1_iteration_question_6").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question1_6 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning1_watchbutton6').style.display = 'none';
	document.getElementById('learning1_watchbutton7').style.display = 'block';
	document.getElementById('learning1_iteration_question_6').style.display = 'none';
});

$("#next-1-7").click(function(){
	var objData = $("#learning1_iteration_question_7").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question1_7 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning1_watchbutton7').style.display = 'none';
	document.getElementById('learning1_watchbutton8').style.display = 'block';
	document.getElementById('learning1_iteration_question_7').style.display = 'none';
});

$("#next-1-8").click(function(){
	var objData = $("#learning1_iteration_question_8").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question1_8 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning1_watchbutton8').style.display = 'none';
	document.getElementById('learning1_watchbutton9').style.display = 'block';
	document.getElementById('learning1_iteration_question_8').style.display = 'none';
});

$("#next-1-9").click(function(){
	var objData = $("#learning1_iteration_question_9").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question1_9 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning1_watchbutton9').style.display = 'none';
	document.getElementById('learning1_watchbutton10').style.display = 'block';
	document.getElementById('learning1_iteration_question_9').style.display = 'none';
});


$("#next-1-10").click(function(){
	var objData = $("#learning1_iteration_question_10").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question1_10 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-5').style.display = 'none';
	document.getElementById('learning1_watchbutton10').style.display = 'none';
	document.getElementById('learning1_iteration_question_10').style.display = 'none';
	document.getElementById('learning1_iteration_question_final').style.display = 'block';
});*/


$("#next-1-final").click(function(){
	var objDataMan = $("#learning1_panel_man").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_1 = objDataMan;
	}



	var objData = $("#learning1_iteration_question_final").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo_final(objData)){
		return;
	}
	else{
		question1_final = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}
	//submitData_ms();
	//开始第二个动作
	$(".nav-tabs a[href='#newdemo2']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$('#popupPage-2').modal('show');
	setTimeout(function() {
	    $('#popupPage-2').modal('hide');
	}, 1000);
	document.getElementById('progressbar2').style.width = '25%';
	document.getElementById('progressbar2').textContent = '25%';
});


$("#pager-submit").click(function(){


	var xhr = new XMLHttpRequest();
	//var url = "http://165.227.108.67/mingfei/submit.php"
	var url = "http://49.232.60.34/userstudy/test.php"
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.getElementById('user_id').innerHTML = xhr.responseText;
			console.log(xhr.responseText);
			alert("Your response has been saved successfully!");
	    }
	};

	data = {"uid": user_id,
			"info": data_info,
			"mode": currMode,
			"sport": currSport,
			"man_1": data_man_1,
			"man_2": data_man_2,
			"man_3": data_man_3,
			"man_4": data_man_4,
			"question1_1": question1_1,
			"question1_2": question1_2,
			"question1_3": question1_3,
			"question1_4": question1_4,
			"question1_5": question1_5,
			"question1_final": question1_final,
			"question2_1": question2_1,
			"question2_2": question2_2,
			"question2_3": question2_3,
			"question2_4": question2_4,
			"question2_5": question2_5,
			"question2_final": question2_final,
			"question3_1": question3_1,
			"question3_2": question3_2,
			"question3_3": question3_3,
			"question3_4": question3_4,
			"question3_5": question3_5,
			"question3_final": question3_final,
			"question4_1": question4_1,
			"question4_2": question4_2,
			"question4_3": question4_3,
			"question4_4": question4_4,
			"question4_5": question4_5,
			"question4_final": question4_final
		}

	var dataJson = JSON.stringify(data);
	xhr.send(dataJson);
});



var question2_1 = null;
var question2_2 = null;
var question2_3 = null;
var question2_4 = null;
var question2_5 = null;
var question2_final = null;


$("#next-2-1").click(function(){
	var objData = $("#learning2_iteration_question_1").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question2_1 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(question2_1);
		//缺少存储json数据的代码，后面也是一样
	}
	document.getElementById('learning2_watchbutton1').style.display = 'none';
	document.getElementById('learning2_watchbutton2').style.display = 'block';
	document.getElementById('learning2_iteration_question_1').style.display = 'none';
	document.getElementById('progressbar2').style.width = '30%';
	document.getElementById('progressbar2').textContent = '30%';
});

$("#next-2-2").click(function(){
	var objData = $("#learning2_iteration_question_2").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question2_2 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-2').style.display = 'none';
	//document.getElementById('learning1_demonscroll-3').style.display = 'block';
	document.getElementById('learning2_watchbutton2').style.display = 'none';
	document.getElementById('learning2_watchbutton3').style.display = 'block';
	document.getElementById('learning2_iteration_question_2').style.display = 'none';
	document.getElementById('progressbar2').style.width = '35%';
	document.getElementById('progressbar2').textContent = '35%';
});

$("#next-2-3").click(function(){
	var objData = $("#learning2_iteration_question_3").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question2_3 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-3').style.display = 'none';
	//document.getElementById('learning1_demonscroll-4').style.display = 'block';
	document.getElementById('learning2_watchbutton3').style.display = 'none';
	document.getElementById('learning2_watchbutton4').style.display = 'block';
	document.getElementById('learning2_iteration_question_3').style.display = 'none';
	document.getElementById('progressbar2').style.width = '40%';
	document.getElementById('progressbar2').textContent = '40%';
});

$("#next-2-4").click(function(){
	var objData = $("#learning2_iteration_question_4").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question2_4 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning2_watchbutton4').style.display = 'none';
	document.getElementById('learning2_watchbutton5').style.display = 'block';
	document.getElementById('learning2_iteration_question_4').style.display = 'none';
	document.getElementById('progressbar2').style.width = '45%';
	document.getElementById('progressbar2').textContent = '45%';
});

$("#next-2-5").click(function(){
	var objData = $("#learning2_iteration_question_5").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question2_5 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning2_watchbutton5').style.display = 'none';
	document.getElementById('learning2_iteration_question_5').style.display = 'none';
	document.getElementById('learning2_iteration_question_final').style.display = 'block';
	document.getElementById('progressbar2').style.width = '49%';
	document.getElementById('progressbar2').textContent = '49%';
	document.documentElement.scrollTop = 0;
});



$("#next-2-final").click(function(){
	var objDataMan = $("#learning2_panel_man").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_2 = objDataMan;
	}


	var objData = $("#learning2_iteration_question_final").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo_final(objData)){
		return;
	}
	else{
		question2_final = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//开始第二个动作

	$(".nav-tabs a[href='#newdemo3']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$('#popupPage-3').modal('show');
	setTimeout(function() {
	    $('#popupPage-3').modal('hide');
	}, 1000);
	document.getElementById('progressbar3').style.width = '50%';
	document.getElementById('progressbar3').textContent = '50%';
});



var question3_1 = null;
var question3_2 = null;
var question3_3 = null;
var question3_4 = null;
var question3_5 = null;
var question3_final = null;


$("#next-3-1").click(function(){
	var objData = $("#learning3_iteration_question_1").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question3_1 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(question3_1);
		//缺少存储json数据的代码，后面也是一样
	}
	document.getElementById('learning3_watchbutton1').style.display = 'none';
	document.getElementById('learning3_watchbutton2').style.display = 'block';
	document.getElementById('learning3_iteration_question_1').style.display = 'none';
	document.getElementById('progressbar3').style.width = '55%';
	document.getElementById('progressbar3').textContent = '55%';
});

$("#next-3-2").click(function(){
	var objData = $("#learning3_iteration_question_2").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question3_2 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-2').style.display = 'none';
	//document.getElementById('learning1_demonscroll-3').style.display = 'block';
	document.getElementById('learning3_watchbutton2').style.display = 'none';
	document.getElementById('learning3_watchbutton3').style.display = 'block';
	document.getElementById('learning3_iteration_question_2').style.display = 'none';
	document.getElementById('progressbar3').style.width = '60%';
	document.getElementById('progressbar3').textContent = '60%';
});

$("#next-3-3").click(function(){
	var objData = $("#learning3_iteration_question_3").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question3_3 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-3').style.display = 'none';
	//document.getElementById('learning1_demonscroll-4').style.display = 'block';
	document.getElementById('learning3_watchbutton3').style.display = 'none';
	document.getElementById('learning3_watchbutton4').style.display = 'block';
	document.getElementById('learning3_iteration_question_3').style.display = 'none';
	document.getElementById('progressbar3').style.width = '65%';
	document.getElementById('progressbar3').textContent = '65%';
});

$("#next-3-4").click(function(){
	var objData = $("#learning3_iteration_question_4").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question3_4 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning3_watchbutton4').style.display = 'none';
	document.getElementById('learning3_watchbutton5').style.display = 'block';
	document.getElementById('learning3_iteration_question_4').style.display = 'none';
	document.getElementById('progressbar3').style.width = '70%';
	document.getElementById('progressbar3').textContent = '70%';
});

$("#next-3-5").click(function(){
	var objData = $("#learning3_iteration_question_5").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question3_5 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning3_watchbutton5').style.display = 'none';
	document.getElementById('learning3_iteration_question_5').style.display = 'none';
	document.getElementById('learning3_iteration_question_final').style.display = 'block';
	document.getElementById('progressbar3').style.width = '74%';
	document.getElementById('progressbar3').textContent = '74%';
	document.documentElement.scrollTop = 0;
});



$("#next-3-final").click(function(){
	var objDataMan = $("#learning3_panel_man").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_3 = objDataMan;
	}



	var objData = $("#learning3_iteration_question_final").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo_final(objData)){
		return;
	}
	else{
		question3_final = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//开始第二个动作

	$(".nav-tabs a[href='#newdemo4']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$('#popupPage-4').modal('show');
	setTimeout(function() {
	    $('#popupPage-4').modal('hide');
	}, 1000);
	document.getElementById('progressbar4').style.width = '75%';
	document.getElementById('progressbar4').textContent = '75%';
});





var question4_1 = null;
var question4_2 = null;
var question4_3 = null;
var question4_4 = null;
var question4_5 = null;
var question4_final = null;


$("#next-4-1").click(function(){
	var objData = $("#learning4_iteration_question_1").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question4_1 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(question4_1);
		//缺少存储json数据的代码，后面也是一样
	}
	document.getElementById('learning4_watchbutton1').style.display = 'none';
	document.getElementById('learning4_watchbutton2').style.display = 'block';
	document.getElementById('learning4_iteration_question_1').style.display = 'none';
	document.getElementById('progressbar4').style.width = '80%';
	document.getElementById('progressbar4').textContent = '80%';
});

$("#next-4-2").click(function(){
	var objData = $("#learning4_iteration_question_2").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question4_2 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-2').style.display = 'none';
	//document.getElementById('learning1_demonscroll-3').style.display = 'block';
	document.getElementById('learning4_watchbutton2').style.display = 'none';
	document.getElementById('learning4_watchbutton3').style.display = 'block';
	document.getElementById('learning4_iteration_question_2').style.display = 'none';
	document.getElementById('progressbar4').style.width = '85%';
	document.getElementById('progressbar4').textContent = '85%';
});

$("#next-4-3").click(function(){
	var objData = $("#learning4_iteration_question_3").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question4_3 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-3').style.display = 'none';
	//document.getElementById('learning1_demonscroll-4').style.display = 'block';
	document.getElementById('learning4_watchbutton3').style.display = 'none';
	document.getElementById('learning4_watchbutton4').style.display = 'block';
	document.getElementById('learning4_iteration_question_3').style.display = 'none';
	document.getElementById('progressbar4').style.width = '90%';
	document.getElementById('progressbar4').textContent = '90%';
});

$("#next-4-4").click(function(){
	var objData = $("#learning4_iteration_question_4").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question4_4 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning4_watchbutton4').style.display = 'none';
	document.getElementById('learning4_watchbutton5').style.display = 'block';
	document.getElementById('learning4_iteration_question_4').style.display = 'none';
	document.getElementById('progressbar4').style.width = '95%';
	document.getElementById('progressbar4').textContent = '95%';
});

$("#next-4-5").click(function(){
	var objData = $("#learning4_iteration_question_5").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		question4_5 = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//document.getElementById('learning1_demonscroll-4').style.display = 'none';
	//document.getElementById('learning1_demonscroll-5').style.display = 'block';
	document.getElementById('learning4_watchbutton5').style.display = 'none';
	document.getElementById('learning4_iteration_question_5').style.display = 'none';
	document.getElementById('learning4_iteration_question_final').style.display = 'block';
	document.getElementById('progressbar4').style.width = '99%';
	document.getElementById('progressbar4').textContent = '99%';
	document.documentElement.scrollTop = 0;
});




$("#next-4-final").click(function(){
	var objDataMan = $("#learning4_panel_man").serializeArray();
	if (!checkFormSportType(objDataMan)) {
		return;
	}
	else{
		data_man_4 = objDataMan;
	}


	var objData = $("#learning4_iteration_question_final").serializeArray();
	console.log(objData);
	if(!checkIterationFormInfo_final(objData)){
		return;
	}
	else{
		question4_final = objData;
		//data_info = objData;
		//question_collection_1.interation1 = objData;
		//var temp = null;
		//for(var i=0;i<objData.length;i++){
		//	temp.push(objData[i]);
		//}
		//question_collection_1.push(temp);
		console.log(objData[0]);
		//缺少存储json数据的代码，后面也是一样
	}

	//提交数据
	submitData_ms();
	//进入最后的模块
	document.getElementById('progressbar4').style.width = '100%';
	document.getElementById('progressbar4').textContent = '100%';





	//$(".nav-tabs a[href='#newdemo4']").tab('show');
	//$("html, body").animate({ scrollTop: 0 }, "slow");
	//$('#popupPage-4').modal('show');
	//setTimeout(function() {
	//    $('#popupPage-4').modal('hide');
	//}, 1000);
});

var mediaStreamTrack;
var interval;

//=========================================
//=========================================
//=========================================
//=========================================
var opencamera1_clicktime = 0;
$("#opencamera1").click(function(){
	if(demonwatch1_clicktime > 0){
		
		//document.getElementById('user_real_demonstration1').style.display = 'block';
		$('#user_real_demonstration1').modal('show');
		// 视频大小
		var constraints = {audio: false, video: {width: 600,height: 600}};
		// 开启视频
		navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
			console.log('getUserMedia:', mediaStream)
			mediaStreamTrack = mediaStream;
			//var video = document.querySelector('video');
			var video = document.getElementById("user_camerastream1");
			video.srcObject = mediaStream;
			console.log("000000000");
			video.onloadedmetadata = function(e) {
				console.log("11111111");
				video.play();
				console.log("22222222");
			};
		});
		opencamera1_clicktime += 1;
	}else{
		alert("Please first watch the coach demonstration in Step 1 !");
	}
	
});

var sec = 10;                  //设置倒计时时间为30秒
var sec2 = 30;
function countDown1() {        //倒计时的方法
	sec2--;
	if(sec > 0 && sec2 > 0) {
		document.getElementById('daojishi1').textContent = "Will start recording in " + sec-- + " seconds";
	}
	if(sec <= 0 && sec2 > 5){
		document.getElementById('daojishi1').textContent = "Recording...";
	}
	if(sec2 <= 5 && sec2 > 0){
		document.getElementById('daojishi1').textContent = "Will stop recording in " + sec2 + " seconds";
	}
	if(sec2 <= 0){
		document.getElementById('daojishi1').textContent = "Recorded";

		var video = document.getElementById("user_camerastream1");
		video.pause();
		//localstream.getTracks()[0].stop();
		var track = mediaStreamTrack.getTracks()[0];
		track.stop();
		document.getElementById('daojishi1').textContent = "Recorded";
		sec = 10;
		sec2 = 30;
		document.getElementById('start_user_demonstration1').style.display = 'block';
		document.getElementById('end_user_demonstration1').style.display = 'none';
		clearInterval(interval); // 清除定时器
		end_user_demonstration1_clicktime += 1;
	}
}

var start_user_demonstration1_clicktime = 0;
$("#start_user_demonstration1").click(function(){
	document.getElementById('start_user_demonstration1').style.display = 'none';
	document.getElementById('end_user_demonstration1').style.display = 'block';

	interval = setInterval('countDown1()',1000);    //一般秒设置为参数为1000
	start_user_demonstration1_clicktime += 1;


});
var end_user_demonstration1_clicktime = 0;
$("#end_user_demonstration1").click(function(){
	var video = document.getElementById("user_camerastream1");
	video.pause();
	//localstream.getTracks()[0].stop();
	var track = mediaStreamTrack.getTracks()[0];
	track.stop();
	document.getElementById('daojishi1').textContent = "Recorded";
	sec = 10;
	sec2 = 30;
	//document.getElementById('start_user_demonstration1').style.display = 'block';
	document.getElementById('end_user_demonstration1').style.display = 'none';
	clearInterval(interval); // 清除定时器
	end_user_demonstration1_clicktime += 1;
});



var finishrecord1_clicktime = 0;
$("#finishrecord1").click(function(){
	var video = document.getElementById("user_camerastream1");
	video.pause();
	//localstream.getTracks()[0].stop();
	var track = mediaStreamTrack.getTracks()[0];
	track.stop();
	document.getElementById('daojishi1').textContent = "Recorded";
	sec = 10;
	sec2 = 30;
	//document.getElementById('start_user_demonstration1').style.display = 'block';
	document.getElementById('end_user_demonstration1').style.display = 'none';
	clearInterval(interval); // 清除定时器
	finishrecord1_clicktime += 1;
	$('#user_real_demonstration1').modal('hide');
});

var recordagain1_clicktime = 0;
$("#recordagain1").click(function(){
	if(start_user_demonstration1_clicktime > 0){
		// 视频大小
		var constraints = {audio: false, video: {width: 600,height: 600}};
		// 开启视频
		navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
			console.log('getUserMedia:', mediaStream)
			mediaStreamTrack = mediaStream;
			//var video = document.querySelector('video');
			var video = document.getElementById("user_camerastream1");
			video.srcObject = mediaStream;
			console.log("000000000");
			video.onloadedmetadata = function(e) {
				console.log("11111111");
				video.play();
				console.log("22222222");
			};
		});
		opencamera1_clicktime += 1;
		document.getElementById('start_user_demonstration1').style.display = 'none';
		document.getElementById('end_user_demonstration1').style.display = 'block';

		interval = setInterval('countDown1()',1000);    //一般秒设置为参数为1000
		recordagain1_clicktime += 1;
	}else{
		alert("Please click the Begin Demonstration button tot record first!");
	}
	
});

//=========================================
//=========================================
//=========================================
//=========================================
var opencamera2_clicktime = 0;
$("#opencamera2").click(function(){
	if (demonwatch2_clicktime > 0){
		$('#user_real_demonstration2').modal('show');
		// 视频大小
		var constraints = {audio: false, video: {width: 600,height: 600}};
		// 开启视频
		navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
			console.log('getUserMedia:', mediaStream)
			mediaStreamTrack = mediaStream;
			//var video = document.querySelector('video');
			var video = document.getElementById("user_camerastream2");
			video.srcObject = mediaStream;
			console.log("000000000");
			video.onloadedmetadata = function(e) {
				console.log("11111111");
				video.play();
				console.log("22222222");
			};
		});
		opencamera2_clicktime += 1;
	}else{
		alert("Please first watch the coach demonstration in Step 1 !");
	}
	
});


function countDown2() {        //倒计时的方法
	sec2--;
	if(sec > 0 && sec2 > 0) {
		document.getElementById('daojishi2').textContent = "Will start recording in " + sec-- + " seconds";
	}
	if(sec <= 0 && sec2 > 5){
		document.getElementById('daojishi2').textContent = "Recording...";
	}
	if(sec2 <= 5 && sec2 > 0){
		document.getElementById('daojishi2').textContent = "Will stop recording in " + sec2 + " seconds";
	}
	if(sec2 <= 0){
		document.getElementById('daojishi2').textContent = "Recorded";
	}
}

var start_user_demonstration2_clicktime = 0;
$("#start_user_demonstration2").click(function(){
	document.getElementById('start_user_demonstration2').style.display = 'none';
	document.getElementById('end_user_demonstration2').style.display = 'block';

	interval = setInterval('countDown2()',1000);    //一般秒设置为参数为1000
	start_user_demonstration2_clicktime += 1;

});

var end_user_demonstration2_clicktime = 0;
$("#end_user_demonstration2").click(function(){
	var video = document.getElementById("user_camerastream2");
	video.pause();
	//localstream.getTracks()[0].stop();
	var track = mediaStreamTrack.getTracks()[0];
	track.stop();
	document.getElementById('daojishi2').textContent = "Recorded";
	sec = 10;
	sec2 = 30;
	//document.getElementById('start_user_demonstration2').style.display = 'block';
	document.getElementById('end_user_demonstration2').style.display = 'none';
	clearInterval(interval); // 清除定时器
	end_user_demonstration2_clicktime += 1;
});



var finishrecord2_clicktime = 0;
$("#finishrecord2").click(function(){
	var video = document.getElementById("user_camerastream2");
	video.pause();
	//localstream.getTracks()[0].stop();
	var track = mediaStreamTrack.getTracks()[0];
	track.stop();
	document.getElementById('daojishi2').textContent = "Recorded";
	sec = 10;
	sec2 = 30;
	//document.getElementById('start_user_demonstration2').style.display = 'block';
	document.getElementById('end_user_demonstration2').style.display = 'none';
	clearInterval(interval); // 清除定时器
	finishrecord2_clicktime += 1;
	$('#user_real_demonstration2').modal('hide');
});

var recordagain2_clicktime = 0;
$("#recordagain2").click(function(){
	if(start_user_demonstration2_clicktime > 0){
		// 视频大小
		var constraints = {audio: false, video: {width: 600,height: 600}};
		// 开启视频
		navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
			console.log('getUserMedia:', mediaStream)
			mediaStreamTrack = mediaStream;
			//var video = document.querySelector('video');
			var video = document.getElementById("user_camerastream2");
			video.srcObject = mediaStream;
			console.log("000000000");
			video.onloadedmetadata = function(e) {
				console.log("11111111");
				video.play();
				console.log("22222222");
			};
		});
		opencamera2_clicktime += 1;
		document.getElementById('start_user_demonstration2').style.display = 'none';
		document.getElementById('end_user_demonstration2').style.display = 'block';

		interval = setInterval('countDown2()',1000);    //一般秒设置为参数为1000
		recordagain2_clicktime += 1;
	}else{
		alert("Please click the Begin Demonstration button tot record first!");
	}
	
});




//=========================================
//=========================================
//=========================================
//=========================================
var opencamera3_clicktime = 0;
$("#opencamera3").click(function(){
	if (demonwatch3_clicktime > 0){
		$('#user_real_demonstration3').modal('show');
		// 视频大小
		var constraints = {audio: false, video: {width: 600,height: 600}};
		// 开启视频
		navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
			console.log('getUserMedia:', mediaStream)
			mediaStreamTrack = mediaStream;
			//var video = document.querySelector('video');
			var video = document.getElementById("user_camerastream3");
			video.srcObject = mediaStream;
			console.log("000000000");
			video.onloadedmetadata = function(e) {
				console.log("11111111");
				video.play();
				console.log("22222222");
			};
		});
		opencamera3_clicktime += 1;
	}else{
		alert("Please first watch the coach demonstration in Step 1 !");
	}
});



function countDown3() {        //倒计时的方法
	sec2--;
	if(sec > 0 && sec2 > 0) {
		document.getElementById('daojishi3').textContent = "Will start recording in " + sec-- + " seconds";
	}
	if(sec <= 0 && sec2 > 5){
		document.getElementById('daojishi3').textContent = "Recording...";
	}
	if(sec2 <= 5 && sec2 > 0){
		document.getElementById('daojishi3').textContent = "Will stop recording in " + sec2 + " seconds";
	}
	if(sec2 <= 0){
		document.getElementById('daojishi3').textContent = "Recorded";
	}
}

var start_user_demonstration3_clicktime = 0;
$("#start_user_demonstration3").click(function(){
	document.getElementById('start_user_demonstration3').style.display = 'none';
	document.getElementById('end_user_demonstration3').style.display = 'block';

	interval = setInterval('countDown3()',1000);    //一般秒设置为参数为1000
	start_user_demonstration3_clicktime += 1;

});

var end_user_demonstration3_clicktime = 0;
$("#end_user_demonstration3").click(function(){
	var video = document.getElementById("user_camerastream3");
	video.pause();
	//localstream.getTracks()[0].stop();
	var track = mediaStreamTrack.getTracks()[0];
	track.stop();
	document.getElementById('daojishi3').textContent = "Recorded";
	sec = 10;
	sec2 = 30;
	//document.getElementById('start_user_demonstration3').style.display = 'block';
	document.getElementById('end_user_demonstration3').style.display = 'none';
	clearInterval(interval); // 清除定时器
	end_user_demonstration3_clicktime += 1;
});



var finishrecord3_clicktime = 0;
$("#finishrecord3").click(function(){
	var video = document.getElementById("user_camerastream3");
	video.pause();
	//localstream.getTracks()[0].stop();
	var track = mediaStreamTrack.getTracks()[0];
	track.stop();
	document.getElementById('daojishi3').textContent = "Recorded";
	sec = 10;
	sec2 = 30;
	//document.getElementById('start_user_demonstration3').style.display = 'block';
	document.getElementById('end_user_demonstration3').style.display = 'none';
	clearInterval(interval); // 清除定时器
	finishrecord3_clicktime += 1;
	$('#user_real_demonstration3').modal('hide');
});

var recordagain3_clicktime = 0;
$("#recordagain3").click(function(){
	if(start_user_demonstration3_clicktime > 0){
		// 视频大小
		var constraints = {audio: false, video: {width: 600,height: 600}};
		// 开启视频
		navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
			console.log('getUserMedia:', mediaStream)
			mediaStreamTrack = mediaStream;
			//var video = document.querySelector('video');
			var video = document.getElementById("user_camerastream3");
			video.srcObject = mediaStream;
			console.log("000000000");
			video.onloadedmetadata = function(e) {
				console.log("11111111");
				video.play();
				console.log("22222222");
			};
		});
		opencamera3_clicktime += 1;
		document.getElementById('start_user_demonstration3').style.display = 'none';
		document.getElementById('end_user_demonstration3').style.display = 'block';

		interval = setInterval('countDown3()',1000);    //一般秒设置为参数为1000
		recordagain3_clicktime += 1;
	}else{
		alert("Please click the Begin Demonstration button tot record first!");
	}
	
});


//=========================================
//=========================================
//=========================================
//=========================================

var opencamera4_clicktime = 0;
$("#opencamera4").click(function(){
	if (demonwatch4_clicktime > 0){
		$('#user_real_demonstration4').modal('show');
		// 视频大小
		var constraints = {audio: false, video: {width: 600,height: 600}};
		// 开启视频
		navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
			console.log('getUserMedia:', mediaStream)
			mediaStreamTrack = mediaStream;
			//var video = document.querySelector('video');
			var video = document.getElementById("user_camerastream4");
			video.srcObject = mediaStream;
			console.log("000000000");
			video.onloadedmetadata = function(e) {
				console.log("11111111");
				video.play();
				console.log("22222222");
			};
		});
		opencamera4_clicktime += 1;
	}else{
		alert("Please first watch the coach demonstration in Step 1 !");
	}
});



function countDown4() {        //倒计时的方法
	sec2--;
	if(sec > 0 && sec2 > 0) {
		document.getElementById('daojishi4').textContent = "Will start recording in " + sec-- + " seconds";
	}
	if(sec <= 0 && sec2 > 5){
		document.getElementById('daojishi4').textContent = "Recording...";
	}
	if(sec2 <= 5 && sec2 > 0){
		document.getElementById('daojishi4').textContent = "Will stop recording in " + sec2 + " seconds";
	}
	if(sec2 <= 0){
		document.getElementById('daojishi4').textContent = "Recorded";
	}
}

var start_user_demonstration4_clicktime = 0;
$("#start_user_demonstration4").click(function(){
	document.getElementById('start_user_demonstration4').style.display = 'none';
	document.getElementById('end_user_demonstration4').style.display = 'block';

	interval = setInterval('countDown4()',1000);    //一般秒设置为参数为1000
	start_user_demonstration4_clicktime += 1;

});


var end_user_demonstration4_clicktime = 0;
$("#end_user_demonstration4").click(function(){
	var video = document.getElementById("user_camerastream4");
	video.pause();
	//localstream.getTracks()[0].stop();
	var track = mediaStreamTrack.getTracks()[0];
	track.stop();
	document.getElementById('daojishi4').textContent = "Recorded";
	sec = 10;
	sec2 = 30;
	//document.getElementById('start_user_demonstration4').style.display = 'block';
	document.getElementById('end_user_demonstration4').style.display = 'none';
	clearInterval(interval); // 清除定时器
	end_user_demonstration4_clicktime += 1;
});



var finishrecord4_clicktime = 0;
$("#finishrecord4").click(function(){
	var video = document.getElementById("user_camerastream4");
	video.pause();
	//localstream.getTracks()[0].stop();
	var track = mediaStreamTrack.getTracks()[0];
	track.stop();
	document.getElementById('daojishi4').textContent = "Recorded";
	sec = 10;
	sec2 = 30;
	//document.getElementById('start_user_demonstration4').style.display = 'block';
	document.getElementById('end_user_demonstration4').style.display = 'none';
	clearInterval(interval); // 清除定时器
	finishrecord4_clicktime += 1;
	$('#user_real_demonstration4').modal('hide');
});


var recordagain4_clicktime = 0;
$("#recordagain4").click(function(){
	if(start_user_demonstration4_clicktime > 0){
		// 视频大小
		var constraints = {audio: false, video: {width: 600,height: 600}};
		// 开启视频
		navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
			console.log('getUserMedia:', mediaStream)
			mediaStreamTrack = mediaStream;
			//var video = document.querySelector('video');
			var video = document.getElementById("user_camerastream4");
			video.srcObject = mediaStream;
			console.log("000000000");
			video.onloadedmetadata = function(e) {
				console.log("11111111");
				video.play();
				console.log("22222222");
			};
		});
		opencamera4_clicktime += 1;
		document.getElementById('start_user_demonstration4').style.display = 'none';
		document.getElementById('end_user_demonstration4').style.display = 'block';

		interval = setInterval('countDown4()',1000);    //一般秒设置为参数为1000
		recordagain4_clicktime += 1;
	}else{
		alert("Please click the Begin Demonstration button tot record first!");
	}
	
});






/*
$("#init1_1").click(function(){
	//play2VR.init(document.querySelector('#container1-1'), '1699151185f6c2801bb63d');
	setTimeout("videojs('firstview1-1').play()",10);
});

$("#init1_2").click(function(){
	//play2VR.init(document.querySelector('#container1-2'), '8318337875f6b90d1bd93d');
	setTimeout("videojs('firstview1-2').play()",10);
});

$("#init1_3").click(function(){
	//play2VR.init(document.querySelector('#container1-3'), '17792773215f6b90d30d710');
	setTimeout("videojs('firstview1-3').play()",10);
});

$("#init1_4").click(function(){
	//play2VR.init(document.querySelector('#container1-4'), '12212577625f6b90d3d8527');
	setTimeout("videojs('firstview1-4').play()",10);
});

$("#init1_5").click(function(){
	//play2VR.init(document.querySelector('#container1-5'), '14866374975f6b90d4db9dd');
	setTimeout("videojs('firstview1-5').play()",10);
});

$("#init2_1").click(function(){
	//play2VR.init(document.querySelector('#container2-1'), '1699151185f6c2801bb63d');
	setTimeout("videojs('firstview2-1').play()",10);
});

$("#init2_2").click(function(){
	//play2VR.init(document.querySelector('#container2-2'), '8318337875f6b90d1bd93d');
	setTimeout("videojs('firstview2-2').play()",10);
});

$("#init2_3").click(function(){
	//play2VR.init(document.querySelector('#container2-3'), '17792773215f6b90d30d710');
	setTimeout("videojs('firstview2-3').play()",10);
});

$("#init2_4").click(function(){
	//play2VR.init(document.querySelector('#container2-4'), '12212577625f6b90d3d8527');
	setTimeout("videojs('firstview2-4').play()",10);
});

$("#init2_5").click(function(){
	//play2VR.init(document.querySelector('#container2-5'), '14866374975f6b90d4db9dd');
	setTimeout("videojs('firstview2-5').play()",10);
});

$("#init3_1").click(function(){
	//play2VR.init(document.querySelector('#container3-1'), '1699151185f6c2801bb63d');
	setTimeout("videojs('firstview3-1').play()",10);
});

$("#init3_2").click(function(){
	//play2VR.init(document.querySelector('#container3-2'), '8318337875f6b90d1bd93d');
	setTimeout("videojs('firstview3-2').play()",10);
});

$("#init3_3").click(function(){
	//play2VR.init(document.querySelector('#container3-3'), '17792773215f6b90d30d710');
	setTimeout("videojs('firstview3-3').play()",10);
});

$("#init3_4").click(function(){
	//play2VR.init(document.querySelector('#container3-4'), '12212577625f6b90d3d8527');
	setTimeout("videojs('firstview3-4').play()",10);
});

$("#init3_5").click(function(){
	//play2VR.init(document.querySelector('#container3-5'), '14866374975f6b90d4db9dd');
	setTimeout("videojs('firstview3-5').play()",10);
});

$("#init4_1").click(function(){
	//play2VR.init(document.querySelector('#container4-1'), '1699151185f6c2801bb63d');
	setTimeout("videojs('firstview4-1').play()",10);
});

$("#init4_2").click(function(){
	//play2VR.init(document.querySelector('#container4-2'), '8318337875f6b90d1bd93d');
	setTimeout("videojs('firstview4-2').play()",10);
});

$("#init4_3").click(function(){
	//play2VR.init(document.querySelector('#container4-3'), '17792773215f6b90d30d710');
	setTimeout("videojs('firstview4-3').play()",10);
});

$("#init4_4").click(function(){
	//play2VR.init(document.querySelector('#container4-4'), '12212577625f6b90d3d8527');
	setTimeout("videojs('firstview4-4').play()",10);
});

$("#init4_5").click(function(){
	//play2VR.init(document.querySelector('#container4-5'), '14866374975f6b90d4db9dd');
	setTimeout("videojs('firstview4-5').play()",10);
});
*/



//must input personal info
//function mashuaipause(objData){
//	play2VR.pause();
//}


//$('.valiant').Valiant360('play');


var height = document.documentElement.clientHeight;
//alert(height);
var width = document.documentElement.clientWidth;
//alert(width);

height_ratio = height/937;
//alert(height_ratio)


width_ratio = width/1903;
//alert(width_ratio)

var choose_ratio;
if (height_ratio < width_ratio){
	choose_ratio = height_ratio;
}else{
	choose_ratio = width_ratio;
}


firstview_adjusted_height = 864*choose_ratio;
fullangle_adjusted_height = 400*choose_ratio;
//alert(firstview_adjusted_height);


firstview_adjusted_width = 1536*choose_ratio;
fullangle_adjusted_width = 600*choose_ratio;



document.getElementById('firstview1-1').style.height = firstview_adjusted_height+ "px";
document.getElementById('firstview1-1').style.width = firstview_adjusted_width+ "px";
document.getElementById('container1-1').style.height = fullangle_adjusted_height+ "px";
document.getElementById('container1-1').style.width = fullangle_adjusted_width+ "px";
for (var i = 1; i < 5; i++) {
	for (var j = 1; j < 6; j++){
		var firstview_name = "firstview" + i + "-" + j;
		var fullangle_name = "container" + i + "-" + j;
		document.getElementById(firstview_name).style.height = firstview_adjusted_height+ "px";
		document.getElementById(firstview_name).style.width = firstview_adjusted_width+ "px";
		document.getElementById(fullangle_name).style.height = fullangle_adjusted_height+ "px";
		document.getElementById(fullangle_name).style.width = fullangle_adjusted_width+ "px";
	}
}



var demonwatch1_clicktime = 0;
$("#demonwatch-1").click(function(){
	demonwatch1_clicktime += 1;
});

var demonwatch2_clicktime = 0;
$("#demonwatch-2").click(function(){
	demonwatch2_clicktime += 1;
});

var demonwatch3_clicktime = 0;
$("#demonwatch-3").click(function(){
	demonwatch3_clicktime += 1;
});

var demonwatch4_clicktime = 0;
$("#demonwatch-4").click(function(){
	demonwatch4_clicktime += 1;
});


var learning1_watchbutton1_clicktime = 0;
$("#learning1_watchbutton1").click(function(){
	if (start_user_demonstration1_clicktime > 0){
		//$('#identifier').modal('show')
		//document.getElementById('learning1_iteration1_sim1').style.display = 'block';
		$('#learning1_iteration1_sim1').modal('show');
		learning1_watchbutton1_clicktime += 1;
	}else{
		alert("Please first show your demonstration in Step 2 !");
	}
});

var learning1_watchbutton2_clicktime = 0;
$("#learning1_watchbutton2").click(function(){
	$('#learning1_iteration2_sim1').modal('show');
	learning1_watchbutton2_clicktime += 1;
});

var learning1_watchbutton3_clicktime = 0;
$("#learning1_watchbutton3").click(function(){
	$('#learning1_iteration3_sim1').modal('show');
	learning1_watchbutton3_clicktime += 1;
});

var learning1_watchbutton4_clicktime = 0;
$("#learning1_watchbutton4").click(function(){
	$('#learning1_iteration4_sim1').modal('show');
	learning1_watchbutton4_clicktime += 1;
});

var learning1_watchbutton5_clicktime = 0;
$("#learning1_watchbutton5").click(function(){
	$('#learning1_iteration5_sim1').modal('show');
	learning1_watchbutton5_clicktime += 1;
});

var learning2_watchbutton1_clicktime = 0;
$("#learning2_watchbutton1").click(function(){
	if (start_user_demonstration2_clicktime > 0){
		$('#learning2_iteration1_sim1').modal('show');
		learning2_watchbutton1_clicktime += 1;
	}else{
		alert("Please first show your demonstration in Step 2 !");
	}	
});

var learning2_watchbutton2_clicktime = 0;
$("#learning2_watchbutton2").click(function(){
	$('#learning2_iteration2_sim1').modal('show');
	learning2_watchbutton2_clicktime += 1;
});

var learning2_watchbutton3_clicktime = 0;
$("#learning2_watchbutton3").click(function(){
	$('#learning2_iteration3_sim1').modal('show');
	learning2_watchbutton3_clicktime += 1;
});

var learning2_watchbutton4_clicktime = 0;
$("#learning2_watchbutton4").click(function(){
	$('#learning2_iteration4_sim1').modal('show');
	learning2_watchbutton4_clicktime += 1;
});

var learning2_watchbutton5_clicktime = 0;
$("#learning2_watchbutton5").click(function(){
	$('#learning2_iteration5_sim1').modal('show');
	learning2_watchbutton5_clicktime += 1;
});

var learning3_watchbutton1_clicktime = 0;
$("#learning3_watchbutton1").click(function(){
	if (start_user_demonstration3_clicktime > 0){
		$('#learning3_iteration1_sim1').modal('show');
		learning3_watchbutton1_clicktime += 1;
	}else{
		alert("Please first show your demonstration in Step 2 !");
	}
});

var learning3_watchbutton2_clicktime = 0;
$("#learning3_watchbutton2").click(function(){
	$('#learning3_iteration2_sim1').modal('show');
	learning3_watchbutton2_clicktime += 1;
});

var learning3_watchbutton3_clicktime = 0;
$("#learning3_watchbutton3").click(function(){
	$('#learning3_iteration3_sim1').modal('show');
	learning3_watchbutton3_clicktime += 1;
});

var learning3_watchbutton4_clicktime = 0;
$("#learning3_watchbutton4").click(function(){
	$('#learning3_iteration4_sim1').modal('show');
	learning3_watchbutton4_clicktime += 1;
});

var learning3_watchbutton5_clicktime = 0;
$("#learning3_watchbutton5").click(function(){
	$('#learning3_iteration5_sim1').modal('show');
	learning3_watchbutton5_clicktime += 1;
});

var learning4_watchbutton1_clicktime = 0;
$("#learning4_watchbutton1").click(function(){
	if (start_user_demonstration4_clicktime > 0){
		$('#learning4_iteration1_sim1').modal('show');
		learning4_watchbutton1_clicktime += 1;
	}else{
		alert("Please first show your demonstration in Step 2 !");
	}
});

var learning4_watchbutton2_clicktime = 0;
$("#learning4_watchbutton2").click(function(){
	$('#learning4_iteration2_sim1').modal('show');
	learning4_watchbutton2_clicktime += 1;
});

var learning4_watchbutton3_clicktime = 0;
$("#learning4_watchbutton3").click(function(){
	$('#learning4_iteration3_sim1').modal('show');
	learning4_watchbutton3_clicktime += 1;
});

var learning4_watchbutton4_clicktime = 0;
$("#learning4_watchbutton4").click(function(){
	$('#learning4_iteration4_sim1').modal('show');
	learning4_watchbutton4_clicktime += 1;
});

var learning4_watchbutton5_clicktime = 0;
$("#learning4_watchbutton5").click(function(){
	$('#learning4_iteration5_sim1').modal('show');
	learning4_watchbutton5_clicktime += 1;
});

var init1_1_clicktime = 0;
$("#init1_1").click(function(){
	init1_1_clicktime += 1;		
});

var init1_2_clicktime = 0;
$("#init1_2").click(function(){
	init1_2_clicktime += 1;
});

var init1_3_clicktime = 0;
$("#init1_3").click(function(){
	init1_3_clicktime += 1;
});

var init1_4_clicktime = 0;
$("#init1_4").click(function(){
	init1_4_clicktime += 1;
});

var init1_5_clicktime = 0;
$("#init1_5").click(function(){
	init1_5_clicktime += 1;
});

var init2_1_clicktime = 0;
$("#init2_1").click(function(){
	init2_1_clicktime += 1;
});

var init2_2_clicktime = 0;
$("#init2_2").click(function(){
	init2_2_clicktime += 1;
});

var init2_3_clicktime = 0;
$("#init2_3").click(function(){
	init2_3_clicktime += 1;
});

var init2_4_clicktime = 0;
$("#init2_4").click(function(){
	init2_4_clicktime += 1;
});

var init2_5_clicktime = 0;
$("#init2_5").click(function(){
	init2_5_clicktime += 1;
});

var init3_1_clicktime = 0;
$("#init3_1").click(function(){
	init3_1_clicktime += 1;
});

var init3_2_clicktime = 0;
$("#init3_2").click(function(){
	init3_2_clicktime += 1;
});

var init3_3_clicktime = 0;
$("#init3_3").click(function(){
	init3_3_clicktime += 1;
});

var init3_4_clicktime = 0;
$("#init3_4").click(function(){
	init3_4_clicktime += 1;
});

var init3_5_clicktime = 0;
$("#init3_5").click(function(){
	init3_5_clicktime += 1;
});

var init4_1_clicktime = 0;
$("#init4_1").click(function(){
	init4_1_clicktime += 1;
});

var init4_2_clicktime = 0;
$("#init4_2").click(function(){
	init4_2_clicktime += 1;
});

var init4_3_clicktime = 0;
$("#init4_3").click(function(){
	init4_3_clicktime += 1;
});

var init4_4_clicktime = 0;
$("#init4_4").click(function(){
	init4_4_clicktime += 1;
});

var init4_5_clicktime = 0;
$("#init4_5").click(function(){
	init4_5_clicktime += 1;
});

var init4_5_clicktime = 0;
$("#init4_5").click(function(){
	init4_5_clicktime += 1;
});

var close_demon1_1_clicktime =0;
$("#close_demon1-1").click(function(){
	if (init1_1_clicktime > 0){
		document.getElementById('learning1_iteration_question_1').style.display = 'block';
		$('#learning1_iteration1_sim1').modal('hide');
		play2VR.dispose();
		close_demon1_1_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}	
});

var close_demon1_2_clicktime =0;
$("#close_demon1-2").click(function(){
	if (init1_2_clicktime > 0){
		document.getElementById('learning1_iteration_question_2').style.display = 'block';
		$('#learning1_iteration2_sim1').modal('hide');
		play2VR.dispose();
		close_demon1_2_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon1_3_clicktime =0;
$("#close_demon1-3").click(function(){
	if (init1_3_clicktime > 0){
		document.getElementById('learning1_iteration_question_3').style.display = 'block';
		$('#learning1_iteration3_sim1').modal('hide');
		play2VR.dispose();
		close_demon1_3_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon1_4_clicktime =0;
$("#close_demon1-4").click(function(){
	if (init1_4_clicktime > 0){
		document.getElementById('learning1_iteration_question_4').style.display = 'block';
		$('#learning1_iteration4_sim1').modal('hide');
		play2VR.dispose();
		close_demon1_4_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon1_5_clicktime =0;
$("#close_demon1-5").click(function(){
	if (init1_5_clicktime > 0){
		document.getElementById('learning1_iteration_question_5').style.display = 'block';
		$('#learning1_iteration5_sim1').modal('hide');
		play2VR.dispose();
		close_demon1_5_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon2_1_clicktime =0;
$("#close_demon2-1").click(function(){
	if (init2_1_clicktime > 0){
		document.getElementById('learning2_iteration_question_1').style.display = 'block';
		$('#learning2_iteration1_sim1').modal('hide');
		play2VR.dispose();
		close_demon2_1_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon2_2_clicktime =0;
$("#close_demon2-2").click(function(){
	if (init2_2_clicktime > 0){
		document.getElementById('learning2_iteration_question_2').style.display = 'block';
		$('#learning2_iteration2_sim1').modal('hide');
		play2VR.dispose();
		close_demon2_2_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon2_3_clicktime =0;
$("#close_demon2-3").click(function(){
	if (init2_3_clicktime > 0){
		document.getElementById('learning2_iteration_question_3').style.display = 'block';
		$('#learning2_iteration3_sim1').modal('hide');
		play2VR.dispose();
		close_demon2_3_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon2_4_clicktime =0;
$("#close_demon2-4").click(function(){
	if (init2_4_clicktime > 0){
		document.getElementById('learning2_iteration_question_4').style.display = 'block';
		$('#learning2_iteration4_sim1').modal('hide');
		play2VR.dispose();
		close_demon2_4_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon2_5_clicktime =0;
$("#close_demon2-5").click(function(){
	if (init2_5_clicktime > 0){
		document.getElementById('learning2_iteration_question_5').style.display = 'block';
		$('#learning2_iteration5_sim1').modal('hide');
		play2VR.dispose();
		close_demon2_5_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon3_1_clicktime =0;
$("#close_demon3-1").click(function(){
	if (init3_1_clicktime > 0){
		document.getElementById('learning3_iteration_question_1').style.display = 'block';
		$('#learning3_iteration1_sim1').modal('hide');
		play2VR.dispose();
		close_demon3_1_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon3_2_clicktime =0;
$("#close_demon3-2").click(function(){
	if (init3_2_clicktime > 0){
		document.getElementById('learning3_iteration_question_2').style.display = 'block';
		$('#learning3_iteration2_sim1').modal('hide');
		play2VR.dispose();
		close_demon3_2_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon3_3_clicktime =0;
$("#close_demon3-3").click(function(){
	if (init3_3_clicktime > 0){
		document.getElementById('learning3_iteration_question_3').style.display = 'block';
		$('#learning3_iteration3_sim1').modal('hide');
		play2VR.dispose();
		close_demon3_3_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon3_4_clicktime =0;
$("#close_demon3-4").click(function(){
	if (init3_4_clicktime > 0){
		document.getElementById('learning3_iteration_question_4').style.display = 'block';
		$('#learning3_iteration4_sim1').modal('hide');
		play2VR.dispose();
		close_demon3_4_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon3_5_clicktime =0;
$("#close_demon3-5").click(function(){
	if (init3_5_clicktime > 0){
		document.getElementById('learning3_iteration_question_5').style.display = 'block';
		$('#learning3_iteration5_sim1').modal('hide');
		play2VR.dispose();
		close_demon3_5_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon4_1_clicktime =0;
$("#close_demon4-1").click(function(){
	if (init4_1_clicktime > 0){
		document.getElementById('learning4_iteration_question_1').style.display = 'block';
		$('#learning4_iteration1_sim1').modal('hide');
		play2VR.dispose();
		close_demon4_1_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon4_2_clicktime =0;
$("#close_demon4-2").click(function(){
	if (init4_2_clicktime > 0){
		document.getElementById('learning4_iteration_question_2').style.display = 'block';
		$('#learning4_iteration2_sim1').modal('hide');
		play2VR.dispose();
		close_demon4_2_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon4_3_clicktime =0;
$("#close_demon4-3").click(function(){
	if (init4_3_clicktime > 0){
		document.getElementById('learning4_iteration_question_3').style.display = 'block';
		$('#learning4_iteration3_sim1').modal('hide');
		play2VR.dispose();
		close_demon4_3_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon4_4_clicktime =0;
$("#close_demon4-4").click(function(){
	if (init4_4_clicktime > 0){
		document.getElementById('learning4_iteration_question_4').style.display = 'block';
		$('#learning4_iteration4_sim1').modal('hide');
		play2VR.dispose();
		close_demon4_4_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});

var close_demon4_5_clicktime =0;
$("#close_demon4-5").click(function(){
	if (init4_5_clicktime > 0){
		document.getElementById('learning4_iteration_question_5').style.display = 'block';
		$('#learning4_iteration5_sim1').modal('hide');
		play2VR.dispose();
		close_demon4_5_clicktime += 1;
	}else{
		alert("Please first watch Robot Learning from Demonstration in Step 3 !");
	}
});



var learnagain1_1_clicktime =0;
$("#learnagain1-1").click(function(){
	learnagain1_1_clicktime += 1;
});

var learnagain1_2_clicktime =0;
$("#learnagain1-2").click(function(){
	learnagain1_2_clicktime += 1;
});

var learnagain1_3_clicktime =0;
$("#learnagain1-3").click(function(){
	learnagain1_3_clicktime += 1;
});

var learnagain1_4_clicktime =0;
$("#learnagain1-4").click(function(){
	learnagain1_4_clicktime += 1;
});

var learnagain1_5_clicktime =0;
$("#learnagain1-5").click(function(){
	learnagain1_5_clicktime += 1;
});

var learnagain2_1_clicktime =0;
$("#learnagain2-1").click(function(){
	learnagain2_1_clicktime += 1;
});

var learnagain2_2_clicktime =0;
$("#learnagain2-2").click(function(){
	learnagain2_2_clicktime += 1;
});

var learnagain2_3_clicktime =0;
$("#learnagain2-3").click(function(){
	learnagain2_3_clicktime += 1;
});

var learnagain2_4_clicktime =0;
$("#learnagain2-4").click(function(){
	learnagain2_4_clicktime += 1;
});

var learnagain2_5_clicktime =0;
$("#learnagain2-5").click(function(){
	learnagain2_5_clicktime += 1;
});

var learnagain3_1_clicktime =0;
$("#learnagain3-1").click(function(){
	learnagain3_1_clicktime += 1;
});

var learnagain3_2_clicktime =0;
$("#learnagain3-2").click(function(){
	learnagain3_2_clicktime += 1;
});

var learnagain3_3_clicktime =0;
$("#learnagain3-3").click(function(){
	learnagain3_3_clicktime += 1;
});

var learnagain3_4_clicktime =0;
$("#learnagain3-4").click(function(){
	learnagain3_4_clicktime += 1;
});

var learnagain3_5_clicktime =0;
$("#learnagain3-5").click(function(){
	learnagain3_5_clicktime += 1;
});

var learnagain4_1_clicktime =0;
$("#learnagain4-1").click(function(){
	learnagain4_1_clicktime += 1;
});

var learnagain4_2_clicktime =0;
$("#learnagain4-2").click(function(){
	learnagain4_2_clicktime += 1;
});

var learnagain4_3_clicktime =0;
$("#learnagain4-3").click(function(){
	learnagain4_3_clicktime += 1;
});

var learnagain4_4_clicktime =0;
$("#learnagain4-4").click(function(){
	learnagain4_4_clicktime += 1;
});

var learnagain4_5_clicktime =0;
$("#learnagain4-5").click(function(){
	learnagain4_5_clicktime += 1;
});

function get_clicklog(){
	
click_data = {"demonwatch1_clicktime": demonwatch1_clicktime,
"demonwatch2_clicktime": demonwatch1_clicktime,
"demonwatch3_clicktime": demonwatch3_clicktime,
"demonwatch4_clicktime": demonwatch4_clicktime,
"opencamera1_clicktime": opencamera1_clicktime,
"opencamera2_clicktime": opencamera2_clicktime,
"opencamera3_clicktime": opencamera3_clicktime,
"opencamera4_clicktime": opencamera4_clicktime,
"start_user_demonstration1_clicktime": start_user_demonstration1_clicktime,
"start_user_demonstration2_clicktime": start_user_demonstration2_clicktime,
"start_user_demonstration3_clicktime": start_user_demonstration3_clicktime,
"start_user_demonstration4_clicktime": start_user_demonstration4_clicktime,
"end_user_demonstration1_clicktime": end_user_demonstration1_clicktime,
"end_user_demonstration2_clicktime": end_user_demonstration2_clicktime,
"end_user_demonstration3_clicktime": end_user_demonstration3_clicktime,
"end_user_demonstration4_clicktime": end_user_demonstration4_clicktime,
"finishrecord1_clicktime": finishrecord1_clicktime,
"finishrecord2_clicktime": finishrecord2_clicktime,
"finishrecord3_clicktime": finishrecord3_clicktime,
"finishrecord4_clicktime": finishrecord4_clicktime,
"learning1_watchbutton1_clicktime": learning1_watchbutton1_clicktime,
"learning1_watchbutton2_clicktime": learning1_watchbutton2_clicktime,
"learning1_watchbutton3_clicktime": learning1_watchbutton3_clicktime,
"learning1_watchbutton4_clicktime": learning1_watchbutton4_clicktime,
"learning1_watchbutton5_clicktime": learning1_watchbutton5_clicktime,
"learning2_watchbutton1_clicktime": learning2_watchbutton1_clicktime,
"learning2_watchbutton2_clicktime": learning2_watchbutton2_clicktime,
"learning2_watchbutton3_clicktime": learning2_watchbutton3_clicktime,
"learning2_watchbutton4_clicktime": learning2_watchbutton4_clicktime,
"learning2_watchbutton5_clicktime": learning2_watchbutton5_clicktime,
"learning3_watchbutton1_clicktime": learning3_watchbutton1_clicktime,
"learning3_watchbutton2_clicktime": learning3_watchbutton2_clicktime,
"learning3_watchbutton3_clicktime": learning3_watchbutton3_clicktime,
"learning3_watchbutton4_clicktime": learning3_watchbutton4_clicktime,
"learning3_watchbutton5_clicktime": learning3_watchbutton5_clicktime,
"learning4_watchbutton1_clicktime": learning4_watchbutton1_clicktime,
"learning4_watchbutton2_clicktime": learning4_watchbutton2_clicktime,
"learning4_watchbutton3_clicktime": learning4_watchbutton3_clicktime,
"learning4_watchbutton4_clicktime": learning4_watchbutton4_clicktime,
"learning4_watchbutton5_clicktime": learning4_watchbutton5_clicktime,

"init1_1_clicktime": init1_1_clicktime,
"init1_2_clicktime": init1_2_clicktime,
"init1_3_clicktime": init1_3_clicktime,
"init1_4_clicktime": init1_4_clicktime,
"init1_5_clicktime": init1_5_clicktime,
"init2_1_clicktime": init2_1_clicktime,
"init2_2_clicktime": init2_2_clicktime,
"init2_3_clicktime": init2_3_clicktime,
"init2_4_clicktime": init2_4_clicktime,
"init2_5_clicktime": init2_5_clicktime,
"init3_1_clicktime": init3_1_clicktime,
"init3_2_clicktime": init3_2_clicktime,
"init3_3_clicktime": init3_3_clicktime,
"init3_4_clicktime": init3_4_clicktime,
"init3_5_clicktime": init3_5_clicktime,
"init4_1_clicktime": init4_1_clicktime,
"init4_2_clicktime": init4_2_clicktime,
"init4_3_clicktime": init4_3_clicktime,
"init4_4_clicktime": init4_4_clicktime,
"init4_5_clicktime": init4_5_clicktime,

"close_demon1_1_clicktime": close_demon1_1_clicktime,
"close_demon1_2_clicktime": close_demon1_2_clicktime,
"close_demon1_3_clicktime": close_demon1_3_clicktime,
"close_demon1_4_clicktime": close_demon1_4_clicktime,
"close_demon1_5_clicktime": close_demon1_5_clicktime,
"close_demon2_1_clicktime": close_demon2_1_clicktime,
"close_demon2_2_clicktime": close_demon2_2_clicktime,
"close_demon2_3_clicktime": close_demon2_3_clicktime,
"close_demon2_4_clicktime": close_demon2_4_clicktime,
"close_demon2_5_clicktime": close_demon2_5_clicktime,
"close_demon3_1_clicktime": close_demon3_1_clicktime,
"close_demon3_2_clicktime": close_demon3_2_clicktime,
"close_demon3_3_clicktime": close_demon3_3_clicktime,
"close_demon3_4_clicktime": close_demon3_4_clicktime,
"close_demon3_5_clicktime": close_demon3_5_clicktime,
"close_demon4_1_clicktime": close_demon4_1_clicktime,
"close_demon4_2_clicktime": close_demon4_2_clicktime,
"close_demon4_3_clicktime": close_demon4_3_clicktime,
"close_demon4_4_clicktime": close_demon4_4_clicktime,
"close_demon4_5_clicktime": close_demon4_5_clicktime,

"learnagain1_1_clicktime": learnagain1_1_clicktime,
"learnagain1_2_clicktime": learnagain1_2_clicktime,
"learnagain1_3_clicktime": learnagain1_3_clicktime,
"learnagain1_4_clicktime": learnagain1_4_clicktime,
"learnagain1_5_clicktime": learnagain1_5_clicktime,
"learnagain2_1_clicktime": learnagain2_1_clicktime,
"learnagain2_2_clicktime": learnagain2_2_clicktime,
"learnagain2_3_clicktime": learnagain2_3_clicktime,
"learnagain2_4_clicktime": learnagain2_4_clicktime,
"learnagain2_5_clicktime": learnagain2_5_clicktime,
"learnagain3_1_clicktime": learnagain3_1_clicktime,
"learnagain3_2_clicktime": learnagain3_2_clicktime,
"learnagain3_3_clicktime": learnagain3_3_clicktime,
"learnagain3_4_clicktime": learnagain3_4_clicktime,
"learnagain3_5_clicktime": learnagain3_5_clicktime,
"learnagain4_1_clicktime": learnagain4_1_clicktime,
"learnagain4_2_clicktime": learnagain4_2_clicktime,
"learnagain4_3_clicktime": learnagain4_3_clicktime,
"learnagain4_4_clicktime": learnagain4_4_clicktime,
"learnagain4_5_clicktime": learnagain4_5_clicktime,
}

console.log(click_data);
}