// 这里存储的是选好的instance的信息
var age = ["32", "61", "67", "40", "40", "56", "30", "57", "28", "43", "25", "24", "24", "28", "53", "52", "53", "39", "57", "63"];


var workClass = ["Private", "Private", "Private", "Self-emp-inc", 
"Self-emp-inc", "Self-emp-inc", "Local-gov", "Local-gov", "Local-gov", "Private",
"Private", "Private", "Private", "Local-gov", "Private", "Private", 
"Local-gov", "Private", "Private", "Federal-gov"];


var education = ["Masters", "HS-grad", "Bachelors", "Assoc-acdm", 
"Prof-school", "Some-college", "Some-college", "Masters", "Masters", "Bachelors",
"Bachelors", "HS-grad", "Bachelors", "Bachelors", "Masters", "Some-college", "Masters",
"Prof-school", "Masters", "Doctorate"];



var education_number = ["14", "9", "13", "12", "15", "10", "10", "14", "14", "13", "13", "9", "13", "13", "14", "10", "14", "15", "14", "16"];




var marital_status = ["Separated", "Divorced", "Widowed", 
"Married-civ-spouse", "Married-civ-spouse", "Married-civ-spouse", "Never-married", "Married-civ-spouse", 
"Married-civ-spouse", "Never-married", "Never-married", "Never-married", "Never-married", "Never-married",
"Widowed", "Married-civ-spouse", "Widowed", "Married-civ-spouse", "Divorced", "Divorced"];


var occupation = ["Exec-managerial", "Sales", "Exec-managerial", "Craft-repair", "Prof-specialty", "Exec-managerial", 
"Protective-serv", "Prof-specialty", "Prof-specialty", "Adm-clerical",
"Sales", "Sales", "Tech-support", "Prof-specialty", "Prof-specialty",
"Exec-managerial", "Prof-specialty", "Prof-specialty", "Exec-managerial", "Exec-managerial"];



var relationship = ["Not-in-family", "Unmarried", "Not-in-family", "Husband", "Husband", "Wife",
"Not-in-family", "Wife", "Wife", "Not-in-family",
"Not-in-family", "Own-child", "Own-child", "Other-relative", "Unmarried", "Husband", "Unmarried", "Husband",
"Not-in-family", "Not-in-family"];


var race = ["White", "White", "White", "White", "Amer-Indian-Eskimo", "White", "Black",
"Black", "White", "White", "White", "White", "White", "White", "Black",
"White", "Black", "Asian-Pac-Islander", "White", "White"];


var gender = ["Male", "Female", "Male", "Male", "Male", "Female", "Male", "Female", "Female", "Male",
"Female", "Female", "Male", "Male", "Female", "Male", "Female", "Male", "Male", "Female"];


var work_hours_per_week = ["55", "25", "40", "50", "60", 
"50", "40", "40", "55", "40", "40", "32", "40", "50", "35", "60", "35", "67", "50", "60"];


var native_country = ["United-States", "United-States", "United-States", "United-States", "United-States", 
"United-States", "United-States", "United-States", "United-States", "United-States",
"United-States", "United-States", "United-States", "United-States", "United-States",
"United-States", "United-States", "India", "United-States", "United-States"];

// 这里存储的是AI的预测信息
var ai_prediction = [">50K", ">50K", ">50K", ">50K", ">50K", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", ">50k", "<=50k", ">50k", ">50k", ">50k"];
var ai_confidence = ["Low", "Low", "Low", "Low", "Low", "Low", "Low", "Low", "Low", "Low", "High", "High", "High", "High", "High", "High", "High", "High", "High", "High"];


var ground_truth = [1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1];

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const order_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
for (let i = 1; i < order_list.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [order_list[i], order_list[random]] = [order_list[random], order_list[i]];
}

console.log(order_list);


// var currMode = combn_code[Math.floor(Math.random() * combn_code.length)];


var user_id = 0;

function uuidv4() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	return v.toString(16);
});
}
var user_id = uuidv4();


var firstdecision_1 = null;
var firstconfidence_1 = null;
var aisuggestion_1 = null;
var aiconfidence_1 = null;
var seconddecision_1 = null;
var secondconfidence_1 = null;


var firstdecision_2 = null;
var firstconfidence_2 = null;
var aisuggestion_2 = null;
var aiconfidence_2 = null;
var seconddecision_2 = null;
var secondconfidence_2 = null;


var firstdecision_3 = null;
var firstconfidence_3 = null;
var aisuggestion_3 = null;
var aiconfidence_3 = null;
var seconddecision_3 = null;
var secondconfidence_3 = null;


var current_idx = 0;

var current_instance_data = null;
var all_data_tosave = [];

var ai_suggestion_seen = false;

$("#pager-0").click(function(){

	var percentage = parseInt(11/order_list.length*100);
	console.log(percentage);

	var objData = $("#form_info").serializeArray();
	if(!checkFormInfo(objData)){
		return;
	}
	else{
		userinfo = objData;
	}

	// console.log(userinfo[0]);
	// console.log(userinfo[0]['value']);
	// user_id = userinfo[0]['value'];



    $(".nav-tabs a[href='#newdemo1']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$('#popupPage-1').modal('show');
	setTimeout(function() {
	    $('#popupPage-1').modal('hide');
	}, 1000);



	//两处表格内容需要替换
	//第一处，信息表


	var tb = document.getElementById('tab1');//获取表格的dom节点
	var td = tb.rows[0].cells[1];//获取0行0列的td单元格
	td.innerHTML = age[order_list[current_idx]];//动态修改表格的内容为222


	var td = tb.rows[1].cells[1];//获取0行0列的td单元格
	td.innerHTML = workClass[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[2].cells[1];//获取0行0列的td单元格
	td.innerHTML = education[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[3].cells[1];//获取0行0列的td单元格
	td.innerHTML = education_number[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[4].cells[1];//获取0行0列的td单元格
	td.innerHTML = marital_status[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[5].cells[1];//获取0行0列的td单元格
	td.innerHTML = occupation[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[6].cells[1];//获取0行0列的td单元格
	td.innerHTML = relationship[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[7].cells[1];//获取0行0列的td单元格
	td.innerHTML = race[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[8].cells[1];//获取0行0列的td单元格
	td.innerHTML = gender[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[9].cells[1];//获取0行0列的td单元格
	td.innerHTML = work_hours_per_week[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[10].cells[1];//获取0行0列的td单元格
	td.innerHTML = native_country[order_list[current_idx]];//动态修改表格的内容为222


	//第二处，AI预测表
	
	var tb = document.getElementById('AI_suggestion');//获取表格的dom节点
	var td = tb.rows[0].cells[1];//获取0行0列的td单元格
	td.innerHTML = ai_prediction[order_list[current_idx]];//动态修改表格的内容为222
	var td = tb.rows[0].cells[2];//获取0行0列的td单元格
	td.innerHTML = ai_confidence[order_list[current_idx]];//动态修改表格的内容为222

	//暗含groundtruth
	// if(ground_truth[order_list[current_idx]] == 0){
	// 	document.getElementById('hidden_groundtruth').textContent = 'AI\'s prediction and its confidence_';
	// }else{
	// 	document.getElementById('hidden_groundtruth').textContent = 'AI\'s prediction and its confidence__';
	// }
	

	document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;

	current_idx += 1;

});


$("#see_suggestion1").click(function(){

	//获取人自己的预测数据


	var objData1 = $("#firstdecision1").serializeArray();

	console.log(objData1);

	
	console.log(document.getElementById('radio-first-decision-1').checked);


	if(document.getElementById('radio-first-decision-1').checked == false && document.getElementById('radio-first-decision-2').checked == false){
		alert("Please make your prediction");
		return false;
	}
	if(document.getElementById('radio-first-confidence-1').checked == false && document.getElementById('radio-first-confidence-2').checked == false){
		alert("Please indicate your confidence");
		return false;
	}
	if((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && (document.getElementById('radio-first-confidence-1').checked == true || document.getElementById('radio-first-confidence-2').checked == true)){
		firstdecision_1 = objData1[0];
		firstconfidence_1 = objData1[1];

		// console.log(firstdecision_1);
		// console.log(firstconfidence_1);
		// console.log(firstdecision_1['value']);

		var pred_value = null;
		var conf_value = null;
		if (firstdecision_1['value'] == 0){
			pred_value = "<=50k";
		}else{
			pred_value = ">50k";
		}

		if (firstconfidence_1['value'] == 0){
			conf_value = "Low";
		}else{
			conf_value = "High";
		}

		var tb = document.getElementById('human_own_prediction');//获取表格的dom节点
		var td = tb.rows[0].cells[1];//获取0行0列的td单元格
		td.innerHTML = pred_value;//动态修改表格的内容为222
		var td = tb.rows[0].cells[2];//获取0行0列的td单元格
		td.innerHTML = conf_value;//动态修改表格的内容为222

		document.getElementById("suggestion1").style.display="block";
		ai_suggestion_seen = true;
	}

	
});


$("#makefinaldecision_button").click(function(){
	if(ai_suggestion_seen == false){
		alert("Please see AI's suggestion before making your final decision");
		return false;
	}else{
		document.getElementById("finaldecision1").style.display="block";
	}

});




$("#next-task").click(function(){

	if(document.getElementById('radio-final-decision-1').checked == false && document.getElementById('radio-final-decision-2').checked == false){
		alert("Please make your final prediction");
		return false;
	}
	if(document.getElementById('radio-final-confidence-1').checked == false && document.getElementById('radio-final-confidence-2').checked == false){
		alert("Please indicate your confidence in your final decision");
		return false;
	}
	if((document.getElementById('radio-final-decision-1').checked == true || document.getElementById('radio-final-decision-2').checked == true) && (document.getElementById('radio-final-confidence-1').checked == true || document.getElementById('radio-final-confidence-2').checked == true)){
	

		//保存用户的两次决策结果

		

		var objData1 = $("#firstdecision1").serializeArray();
		var objData2 = $("#finaldecision1").serializeArray();
		
		// console.log(objData);
		
		firstdecision_1 = objData1[0];
		firstconfidence_1 = objData1[1];

		aisuggestion_1 = ai_prediction[order_list[current_idx-1]];
		aiconfidence_1 = ai_confidence[order_list[current_idx-1]];

		seconddecision_1 = objData2[0];
		secondconfidence_1 = objData2[1];

		current_instance_data = [current_idx, order_list[current_idx-1], firstdecision_1, firstconfidence_1, {name:'ai_decision', value: aisuggestion_1}, {name:'ai_confidence', value: aiconfidence_1}, seconddecision_1, secondconfidence_1];

		console.log(current_instance_data);

		all_data_tosave.push(current_instance_data);

		console.log(all_data_tosave);

		// 这是之前的写法，展示一个新的界面
		// $(".nav-tabs a[href='#newdemo2']").tab('show');


		if (current_idx < order_list.length-19){
			/*
			在这里，我要试着改成纯动态页面，就用一个页面，来展示任意数量的instance
			*/

			// step1，先把页面该折叠的地方折叠
			document.getElementById("firstdecision1").style.display="none";
			document.getElementById("suggestion1").style.display="none";
			document.getElementById("finaldecision1").style.display="none";

			// step2，把信息表格+AI预测表格更新
			var tb = document.getElementById('tab1');//获取表格的dom节点
			var td = tb.rows[0].cells[1];//获取0行0列的td单元格
			td.innerHTML = age[order_list[current_idx]];//动态修改表格的内容为222

			var td = tb.rows[1].cells[1];//获取0行0列的td单元格
			td.innerHTML = workClass[order_list[current_idx]];//动态修改表格的内容为222

			var td = tb.rows[2].cells[1];//获取0行0列的td单元格
			td.innerHTML = education[order_list[current_idx]];//动态修改表格的内容为222

			var td = tb.rows[3].cells[1];//获取0行0列的td单元格
			td.innerHTML = education_number[order_list[current_idx]];//动态修改表格的内容为222

			var td = tb.rows[4].cells[1];//获取0行0列的td单元格
			td.innerHTML = marital_status[order_list[current_idx]];//动态修改表格的内容为222

			var td = tb.rows[5].cells[1];//获取0行0列的td单元格
			td.innerHTML = occupation[order_list[current_idx]];//动态修改表格的内容为222

			var td = tb.rows[6].cells[1];//获取0行0列的td单元格
			td.innerHTML = relationship[order_list[current_idx]];//动态修改表格的内容为222

			var td = tb.rows[7].cells[1];//获取0行0列的td单元格
			td.innerHTML = race[order_list[current_idx]];//动态修改表格的内容为222

			var td = tb.rows[8].cells[1];//获取0行0列的td单元格
			td.innerHTML = gender[order_list[current_idx]];//动态修改表格的内容为222

			var td = tb.rows[9].cells[1];//获取0行0列的td单元格
			td.innerHTML = work_hours_per_week[order_list[current_idx]];//动态修改表格的内容为222

			var td = tb.rows[10].cells[1];//获取0行0列的td单元格
			td.innerHTML = native_country[order_list[current_idx]];//动态修改表格的内容为222


			//第二处，AI预测表
			
			var tb = document.getElementById('AI_suggestion');//获取表格的dom节点
			var td = tb.rows[0].cells[1];//获取0行0列的td单元格
			td.innerHTML = ai_prediction[order_list[current_idx]];//动态修改表格的内容为222
			var td = tb.rows[0].cells[2];//获取0行0列的td单元格
			td.innerHTML = ai_confidence[order_list[current_idx]];//动态修改表格的内容为222

			//暗含groundtruth
			// if(ground_truth[order_list[current_idx]] == 0){
			// 	document.getElementById('hidden_groundtruth').textContent = 'AI\'s prediction and its confidence_';
			// }else{
			// 	document.getElementById('hidden_groundtruth').textContent = 'AI\'s prediction and its confidence__';
			// }



			// step3，把用户选项框清零

			document.getElementById('radio-first-decision-1').checked = false;
			document.getElementById('radio-first-decision-2').checked = false;
			document.getElementById('radio-first-confidence-1').checked = false;
			document.getElementById('radio-first-confidence-2').checked = false;
			document.getElementById('radio-final-decision-1').checked = false;
			document.getElementById('radio-final-decision-2').checked = false;
			document.getElementById('radio-final-confidence-1').checked = false;
			document.getElementById('radio-final-confidence-2').checked = false;

			// step4，对页面的其他位置进行更新，比如进度数字，进度条

			var percentage = current_idx/order_list.length*100;
			console.log(percentage);
			document.getElementById('progressbar1').style.width = percentage + '%';
			document.getElementById('progressbar1').textContent = percentage + '%';
			document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


			// step5，重置按钮状态
			ai_suggestion_seen = false;

		}else{
			$("#finishModal").modal('show');
			submitData_ms();
			var percentage = parseInt(current_idx/order_list.length*100);
			console.log(percentage);
			document.getElementById('progressbar1').style.width = percentage + '%';
			document.getElementById('progressbar1').textContent = percentage + '%';
			// document.getElementById('progress-text').textContent = current_idx + '/' + order_list.length;
		}
		current_idx += 1;
	}



});

$("#exit_button").click(function(){
	document.getElementById("next-task").textContent = "Finished";
	document.getElementById("next-task").disabled = true;
});



function submitData_ms(){

	/*
	* 把数据上传到server
	*/

	// var xhr = new XMLHttpRequest();
	// //var url = "http://165.227.108.67/mingfei/submit.php"
	// // var url = "https://shuaima.info/userstudy/submit.php"

	// // var url = "https://shuaima.top/userstudy/submit.php";
	// var url = "http://49.232.60.34/userstudy/submit.php";
	// xhr.open("POST", url, true);
	// xhr.setRequestHeader("Content-Type", "application/json");
	// // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	// xhr.onreadystatechange = function () {
	// 	if (xhr.readyState === 4 && xhr.status === 200) {
	// 		document.getElementById('user_id').innerHTML = xhr.responseText;
	// 		console.log(xhr.responseText);
	// 		//alert("Your response has been saved successfully!");
	// 		$("#finishModal").modal('show');
	//     }
	// };


	var userinfo_alldata = {
		"uid": user_id,
		"user_info": userinfo,
		"decision_data": all_data_tosave
	}
	var dataJson = JSON.stringify(userinfo_alldata);
	// xhr.send(dataJson);
	

	/*
	* 把数据存为本地json文件，不上传到server
	*/
	var blob = new Blob([dataJson], {type: "text/plain;charset=utf-8"});
    saveAs(blob, user_id + ".json");
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

