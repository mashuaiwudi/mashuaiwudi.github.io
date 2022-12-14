var age_training = ['58', '26'];

var age = ['57', '51', '37', '35', '43', '47', '46', '60', '32', '29', '34', '34', '33', '44', '42', '34', '47', '56', '90', '37', '32', '31', '47', '31', '53', '55', '55', '32', '60', '34', '24', '24', '38', '45', '80', '33', '38', '47', '43', '40'];


var workClass_training = ['State government', 'Private'];

var workClass = ['Private', 'Private', 'Private', 'Local government', 'Local government', 'Local government', 'Federal government', 'self employment(not incorporated)', 'Federal government', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'self employment(not incorporated)', 'Private', 'Local government', 'Federal government', 'Private', 'Private', 'Private', 'Private', 'Local government', 'Private', 'Private', 'Federal government', 'self employment(not incorporated)', 'Federal government', 'Private', 'Federal government', 'Private', 'Private', 'self employment(not incorporated)', 'Private', 'Private', 'Private', 'Private', 'Private'];


var education_number_training = ['14', '9'];

var education_number = ['14', '13', '14', '10', '14', '14', '14', '9', '11', '11', '13', '13', '12', '9', '10', '15', '13', '12', '9', '13', '14', '14', '13', '13', '9', '14', '14', '11', '9', '13', '9', '13', '10', '10', '9', '13', '11', '13', '14', '10'];


var marital_status_training = ['Married civilian spouse', 'Never married'];

var marital_status = ['Divorced', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Separated', 'Never married', 'Married civilian spouse', 'Never married', 'Never married', 'Never married', 'Never married', 'Married civilian spouse', 'Never married', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Separated', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Separated', 'Never married', 'Never married', 'Never married', 'Separated', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse'];


var occupation_training = ['Professional specialty', 'Handlers/Cleaners'];

var occupation = ['Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Other service', 'Technical support', 'Technical support', 'Other service', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Technical support', 'Executive Managerial', 'Other service', 'Other service', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Other service', 'Executive Managerial', 'Executive Managerial', 'Technical support', 'Other service', 'Executive Managerial', 'Executive Managerial', 'Technical support', 'Other service', 'Executive Managerial', 'Other service', 'Executive Managerial', 'Technical support', 'Other service', 'Executive Managerial', 'Executive Managerial'];


var race_training = ['White', 'Black'];

var race = ['White', 'White', 'White', 'White', 'White', 'White', 'White', 'Black', 'Black', 'White', 'White', 'White', 'White', 'White', 'White', 'Asian Pacific Islander', 'Black', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'Black', 'Black', 'Asian Pacific Islander', 'White', 'White', 'White', 'White', 'White', 'Black', 'White', 'White', 'White', 'White'];


var gender_training = ["Male", "Male"];

var gender = ['Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Female', 'Female', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Female', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Female', 'Female', 'Male', 'Male', 'Male', 'Female', 'Male', 'Female', 'Female'];


var work_hours_per_week_training = ['50', '48'];

var work_hours_per_week = ['50', '50', '60', '40', '60', '41', '40', '50', '40', '40', '40', '45', '55', '55', '55', '40', '45', '50', '40', '50', '55', '70', '60', '45', '45', '50', '40', '40', '50', '40', '50', '40', '72', '50', '40', '40', '40', '40', '32', '40'];


// 这里存储的是AI的预测信息

var ai_prediction_training = ["> 50k", "≤ 50k"];

var ai_confidence_training = ['0.7722023142621077', '0.9172004176087836'];

var ai_prediction = ['1', '1', '1', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '1', '0', '0'];

var ai_confidence = ['0.9217479554921215', '0.8583611965668683', '0.8194183124605668', '0.6696217118480097', '0.8857902974022867', '0.8124732526788547', '0.8396635373358272', '0.8510726157846281', '0.8249754763426402', '0.8029938528088708', '0.640360724293908', '0.7949172856605609', '0.8024601713315063', '0.7038894637947749', '0.5187649817838087', '0.6400114626875415', '0.5363873006551453', '0.7026925684627473', '0.7346866702474837', '0.616703631343213', '0.535159927134864', '0.8386593445871344', '0.8247141645073303', '0.5621290079583132', '0.5993430752703267', '0.8701330813074347', '0.8180901089263488', '0.8249754763426402', '0.8510726157846281', '0.5666351724494534', '0.8744866923514765', '0.8818527782170331', '0.8876919213480038', '0.582627327854363', '0.5085160569190523', '0.5519395195108348', '0.906390900519836', '0.6151637112768618', '0.645772779407726', '0.8828952926164687'];


var ground_truth_training = ['1', '0'];

var ground_truth = ['1', '1', '1', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '1', '1'];

const order_list_training = [0, 1];


var task_num = 40;

const order_list = [];
for (var i = 0; i < task_num; i++) {
	order_list.push(i);
}

for (let i = 1; i < order_list.length/2; i++) {
    const random = Math.floor(Math.random() * (i + 1));
	[order_list[i], order_list[random]] = [order_list[random], order_list[i]];
}

for (let i = 1; i < order_list.length/2; i++) {
    const random = Math.floor(Math.random() * (i + 1)) + order_list.length/2;
	[order_list[i + order_list.length / 2], order_list[random]] = [order_list[random], order_list[i + order_list.length/2]];
}

console.log(order_list);

var user_id = 0;

function uuidv4() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	return v.toString(16);
});
}
var user_id = uuidv4();

var ground_truth_1 = null;
var firstdecision_1 = null;
var firstconfidence_1 = null;
var aisuggestion_1 = null;
var aiconfidence_1 = null;
var seconddecision_1 = null;
var secondconfidence_1 = null;

var firstdecision = [];



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

var current_ground_truth = null;

var current_idx = 0;
var current_idx_training = 0;

var current_instance_data = null;



var rule_data = [];
var rule_data_training = [];

var all_data_tosave = [];
var all_data_tosave_training = [];



var timestamp1 = null;
var timestamp2 = null;
var timetrain = null;

var interaction_log_in_this_button = null;
var user_interaction_log_thispape = [];
var user_interaction_log = [];

var questionnaire_data = null;


var initial_rule = null;
var user_rule = null;
var two_pred = null;


/*
用户交互日志记录
*/
//用户第一步，做decision的按钮
$("#make_prediction_1").click(function(){
	var what_clicked = "make_prediction_1";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户初始decision的第一个radiobutton
$("#radio-first-decision-1").click(function(){
	var what_clicked = "radio-first-decision-1";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('radio-first-decision-1').value;
	interaction_log_in_this_button = [what_clicked, timestamp_this, this_value];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户初始decision的第二个radiobutton
$("#radio-first-decision-2").click(function(){
	var what_clicked = "radio-first-decision-2";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('radio-first-decision-2').value;
	interaction_log_in_this_button = [what_clicked, timestamp_this, this_value];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});




//进入下一个task的按钮
$("#next-task").click(function(){
	var what_clicked = "next-task";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//结束的按钮
$("#go_to_next").click(function(){
	var what_clicked = "go_to_next";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//退出的按钮
$("#exit_button").click(function(){
	var what_clicked = "exit_button";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});


$("#page-train").click(function(){
	var what_clicked = "page-train";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});


$("#pager-training-20tasks").click(function(){
	var what_clicked = "pager-training-20tasks";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});
$("#pager-0").click(function(){
	var what_clicked = "pager-0";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

$("#next-task_training").click(function(){
	var what_clicked = "next-task_training";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});





$("#page-train").click(function(){

	timestamp1 = new Date().getTime(); //1610075969354 

	var percentage = parseInt(11/order_list.length*100);

	var objData = $("#form_info").serializeArray();
	if(!checkFormInfo(objData)){
		return;
	}
	else{
		userinfo = objData;
	}

    $(".nav-tabs a[href='#tutorial']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

});



//must input personal info
function checkIterationFormInfo(objData){
	
	if (objData.length < 16) {
		alert("Please answer all questions before finishing the experiment");
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



$("#pager-training-20tasks").click(function(){

	// 先进行attention check
	if((document.getElementById('attention_question_1-1').checked == false && document.getElementById('attention_question_1-2').checked == false) || (document.getElementById('attention_question_2-1').checked == false && document.getElementById('attention_question_2-2').checked == false)){
		alert("Please answer the above question");
		return false;
	}else{
		var attentionData1 = $("#firstcheck").serializeArray();
		var attentionData2 = $("#firstcheck").serializeArray();
		if(attentionData1[0].value == 1 || attentionData2[0].value == 1){
			alert("Sorry! You failed the attention check!");
			document.getElementById("pager-training-20tasks").textContent = "You failed attention check";
			document.getElementById("pager-training-20tasks").style.display = "none";
		}else{

			if(current_idx_training == 0){
				timestamp2 = new Date().getTime();
				timetrain = timestamp2 - timestamp1;
			}
		
			$(".nav-tabs a[href='#traindemo1']").tab('show');
			$("html, body").animate({ scrollTop: 0 }, "slow");
		
		
			//两处表格内容需要替换
			//第一处，信息表
		
			var tb = document.getElementById('tab1-training');//获取表格的dom节点
			var td = tb.rows[0].cells[1];//获取0行0列的td单元格
			td.innerHTML = age_training[order_list_training[current_idx_training]];//动态修改表格的内容为222
		
		
			var td = tb.rows[1].cells[1];//获取0行0列的td单元格
			td.innerHTML = workClass_training[order_list_training[current_idx_training]];//动态修改表格的内容为222
		
			var td = tb.rows[2].cells[1];//获取0行0列的td单元格
			td.innerHTML = education_number_training[order_list_training[current_idx_training]];//动态修改表格的内容为222
		
			var td = tb.rows[3].cells[1];//获取0行0列的td单元格
			td.innerHTML = marital_status_training[order_list_training[current_idx_training]];//动态修改表格的内容为222
		
			var td = tb.rows[4].cells[1];//获取0行0列的td单元格
			td.innerHTML = occupation_training[order_list_training[current_idx_training]];//动态修改表格的内容为222
		
			var td = tb.rows[5].cells[1];//获取0行0列的td单元格
			td.innerHTML = race_training[order_list_training[current_idx_training]];//动态修改表格的内容为222
		
			var td = tb.rows[6].cells[1];//获取0行0列的td单元格
			td.innerHTML = gender_training[order_list_training[current_idx_training]];//动态修改表格的内容为222
		
			var td = tb.rows[7].cells[1];//获取0行0列的td单元格
			td.innerHTML = work_hours_per_week_training[order_list_training[current_idx_training]];//动态修改表格的内容为222
		
			
		
			document.getElementById('progress-text-training').textContent = current_idx_training + 1 + '/' + order_list_training.length;
		
			current_idx_training += 1;
		}
	}
});



$("#pager-0").click(function(){

	timestamp1 = new Date().getTime(); //1610075969354 

	var percentage = parseInt(11/order_list.length*100);

	/*** 
	var objData = $("#form_info").serializeArray();
	if(!checkFormInfo(objData)){
		return;
	}
	else{
		userinfo = objData;
	}
	***/


    $(".nav-tabs a[href='#newdemo1']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");


	//两处表格内容需要替换
	//第一处，信息表



	var tb = document.getElementById('tab1');//获取表格的dom节点
	var td = tb.rows[0].cells[1];//获取0行0列的td单元格
	td.innerHTML = age[order_list[current_idx]];//动态修改表格的内容为222
	aisuggestion_1 = ai_prediction[order_list[current_idx]];
	aiconfidence_1 = ai_confidence[order_list[current_idx]];


	var td = tb.rows[1].cells[1];//获取0行0列的td单元格
	td.innerHTML = workClass[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[2].cells[1];//获取0行0列的td单元格
	td.innerHTML = education_number[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[3].cells[1];//获取0行0列的td单元格
	td.innerHTML = marital_status[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[4].cells[1];//获取0行0列的td单元格
	td.innerHTML = occupation[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[5].cells[1];//获取0行0列的td单元格
	td.innerHTML = race[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[6].cells[1];//获取0行0列的td单元格
	td.innerHTML = gender[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[7].cells[1];//获取0行0列的td单元格
	td.innerHTML = work_hours_per_week[order_list[current_idx]];//动态修改表格的内容为222




	// document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;

	var percentage = current_idx/order_list.length*100;
	document.getElementById('progressbar1').style.width = percentage + '%';
	document.getElementById('progressbar1').textContent = percentage + '%';
	document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;

	current_idx += 1;

});


var attention_tocheck = false;


$("#next-task").click(function(){

	if(document.getElementById('radio-first-decision-1').checked == false && document.getElementById('radio-first-decision-2').checked == false){
		alert("Please make your prediction");
		return false;
	}
	else{		
		// 先存储数据！！！
		// 即将进入下一页了，把这一页的用户的interaction log都保存下来，用于区分
		user_interaction_log.push(user_interaction_log_thispape);


		//保存用户的两次决策结果

		timestamp2 = new Date().getTime(); //1610075969354 
		

		var objData1 = $("#firstdecision1").serializeArray();
		firstdecision_1 = objData1[0];
		firstdecision.push(firstdecision_1);


		var time_spent = timestamp2 - timestamp1;
		timestamp1 = timestamp2;

		current_instance_data = [current_idx, order_list[current_idx - 1], firstdecision_1, aisuggestion_1, aiconfidence_1, ground_truth_1, time_spent];

		all_data_tosave.push(current_instance_data);

		if (current_idx < order_list.length){

			//随机找一个时间，去attention check

			if (attention_tocheck && current_idx == 2){
				attention_tocheck = false;
				
				document.getElementById('question1').textContent = "Q1. What is the answer of 35 plus 20?";
				document.getElementById('attentioncheck1').textContent = "≤ 50";
				document.getElementById('attentioncheck2').textContent = "> 50";

				/*
				在这里，我要试着改成纯动态页面，就用一个页面，来展示任意数量的instance
				*/

				// step1，先把页面该折叠的地方折叠
				document.getElementById("firstdecision1").style.display="none";


				// step2，把信息表格+AI预测表格更新
				var tb = document.getElementById('tab1');//获取表格的dom节点
				var td = tb.rows[0].cells[1];//获取0行0列的td单元格
				td.innerHTML = age[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[1].cells[1];//获取0行0列的td单元格
				td.innerHTML = workClass[order_list[current_idx]];//动态修改表格的内容为222


				var td = tb.rows[2].cells[1];//获取0行0列的td单元格
				td.innerHTML = education_number[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[3].cells[1];//获取0行0列的td单元格
				td.innerHTML = marital_status[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[4].cells[1];//获取0行0列的td单元格
				td.innerHTML = occupation[order_list[current_idx]];//动态修改表格的内容为222


				var td = tb.rows[5].cells[1];//获取0行0列的td单元格
				td.innerHTML = race[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[6].cells[1];//获取0行0列的td单元格
				td.innerHTML = gender[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[7].cells[1];//获取0行0列的td单元格
				td.innerHTML = work_hours_per_week[order_list[current_idx]];//动态修改表格的内容为222


				// step3，把用户选项框清零

				document.getElementById('radio-first-decision-1').checked = false;
				document.getElementById('radio-first-decision-2').checked = false;


				// step4，对页面的其他位置进行更新，比如进度数字，进度条

				var percentage = current_idx/order_list.length*100;
				document.getElementById('progressbar1').style.width = percentage + '%';
				document.getElementById('progressbar1').textContent = percentage + '%';
				document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;




				current_idx -= 1;
			}
			else{

				if(current_idx == 20){ // current_idx = 20 且还未进行决策树那一步骤
					console.log(current_idx);
					// step1. 把前20个数据的真实序号和label通过ajax传递到后端，采用json格式
					var id = [];
					var decision = [];
					var id_last20 = [];
					for(var i=0;i<20;i++){
						id.push(order_list[i]);
						decision.push(firstdecision[i]['value']);
					}

					for(var i=20;i<40;i++){
						id_last20.push(order_list[i]);
					}

					$.ajax({
						//url: "http://localhost:8081/train_data",
						url: "http://49.232.60.34:8081/train_data",
						type: "GET",
						data: {"id":String(id),"decision":String(decision),"id_last20":String(id_last20)}  
					}).done(function (data) {
						// 请求成功
					}).fail(function (jqXHR, textStatus, errorThrown) {
						// net::ERR_CONNECTION_REFUSED 发生时，也能进入
						console.info("网络出错");
					});


					// step2. 暂时把 “下一个” 按钮隐藏
					//next_button = document.getElementById('next-task');
					//next_button.style.display = "none";

					// step3. 在新页面打开decisionTree.html页面

					//window.open("http://localhost:8081/decisionTree", "_blank");   
					window.open("decisionTree.html", "_blank");    

					/*
						下面decisionTree.html界面：
						1) 利用ajax获取后端传来的系统生成的决策树数据并在前端呈现
						2) 前端用户修改决策树
						3) 用户点击完成按钮
							3.1) 决策树数据转化为if...else...结构
							3.2) 上述结构数据通过ajax传递给后端并进行保存
							3.3) 自动关闭该页面
							3.4) 利用decisionTree.js将capability页面的按钮显示出来，让用户继续做后面的部分
					*/

				}
				
				document.getElementById('question1').textContent = "Q1. What is your prediction?";
				document.getElementById('attentioncheck1').textContent = "≤ 50k";
				document.getElementById('attentioncheck2').textContent = "> 50k";

				/*
				在这里，我要试着改成纯动态页面，就用一个页面，来展示任意数量的instance
				*/

				// step1，先把页面该折叠的地方折叠
				document.getElementById("firstdecision1").style.display = "none";

				// step2，把信息表格+AI预测表格更新
				var tb = document.getElementById('tab1');//获取表格的dom节点
				var td = tb.rows[0].cells[1];//获取0行0列的td单元格
				td.innerHTML = age[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[1].cells[1];//获取0行0列的td单元格
				td.innerHTML = workClass[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[2].cells[1];//获取0行0列的td单元格
				td.innerHTML = education_number[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[3].cells[1];//获取0行0列的td单元格
				td.innerHTML = marital_status[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[4].cells[1];//获取0行0列的td单元格
				td.innerHTML = occupation[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[5].cells[1];//获取0行0列的td单元格
				td.innerHTML = race[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[6].cells[1];//获取0行0列的td单元格
				td.innerHTML = gender[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[7].cells[1];//获取0行0列的td单元格
				td.innerHTML = work_hours_per_week[order_list[current_idx]];//动态修改表格的内容为222

				// step3，把用户选项框清零

				document.getElementById('radio-first-decision-1').checked = false;
				document.getElementById('radio-first-decision-2').checked = false;

				// step4，对页面的其他位置进行更新，比如进度数字，进度条

				var percentage = current_idx / order_list.length * 100;
				document.getElementById('progressbar1').style.width = percentage + '%';
				document.getElementById('progressbar1').textContent = percentage + '%';
				document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;
			}
			

		}else{

			document.getElementById("go_to_next").style.display = "block";
			document.getElementById("user_prediction").style.display="none";

			document.getElementById("profile").style.display="none";

			// step4，对页面的其他位置进行更新，比如进度数字，进度条
	
			var percentage = current_idx/order_list.length*100;
			document.getElementById('progressbar1').style.width = percentage + '%';
			document.getElementById('progressbar1').textContent = percentage + '%';
			document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


		}
		current_idx += 1;


		//清除当前页的log
		user_interaction_log_thispape = [];

	}


});


var ground_truth_is_show = 0;
$("#show_groundtruth").click(function () {
	if (document.getElementById('radio-first-decision-1_training').checked == false && document.getElementById('radio-first-decision-2_training').checked == false) {
		alert("Please make your prediction");
		return false;
	}
	else{
		var gt = ground_truth_training[current_idx_training-1];
		if(gt == 1){
			document.getElementById('groundtruth').textContent = '> 50k';
			//$('#groundtruth').textContent = '>=50K';
		}
		else{
			document.getElementById('groundtruth').textContent = '≤ 50K';
			//$('#groundtruth').textContent = '≤ 50K';
		}
		ground_truth_is_show = 1;
	}
})



$("#next-task_training").click(function(){


	if(document.getElementById('radio-first-decision-1_training').checked == false && document.getElementById('radio-first-decision-2_training').checked == false){
		alert("Please make your prediction");
		return false;
	}
	/*if(document.getElementById('radio-first-confidence-1_training').checked == false && document.getElementById('radio-first-confidence-2_training').checked == false){
		alert("Please indicate your confidence");
		return false;
	}*/
	if(ground_truth_is_show == 0){
		alert("Please check your answer with the groundtruth");
		return false;
	}
	/*if((document.getElementById('radio-first-decision-1_training').checked == true || document.getElementById('radio-first-decision-2_training').checked == true) && (document.getElementById('radio-first-confidence-1_training').checked == true || document.getElementById('radio-first-confidence-2_training').checked == true) && ground_truth_is_show == 1){*/
	if ((document.getElementById('radio-first-decision-1_training').checked == true || document.getElementById('radio-first-decision-2_training').checked == true)) {
		//保存用户的两次决策结果

		timestamp2 = new Date().getTime(); //1610075969354 
		

		var objData1 = $("#firstdecision1_training").serializeArray();
		
		firstdecision_1 = objData1[0];

		aisuggestion_1 = ai_prediction_training[order_list_training[current_idx_training-1]];
		aiconfidence_1 = ai_confidence_training[order_list_training[current_idx_training-1]];
		ground_truth_1 = ground_truth_training[order_list_training[current_idx_training-1]];

		var time_spent = timestamp2 - timestamp1;
		timestamp1 = timestamp2;

		current_instance_data = [current_idx_training, order_list_training[current_idx_training - 1], firstdecision_1, aisuggestion_1, aiconfidence_1, ground_truth_1, time_spent];
		// current_instance_data = [current_idx_training, order_list_training[current_idx_training - 1], firstdecision_1, firstconfidence_1, time_spent,  ground_truth_1];


		all_data_tosave_training.push(current_instance_data);


		// 这是之前的写法，展示一个新的界面
		// $(".nav-tabs a[href='#newdemo2']").tab('show');
		if (current_idx_training < order_list_training.length){

			document.getElementById('question1').textContent = "Q1. What is your prediction?";
			document.getElementById('attentioncheck1').textContent = "≤ 50k";
			document.getElementById('attentioncheck2').textContent = "> 50k";

			/*
			在这里，我要试着改成纯动态页面，就用一个页面，来展示任意数量的instance
			*/


			// step2，把信息表格+AI预测表格更新
			var tb = document.getElementById('tab1-training');//获取表格的dom节点
			var td = tb.rows[0].cells[1];//获取0行0列的td单元格
			td.innerHTML = age_training[order_list_training[current_idx_training]];//动态修改表格的内容为222

			var td = tb.rows[1].cells[1];//获取0行0列的td单元格
			td.innerHTML = workClass_training[order_list_training[current_idx_training]];//动态修改表格的内容为222

			var td = tb.rows[2].cells[1];//获取0行0列的td单元格
			td.innerHTML = education_number_training[order_list_training[current_idx_training]];//动态修改表格的内容为222

			var td = tb.rows[3].cells[1];//获取0行0列的td单元格
			td.innerHTML = marital_status_training[order_list_training[current_idx_training]];//动态修改表格的内容为222

			var td = tb.rows[4].cells[1];//获取0行0列的td单元格
			td.innerHTML = occupation_training[order_list_training[current_idx_training]];//动态修改表格的内容为222

			var td = tb.rows[5].cells[1];//获取0行0列的td单元格
			td.innerHTML = race_training[order_list_training[current_idx_training]];//动态修改表格的内容为222

			var td = tb.rows[6].cells[1];//获取0行0列的td单元格
			td.innerHTML = gender_training[order_list_training[current_idx_training]];//动态修改表格的内容为222

			var td = tb.rows[7].cells[1];//获取0行0列的td单元格
			td.innerHTML = work_hours_per_week_training[order_list_training[current_idx_training]];//动态修改表格的内容为222


			
			// step3，把用户选项框清零

			document.getElementById('radio-first-decision-1_training').checked = false;
			document.getElementById('radio-first-decision-2_training').checked = false;
			document.getElementById('groundtruth').textContent = ' ';
			ground_truth_is_show = 0;



			// step4，对页面的其他位置进行更新，比如进度数字，进度条

			var percentage = current_idx_training/order_list_training.length*100;
			document.getElementById('progressbar1').style.width = percentage + '%';
			document.getElementById('progressbar1').textContent = percentage + '%';
			document.getElementById('progress-text-training').textContent = current_idx_training + 1 + '/' + order_list_training.length;


			

		}else{
			document.getElementById("goodjob").style.display="block";
			document.getElementById("pager-0").style.display = "block";
			document.getElementById("user_prediction_training").style.display="none";

			document.getElementById("profile_training").style.display="none";



			var percentage = current_idx_training/order_list_training.length*100;
			document.getElementById('progressbar1').style.width = percentage + '%';
			document.getElementById('progressbar1').textContent = percentage + '%';
			document.getElementById('progress-text-training').textContent = current_idx_training + '/' + order_list_training.length;
		}
		current_idx_training += 1;
	}



});








$("#go_to_next").click(function(){


	$("#finishModal").modal('show');
	submitData_ms();


});


$("#exit_button").click(function(){
	document.getElementById("go_to_next").textContent = "Finished";
	document.getElementById("go_to_next").disabled = true;
});


function get1(data){
	//业务代码块
	initial_rule = data;
}

function get2(data){
	//业务代码块
	user_rule = data;
}

function submitData_ms(){


	$.ajax({
        //url: "http://localhost:8081/send_initial_rule_to_frontend",
		url: "http://49.232.60.34:8081/send_initial_rule_to_frontend",
		
        type: "post",
        processData: false,
        contentType: false,
		async:false,
        success: function (data) { // data是接收的后台返回数据
            initial_rule = JSON.parse(data);
            console.log(initial_rule);            
        },
        error: function (e) {
            console.log("获取信息失败");
        }
    })


	$.ajax({
        //url: "http://localhost:8081/send_user_rule_to_frontend",
		url: "http://49.232.60.34:8081/send_user_rule_to_frontend",
        type: "post",
        processData: false,
        contentType: false,
		async:false,
        success: function (data) { // data是接收的后台返回数据
            user_rule = JSON.parse(data);
            console.log(user_rule);            
        },
        error: function (e) {
            console.log("获取信息失败");
        }
    })



	$.ajax({
        //url: "http://localhost:8081/send_user_rule_to_frontend",
		url: "http://49.232.60.34:8081/send_pred_results_to_frontend",
        type: "post",
        processData: false,
        contentType: false,
		async:false,
        success: function (data) { // data是接收的后台返回数据
            two_pred = JSON.parse(data);
            console.log(two_pred);            
        },
        error: function (e) {
            console.log("获取信息失败");
        }
    })




	




	/*
	* 把数据上传到server
	*/

	var xhr = new XMLHttpRequest();
	//var url = "http://165.227.108.67/mingfei/submit.php"
	// var url = "https://shuaima.info/userstudy/submit.php"

	// var url = "https://shuaima.top/userstudy/submit.php";
	var url = "http://49.232.60.34/userstudy/submit.php";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.getElementById('user_id').innerHTML = xhr.responseText;
			//alert("Your response has been saved successfully!");
			$("#finishModal").modal('show');
	    }
	};



	var userinfo_alldata = {
		"uid": user_id,
		"user_info": userinfo,

		"time_read_tutorial":timetrain,
		"decision_data_training": all_data_tosave_training,


		"decision_data": all_data_tosave,

		"interaction_log": user_interaction_log,

		"questionnaire_data": questionnaire_data,

		"initial_rule": initial_rule,

		"user_rule": user_rule,

		"two_pred": two_pred,

	}
	
	var dataJson = JSON.stringify(userinfo_alldata);
	xhr.send(dataJson);
	

	/*
	* 把数据存为本地json文件，不上传到server
	*/
	// var blob = new Blob([dataJson], {type: "text/plain;charset=utf-8"});
    // saveAs(blob, user_id + ".json");
}

var addnum = 0;
function AddElement() {
	addnum = addnum + 1;
	var mytype, TemO = document.getElementById("user_rule");
	var oldele = document.getElementById("form_info_rule" + String(addnum-1));
	var newele = oldele.cloneNode(true);
	newele.style.display = "block";
	TemO.insertBefore(newele, oldele.nextSibling);
	newele.id = "form_info_rule" + String(addnum);

	// 首先获取所有的select，根据的是标签的名字，而不是id
	var select_ls = document.getElementsByTagName('select');
	var idx = 0;
	for (var i = 0; i < select_ls.length; i++) {
		// 遍历所有的div并根据id做判断
		if (select_ls[i].getAttribute('id') == ("feature" + String(addnum - 1))) {
			if(idx == 0){
				idx = idx + 1;
			}
			else{
				// 对满足条件的标签设置属性即可
				select_ls[i].setAttribute('id', 'feature' + String(addnum));	
			}
		}

		if (select_ls[i].getAttribute('id') == ("relation" + String(addnum - 1))) {
			if (idx == 1) {
				idx = idx + 1;
			}
			else {
				// 对满足条件的标签设置属性即可
				select_ls[i].setAttribute('id', 'relation' + String(addnum));
			}
		}

		if (select_ls[i].getAttribute('id') == ("value" + String(addnum - 1))) {
			if (idx == 2) {
				idx = idx + 1;
			}
			else {
				// 对满足条件的标签设置属性即可
				select_ls[i].setAttribute('id', 'value' + String(addnum));
			}
		}
	}

};

var relations = [
	[">", "=", "<"],
	["is", "isn't"],
	[">", "=", "<"],
	["is", "isn't"],
	["is", "isn't"],
	["is", "isn't"],
	["is", "isn't"],
	[">", "=", "<"],
]

function getRelation() {
	var sltfeature = document.getElementById("feature" + String(addnum));
	$("#relation" + String(addnum)).find("option").remove();
	var sltrelation = document.getElementById("relation" + String(addnum));
	var relationchoices = relations[sltfeature.selectedIndex - 1];

	for (var i = 0; i < relationchoices.length; i++) {
		sltrelation[i + 1] = new Option(relationchoices[i]);
	}
}

var values = [
	["0~9", "10~19", "20~29", "30~39", "40~49", "50~59", "60~69", "70~79", "80~89", "90~99"],
	["Private", "Self-emp-not-inc", "Self-emp-inc", "Federal-gov", "Local-gov", "State-gov", "Without-pay", "Never-worked"],
	["0~4", "5~9", "10~14", "15~19", "20~24", "25~29", "30~34", "35~39"],
	["Married-civ-spouse", "Divorced", "Never-married", "Separated", "Widowed", "Married-spouse-absent", "Married-AF-spouse"],
	["Tech-support", "Craft-repair", "Other-service", "Sales", "Exec-managerial", "Prof-specialty", "Handlers-cleaners", "Machine-op-inspct", "Adm-clerical", "Farming-fishing", "Transport-moving", "Priv-house-serv", "Protective-serv", "Armed-Forces"],
	["White", "Asian-Pac-Islander", "Amer-Indian-Eskimo", "Other", "Black"],
	["Female", "Male"],
	["0~9", "10~19", "20~29", "30~39", "40~49", "50~59", "60~69", "70~79", "80~89", "90~99"],
]

function getValue() {
	var sltfeature = document.getElementById("feature" + String(addnum));
	$("#value" + String(addnum)).find("option").remove();
	var sltvalue = document.getElementById("value" + String(addnum));
	var valuechoices = values[sltfeature.selectedIndex - 1];

	for (var i = 0; i < valuechoices.length; i++) {
		sltvalue[i + 1] = new Option(valuechoices[i]);
	}
}



var addnum_training = 0;
function AddElement_training() {
	addnum_training = addnum_training + 1;
	var mytype, TemO = document.getElementById("user_rule_training");
	var oldele = document.getElementById("form_info_rule_training" + String(addnum_training - 1));
	var newele = oldele.cloneNode(true);
	newele.style.display = "block";
	TemO.insertBefore(newele, oldele.nextSibling);
	newele.id = "form_info_rule_training" + String(addnum_training);

	// 首先获取所有的select，根据的是标签的名字，而不是id
	var select_ls = document.getElementsByTagName('select');
	var idx = 0;
	for (var i = 0; i < select_ls.length; i++) {
		// 遍历所有的div并根据id做判断
		if (select_ls[i].getAttribute('id') == ("feature_training" + String(addnum_training - 1))) {
			if (idx == 0) {
				idx = idx + 1;
			}
			else {
				// 对满足条件的标签设置属性即可
				select_ls[i].setAttribute('id', 'feature_training' + String(addnum_training));
			}
		}

		if (select_ls[i].getAttribute('id') == ("relation_training" + String(addnum_training - 1))) {
			if (idx == 1) {
				idx = idx + 1;
			}
			else {
				// 对满足条件的标签设置属性即可
				select_ls[i].setAttribute('id', 'relation_training' + String(addnum_training));
			}
		}

		if (select_ls[i].getAttribute('id') == ("value_training" + String(addnum_training - 1))) {
			if (idx == 2) {
				idx = idx + 1;
			}
			else {
				// 对满足条件的标签设置属性即可
				select_ls[i].setAttribute('id', 'value_training' + String(addnum_training));
			}
		}
	}

};

function getRelation_training() {
	var sltfeature = document.getElementById("feature_training" + String(addnum_training));
	$("#relation_training" + String(addnum_training)).find("option").remove();
	var sltrelation = document.getElementById("relation_training" + String(addnum_training));
	var relationchoices = relations[sltfeature.selectedIndex - 1];

	for (var i = 0; i < relationchoices.length; i++) {
		sltrelation[i + 1] = new Option(relationchoices[i]);
	}
}

function getValue_training() {
	var sltfeature = document.getElementById("feature_training" + String(addnum_training));
	$("#value_training" + String(addnum_training)).find("option").remove();
	var sltvalue = document.getElementById("value_training" + String(addnum_training));
	var valuechoices = values[sltfeature.selectedIndex - 1];

	for (var i = 0; i < valuechoices.length; i++) {
		sltvalue[i + 1] = new Option(valuechoices[i]);
	}
}

//must input personal info
function checkFormInfo(objData) {
	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == "") {
			alert("Please input value: " + objData[i].name);
			return false;
		}
	}
	return true;
}


/**
* 校验只要是数字（包含正负整数，0以及正负浮点数）就返回true
**/

function isNumber(val){

    var regPos = /^[0-9]+.?[0-9]*/; //判断是否是数字。
  
    if(regPos.test(val) ){
        return true;
    }else{
        return false;
    }

}


