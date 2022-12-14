/*
从2022年8月12日开始，我重新选择了40个数据，用了70%训练集，在30%测试集中挑选的数据
*/

var age_training = ['58', '26'];

var age = ['40', '43', '31', '25', '50', '17', '56', '33', '19', '20', '20', '41', '22', '19', '70', '34', '57', '34', '32', '30', '34', '44', '40', '71', '65', '33', '55', '46', '31', '28', '23', '44', '21', '19', '47', '31', '44', '33', '47', '29'];


var education_number_training = ['14', '9'];

var education_number = ['13', '10', '13', '14', '14', '7', '14', '11', '10', '9', '10', '5', '9', '9', '10', '10', '10', '13', '13', '12', '13', '10', '13', '9', '16', '10', '16', '10', '12', '10', '13', '7', '10', '10', '14', '10', '10', '13', '13', '13'];


var marital_status_training = ['Married civilian spouse', 'Never married'];

var marital_status = ['Married civilian spouse', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Divorced', 'Married civilian spouse', 'Never married', 'Never married', 'Never married', 'Separated', 'Never married', 'Never married', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Divorced', 'Married civilian spouse', 'Never married', 'Never married', 'Never married', 'Separated', 'Never married', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse'];


var occupation_training = ['Professional specialty', 'Handlers/Cleaners'];

var occupation = ['Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Other service', 'Executive Managerial', 'Technical support', 'Technical support', 'Other service', 'Other service', 'Other service', 'Other service', 'Other service', 'Other service', 'Executive Managerial', 'Technical support', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Technical support', 'Executive Managerial', 'Technical support', 'Technical support', 'Technical support', 'Other service', 'Other service', 'Other service', 'Other service', 'Executive Managerial', 'Executive Managerial', 'Other service', 'Executive Managerial', 'Technical support', 'Executive Managerial'];


var work_hours_per_week_training = ['50', '48'];

var work_hours_per_week = ['45', '45', '50', '40', '60', '15', '60', '40', '16', '35', '20', '40', '20', '20', '80', '60', '60', '40', '40', '50', '45', '45', '50', '45', '40', '40', '30', '45', '20', '24', '30', '30', '8', '15', '50', '65', '80', '40', '40', '40'];


// 这里存储的是AI的预测信息

var ai_prediction_training = ["> 50k", "≤ 50k"];

var ai_confidence_training = ['0.7722023142621077', '0.9172004176087836'];

var ai_prediction = ['1', '0', '1', '0', '1', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '1', '1', '1', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '0', '0'];

var ai_confidence = ['0.5949382272184414', '0.5917287632891416', '0.5371452850917876', '0.5479113230864943', '0.8770382718211966', '0.9950219576323744', '0.9297556578952874', '0.8654964601701192', '0.9873537621995137', '0.9690604653764366', '0.9759256148803066', '0.9836591863285594', '0.9821502212996177', '0.9846348819244528', '0.8933293012048442', '0.616974512862116', '0.5405937670231005', '0.5354674962625012', '0.5606303181948988', '0.5766601145416872', '0.5198850796379757', '0.5793999603676891', '0.647052691277188', '0.5819768935007196', '0.9342728935728459', '0.9297116716210344', '0.8824921350330917', '0.8000603455900085', '0.9402732335547866', '0.9719607347936738', '0.8681908890320786', '0.9727301080344175', '0.9849837217682748', '0.981562062029599', '0.7971987717386912', '0.6004770188354044', '0.6908837251158061', '0.5480796336286018', '0.5832611430285537', '0.5977595198639671'];


var ai_attention = [
	[0.027142342705070405, 0.18241653292303303, 0.06539413573573762, 0.03695996831593712, 0.019493974941142283],
[0.030561350678302228, -0.04654802070719518, 0.06761997961032683, 0.024126187548804943, 0.013172428099882868],
[-0.06769762211758554, 0.18686663433660106, 0.06941871827194034, 0.04399068035312479, 0.15515479841372404],
[-0.14569573946930928, 0.3237092118507201, 0.06678708891253489, 0.03848916848717767, -0.02018528823131108],
[0.20192875984969433, 0.33327338008221813, 0.05848398065209511, 0.03336321909930614, 0.1505547117588174],
[-0.13579063440495884, -0.22275992014557264, -0.04629881422158524, -0.002829501871678976, -0.1107264409758422],
[0.19008866133322125, 0.3267888926729345, 0.06343925994182785, 0.03619974836494684, 0.154187662917194],
[-0.07230701868488909, 0.17719305903021304, 0.06479927045565677, -0.049986575164813724, -0.01772617118138998],
[-0.1369651854011539, -0.04368684189122137, -0.05156239619159799, -0.0728803496330177, -0.12247031178783795],
[-0.1454710650559496, -0.22830354995881014, -0.05285883857186538, -0.004494066302799812, -0.12445031441777123],
[-0.13635478110803287, -0.04315939019820254, -0.04376658182574437, -0.013556289586753974, -0.12064003527177375],
[0.017648340918084624, -0.23918613965785399, -0.07913177001403729, -0.010153777223300964, -0.01994517132480293],
[-0.13811438212629068, -0.21593235636861585, -0.05074164877085295, -0.010284775677931061, -0.11015175557819144],
[-0.13610921902320772, -0.2236192145921672, -0.04777197764442102, -0.01429789536516017, -0.12063220153282463],
[0.20626643870288197, -0.03970133942949675, 0.06888801754366104, -0.011015844352763277, 0.15743506875923013],
[-0.0712606583327702, -0.04031160662788309, 0.06749437780396099, 0.038090976427560506, 0.14351724692466297],
[0.20934199803958203, -0.04055484988109885, 0.06511433940458357, -0.0726079724116931, 0.15866792475304684],
[-0.07025482683753552, 0.18200779789244587, 0.059612652416409034, 0.03101877462813457, -0.019015799309347766],
[-0.07662028721209908, 0.1836096726940384, 0.06797310058211543, 0.036924765007268275, -0.016609601508856927],
[-0.06824858070413302, 0.17943146497002532, 0.06980960703056747, 0.039981380370452395, 0.16491472230371587],
[-0.06119521647188729, 0.1809168100233837, 0.06653081030966283, 0.034812476146727, 0.035942319521831904],
[0.0329143869577797, -0.04708466161524773, 0.07526598398764142, 0.03476851635044013, 0.03491642618294249],
[0.02681001469375916, 0.1806948240525899, 0.06873591127167264, 0.033555107923686434, 0.16118124588566063],
[0.1911416622389204, -0.23773562353613018, 0.06379761941459024, 0.039731343155900344, 0.03958589214322507],
[0.19378021063193682, 0.3315835949999412, 0.07382900756268665, 0.035226200857822736, -0.014137253081354412],
[-0.06699915876500415, -0.03814997207705229, -0.047400396750245835, -0.06858332219587558, -0.01690430164101395],
[0.20017286478092253, 0.31792186658493754, 0.07418518757114383, 0.03582221446261139, -0.12305983517843262],
[0.01655959625262234, -0.04317514923253692, 0.05971556492963531, -0.06137741502680538, 0.026137992530562898],
[-0.05892121286062635, 0.1663130156298614, -0.05144725946504143, -0.06570093921250662, -0.12439362707603364],
[-0.15099754277517366, -0.039744508011109944, -0.05072631919818474, -0.06283097092007779, -0.1256401802599989],
[-0.14330150471617129, 0.17182255581917902, -0.05213232945640396, -0.00840065035706975, -0.13162997929679865],
[0.030519311191368307, -0.2319013394839548, -0.07477011716749891, -0.007520408116293749, -0.12176890425661695],
[-0.14500734202025803, -0.04314982162598259, -0.04828508654237886, -0.002156785922542539, -0.12486155219340658],
[-0.1467807914327213, -0.04350980077057923, -0.04849278781862369, -0.00853358314126089, -0.1251246660558975],
[0.020498692144061713, 0.33252036657100975, 0.06137596602952683, 0.034817624229380804, 0.16298613739557],
[-0.06894277296688914, -0.03978678821027927, 0.06809837316749771, 0.0416191777528845, 0.15504513794749974],
[0.017990120281940147, -0.04270802337689853, 0.06786553198412809, -0.002277090126046456, 0.16248203498467217],
[-0.07066621528905397, 0.18664156374603041, 0.06663433067381724, 0.04171515682106838, -0.018155349451145695],
[0.025065333833360223, 0.18749467293271074, 0.05672617825803772, -0.07005656840341118, -0.026078641238657704],
[-0.06404850993476642, 0.17981976452731108, 0.057295898020994065, 0.037637750468635815, -0.01985045903786593]
];




var ground_truth_training = ['1', '0'];

var ground_truth = ['1', '0', '1', '0', '1', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '1', '1', '0', '1', '1', '1'];

const order_list_training = [0, 1];

var idx_list = ['1-1', '2-1', '2-2', '3-1', '3-2', '3-3', '3-4', '4-1', '4-2', '4-3', '4-4', '4-5', '4-6', '4-7', '4-8'];
var rule_list = [];
var user_rule_list = {};
var features = ['Label', 'Age', 'Education.num', 'Marital.status', 'Occupation', 'Work.hours.per.week']

var map = {
	'1-1': ['2-1', '2-2'],
	'2-1': ['3-1', '3-2'],
	'2-2': ['3-3', '3-4'],
	'3-1': ['4-1', '4-2'],
	'3-2': ['4-3', '4-4'],
	'3-3': ['4-5', '4-6'],
	'3-4': ['4-7', '4-8']
}

var map_idx = {
	'1-1': 0,
	'2-1': 1,
	'2-2': 2,
	'3-1': 3,
	'3-2': 4,
	'3-3': 5,
	'3-4': 6,
	'4-1': 7,
	'4-2': 8,
	'4-3': 9,
	'4-4': 10,
	'4-5': 11,
	'4-6': 12,
	'4-7': 13,
	'4-8': 14
}

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

var humandecision = [];



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
var ai_suggestion_seen = false;

var initial_rule = null;
var user_rule = null;
var initial_pred = null;
var final_pred = null;
var who_is_better_list = null;
var who_is_better = null;

var who_is_better_list = null;
var human_capability = null;
var AI_capability = null;



var user_feedback_about_tree = null;
var prolific_id = 'prolific_id';











/*
AI confidence 和 AI Explanation的可视化
*/




var gaugeOptions = {
chart: {
	type: 'solidgauge'
},

title: null,

pane: {
	center: ['50%', '85%'],
	size: '140%',
	startAngle: -90,
	endAngle: 90,
	background: {
	backgroundColor:
		Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
	innerRadius: '60%',
	outerRadius: '100%',
	shape: 'arc'
	}
},

exporting: {
	enabled: false
},

tooltip: {
	enabled: false
},

// the value axis
yAxis: {
	stops: [
	[0, '#1E90FF'], // green
	],
	lineWidth: 0,
	tickWidth: 0,
	minorTickInterval: null,
	tickAmount: 2,
	title: {
	y: -70
	},
	labels: {
	y: 16
	}
},

plotOptions: {
	solidgauge: {
	dataLabels: {
		y: 5,
		borderWidth: 0,
		useHTML: true
	}
	}
}
};


const chartConfidence = Highcharts.chart('conf_container', Highcharts.merge(gaugeOptions, {
yAxis: {
	min: 0,
	max: 100,
	title: {
	text: null
	}
},

credits: {
	enabled: false
},

series: [{
	name: 'Speed',
	data: [50],
	dataLabels: {
	format:
		'<div style="text-align:center">' +
		'<span style="font-size:20px">Confidence</span><br/>' +
		'<span style="font-size:25px">{y}</span><br/>' +
		'</div>'
	},
}]

}));





// Data gathered from http://populationpyramid.net/germany/2015/

// Age categories
var categories = [
'Age', 'Year of Education', 'Marital Status', 'Occupation', 'Work hour per week'
];
	
const chart = Highcharts.chart('container', {
chart: {
	type: 'bar'
},
title: {
	text: null
},
xAxis: {
	categories: categories,
	reversed: true,
	labels: {
	step: 1,
	style:{
		fontSize: '16px'
	}
	},
}, 
// { // mirror axis on right side
// 	opposite: true,
// 	reversed: false,
// 	categories: categories,
// 	linkedTo: 0,
// 	labels: {
// 	step: 1,
// 	style:{
// 		fontSize: '16px'
// 	}
// 	},
// }],
yAxis: {
	title: {
	text: null
	},
	labels: {
	formatter: function () {
		return Math.abs(this.value);
	}
	},
},
credits: {
	enabled: false
},
plotOptions: {
	series: {
	stacking: 'normal'
	}
},

tooltip: {
	formatter: function () {
	return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
		'importance: ' + Highcharts.numberFormat(this.point.y, 2);
	}
},

series: [{
	name: '≤ 50k/y',
	data: [
	-2.2, -2.1, -2.2, -2.4, -2.7
	],
	color:"#A4D3EE"
}, {
	name: '> 50k/y',
	data: [
	22.1, 2.0, 2.1, 2.3, 2.6
	],
	color:"#43CD80"
}]
});































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

	prolific_id = userinfo[0].value;

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
			td.innerHTML = education_number_training[order_list_training[current_idx_training]];//动态修改表格的内容为222
		
			var td = tb.rows[2].cells[1];//获取0行0列的td单元格
			td.innerHTML = marital_status_training[order_list_training[current_idx_training]];//动态修改表格的内容为222
		
			var td = tb.rows[3].cells[1];//获取0行0列的td单元格
			td.innerHTML = occupation_training[order_list_training[current_idx_training]];//动态修改表格的内容为222
		
			var td = tb.rows[4].cells[1];//获取0行0列的td单元格
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
	td.innerHTML = education_number[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[2].cells[1];//获取0行0列的td单元格
	td.innerHTML = marital_status[order_list[current_idx]];//动态修改表格的内容为222

	var td = tb.rows[3].cells[1];//获取0行0列的td单元格
	td.innerHTML = occupation[order_list[current_idx]];//动态修改表格的内容为222


	var td = tb.rows[4].cells[1];//获取0行0列的td单元格
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


	if(document.getElementById('radio-final-decision-1').checked == false && document.getElementById('radio-final-decision-2').checked == false){
		alert("Please make your prediction");
		return false;
	}

	if ((document.getElementById('radio-final-decision-1').checked == true || document.getElementById('radio-final-decision-2').checked == true)) {
		if(current_idx < 20 && ground_truth_is_show_task == 0){
				alert("Please check your answer with the groundtruth");
				return false;
		}			
		else{
			if(current_idx >= 20){
				document.getElementById('showanswer_area').style.display = 'none';
			}
			// 先存储数据！！！
			// 即将进入下一页了，把这一页的用户的interaction log都保存下来，用于区分
			user_interaction_log.push(user_interaction_log_thispape);


			//保存用户的两次决策结果

			timestamp2 = new Date().getTime(); //1610075969354 
			
			var objData1 = $("#firstdecision1").serializeArray();
			var objData2 = $("#finaldecision1").serializeArray();
	
	
			aisuggestion_1 = ai_prediction[order_list[current_idx-1]];
			aiconfidence_1 = ai_confidence[order_list[current_idx-1]];
			ground_truth_1 = ground_truth[order_list[current_idx-1]];
	

			
			firstdecision_1 = objData1[0];
			seconddecision_1 = objData2[0];

			humandecision.push(seconddecision_1);



			console.log(firstdecision_1);

			var time_spent = timestamp2 - timestamp1;
			timestamp1 = timestamp2;

			current_instance_data = [current_idx, order_list[current_idx - 1], firstdecision_1, aisuggestion_1, aiconfidence_1, seconddecision_1, ground_truth_1, time_spent, who_is_better];

			all_data_tosave.push(current_instance_data);

			if (current_idx < order_list.length){

				//随机找一个时间，去attention check

				

				if(current_idx == 20){ // current_idx = 20 且还未进行决策树那一步骤
					console.log(current_idx);
					// step1. 把前20个数据的真实序号和label通过ajax传递到后端，采用json格式
					var id = [];
					var decision = [];
					var id_last20 = [];
					for(var i=0;i<20;i++){
						id.push(order_list[i]);
						decision.push(humandecision[i]['value']);
					}

					for(var i=20;i<40;i++){
						id_last20.push(order_list[i]);
					}

					$.ajax({
						//url: "http://localhost:8081/train_data",
						url: "http://49.232.60.34:8081/train_data",
						type: "GET",
						data: {"who":String(prolific_id) ,"id":String(id),"decision":String(decision),"id_last20":String(id_last20)}  
					}).done(function (data) {
						// 请求成功



						// step2. 暂时把 “下一个” 按钮隐藏
						//next_button = document.getElementById('next-task');
						//next_button.style.display = "none";

						// step3. 在新页面打开decisionTree.html页面

						//window.open("http://localhost:8081/decisionTree", "_blank");   
						//window.open("decisionTree.html", "_blank");    
						document.getElementById('newdemo1').style.display = 'none';
						document.getElementById('attention').style.display = 'none';
						document.getElementById('title1').style.display = 'none';
						document.getElementById('bottom').style.display = 'none'; 
						document.getElementById('decisionTree').style.display = 'block';
						$(".nav-tabs a[href='#decisionTree']").tab('show');
						$("html, body").animate({ scrollTop: 0 }, "slow");
						console.log(document.getElementById('decisionTree').style.display);
						init();


					}).fail(function (jqXHR, textStatus, errorThrown) {
						// net::ERR_CONNECTION_REFUSED 发生时，也能进入
						console.info("网络出错");
					});




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
				document.getElementById("suggestion1").style.display="none";
				document.getElementById("finaldecision1").style.display = "none";



				// step2，把信息表格+AI预测表格更新
				var tb = document.getElementById('tab1');//获取表格的dom节点
				var td = tb.rows[0].cells[1];//获取0行0列的td单元格
				td.innerHTML = age[order_list[current_idx]];//动态修改表格的内容为222


				var td = tb.rows[1].cells[1];//获取0行0列的td单元格
				td.innerHTML = education_number[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[2].cells[1];//获取0行0列的td单元格
				td.innerHTML = marital_status[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[3].cells[1];//获取0行0列的td单元格
				td.innerHTML = occupation[order_list[current_idx]];//动态修改表格的内容为222

				var td = tb.rows[4].cells[1];//获取0行0列的td单元格
				td.innerHTML = work_hours_per_week[order_list[current_idx]];//动态修改表格的内容为222


				//第二处，AI预测表
				if(ai_prediction[order_list[current_idx]] == 1){
					document.getElementById('ai_prediction').textContent = 'AI\'s suggestion is > 50k';//动态修改表格的内容为222
				}
				else{
					document.getElementById('ai_prediction').textContent = 'AI\'s suggestion is ≤ 50k';//动态修改表格的内容为222
				}

				// step3，把用户选项框清零

				document.getElementById('radio-first-decision-1').checked = false;
				document.getElementById('radio-first-decision-2').checked = false;
				document.getElementById('radio-final-decision-1').checked = false;
				document.getElementById('radio-final-decision-2').checked = false;
				document.getElementById('groundtruth_task').textContent = ' ';
				ground_truth_is_show_task = 0;

				// step4，对页面的其他位置进行更新，比如进度数字，进度条

				var percentage = current_idx / order_list.length * 100;
				document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
				document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';
				document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;

				// step5，重置按钮状态
				ai_suggestion_seen = false;



				if(current_idx > 20){
					who_is_better = who_is_better_list[current_idx-20];
					console.log('谁更强');
					console.log(who_is_better);
					// step5，更新谁更强
					if(who_is_better == 'Human'){
						document.getElementById("user_initial_decision_region").style.display="block";
					}else{
						document.getElementById("user_initial_decision_region").style.display="none";
					}
				}

				generate_confidence();
				generate_explanation();
			
				

			}else{

				document.getElementById("go_to_next").style.display = "block";
				document.getElementById("user_prediction_region").style.display="none";
				document.getElementById("ai_suggestion_region").style.display="none";
				document.getElementById("user_initial_decision_region").style.display="none";
				
				document.getElementById("profile").style.display="none";

				// step4，对页面的其他位置进行更新，比如进度数字，进度条
		
				var percentage = current_idx/order_list.length*100;
				document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
				document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';
				document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


			}
			current_idx += 1;

			//把step1里面冻结的按钮再次恢复
			document.getElementById('radio-first-decision-1').disabled = false;
			document.getElementById('radio-first-decision-2').disabled = false;


			//清除当前页的log
			user_interaction_log_thispape = [];
		}		
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



var ground_truth_is_show_task = 0;
$("#show_groundtruth_task").click(function () {
	if (document.getElementById('radio-final-decision-1').checked == false && document.getElementById('radio-final-decision-2').checked == false) {
		alert("Please make your prediction");
		return false;
	}
	else{
		var gt = ground_truth[order_list[current_idx-1]];
		if(gt == 1){
			document.getElementById('groundtruth_task').textContent = '> 50k';
			//$('#groundtruth').textContent = '>=50K';
		}
		else{
			document.getElementById('groundtruth_task').textContent = '≤ 50K';
			//$('#groundtruth').textContent = '≤ 50K';
		}
		ground_truth_is_show_task = 1;
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
			td.innerHTML = education_number_training[order_list_training[current_idx_training]];//动态修改表格的内容为222

			var td = tb.rows[2].cells[1];//获取0行0列的td单元格
			td.innerHTML = marital_status_training[order_list_training[current_idx_training]];//动态修改表格的内容为222

			var td = tb.rows[3].cells[1];//获取0行0列的td单元格
			td.innerHTML = occupation_training[order_list_training[current_idx_training]];//动态修改表格的内容为222


			var td = tb.rows[4].cells[1];//获取0行0列的td单元格
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









$("#see_suggestion1").click(function(){

	//获取人自己的预测数据
	console.log('谁更强');
	console.log(who_is_better);
	if(who_is_better == 'Human'){

		if(document.getElementById('radio-first-decision-1').checked == false && document.getElementById('radio-first-decision-2').checked == false){
			alert("Please make your prediction");
			return false;
		}
	
		/*if((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && (document.getElementById('radio-first-confidence-1').checked == true || document.getElementById('radio-first-confidence-2').checked == true)){*/
		if ((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true)) {

			
			document.getElementById("suggestion1").style.display="block";
			ai_suggestion_seen = true;
			//冻结step1中的按钮
			document.getElementById('radio-first-decision-1').disabled = true;
			document.getElementById('radio-first-decision-2').disabled = true;

			// generate_explanation();
			
		}
	}else{
		//如果AI更强，直接没有第一步用户做出初始判断，所以不需要判断

		document.getElementById("suggestion1").style.display="block";
		ai_suggestion_seen = true;
		//冻结step1中的按钮
		document.getElementById('radio-first-decision-1').disabled = true;
		document.getElementById('radio-first-decision-2').disabled = true;
		// generate_explanation();
	}

});












$("#makefinaldecision_button").click(function(){
	console.log(current_idx);
	if (current_idx > 20){
		if(ai_suggestion_seen == false){
			alert("Please see AI's suggestion before making your final decision");
			return false;
		}
		else{
			document.getElementById("finaldecision1").style.display="block";			
		}
	}
	else{
		document.getElementById("finaldecision1").style.display="block";
	}


});




function generate_explanation(){

	console.log('Any problem?');
	console.log(current_idx);
	var age_importance = parseFloat(ai_attention[order_list[current_idx]][0]);
	var education_importance = parseFloat(ai_attention[order_list[current_idx]][1]);
	var marital_importance = parseFloat(ai_attention[order_list[current_idx]][2]);
	var occupation_importance = parseFloat(ai_attention[order_list[current_idx]][3]);
	var workhour_importance = parseFloat(ai_attention[order_list[current_idx]][4]);



	all_importance = [age_importance, education_importance, marital_importance, occupation_importance, workhour_importance];
	console.log('=======');
	console.log(current_idx);
	console.log(all_importance);


	positive_list = [0, 0, 0, 0, 0];
	negative_list = [0, 0, 0, 0, 0];
	for(var i = 0; i<8; i++){
		if (all_importance[i] > 0){
			positive_list[i] = all_importance[i];
		}
		else{
			negative_list[i] = all_importance[i];
		}
	}

	chart.update({
		series: [{
		name: '≤ 50k/y',
		data: negative_list,
		color:"#A4D3EE"
	}, {
		name: '> 50k/y',
		data: positive_list,
		color:"#43CD80"
	}]
	});

}


function generate_confidence(){
	var confidence = parseInt(parseFloat(ai_confidence[order_list[current_idx]])*100);

	chartConfidence.update({
		series: [{
			name: 'Speed',
			data: [confidence],
			dataLabels: {
			format:
				'<div style="text-align:center">' +
				'<span style="font-size:20px">Confidence</span><br/>' +
				'<span style="font-size:25px">{y}</span><br/>' +
				'</div>'
			},
		}]
	});

}







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


	/*
	* 把数据上传到server
	*/

	var xhr = new XMLHttpRequest();
	//var url = "http://165.227.108.67/mingfei/submit.php"
	// var url = "https://shuaima.info/userstudy/submit.php"

	// var url = "https://shuaima.top/userstudy/submit.php";
	// var url = "http://49.232.60.34/userstudy/submit.php";
	var url = "http://49.232.60.34/userstudy/submit_prolific.php";
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

		"prolific_id": prolific_id,

		"user_info": userinfo,

		"time_read_tutorial":timetrain,
		"decision_data_training": all_data_tosave_training,

		"decision_data": all_data_tosave,

		"interaction_log": user_interaction_log,

		"questionnaire_data": questionnaire_data,

		"initial_rule": initial_rule,

		"user_rule": user_rule,

		"initial_pred": initial_pred,

		"final_pred": final_pred,

		"user_feedback_about_tree": user_feedback_about_tree,

		"who_is_better_list": who_is_better_list,

		"human_capability": human_capability,

		"AI_capability": AI_capability,

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

// var relations = [
// 	[">", "=", "<"],
// 	["is", "isn't"],
// 	[">", "=", "<"],
// 	["is", "isn't"],
// 	["is", "isn't"],
// 	["is", "isn't"],
// 	["is", "isn't"],
// 	[">", "=", "<"],
// ]

// function getRelation() {
// 	var sltfeature = document.getElementById("feature" + String(addnum));
// 	$("#relation" + String(addnum)).find("option").remove();
// 	var sltrelation = document.getElementById("relation" + String(addnum));
// 	var relationchoices = relations[sltfeature.selectedIndex - 1];

// 	for (var i = 0; i < relationchoices.length; i++) {
// 		sltrelation[i + 1] = new Option(relationchoices[i]);
// 	}
// }

// var values = [
// 	["0~9", "10~19", "20~29", "30~39", "40~49", "50~59", "60~69", "70~79", "80~89", "90~99"],
// 	["Private", "Self-emp-not-inc", "Self-emp-inc", "Federal-gov", "Local-gov", "State-gov", "Without-pay", "Never-worked"],
// 	["0~4", "5~9", "10~14", "15~19", "20~24", "25~29", "30~34", "35~39"],
// 	["Married-civ-spouse", "Divorced", "Never-married", "Separated", "Widowed", "Married-spouse-absent", "Married-AF-spouse"],
// 	["Tech-support", "Craft-repair", "Other-service", "Sales", "Exec-managerial", "Prof-specialty", "Handlers-cleaners", "Machine-op-inspct", "Adm-clerical", "Farming-fishing", "Transport-moving", "Priv-house-serv", "Protective-serv", "Armed-Forces"],
// 	["White", "Asian-Pac-Islander", "Amer-Indian-Eskimo", "Other", "Black"],
// 	["Female", "Male"],
// 	["0~9", "10~19", "20~29", "30~39", "40~49", "50~59", "60~69", "70~79", "80~89", "90~99"],
// ]

// function getValue() {
// 	var sltfeature = document.getElementById("feature" + String(addnum));
// 	$("#value" + String(addnum)).find("option").remove();
// 	var sltvalue = document.getElementById("value" + String(addnum));
// 	var valuechoices = values[sltfeature.selectedIndex - 1];

// 	for (var i = 0; i < valuechoices.length; i++) {
// 		sltvalue[i + 1] = new Option(valuechoices[i]);
// 	}
// }



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


function init() {
	console.log('init the page!');
	//selectMultip.register();
	rule_list = [];

	//一次性画出所有的连线
	for (var i = 0; i < 7; i++) {
		idx = idx_list[i];
		// 获取节点的编号并显示出来
		var parentNode = document.getElementById('node' + idx);
		var childIdx = map[idx];
		var childNode1 = document.getElementById('node' + childIdx[0]);
		var childNode2 = document.getElementById("node" + childIdx[1]);
		$("#decisionTree").append(drawLine('line' + idx + 'left', 'choice' + idx + 'left', 'Y', parentNode, childNode1));
		$("#decisionTree").append(drawLine('line' + idx + 'right', 'choice' + idx + 'right', 'N', parentNode, childNode2));
		//console.log(document.getElementById('line' + idx + 'left'));
		//console.log(document.getElementById('line' + idx + 'right'));
		//console.log(document.getElementById('choice' + idx + 'left'));
		//console.log(document.getElementById('choice' + idx + 'right'));
	}

	$.ajax({
		//url: "http://localhost:8081/send_rule_tofront",
		url: "http://49.232.60.34:8081/send_rule_tofront",
		type: "post",
		//async: false,
		processData: false,
		contentType: false,
		success: function (data) { // data是接收的后台返回数据
			console.log(data);
			rule_list = data;
			rule_list = JSON.parse(data)[0];

			//存储初始的rule
			initial_rule = rule_list;

			initial_pred = JSON.parse(data)[1];
			
			
			
			console.log(initial_rule);
			console.log(initial_pred);



			// 下面对15个节点中非None的进行展示并修改内容
			for (var i = 0; i < 15; i++) {
				var tmp_node = document.getElementById('node' + idx_list[i]);
				if (rule_list[i] != 'None') {
					console.log('here1');
					var tmp_data = rule_list[i];

					if (tmp_data[0] == 'Label' && map_idx[idx_list[i]] <= 6) {
						//console.log(idx_list[i], document.getElementById('line' + idx_list[i] + 'left'));
						if (document.getElementById('line' + idx_list[i] + 'left').style.display == 'block') { 
							document.getElementById('line' + idx_list[i] + 'left').style.display = 'none';
							document.getElementById('choice' + idx_list[i] + 'left').style.display = 'none';
						}
						if (document.getElementById('line' + idx_list[i] + 'right').style.display == 'block') {
							document.getElementById('line' + idx_list[i] + 'right').style.display = 'none';
							document.getElementById('choice' + idx_list[i] + 'right').style.display = 'none';
						}
					}

					tmp_feature = document.getElementById('feature' + idx_list[i]);
					tmp_relation = document.getElementById('relation' + idx_list[i]);
					tmp_value = document.getElementById('value' + idx_list[i]);

					//修改feature对应的值
					var tmp_index_feature;
					for (var k = 0; k < features.length; k++) {
						if (tmp_data[0] == features[k]) {
							tmp_index_feature = k;
							tmp_feature[tmp_index_feature + 1].selected = true;
							break;
						}
					}

					//修改relation对应的值
					$("#relation" + idx_list[i]).find("option").remove();
					var relationchoices = relations[tmp_index_feature];
					tmp_relation[0] = new Option("", "");
					for (var k = 0; k < relationchoices.length; k++) {
						tmp_relation[k + 1] = new Option(relationchoices[k]);
					}
					for (var k = 0; k < relationchoices.length; k++) {
						if (tmp_data[1] == relationchoices[k]) {
							var tmp_index = k;
							tmp_relation[tmp_index + 1].selected = true;
						}
					}

					// 修改value对应的值 并添加隐藏的option
					$("#value" + idx_list[i]).find("option").remove();
					var valuechoices = values[tmp_index_feature];

					tmp_value[0] = new Option("", "");
					for (var k = 0; k < valuechoices.length; k++) {
						tmp_value[k + 1] = new Option(valuechoices[k], String(k + 1));
					}

					/*
					if (tmp_data[0] == 'Label' || tmp_data[0] == 'Age' || tmp_data[0] == 'Work.hours.per.week' || tmp_data[0] == 'Education.num'){ 
						for (var k = 0; k < valuechoices.length; k++) { // 单值渲染
							tmp_value[parseInt(tmp_data[2])].selected = true; 
						}
					}
					else { // 多值渲染
						selectMultip.register_one("value" + idx_list[i]); // 单独给这一个id对应的元素重新渲染
						selectMultip.setVal("value" + idx_list[i], String(tmp_data[2])); 
					}*/
					selectMultip.register_one("value" + idx_list[i]); // 单独给这一个id对应的元素重新渲染
					selectMultip.setVal("value" + idx_list[i], String(tmp_data[2]));

				} else {
					console.log('here2');
					tmp_node.style.display = 'none';

					if (map_idx[idx_list[i]] <= 6) {
						if (document.getElementById('line' + idx_list[i] + 'left').style.display == 'block') {
							document.getElementById('line' + idx_list[i] + 'left').style.display = 'none';
							document.getElementById('choice' + idx_list[i] + 'left').style.display = 'none';
						}
						if (document.getElementById('line' + idx_list[i] + 'right').style.display == 'block') {
							document.getElementById('line' + idx_list[i] + 'right').style.display = 'none';
							document.getElementById('choice' + idx_list[i] + 'right').style.display = 'none';
						}
					}
				}
			}
		},
		error: function (e) {
			console.log("获取信息失败");
		}
	})
	//console.log('out loop',rule_list);
}


$("#finish_tree").click(function () {
	var right = 1;
	user_feedback_about_tree = document.getElementById('text-feedback-tree').value;
	console.log(document.getElementById('text-feedback-tree').innerHTML);
	console.log(document.getElementById('text-feedback-tree').value);

	for (var i = 0; i < 15; i++) {
		var tmp_idx = idx_list[i];
		var tmp;
		if (document.getElementById('node' + tmp_idx).style.display != 'none') {
			var tmp_feature = document.getElementById('feature' + tmp_idx).value;
			if (tmp_feature == '') {
				alert('Some nodes are not complete. Please complement the node');
				right = 0;
				break;
			}
			var tmp_relation = document.getElementById('relation' + tmp_idx).value;
			var tmp_value = document.getElementById('value' + tmp_idx).value;
			tmp_value = tmp_value.split(',');
			tmp_true_value = [];
			for (var k = 0; k < tmp_value.length; k++) {
				tmp_true_value.push(values[parseInt(tmp_feature) - 1][parseInt(tmp_value[k]) - 1]);
			}
			if (tmp_feature == '' || tmp_relation == '' || tmp_value == '') {
				alert('Some nodes are not complete. Please complement the node');
				right = 0;
				break;
			}
			if (tmp_idx == '1-1') {
				if (tmp_feature == '1') {
					alert('The feature of the root nodes must not be Label (e.g., Label is xx)');
					right = 0;
					break;
				}
			}
			if (tmp_idx == '4-1' || tmp_idx == '4-2' || tmp_idx == '4-3' || tmp_idx == '4-4' || tmp_idx == '4-5' || tmp_idx == '4-6' || tmp_idx == '4-7' || tmp_idx == '4-8') {
				if (tmp_feature != '1') {
					alert('The feature of the leaf nodes must be label (e.g., Label is xx)');
					right = 0;
					break;
				}
			}
			tmp = { "feature": features[parseInt(tmp_feature) - 1], "relation": tmp_relation, "value": tmp_true_value };
		}
		else {
			tmp = 'none';
		}
		user_rule_list[String(i)] = tmp;
	}
	console.log(user_rule_list);

	if(right == 1){
		var id_last20 = [];

		for(var i=20;i<40;i++){
			id_last20.push(order_list[i]);
		}


		$.ajax({
			//url: "http://localhost:8081/get_user_rule",
			url: "http://49.232.60.34:8081/get_user_rule",
			type: "GET",
			async: false,

			data: { "user_rule_list": JSON.stringify(user_rule_list),"id_last20":String(id_last20)},
			success: function (data) {
				console.log('获取信息成功');



				console.log(data);
				rule_list = data;
				rule_list = JSON.parse(data)[0];
	
				//存储初始的rule
				user_rule = rule_list;
	
				final_pred = JSON.parse(data)[1];

				who_is_better_list = JSON.parse(data)[2];

				AI_capability = JSON.parse(data)[3];

				human_capability = JSON.parse(data)[4];
				
				who_is_better = who_is_better_list[0];
				console.log('谁更强');
				console.log(who_is_better);
				// 首次更新谁更强
				if(who_is_better == 'Human'){
					document.getElementById("user_initial_decision_region").style.display="block";
				}else{
					document.getElementById("user_initial_decision_region").style.display="none";
				}
				
				
				console.log(user_rule);
				console.log(final_pred);
				console.log(who_is_better_list);

				//window.close();
			},
			error: function (e) {
				console.log("获取信息失败");
			}
		})
		document.getElementById('decisionTree').style.display = 'none';
		document.getElementById('newdemo1').style.display = 'block';
		document.getElementById('attention').style.display = 'block';
		document.getElementById('title1').style.display = 'block';
		document.getElementById('bottom').style.display = 'block'; 
		//window.close();

		// 把AI显示出来
		document.getElementById('ai_suggestion_region').style.display = 'block';

	}
});

var relations = [
	["is"],
	[">", "<="],
	[">", "<="],
	["is", "isn't"],
	["is", "isn't"],
	[">", "<="]
]

var values = [
	["≤50k", ">50k"],
	['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'],
	['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
	["Divorced", "Married-civ-spouse", "Never-married", "Separated"],
	["Exec-managerial", "Other-service", "Tech-support"],
	['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99']
]


function drawLine(lineId, choiceId, content, startObj, endObj) {
	//起点元素中心坐标
	var start = getPointAb(startObj);
	var x_start = start['x'];
	var y_start = start['y'];

	//终点元素中心坐标
	var end = getPointAb(endObj);
	var x_end = end['x'];
	var y_end = end['y'];

	//用勾股定律计算出斜边长度及其夹角（即连线的旋转角度）
	var lx = x_end - x_start;
	var ly = y_end - y_start;
	//计算连线长度
	var length = Math.sqrt(lx * lx + ly * ly);
	//弧度值转换为角度值
	var c = 360 * Math.atan2(ly, lx) / (2 * Math.PI);

	//连线中心坐标
	var midX = (x_end + x_start) / 2;
	var midY = (y_end + y_start) / 2
	var deg = c <= -90 ? (360 + c) : c;  //负角转换为正角

	return `<div class='line' 
                    id=${lineId} 
                    style='top:${midY}px;left:${midX - length / 2}px;width:${length}px;transform:rotate(${deg}deg);display:block;'>
            </div>
            <div class='choice'
                     id=${choiceId}
                     style='top:${midY - 8}px;left:${midX + 9}px;fontsize:12px;backgroundcolor:white;transform: scale(0.7); '
                     display:block;'><b>${content}</b>
            </div>
            `
}


function chgRelation(idx) {
	var feature = document.getElementById("feature" + idx).selectedIndex - 1;

	//修改feature和relation对应的值
	$("#relation" + idx).find("option").remove();
	var relation = document.getElementById("relation" + idx);
	var relationchoices = relations[feature];
	for (var i = 0; i < relationchoices.length; i++) {
		relation[i + 1] = new Option(relationchoices[i]);
	}

	$("#value" + idx).find("option").remove();
	var value = document.getElementById("value" + idx);
	var valuechoices = values[feature];
	value[0] = new Option("", "");
	for (var i = 0; i < valuechoices.length; i++) {
		value[i + 1] = new Option(valuechoices[i], String(i + 1));
	}

	var feature_value = features[feature];

	/*
	if (feature_value == 'Label' || feature_value == 'Age' || feature_value == 'Work.hours.per.week' || feature_value == 'Education.num'){
	    
	}else{
		selectMultip.register_one("value" + idx);
	}
	*/
	selectMultip.register_one("value" + idx);

	//判断是否结束
	var feature = document.getElementById('feature' + idx).selectedIndex - 1;
	if (feature != 0) { // 不结束，需要显示节点、画出对应的连线
		// 获取节点的编号并显示出来
		if (idx == '1-1' || idx == '2-1' || idx == '2-2' || idx == '3-1' || idx == '3-2' || idx == '3-3' || idx == '3-4'){
			var childIdx = map[idx];
			document.getElementById('node' + childIdx[0]).style.display = 'block';
			document.getElementById('node' + childIdx[1]).style.display = 'block';

			if (map_idx[idx] <= 6) {
				document.getElementById("line" + idx + 'left').style.display = "block";
				document.getElementById("line" + idx + 'right').style.display = "block";
				document.getElementById("choice" + idx + 'left').style.display = "block";
				document.getElementById("choice" + idx + 'right').style.display = "block";
			}
		}
	}
	else { // 结束，主要该节点以下的所有节点以及连线都隐藏 
		if (idx == '1-1') {
			var list = ['2-1', '2-2', '3-1', '3-2', '3-3', '3-4', '4-1', '4-2', '4-3', '4-4', '4-5', '4-6', '4-7', '4-8'];
			for (var i = 0; i < 14; i++) {
				document.getElementById("feature" + list[i])[0].selected = true;
				document.getElementById("relation" + list[i])[0].selected = true;
				document.getElementById("value" + list[i])[0].selected = true;
				document.getElementById('node' + list[i]).style.display = "none";
			}
			var line_list = ['1-1', '2-1', '2-2', '3-1', '3-2', '3-3', '3-4'];
			for (var i = 0; i < 7; i++) {
				document.getElementById('line' + line_list[i] + 'left').style.display = "none";
				document.getElementById('line' + line_list[i] + 'right').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'left').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'right').style.display = "none";
			}
		}
		if (idx == '2-1') {
			var list = ['3-1', '3-2', '4-1', '4-2', '4-3', '4-4'];
			for (var i = 0; i < 6; i++) {
				document.getElementById("feature" + list[i])[0].selected = true;
				document.getElementById("relation" + list[i])[0].selected = true;
				document.getElementById("value" + list[i])[0].selected = true;
				document.getElementById('node' + list[i]).style.display = "none";
			}
			var line_list = ['2-1', '3-1', '3-2'];
			for (var i = 0; i < 3; i++) {
				document.getElementById('line' + line_list[i] + 'left').style.display = "none";
				document.getElementById('line' + line_list[i] + 'right').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'left').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'right').style.display = "none";
			}
		}
		if (idx == '2-2') {
			var list = ['3-3', '3-4', '4-5', '4-6', '4-7', '4-8'];
			for (var i = 0; i < 6; i++) {
				document.getElementById("feature" + list[i])[0].selected = true;
				document.getElementById("relation" + list[i])[0].selected = true;
				document.getElementById("value" + list[i])[0].selected = true;
				document.getElementById('node' + list[i]).style.display = "none";
			}
			var line_list = ['2-2', '3-3', '3-4'];
			for (var i = 0; i < 3; i++) {
				document.getElementById('line' + line_list[i] + 'left').style.display = "none";
				document.getElementById('line' + line_list[i] + 'right').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'left').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'right').style.display = "none";
			}
		}
		if (idx == '3-1') {
			var list = ['4-1', '4-2'];
			for (var i = 0; i < 2; i++) {
				document.getElementById("feature" + list[i])[0].selected = true;
				document.getElementById("relation" + list[i])[0].selected = true;
				document.getElementById("value" + list[i])[0].selected = true;
				document.getElementById('node' + list[i]).style.display = "none";
			}
			var line_list = ['3-1'];
			for (var i = 0; i < 1; i++) {
				document.getElementById('line' + line_list[i] + 'left').style.display = "none";
				document.getElementById('line' + line_list[i] + 'right').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'left').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'right').style.display = "none";
			}
		}
		if (idx == '3-2') {
			var list = ['4-3', '4-4'];
			for (var i = 0; i < 2; i++) {
				document.getElementById("feature" + list[i])[0].selected = true;
				document.getElementById("relation" + list[i])[0].selected = true;
				document.getElementById("value" + list[i])[0].selected = true;
				document.getElementById('node' + list[i]).style.display = "none";
			}
			var line_list = ['3-2'];
			for (var i = 0; i < 1; i++) {
				document.getElementById('line' + line_list[i] + 'left').style.display = "none";
				document.getElementById('line' + line_list[i] + 'right').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'left').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'right').style.display = "none";
			}
		}
		if (idx == '3-3') {
			var list = ['4-5', '4-6'];
			for (var i = 0; i < 2; i++) {
				document.getElementById("feature" + list[i])[0].selected = true;
				document.getElementById("relation" + list[i])[0].selected = true;
				document.getElementById("value" + list[i])[0].selected = true;
				document.getElementById('node' + list[i]).style.display = "none";
			}
			var line_list = ['3-3'];
			for (var i = 0; i < 1; i++) {
				document.getElementById('line' + line_list[i] + 'left').style.display = "none";
				document.getElementById('line' + line_list[i] + 'right').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'left').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'right').style.display = "none";
			}
		}
		if (idx == '3-4') {
			var list = ['4-7', '4-8'];
			for (var i = 0; i < 2; i++) {
				document.getElementById("feature" + list[i])[0].selected = true;
				document.getElementById("relation" + list[i])[0].selected = true;
				document.getElementById("value" + list[i])[0].selected = true;
				document.getElementById('node' + list[i]).style.display = "none";
			}
			var line_list = ['3-4'];
			for (var i = 0; i < 1; i++) {
				document.getElementById('line' + line_list[i] + 'left').style.display = "none";
				document.getElementById('line' + line_list[i] + 'right').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'left').style.display = "none";
				document.getElementById('choice' + line_list[i] + 'right').style.display = "none";
			}
		}
	}
}


function getPointAb(node) {
	/* 获取一个div在页面中的绝对位置 */
	var x = 0;
	var y = 0;
	var W = node.offsetWidth; //宽度
	var H = node.offsetHeight; //高度

	while (node) {
		x += node.offsetLeft;
		y += node.offsetTop;
		node = node.offsetParent;
	}

	x += W / 2;
	y += H / 2;

	return { x, y };
}