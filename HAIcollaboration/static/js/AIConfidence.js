/*
从2022年8月12日开始，我重新选择了40个数据，用了70%训练集，在30%测试集中挑选的数据
*/

// var age_training = ['58', '26'];

// var age = ['40', '43', '31', '25', '50', '17', '56', '33', '19', '20', '20', '41', '22', '19', '70', '34', '57', '34', '32', '30', '34', '44', '40', '71', '65', '33', '55', '46', '31', '28', '23', '44', '21', '19', '47', '31', '44', '33', '47', '29'];


// var education_number_training = ['14', '9'];

// var education_number = ['13', '10', '13', '14', '14', '7', '14', '11', '10', '9', '10', '5', '9', '9', '10', '10', '10', '13', '13', '12', '13', '10', '13', '9', '16', '10', '16', '10', '12', '10', '13', '7', '10', '10', '14', '10', '10', '13', '13', '13'];


// var marital_status_training = ['Married civilian spouse', 'Never married'];

// var marital_status = ['Married civilian spouse', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Divorced', 'Married civilian spouse', 'Never married', 'Never married', 'Never married', 'Separated', 'Never married', 'Never married', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Divorced', 'Married civilian spouse', 'Never married', 'Never married', 'Never married', 'Separated', 'Never married', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse'];


// var occupation_training = ['Professional specialty', 'Handlers/Cleaners'];

// var occupation = ['Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Other service', 'Executive Managerial', 'Technical support', 'Technical support', 'Other service', 'Other service', 'Other service', 'Other service', 'Other service', 'Other service', 'Executive Managerial', 'Technical support', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Technical support', 'Executive Managerial', 'Technical support', 'Technical support', 'Technical support', 'Other service', 'Other service', 'Other service', 'Other service', 'Executive Managerial', 'Executive Managerial', 'Other service', 'Executive Managerial', 'Technical support', 'Executive Managerial'];


// var work_hours_per_week_training = ['50', '48'];

// var work_hours_per_week = ['45', '45', '50', '40', '60', '15', '60', '40', '16', '35', '20', '40', '20', '20', '80', '60', '60', '40', '40', '50', '45', '45', '50', '45', '40', '40', '30', '45', '20', '24', '30', '30', '8', '15', '50', '65', '80', '40', '40', '40'];


// // 这里存储的是AI的预测信息

// var ai_prediction_training = ["> 50k", "≤ 50k"];

// var ai_confidence_training = ['0.7722023142621077', '0.9172004176087836'];

// var ai_prediction = ['1', '0', '1', '0', '1', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '1', '1', '1', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '0', '0'];

// var ai_confidence = ['0.5949382272184414', '0.5917287632891416', '0.5371452850917876', '0.5479113230864943', '0.8770382718211966', '0.9950219576323744', '0.9297556578952874', '0.8654964601701192', '0.9873537621995137', '0.9690604653764366', '0.9759256148803066', '0.9836591863285594', '0.9821502212996177', '0.9846348819244528', '0.8933293012048442', '0.616974512862116', '0.5405937670231005', '0.5354674962625012', '0.5606303181948988', '0.5766601145416872', '0.5198850796379757', '0.5793999603676891', '0.647052691277188', '0.5819768935007196', '0.9342728935728459', '0.9297116716210344', '0.8824921350330917', '0.8000603455900085', '0.9402732335547866', '0.9719607347936738', '0.8681908890320786', '0.9727301080344175', '0.9849837217682748', '0.981562062029599', '0.7971987717386912', '0.6004770188354044', '0.6908837251158061', '0.5480796336286018', '0.5832611430285537', '0.5977595198639671'];




var age_training = ['58', '26'];

var age = ['42', '31', '46', '33', '45', '38', '34', '29', '53', '17', '30', '52', '43', '49', '27', '42', '39', '41', '58', '46',
'47', '48', '43', '35', '40', '42', '29', '31', '49', '18', '43', '65', '64', '53', '62', '47', '28', '28', '66', '48']

var education_number_training = ['14', '9'];

var education_number = ['13', '13', '13', '13', '13', '13', '10', '10', '9', '7', '14', '13', '14', '16', '10', '12', '13', '13', '13', '10',
'10', '13', '13', '13', '14', '13', '10', '10', '9', '9', '14', '16', '13', '16', '10', '10', '13', '13', '10', '10']



var marital_status_training = ['Married civilian spouse', 'Never married'];

var marital_status = ['Never married', 'Never married', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Never married', 'Married civilian spouse', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Married civilian spouse',
'Divorced', 'Never married', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Divorced', 'Divorced', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Married civilian spouse']



var occupation_training = ['Executive Managerial', 'Other service'];

var occupation = ['Executive Managerial', 'Executive Managerial', 'Other service', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Other service', 'Other service', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Technical support', 'Technical support', 'Executive Managerial', 'Technical support',
'Other service', 'Other service', 'Technical support', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Other service', 'Other service', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Other service', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Technical support']



var work_hours_per_week_training = ['50', '28'];

var work_hours_per_week = ['40', '40', '40', '50', '40', '50', '40', '40', '38', '15', '60', '60', '50', '50', '80', '40', '50', '45', '38', '45',
'44', '40', '40', '50', '40', '50', '40', '40', '35', '20', '50', '40', '55', '55', '45', '65', '50', '46', '55', '40']



// 这里存储的是AI的预测信息

var ai_prediction_training = ["> 50k", "≤ 50k"];

var ai_confidence_training = ['0.7722023142621077', '0.9172004176087836'];

var ai_prediction = ['0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '0', '0', '1', '0',
'0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '0', '0', '1', '0']


var ai_confidence = ['0.5122700162887763', '0.6474742559762741', '0.5678631375194436', '0.5622915148147294', '0.6027069211747966', '0.6235155711749545', '0.7963263272907845', '0.8344527883786789', '0.7325939913014741', '0.9950219576323744', '0.7208251798848931', '0.8401255154420574', '0.8144340009136503', '0.8777522841217974', '0.5135956405165715', '0.5425569617512002', '0.5742569466676812', '0.6033205169900044', '0.7861691436741113', '0.8000603455900085',
'0.6546410965628366', '0.5427767185829253', '0.5562533751241145', '0.5871216878264423', '0.6387295221978367', '0.6698973563579377', '0.8344527883786789', '0.8199350992330239', '0.7931571239311752', '0.9853848982639427', '0.7623585423294087', '0.9342728935728459', '0.9137708543881718', '0.9536063106430439', '0.5416344927098204', '0.6723583557614882', '0.5008906139493214', '0.545105845036236', '0.7757036120388454', '0.8185791486945777']

var ground_truth_training = ['1', '0'];

var ground_truth = ['0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '1', '1', '1', '1', '0', '0', '1', '1', '0', '1',
'0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '1', '1', '1', '1', '0', '0', '1', '1', '0', '1']




var ai_attention = [
	[0.026594428782407503, 0.1862931265658509, -0.06048872538630501, 0.02977192186121676, -0.02859973185880591],
	[-0.06004415944218326, 0.17627217052497782, -0.05763791694540271, 0.035573237434509, -0.01983402871724634],
	[0.03321877260902796, 0.18024373008371192, -0.05752020044372828, -0.016431598414159376, -0.01797495431118042],
	[-0.06568561933572106, 0.1799030737384402, 0.06395505764680746, 0.03004954031749509, 0.16100388563071288],
	[0.02852841093375366, 0.1870413705903858, 0.05733005734170909, 0.03330934762661197, -0.0289490395437888],
	[0.03303855627261619, 0.1870316294610285, 0.06770409751830522, 0.03457344758602209, 0.15693252095815605],
	[-0.05422758901500391, -0.046714866464246024, 0.06218209117053621, 0.03072923744326422, -0.022073653334276255],
	[-0.05973068615058968, -0.04107405911642866, 0.07603889140332593, 0.036524113378508714, -0.023702672765285895],
	[0.18699156309256715, -0.23898054524803314, 0.0577926974321955, -0.005876016518309522, -0.12385923908023279],
	[-0.13763772143944608, -0.23350119513484383, -0.04678955487690893, -0.0013636746273693306, -0.11877883111595236],
	[-0.06078219407797262, 0.3273663557912954, 0.05880716768719076, 0.037010941160110736, 0.15058636361660327],
	[0.20829923956332871, 0.1890746101977474, 0.0714519820026866, 0.04166620384856045, 0.16214355064454905],
	[0.02679601392281005, 0.3315773346426723, 0.06398857919725794, 0.031774837904138285, 0.16112563436834293],
	[0.20941103889549756, 0.33019330380433703, -0.0653698227765607, 0.039358666336926744, 0.1629028648855449],
	[-0.15166699468593642, -0.04024434310065532, 0.05984440074237388, 0.04188045482684616, 0.15242205415583968],
	[0.021866788839330624, 0.17810093476826347, 0.07594890274307524, 0.02783048723691883, -0.024613658924352036],
	[0.030876370323140667, 0.17381111115567272, 0.06690643030137068, -0.07551486121032489, 0.14564102115453798],
	[0.03035140657624569, 0.1754141502387904, 0.06710175488792361, -0.07021318432884671, 0.010637461716210753],
	[0.19506524792870608, 0.18317529550137915, 0.06309223322122441, 0.03594671328909573, -0.12641831031697043],
	[0.028118446718327333, -0.041526510280336, 0.07420704627533861, -0.07499234186956999, 0.023413548784138212],
	[0.027803613881355722, -0.043573909483987476, 0.06337768001650927, -0.007239314495783415, -0.0006265828202845457],
	[0.1977878543707098, 0.18141784172726733, -0.05274636396664034, -0.011173546500093652, -0.028564112182948347],
	[0.043538363477741454, 0.18649898064934017, 0.07344359050035784, -0.07474308780558662, -0.021166341430823937],
	[-0.06588829932299499, 0.19019060833021592, 0.06795887391774937, 0.03476830565571357, 0.1584129803529769],
	[0.020509162820243468, 0.32648432883474576, 0.06318183977229298, 0.037939041075446836, -0.02546249461910269],
	[0.028718478376207245, 0.18428860308048797, 0.06363122907331781, 0.04174533069151361, 0.16078991756175037],
	[-0.060431669537424265, -0.037262933297713824, 0.07060792657013364, 0.03469927979320814, -0.023434192791255175],
	[-0.05931014990307662, -0.04485073110075328, 0.06115609894258644, 0.0378816600034271, -0.009221326218937497],
	[0.2006508954622502, -0.23512761916999841, 0.05788888768248188, -0.010419160062401919, -0.12373043544349499],
	[-0.13784303252820965, -0.23135191428113547, -0.04760418453928887, -0.008017966636832068, -0.12318793124880516],
	[0.030941933798149912, 0.33204133268107844, 0.07176860770085372, 0.03040633338621912, 0.15194715381467308],
	[0.20628469654086548, 0.32480046377165755, 0.06069002201752538, 0.036542508862439885, -0.02367329611328222],
	[0.2051702736512351, 0.19696031894900093, 0.06820098939382925, 0.031101089093465418, 0.15662918115919197],
	[0.20704048285067297, 0.33467279156830926, 0.06576292761069882, 0.03468668756380156, 0.16222739596920063],
	[0.2062576461844666, -0.03434809689586261, 0.06654851384578388, -0.012128378156397645, 0.01458382667422336],
	[0.030607629174813317, -0.03853150923828888, 0.06729728766802319, 0.03625288639957351, 0.16293013450360544],
	[-0.14671674258829784, 0.18433040266635436, 0.06843262499388661, 0.04032586470350161, 0.14417373382177057],
	[-0.15827524326622303, 0.17624850306991857, 0.06250959474423941, 0.03782845017257055, 0.1542797474313023],
	[0.2111032627516843, -0.04609503053506085, 0.06175392765308468, 0.041089042282897364, 0.16903793444115797],
	[0.1995881203135465, -0.0297500007187944, 0.05986709989621141, -0.07233260731062567, -0.023343002076242795]
];




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
var initial_pred = null;
var final_pred = null;
var exec_initial_rule = null;

var exec_initial_rule_neighbor = null;

var who_is_better_list = null;
var who_is_better = null;
var human_capability = null;
var AI_capability = null;



var user_feedback_about_tree = null;
var prolific_id = 'prolific_id';

var attention_check_data_all = [];
var attention_check_answer_all = [];





/*
///////////////规则页面需要用到的数据////////////////////
*/

var features = ['Age', 'EducationNum', 'MaritalStatus', 'Occupation', 'WorkHoursPerWeek']

var relations = [
    [">", "<="],
    [">", "<="],
    ["is"],
    ["is"],
    [">", "<="]
]

var values = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    ["Divorced", "Married civilian spouse", "Never married", "Separated"],
    ["Executive Managerial", "Other service", "Technical support"],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99']
]







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


const chartConfidence_AI = Highcharts.chart('conf_container_AI', Highcharts.merge(gaugeOptions, {
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
		// '<span style="font-size:15px">Confidence</span><br/>' +
		'<span style="font-size:20px">{y}</span><br/>' +
		'</div>'
	},
}]

}));




// const chartConfidence_human = Highcharts.chart('conf_container_human', Highcharts.merge(gaugeOptions, {
// 	yAxis: {
// 		min: 0,
// 		max: 100,
// 		title: {
// 		text: null
// 		}
// 	},
	
// 	credits: {
// 		enabled: false
// 	},
	
// 	series: [{
// 		name: 'Speed',
// 		data: [50],
// 		dataLabels: {
// 		format:
// 			'<div style="text-align:center">' +
// 			// '<span style="font-size:15px">Confidence</span><br/>' +
// 			'<span style="font-size:20px">{y}</span><br/>' +
// 			'</div>'
// 		},
// 	}]
	
// 	}));





// Data gathered from http://populationpyramid.net/germany/2015/

// Age categories



// var categories = [
// 'Age', 'Year of Education', 'Marital Status', 'Occupation', 'Work hour per week'
// ];
	
// const chart = Highcharts.chart('container', {
// chart: {
// 	type: 'bar'
// },
// title: {
// 	text: null
// },
// xAxis: {
// 	categories: categories,
// 	reversed: true,
// 	labels: {
// 	step: 1,
// 	style:{
// 		fontSize: '16px'
// 	}
// 	},
// }, 
// // { // mirror axis on right side
// // 	opposite: true,
// // 	reversed: false,
// // 	categories: categories,
// // 	linkedTo: 0,
// // 	labels: {
// // 	step: 1,
// // 	style:{
// // 		fontSize: '16px'
// // 	}
// // 	},
// // }],
// yAxis: {
// 	title: {
// 	text: null
// 	},
// 	labels: {
// 	formatter: function () {
// 		return Math.abs(this.value);
// 	}
// 	},
// },
// credits: {
// 	enabled: false
// },
// plotOptions: {
// 	series: {
// 	stacking: 'normal'
// 	}
// },

// tooltip: {
// 	formatter: function () {
// 	return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
// 		'importance: ' + Highcharts.numberFormat(this.point.y, 2);
// 	}
// },

// series: [{
// 	name: '≤ 50k/y',
// 	data: [
// 	-2.2, -2.1, -2.2, -2.4, -2.7
// 	],
// 	color:"#A4D3EE"
// }, {
// 	name: '> 50k/y',
// 	data: [
// 	22.1, 2.0, 2.1, 2.3, 2.6
// 	],
// 	color:"#43CD80"
// }]
// });































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


    $(".nav-tabs a[href='#consent_form']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");


});


$("#accept_button").click(function(){

    $(".nav-tabs a[href='#tutorial']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

});


$("#reject_button").click(function(){

    $("#quitModal").modal('show');

});




$("#continue_next20_button").click(function(){

    document.getElementById('newdemo1').style.display = 'block';
    document.getElementById('bottom').style.display = 'block';
    document.getElementById('userrule').style.display = 'none';
    $(".nav-tabs a[href='#newdemo1']").tab('show');
    $("html, body").animate({ scrollTop: 0 }, "slow");
    
    
    // 把AI显示出来
    document.getElementById('ai_suggestion_region').style.display = 'block';

});





//must input personal info
function checkIterationFormInfo(objData){
	
	if (objData.length < 7) {
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


var attention_tocheck1 = true;
var attention_tocheck2 = true;

$("#finish_attention_check").click(function(){
	var objData = $("#attention-check-questionnaire").serializeArray();
	console.log(objData);

	// document.getElementById('progressbar1').style.display = "none";


	if(!checkIterationFormInfo_attention(objData)){
		return;
	}
	else{
		attention_check_data = objData;
	}


	// 获得attention check问题的答案

	attention_occupation = occupation[order_list[current_idx-2]];
	attention_age = age[order_list[current_idx-2]];
	attention_education = education_number[order_list[current_idx-2]];


    console.log('attention_occupation', attention_occupation);
    console.log('attention_age', attention_age);
    console.log('attention_education', attention_education);

	attention_q1 = null;
	attention_q2 = null;
	attention_q3 = null;




	if (attention_occupation == 'Technical support'){
		attention_q1 = 1;
	}
	if (attention_occupation == 'Other service'){
		attention_q1 = 2;
	}
	if (attention_occupation == 'Executive Managerial'){
		attention_q1 = 3;
	}

	
	if (attention_age >= 19 && attention_age <= 30){
		attention_q2 = 1;
	}
	if (attention_age >= 31 && attention_age <= 40){
		attention_q2 = 2;
	}
	if (attention_age >= 41 && attention_age <= 50){
		attention_q2 = 3;
	}
	if (attention_age >= 51 && attention_age <= 60){
		attention_q2 = 4;
	}
	if (attention_age >= 61 && attention_age <= 70){
		attention_q2 = 5;
	}
	if (attention_age >= 71){
		attention_q2 = 6;
	}

	if (attention_education <= 9){
		attention_q3 = 1;
	}
	if (attention_education == 10){
		attention_q3 = 2;
	}
	if (attention_education == 11){
		attention_q3 = 3;
	}
	if (attention_education == 12){
		attention_q3 = 4;
	}
	if (attention_education == 13){
		attention_q3 = 5;
	}
	if (attention_education == 14){
		attention_q3 = 6;
	}
	if (attention_education >=15){
		attention_q3 = 7;
	}

	attention_check_answer = [attention_q1, attention_q2, attention_q3];

	attention_check_answer_all.push(attention_check_answer);

	attention_check_data_all.push(attention_check_data);


    // 把attention check区域隐藏 其他区域显示出来
    document.getElementById("attention_check_area").style.display = "none";
    document.getElementById("newdemo1").style.display = "block";





	// attention check都清零

	
	document.getElementById('attentioncheck1-option1').checked = false;
	document.getElementById('attentioncheck1-option2').checked = false;
	document.getElementById('attentioncheck1-option3').checked = false;


	document.getElementById('attentioncheck2-option1').checked = false;
	document.getElementById('attentioncheck2-option2').checked = false;
	document.getElementById('attentioncheck2-option3').checked = false;
	document.getElementById('attentioncheck2-option4').checked = false;
	document.getElementById('attentioncheck2-option5').checked = false;
	document.getElementById('attentioncheck2-option6').checked = false;

	document.getElementById('attentioncheck3-option1').checked = false;
	document.getElementById('attentioncheck3-option2').checked = false;
	document.getElementById('attentioncheck3-option3').checked = false;
	document.getElementById('attentioncheck3-option4').checked = false;
	document.getElementById('attentioncheck3-option5').checked = false;
	document.getElementById('attentioncheck3-option6').checked = false;
	document.getElementById('attentioncheck3-option7').checked = false;


});



function checkIterationFormInfo_attention(objData){
	
	if (objData.length < 3) {
		alert("Please answer all questions");
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


	if(document.getElementById('radio-first-decision-1').checked == false && document.getElementById('radio-first-decision-2').checked == false){
		alert("Please make your prediction");
		return false;
	}

	if ((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true)) {
		if(current_idx < 0 && ground_truth_is_show_task == 0){
				alert("Please check your answer with the groundtruth");
				return false;
		}			
		else{
			if(current_idx >= 0){
				document.getElementById('showanswer_area').style.display = 'none';
			}
			// 先存储数据！！！
			// 即将进入下一页了，把这一页的用户的interaction log都保存下来，用于区分
			user_interaction_log.push(user_interaction_log_thispape);


			//保存用户的两次决策结果

			timestamp2 = new Date().getTime(); //1610075969354 
			
			var objData1 = $("#firstdecision1").serializeArray();
			var objData2 = $("#finaldecision1").serializeArray();
	
			// console.log(objData);
	
			// firstdecision_1 = objData1[0];
			// firstconfidence_1 = objData1[1];
	
			aisuggestion_1 = ai_prediction[order_list[current_idx-1]];
			aiconfidence_1 = ai_confidence[order_list[current_idx-1]];
			ground_truth_1 = ground_truth[order_list[current_idx-1]];
	

			
			var objData1 = $("#firstdecision1").serializeArray();
			firstdecision_1 = objData1[0];
			firstdecision.push(firstdecision_1);

			console.log(firstdecision_1);

			var time_spent = timestamp2 - timestamp1;
			timestamp1 = timestamp2;

			current_instance_data = [current_idx, order_list[current_idx - 1], firstdecision_1, aisuggestion_1, aiconfidence_1, ground_truth_1, time_spent, who_is_better];

			all_data_tosave.push(current_instance_data);

			if (current_idx < order_list.length){

                if(current_idx == 20){
                    $("#middle_break").modal('show');
                }

                document.getElementById('question1').textContent = "Q1. What is your prediction?";
                document.getElementById('attentioncheck1').textContent = "≤ 50k";
                document.getElementById('attentioncheck2').textContent = "> 50k";

                /*
                在这里，我要试着改成纯动态页面，就用一个页面，来展示任意数量的instance
                */

                // step1，先把页面该折叠的地方折叠
                // document.getElementById("firstdecision1").style.display = "none";

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
                document.getElementById('groundtruth_task').textContent = ' ';
                ground_truth_is_show_task = 0;

                // step4，对页面的其他位置进行更新，比如进度数字，进度条

                var percentage = current_idx / order_list.length * 100;
                document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
                document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';
                document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


                // generate_explanation();
                generate_confidence();


				


			
				

			}else{

                document.getElementById("go_to_questionnaire").style.display = "block";
				document.getElementById("user_prediction_region").style.display="none";
				document.getElementById("ai_suggestion_region").style.display="none";
				
				document.getElementById("profile").style.display="none";

				// step4，对页面的其他位置进行更新，比如进度数字，进度条
		
				var percentage = current_idx/order_list.length*100;
				document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
				document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';
				document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


			}
			current_idx += 1;




			//清除当前页的log
			user_interaction_log_thispape = [];
		}		
	}


});



$("#go_to_questionnaire").click(function(){
    document.getElementById("newdemo1").style.display="none";
	$(".nav-tabs a[href='#questionnaire']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");


	document.getElementById("go_to_next").style.display = "block";
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
	if (document.getElementById('radio-first-decision-1').checked == false && document.getElementById('radio-first-decision-2').checked == false) {
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



function generate_explanation(){

	console.log('Any problem?');
	console.log(current_idx);
	console.log([order_list[current_idx]]);
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

	console.log('当前是第几个的confidence?');
	console.log(current_idx);
	var confidence = parseInt(parseFloat(ai_confidence[order_list[current_idx]])*100);


	chartConfidence_AI.update({
		series: [{
			name: 'Speed',
			data: [confidence],
			dataLabels: {
			format:
				'<div style="text-align:center">' +
				// '<span style="font-size:20px">Confidence</span><br/>' +
				'<span style="font-size:25px">{y}</span><br/>' +
				'</div>'
			},
		}]
	});


}


function generate_human_prob_first_time(){

	console.log('当前是第几个的人的能力?');
	console.log(current_idx);

	var human_prob = parseInt(parseFloat(human_capability[current_idx-21])*100);

	chartConfidence_human.update({
		series: [{
			name: 'Speed',
			data: [human_prob],
			dataLabels: {
			format:
				'<div style="text-align:center">' +
				// '<span style="font-size:20px">Confidence</span><br/>' +
				'<span style="font-size:25px">{y}</span><br/>' +
				'</div>'
			},
		}]
	});

}



function generate_human_prob(){

	console.log('当前是第几个的人的能力?');
	console.log(current_idx);

	var human_prob = parseInt(parseFloat(human_capability[current_idx-20])*100);

	chartConfidence_human.update({
		series: [{
			name: 'Speed',
			data: [human_prob],
			dataLabels: {
			format:
				'<div style="text-align:center">' +
				// '<span style="font-size:20px">Confidence</span><br/>' +
				'<span style="font-size:25px">{y}</span><br/>' +
				'</div>'
			},
		}]
	});

}





$("#go_to_next").click(function(){


	var objData = $("#post-task-questionnaire").serializeArray();
	console.log(objData);

	var objData2 = $("#form_info").serializeArray();
	if(!checkFormInfo(objData2)){
		return;
	}
	else{
		userinfo = objData2;
	}


	prolific_id = userinfo[0].value;

	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		questionnaire_data = objData;
	}


	
	document.getElementById("question_area").style.display = "none";


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

		"exec_initial_rule": exec_initial_rule,

		"exec_initial_rule_neighbor": exec_initial_rule_neighbor,

		"final_pred": final_pred,

		"user_feedback_about_tree": user_feedback_about_tree,

		"who_is_better_list": who_is_better_list,

		"human_capability": human_capability,

		"AI_capability": AI_capability,

        "attention_check_data": attention_check_data_all,

		"attention_check_answer": attention_check_answer_all,

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
    rule_list = [];
    $.ajax({
        // url: "http://localhost:8081/send_rule_tofront",
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
			

			exec_initial_rule = JSON.parse(data)[2];

			exec_initial_rule_neighbor = JSON.parse(data)[3];
			
			
			console.log(initial_rule);
			console.log(initial_pred);
			console.log(exec_initial_rule);
			console.log(exec_initial_rule_neighbor);



			// hahaha = [[["WorkHoursPerWeek", "<=", "39"], ["Label", "is", "2"], ["EducationNum", "<=", "11"], ["None"], ["None"], ["Label", "is", "1"], ["Age", "<=", "47"], ["None"], ["None"], ["None"], ["None"], ["None"], ["None"], ["Label", "is", "2"], ["Label", "is", "1"]], [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], ["if WorkHoursPerWeek_code > 39.0 and EducationNum_code > 11.0 and Age_code <= 47.5: pred_results.append(1)", "if WorkHoursPerWeek_code > 39.0 and EducationNum_code <= 11.0: pred_results.append(0)", "if WorkHoursPerWeek_code <= 39.0: pred_results.append(1)", "if WorkHoursPerWeek_code > 39.0 and EducationNum_code > 11.0 and Age_code > 47.5: pred_results.append(0)"], ["if WorkHoursPerWeek_code > 39.0 and EducationNum_code > 11.0 and Age_code <= 47.5: pred_results_neighbor.append(1)", "if WorkHoursPerWeek_code > 39.0 and EducationNum_code <= 11.0: pred_results_neighbor.append(0)", "if WorkHoursPerWeek_code <= 39.0: pred_results_neighbor.append(1)", "if WorkHoursPerWeek_code > 39.0 and EducationNum_code > 11.0 and Age_code > 47.5: pred_results_neighbor.append(0)"]];
			// initial_rule = hahaha[0];
			// initial_rule = [['EducationNum', '<=', '11'], ['Label', 'is', '1'], ['MaritalStatus', 'is', ['1']], ['None'], ['None'], ['WorkHoursPerWeek', '<=', '45'], ['MaritalStatus', 'is', ['1', '2']], ['None'], ['None'], ['None'], ['None'], ['Label', 'is', '1'], ['Label', 'is', '2'], ['Label', 'is', '2'], ['Label', 'is', '1']];
			console.log('===========initial rule is==========');
			console.log(initial_rule);

            //这里写初始化的代码
            var tmp_idx_group = [
                [0,1,3,7], // []
                [0,1,3,8], // [3]
                [0,1,4,9], // [2]
                [0,1,4,10], // [2,3]
                [0,2,5,11], // [1]
                [0,2,5,12], // [1,3]
                [0,2,6,13], // [1,2]
                [0,2,6,14] // [1,2,3]
            ]

            var tmp_rule_group = [];
            var tmp_rule = [];
            var tmp_idx = null;
            var rule_order = [];
            for(var i=0;i<8;i++){
                tmp_rule = [];
                for(var j=0;j<4;j++){
                    tmp_idx = tmp_idx_group[i][j];
                    if (initial_rule[tmp_idx][0] != 'None'){
                        tmp_rule.push(initial_rule[tmp_idx]);
                    }
                }
                var same = 0;
                for(var j=0;j<i;j++){
                    if (JSON.stringify(tmp_rule) === JSON.stringify(tmp_rule_group[j])){
                        same = 1;
                        break;
                    }
                }
                if(same == 0){
                    tmp_rule_group.push(tmp_rule);
                    rule_order.push(i);//当前去重后的规则原属于那一条rule
                }
            }
            console.log(tmp_rule_group);

            var group_idx = null;
            var condition_idx = null;
            for(var i=0;i<tmp_rule_group.length;i++){ // 【注意】这里的i是从0开始的
                var tmp_rule = tmp_rule_group[i];
                group_idx = String(i+1);
                // 不是第一条规则需要先向页面添加代码
                if(i != 0){ 
                    // 把上一个条件下的button移除 
                    document.getElementById('bottombutton' + String(i)).remove();
                    // 下面添加文本内容
                    rulecount.push(1);
                    var tmp =
                        `
                        <div id="rule${group_idx}" class="col-xs-12" style="display: block;margin-top: 10px;">
                        <form id="rulegroup${group_idx}" class="container-fluid list-group-item list-group-item-success" style="display: block;">
                            <h3>Rule ${group_idx}</h3>
                            <!--第一条规则的决定-->
                            <ul class="list-group list-group-flush" id="ruledecision${group_idx}">
                            <li class="list-group-item list-group-item-info">
                                <div class="form-group">
                                <div class="decision">
                                    <label class="form-check-label" style="width:50%;float:left;text-align: center;">If a person satisfies this rule, you will predict her/his income to be:</label>
                                    <div class="form-check form-check-inline" style="width:25%;float:left;margin-top: -2px;">
                                    <input class="form-check-input" type="radio" name="ruledecision${group_idx}" value="0" id="ruledecision${group_idx}-1" onchange="chgDecision(${group_idx})">
                                    <label id="choice${group_idx}-1" for="ruledecision${group_idx}-1" class="form-check-label">≤ 50k
                                    </label>
                                    </div>
                                    <div class="form-check form-check-inline" style="width:25%;float:left;margin-top: -2px;">
                                    <input class="form-check-input" type="radio" name="ruledecision${group_idx}" value="1" id="ruledecision${group_idx}-2" onchange="chgDecision(${group_idx})">
                                    <label id="choice${group_idx}-2" for="ruledecision${group_idx}-2" class="form-check-label">> 50k
                                    </label>
                                    </div>
                                </div>
                                </div>
                            </li>
                            </ul>
                            <!--第一条规则的第一个条件-->
                            <ul class="list-group list-group-flush" id="condition${group_idx}-1">

                            <li class="wrap list-group-item list-group-item-info" style="height:60px;">
                            <h4>Condition 1</h4>
                                <div class="form-group">
                                <div class="feature" id="feature${group_idx}-1">
                                    <select class="form-control" id="featureselect${group_idx}-1" required onchange="chgFeature('${group_idx}-1')">
                                    <option style="color:#7d7d7d">Please choose feature</option>
                                    <option value="1" >Age</option>
                                    <option value="2" >EducationNumber</option>
                                    <option value="3" >MaritalStatus</option>
                                    <option value="4" >Occupation</option>
                                    <option value="5" >WorkHoursPerWeek</option>
                                    </select>
                                </div>
                                <div class="relation" id="relation${group_idx}-1">
                                    <select class="form-control" id="relationselect${group_idx}-1" required onchange="chgRelation('${group_idx}-1')">
                                    <option style="color:#7d7d7d">Please choose relation</option>
                                    </select>
                                </div>
                                <div class="value" id="value${group_idx}-1">
                                    <select class="form-control" id="valueselect${group_idx}-1" required onchange="chgValue('${group_idx}-1')">
                                    <option style="color:#7d7d7d">Please choose value</option>
                                    </select>
                                </div>
                                <button class="btn btn-primary" id="deletecondition${group_idx}-1" style="margin-top:5px;">Delete</button>
                                </div>
                            </li>
                            </ul>
                            <button class="btn btn-primary" id="addcondition${group_idx}">Add condition</button>
                            <button class="btn btn-primary" id="checkcondition${group_idx}">Check</button>
                            <button class="btn btn-primary" id="deleteallcondition${group_idx}" style="float:right;">Delete the whole rule</button>
                        </form>
                        </div>
                        <div id="bottombutton${group_idx}" style="text-align:center;">
                        <button class="btn btn-primary" id="addrule${group_idx}" style="margin-top: 20px;">Add Rule</button>

						<br>
						<br>
		  
						<li class="list-group-item list-group-item-success">
						<div class="form-group">
						  <div style="display: inline-block;">
							<h4>
							  Do you think the rule is hard to create/modify? Or do you have any suggestions or encounter any problems while you create the rules? Can you suggest other methods besides the rules to show how you make a decision? Please give your valuable feedback! Thank you!
							</h4>
						  </div>
						  <div class="form-check form-check-inline">
							<textarea class="form-check-input" name="feedback_decisiontree" id="text-feedback-tree" placeholder="please input your feedback" rows="4" style="width:100%;"></textarea>
						  </div>
						</div>
					  </li>
						<br>
						<button class="btn btn-primary" id="finishrule${group_idx}" style="margin-top: 20px;">Finish and Next</button>
						<br>
						<br>
                        </div>
                        `
                    $('#userrule').append(tmp);
                }
                // 首先确定label
                //console.log(document.getElementById('ruledecison' + group_idx + '-1'));
                if (tmp_rule[tmp_rule.length - 1][2] == '1') { // <50k
                    document.getElementById('ruledecision' + group_idx + '-1').checked = true;
                    document.getElementById('ruledecision' + group_idx + '-2').checked = false;
                } else { // >50k
                    document.getElementById('ruledecision' + group_idx + '-1').checked = false;
                    document.getElementById('ruledecision' + group_idx + '-2').checked = true;
                }
                // 然后确定condition
                var tmp_condition = null;
                var tmp_feature_idx = null;
                var tmp_relation_idx = null;
                var tmp_value_idx = null;
                var tmp_feature = null;
                var tmp_relation = null;
                var tmp_value = null;
                var tmp_relation_choices = null;
                var tmp_value_choices = null;
                for(var j=0;j<tmp_rule.length-1;j++){
                    tmp_condition = tmp_rule[j];
                    condition_idx = String(j+1);
                    // 不是第一条condition需要先向页面添加代码
                    if(j != 0){
                        rulecount[group_idx - 1] += 1;
                        // 移除button和示例
                        document.getElementById('addcondition' + group_idx).remove();
                        document.getElementById('checkcondition' + group_idx).remove();
                        document.getElementById('deleteallcondition' + group_idx).remove();
                        // 下面是添加的文本
                        var tmp = `
                            <ul class="list-group list-group-flush" id="condition${group_idx}-${condition_idx}">
							<h4 align="center"><b>AND</b></h4>

                            <li class="wrap list-group-item list-group-item-info" style="height:60px;">
                            <h4>Condition ${condition_idx}</h4>
                                <div class="form-group">
                                <div class="feature" id="feature${group_idx}-${condition_idx}">
                                    <select class="form-control" id="featureselect${group_idx}-${condition_idx}" required onchange="chgFeature('${group_idx}-${condition_idx}')">
                                    <option style="color:#7d7d7d">Please choose feature</option>
                                    <option value="1" >Age</option>
                                    <option value="2" >EducationNumber</option>
                                    <option value="3" >MaritalStatus</option>
                                    <option value="4" >Occupation</option>
                                    <option value="5" >WorkHoursPerWeek</option>
                                    </select>
                                </div>
                                <div class="relation" id="relation${group_idx}-${condition_idx}">
                                    <select class="form-control" id="relationselect${group_idx}-${condition_idx}" required onchange="chgRelation('${group_idx}-${condition_idx}')">
                                    <option style="color:#7d7d7d">Please choose relation</option>
                                    </select>
                                </div>
                                <div class="value" id="value${group_idx}-${condition_idx}">
                                    <select class="form-control" id="valueselect${group_idx}-${condition_idx}" required onchange="chgValue('${group_idx}-${condition_idx}')">
                                    <option style="color:#7d7d7d">Please choose value</option>
                                    </select>
                                </div>
                                <button class="btn btn-primary" id="deletecondition${group_idx}-${condition_idx}" style="margin-top:5px;">Delete</button>
                                </div>
                            </li>
                            </ul>
                            <button class="btn btn-primary" id="addcondition${group_idx}">Add condition</button>
                            <button class="btn btn-primary" id="checkcondition${group_idx}">Check</button>
                            <button class="btn btn-primary" id="deleteallcondition${group_idx}" style="float:right;">Delete the whole rule</button>
                            `;
                        $('#rulegroup' + String(group_idx)).append(tmp);
                    }
                    // 然后添加feature、relation和feature
                    tmp_feature = tmp_condition[0];
                    tmp_relation = tmp_condition[1];
                    tmp_value = tmp_condition[2]; // 遇到小数向下取整
                    for(var f=0;f<5;f++){
                        if(tmp_feature == features[f]){
                            tmp_feature_idx = f;
                            document.getElementById('featureselect'+group_idx+'-'+condition_idx).selectedIndex = f + 1;
                            tmp_relation_choices = relations[tmp_feature_idx];
                            tmp_value_choices = values[tmp_feature_idx];
                        }
                    }
                    chgFeature(group_idx+'-'+condition_idx);
                    // 需要取反的节点
                    var tmp_idx_group = [
                        [],
                        [2],
                        [1],
                        [1,2],
                        [0],
                        [0,2],
                        [0,1],
                        [0,1,2]
                    ];
                    if (tmp_feature_idx == 0 || tmp_feature_idx == 1 || tmp_feature_idx == 4) {// 数值型需要取反relation
                        if ((rule_order[i] == 1 && j == 2) || (rule_order[i] == 2 && j == 1) || (rule_order[i] == 3 && j == 1) || (rule_order[i] == 3 && j == 2) || (rule_order[i] == 4 && j == 0) || (rule_order[i] == 5 && j == 0) || (rule_order[i] == 5 && j == 2) || (rule_order[i] == 6 && j == 0) || (rule_order[i] == 6 && j == 1) || (rule_order[i] == 7 && j == 0) || (rule_order[i] == 7 && j == 1) || (rule_order[i] == 7 && j == 2)) {
                            if (tmp_relation == '<=') {
                                tmp_relation = '>';
                            }
                            else {
                                tmp_relation = '<='
                            }
                        }
                    }
                    for (var r = 0; r < tmp_relation_choices.length; r++) {
                        if (tmp_relation == tmp_relation_choices[r]) {
                            tmp_relation_idx = r;
                            document.getElementById('relationselect' + group_idx + '-' + condition_idx).selectedIndex = r + 1;
                        }
                    }
                    if (tmp_feature_idx == 2 || tmp_feature_idx == 3){// 非数值型需要取反value
                        if ((rule_order[i] == 1 && j == 2) || (rule_order[i] == 2 && j == 1) || (rule_order[i] == 3 && j == 1) || (rule_order[i] == 3 && j == 2) || (rule_order[i] == 4 && j == 0) || (rule_order[i] == 5 && j == 0) || (rule_order[i] == 5 && j == 2) || (rule_order[i] == 6 && j == 0) || (rule_order[i] == 6 && j == 1) || (rule_order[i] == 7 && j == 0) || (rule_order[i] == 7 && j == 1) || (rule_order[i] == 7 && j == 2)) {
                            console.log(rule_order[i],j);
                            var tmp_true_value = [];
                            if (tmp_feature_idx == 2) {//MaritalStatus
                                var tmp_m_feature = ['1','2','3','4'];
                                for(var m=0;m<4;m++){
                                    if(tmp_value.indexOf(tmp_m_feature[m])<=-1){ //已有的tmp_value不存在该数值
                                        tmp_true_value.push(String(m+1));
                                    }
                                }
                            }
                            if (tmp_feature_idx == 3) {//Occupation
                                var tmp_m_feature = ['1', '2', '3'];
                                for (var o = 0; o < 3; o++) {
                                    if (tmp_value.indexOf(tmp_m_feature[o]) <= -1) { //已有的tmp_value不存在该数值
                                        tmp_true_value.push(String(o + 1));
                                    }
                                }
                            }
                            console.log(tmp_true_value);
                            selectMultip.setVal("valueselect" + group_idx + '-' + condition_idx, tmp_true_value);
                        }
                        else{
                            selectMultip.setVal("valueselect" + group_idx + '-' + condition_idx, tmp_value);
                        }
                    }
                    else{ // 数值型
                        for (var v = 0; v < tmp_value_choices.length; v++) {
                            if (tmp_value == tmp_value_choices[v]) {
                                tmp_value_idx = v;
                                document.getElementById('valueselect' + group_idx + '-' + condition_idx).selectedIndex = v + 1;
                            }
                        }  
                    }           
                }
            }
        },
        error: function (e) {
            console.log("获取信息失败");
        }
    })
}

// function chgFeature(idx) {
//     var feature = document.getElementById("featureselect" + idx).selectedIndex - 1; //当前feature的序号 
//     //修改 feature 对应的值
//     $("#relationselect" + idx).find("option").remove();
//     var relation = document.getElementById("relationselect" + idx);
//     var relationchoices = relations[feature];
//     relation[0] = new Option("Please choose relation","0")
//     for (var i = 0; i < relationchoices.length; i++) {
//         relation[i + 1] = new Option(relationchoices[i], String(i + 1));
//     } 
//     //修改 relation 对应的值
//     $("#valueselect" + idx).find("option").remove();
//     var value = document.getElementById("valueselect" + idx);
//     var valuechoices = values[feature];
//     value[0] = new Option("Please choose value", "0");
//     for (var i = 0; i < valuechoices.length; i++) {
//         value[i + 1] = new Option(valuechoices[i], String(i + 1));
//     }
//     selectMultip.register_one("valueselect" + idx); // 重新针对该value select框注册为多选框
//     var group_idx = idx.split('-')[0];
//     document.getElementById('checkcondition' + group_idx).disabled = false; 
//     //  如果存在table/text则先去掉
//     if (document.getElementById('ruledemo' + group_idx) != null) {
//         document.getElementById('ruledemo' + group_idx).remove();
//     }
//     if (document.getElementById('ruletext' + group_idx) != null) {
//         document.getElementById('ruletext' + group_idx).remove();
//     }
// }


function chgFeature(idx) {
    var feature = document.getElementById("featureselect" + idx).selectedIndex - 1; //当前feature的序号 
    //修改 feature 对应的值
    $("#relationselect" + idx).find("option").remove();
    var relation = document.getElementById("relationselect" + idx);
    var relationchoices = relations[feature];
    relation[0] = new Option("Please choose relation","0")
    for (var i = 0; i < relationchoices.length; i++) {
        relation[i + 1] = new Option(relationchoices[i], String(i + 1));
    } 
    //修改 relation 对应的值
    $("#valueselect" + idx).remove();
    var tmp = `
                <select class="form-control" id="valueselect${idx}" required onchange="chgValue('${idx}')">
                    <option style="color:#7d7d7d">Please choose value</option>
                </select>
    `
    $('#value' + String(idx)).append(tmp);
    console.log(document.getElementById('value' + String(idx)));
    var value = document.getElementById("valueselect" + idx);
    var valuechoices = values[feature];
    value[0] = new Option("Please choose value", "0");
    for (var i = 0; i < valuechoices.length; i++) {
        value[i + 1] = new Option(valuechoices[i], String(i + 1));
    }
    if (feature == 2 || feature == 3) {
        selectMultip.register_one("valueselect" + idx); // 如果是非数值型，需要重新针对该value select框注册为多选框 
    }
    var group_idx = idx.split('-')[0];
    document.getElementById('checkcondition' + group_idx).disabled = false; 
    //  如果存在table/text则先去掉
    if (document.getElementById('ruledemo' + group_idx) != null) {
        document.getElementById('ruledemo' + group_idx).remove();
    }
    if (document.getElementById('ruletext' + group_idx) != null) {
        document.getElementById('ruletext' + group_idx).remove();
    }

    /*
    $("#valueselect" + idx).find("option").remove();
    var value = document.getElementById("valueselect" + idx);
    var valuechoices = values[feature];
    value[0] = new Option("Please choose value", "0");
    for (var i = 0; i < valuechoices.length; i++) {
        value[i + 1] = new Option(valuechoices[i], String(i + 1));
    }
    //selectMultip.register_one("valueselect" + idx); // 重新针对该value select框注册为多选框
    if (feature == 2 || feature == 3){ 
        selectMultip.register_one("valueselect" + idx); // 如果是非数值型，需要重新针对该value select框注册为多选框 
    }
    var group_idx = idx.split('-')[0];
    document.getElementById('checkcondition' + group_idx).disabled = false; 
    //  如果存在table/text则先去掉
    if (document.getElementById('ruledemo' + group_idx) != null) {
        document.getElementById('ruledemo' + group_idx).remove();
    }
    if (document.getElementById('ruletext' + group_idx) != null) {
        document.getElementById('ruletext' + group_idx).remove();
    }*/
}

function chgRelation(idx) {
    var group_idx = idx.split('-')[0];
    document.getElementById('checkcondition' + group_idx).disabled = false;
    //  如果存在table/text则先去掉
    if (document.getElementById('ruledemo' + group_idx) != null) {
        document.getElementById('ruledemo' + group_idx).remove();
    }
    if (document.getElementById('ruletext' + group_idx) != null) {
        document.getElementById('ruletext' + group_idx).remove();
    }
}

function chgValue(idx) {
    var group_idx = idx.split('-')[0];
    document.getElementById('checkcondition' + group_idx).disabled = false;
    //  如果存在table/text则先去掉
    if (document.getElementById('ruledemo' + group_idx) != null) {
        document.getElementById('ruledemo' + group_idx).remove();
    }
    if (document.getElementById('ruletext' + group_idx) != null) {
        document.getElementById('ruletext' + group_idx).remove();
    }
}

function chgDecision(group_idx){
    document.getElementById('checkcondition' + group_idx).disabled = false;
    //  如果存在table/text则先去掉
    if (document.getElementById('ruledemo' + group_idx) != null) {
        document.getElementById('ruledemo' + group_idx).remove();
    }
    if (document.getElementById('ruletext' + group_idx) != null) {
        document.getElementById('ruletext' + group_idx).remove();
    }
}

var rulecount = [1];

$("body").on("click", "button", function (e) {
    var id = e.target.id;
    //console.log('loop:',id);

    /* 添加condition */
    if (id.slice(0, -1) == 'addcondition'){ 
        console.log(id);
        var group_idx = parseInt(id.substr(12,1));
        //  如果存在table/text则先去掉
        if (document.getElementById('ruledemo' + group_idx) != null) {
            document.getElementById('ruledemo' + group_idx).remove();
        }
        if (document.getElementById('ruletext' + group_idx) != null) {
            document.getElementById('ruletext' + group_idx).remove();
        }
        // enable check button
        document.getElementById('checkcondition' + String(group_idx)).disabled = false;
        // 检查最新condition(及以上)是否存在为空的feature/relation/value，或者是否存在数值型多选的情况
        var right = 1;
        var tmp_start = 1;
        for (var r = 1; r <= parseInt(group_idx); r++) {
            var tmp_lastest = String(rulecount[r - 1]);
            var tmp_feature = 'none';
            var tmp_relation = 'none';
            var tmp_value = 'none';
            if(document.getElementById('rule'+String(r)) != null){
                for (var i = tmp_start; i <= parseInt(tmp_lastest); i++) {
                    if (document.getElementById('condition' + r + '-' + String(i)) != null) {
                        tmp_feature = document.getElementById('featureselect' + r + '-' + String(i)).selectedIndex;
                        tmp_relation = document.getElementById('relationselect' + r + '-' + String(i)).selectedIndex;
                        tmp_value = document.getElementById('valueselect' + r + '-' + String(i)).value;
                        if (tmp_feature == 0) {
                            right = 0;
                            alert('Please complete the feature of Rule ' + String(r) + ' Condition ' + String(i) + '!');
                            return false;
                        }
                        if (tmp_relation == 0) {
                            right = 0;
                            alert('Please complete the relation of Rule ' + String(r) + ' Condition ' + String(i) + '!');
                            return false;
                        }
                        if (tmp_value == 0) {
                            right = 0;
                            alert('Please complete the value of Rule ' + String(r) + ' Condition ' + String(i) + '!');
                            return false;
                        }
                        if (tmp_feature == 1 || tmp_feature == 2 || tmp_feature == 5) {
                            if (tmp_value.split(',').length > 1) {
                                right = 0;
                                alert('The value number of Rule ' + String(r) + ' Condition ' + String(i) + ' must be single! You need to click the selected item again to cancel the previous selection.');
                                return false;
                            }
                        }
                    }
                }
            }
        }

        if(right == 1){
            rulecount[group_idx - 1] += 1;
            var condition_idx = rulecount[group_idx - 1];
            // 移除button
            document.getElementById('addcondition' + group_idx).remove();
            document.getElementById('checkcondition' + group_idx).remove();
            document.getElementById('deleteallcondition' + group_idx).remove();
            // 下面是添加的文本
            var tmp = `
            <ul class="list-group list-group-flush" id="condition${group_idx}-${condition_idx}">

              <li class="wrap list-group-item list-group-item-info" style="height:60px;">
              <h4>Condition ${condition_idx}</h4>
                <div class="form-group">
                  <div class="feature" id="feature${group_idx}-${condition_idx}">
                    <select class="form-control" id="featureselect${group_idx}-${condition_idx}" required onchange="chgFeature('${group_idx}-${condition_idx}')">
                      <option style="color:#7d7d7d">Please choose feature</option>
                      <option value="1" >Age</option>
                      <option value="2" >EducationNumber</option>
                      <option value="3" >MaritalStatus</option>
                      <option value="4" >Occupation</option>
                      <option value="5" >WorkHoursPerWeek</option>
                    </select>
                  </div>
                  <div class="relation" id="relation${group_idx}-${condition_idx}">
                    <select class="form-control" id="relationselect${group_idx}-${condition_idx}" required onchange="chgRelation('${group_idx}-${condition_idx}')">
                      <option style="color:#7d7d7d">Please choose relation</option>
                    </select>
                  </div>
                  <div class="value" id="value${group_idx}-${condition_idx}">
                    <select class="form-control" id="valueselect${group_idx}-${condition_idx}" required onchange="chgValue('${group_idx}-${condition_idx}')">
                      <option style="color:#7d7d7d">Please choose value</option>
                    </select>
                  </div>
                  <button class="btn btn-primary" id="deletecondition${group_idx}-${condition_idx}" style="margin-top:5px;">Delete</button>
                </div>
              </li>
            </ul>
            <button class="btn btn-primary" id="addcondition${group_idx}">Add condition</button>
            <button class="btn btn-primary" id="checkcondition${group_idx}">Check</button>
            <button class="btn btn-primary" id="deleteallcondition${group_idx}" style="float:right;">Delete the whole rule</button>
            `;
            $('#rulegroup' + String(group_idx)).append(tmp)
        }
    }

    /* 删除condition */
    if (id.slice(0, 15) == 'deletecondition') {
        console.log(id);
        console.log(rulecount);
        var groupcondition = id.slice(15,).split('-');
        var group_idx = groupcondition[0];
        var condition_idx = groupcondition[1];
        // disabled finish button --- enable check button
        document.getElementById('checkcondition' + String(group_idx)).disabled = false;
        //  如果存在table/text则先去掉
        if (document.getElementById('ruledemo' + group_idx) != null) {
            document.getElementById('ruledemo' + group_idx).remove();
        }
        if (document.getElementById('ruletext' + group_idx) != null) {
            document.getElementById('ruletext' + group_idx).remove();
        }
        // 下面获取要删除的元素的元素并remove
        console.log('condition' + id.slice(15,));
        document.getElementById('condition' + id.slice(15,)).remove();
    }

    /*检查(展示当前规则的demo【persudo】)*/
    if (id.slice(0, 14) == 'checkcondition'){
        console.log(id);
        var group_idx = id.slice(14,);
        var tmp_lastest = String(rulecount[parseInt(group_idx) - 1]);

        // 检查该条规则下的decision是否存在空的
        var tmp_res = $('#rulegroup' + group_idx).serializeArray();
        if (tmp_res.length == 0) {
            alert('You must make a decision of Rule ' +String(group_idx) + '!');
            return false;
        }

        // 检查最新condition(及以上)是否存在为空的feature/relation/value，或者是否存在数值型多选的情况
        var right = 1;
        var empty = 0;
        var tmp_start = 1;
        for(var r=1;r<=parseInt(group_idx);r++){
            var tmp_lastest = String(rulecount[r - 1]);
            var tmp_feature = 'none';
            var tmp_relation = 'none';
            var tmp_value = 'none';
            if (document.getElementById('rule' + String(r)) != null) {
                empty = 0;
                for (var i = tmp_start; i <= parseInt(tmp_lastest); i++) {
                    if (document.getElementById('condition' + r + '-' + String(i)) != null) {
                        empty = 1;
                        tmp_feature = document.getElementById('featureselect' + r + '-' + String(i)).selectedIndex;
                        tmp_relation = document.getElementById('relationselect' + r + '-' + String(i)).selectedIndex;
                        tmp_value = document.getElementById('valueselect' + r + '-' + String(i)).value;
                        if (tmp_feature == 0) {
                            right = 0;
                            alert('Please complete the feature of Rule ' + String(r) + ' Condition ' + String(i) + '!');
                            return false;
                        }
                        if (tmp_relation == 0) {
                            right = 0;
                            alert('Please complete the relation of Rule ' + String(r) + ' Condition ' + String(i) + '!');
                            return false;
                        }
                        if (tmp_value == 0) {
                            right = 0;
                            alert('Please complete the value of Rule ' + String(r) + ' Condition ' + String(i) + '!');
                            return false;
                        }
                        if (tmp_feature == 1 || tmp_feature == 2 || tmp_feature == 5) {
                            if (tmp_value.split(',').length > 1) {
                                right = 0;
                                alert('The value number of Rule ' + String(r) + ' Condition ' + String(i) + ' must be single! You need to click the selected item again to cancel the previous selection.');
                                return false;
                            }
                        }
                    }
                }
                if (empty == 0) {
                    alert('The Rule' + String(r) + ' has no condition!Please delete it or add some conditions!');
                    return false;
                }
            }
        }
        
        // 满足条件进行后须添加反例
        if(right == 1 && empty == 1){
            // 首先将check的disabled属性设置为true
            document.getElementById('checkcondition' + String(group_idx)).disabled = true;

            // 获取该rule对应的condition的“数量”(可能存在被删除的condition)
            var tmp_count = rulecount[parseInt(group_idx)-1];
            var tmp_feature_idx = 'none'; 
            var tmp_relation_idx = 'none'; 
            var tmp_value_idx = 'none'; 
            var tmp_feature = 'none';
            var tmp_relation = 'none';
            var tmp_value = 'none';
            var tmp_label = 'none' // 用户实际的预测【用户实际做判断的选择】
            var tmp_pred = 'none'; // 用户规则的实际预测【根据feature value的比对】
            var tmp_pred_acco = 'none'; // 用户规则的预计预测【满足rule时预计的决策】
            var tmp_code = '';
            var tmp_rule = [];
            var tmp_condition = 'none';
            // 下面处理得到用户规则的预测的符合/反面
            tmp_pred_acco = $('#rulegroup' + group_idx).serializeArray()[0]['value'];
            // 下面处理condition，添加到tmp_rule列表里面
            for(var c=1;c<=tmp_count;c++){
                // 对于存在的condition进行处理
                if(document.getElementById('condition'+group_idx+'-'+String(c))!=null){
                    tmp_condition = ''; // 空的javascript字符串
                    tmp_feature_idx = document.getElementById('featureselect'+group_idx+'-'+String(c)).selectedIndex;
                    tmp_relation_idx = document.getElementById('relationselect' + group_idx + '-' + String(c)).selectedIndex;
                    tmp_value_idx = document.getElementById('valueselect' + group_idx + '-' + String(c)).value;
                    tmp_value_idx = tmp_value_idx.split(',');
                    tmp_feature = features[tmp_feature_idx-1];
                    tmp_relation = relations[tmp_feature_idx-1][tmp_relation_idx-1];
                    if (tmp_feature_idx == 3 || tmp_feature_idx == 4){ // 非数值型
                        tmp_value = [];
                        for (var i = 0; i < tmp_value_idx.length; i++) {
                            tmp_value.push(values[tmp_feature_idx - 1][parseInt(tmp_value_idx[i]) - 1]);
                        }
                    }
                    else{ // 数值型
                        tmp_value = 'none';
                        tmp_value = values[tmp_feature_idx - 1][parseInt(tmp_value_idx) - 1];
                    }
                    //console.log(tmp_feature,tmp_relation,tmp_value);
                    /*
                        这里产生了两种数值类型：
                        (1) Age > 8
                        (2) Marital.status is ['Never-married']
                        下面分两种情况处理，构建成如下的逻辑表达式：
                        (1) tmp_feature tmp_relation tmp_value
                        (2) tmp_value.indexOf(tmp_feature) > -1
                    */
                    if (tmp_feature_idx == 1 || tmp_feature_idx == 2 || tmp_feature_idx == 5) { // 数值型
                        tmp_condition = 'tmp_' + tmp_feature + tmp_relation + tmp_value;
                    }
                    else{ // 非数值型
                        //tmp_condition = '['+tmp_value+'].indexOf('+tmp_feature+')>-1';
                        tmp_condition = '[\'';
                        for(var i=0;i<tmp_value.length;i++){
                            tmp_condition += tmp_value[i];
                            tmp_condition += '\'';
                            if(i != tmp_value.length-1){
                                tmp_condition += ',\''
                            }
                        }
                        tmp_condition += '].indexOf(tmp_' + tmp_feature + ')>-1';
                    }
                    //console.log('condition',tmp_condition);
                    tmp_rule.push(tmp_condition);
                }
            }
            // 下面构建javascript的代码
            tmp_code = 'if(';
            for(var c=0;c<tmp_rule.length;c++){
                tmp_code += tmp_rule[c];
                if(c != tmp_rule.length - 1){
                    tmp_code += ' && ';
                }
            }
            tmp_code += '){tmp_pred = ' + tmp_pred_acco + ';}'; //得到用户规则的实际预测
            console.log('tmp_code:',tmp_code);
            // 下面按照用户做的前20个样例进行遍历，找到和预测不同的情况，break，对表格进行更新
            var tmp_idx = 'none';
            var tmp_Age = 'none';
            var tmp_EducationNum = 'none';
            var tmp_MaritalStatus = 'none';
            var tmp_Occupation = 'none';
            var tmp_WorkHoursPerWeek = 'none';
            var tmp_right = 1; // 默认用户的规则完美匹配用户的预测
            for(var i=0;i<20;i++){
                tmp_pred = 'none'; // 用户规则的实际预测，分为预测true，false，none三种情况
                tmp_idx = parseInt(order_list[i]);
                tmp_Age = parseInt(age[tmp_idx]);
                tmp_EducationNum = parseInt(education_number[tmp_idx]);
                tmp_MaritalStatus = marital_status[tmp_idx];
                tmp_Occupation = occupation[tmp_idx];
                tmp_WorkHoursPerWeek = parseInt(work_hours_per_week[tmp_idx]);
                tmp_label = user_pred_0_20[i];
                console.log(tmp_Age,tmp_EducationNum,tmp_MaritalStatus,tmp_Occupation,tmp_WorkHoursPerWeek,tmp_label);
                eval(tmp_code);
                console.log(tmp_pred,tmp_label);
                if(tmp_pred != 'none' && tmp_pred != tmp_label){//规则的预测和用户的实际预测相反
                    var tmp =
                        `
                        <div id="ruledemo${group_idx}" class="col-xs-6">
                            <h4> This rule does not match your prediction of this case. You may want to change your rule. </h4>
                            <div class="main">
                                <table id="tab1">
                                <tr>
                                    <th>Age</th>
                                    <td>${tmp_Age}</td>
                                </tr>
                                <tr>
                                    <th>Year of Education</th>
                                    <td>${tmp_EducationNum}</td>
                                </tr>
                                <tr>
                                    <th>Marital status</th>
                                    <td>${tmp_MaritalStatus}</td>
                                </tr>
                                <tr>
                                    <th>Occupation</th>
                                    <td>${tmp_Occupation}</td>
                                </tr>
                                <tr>
                                    <th>Work hours per week</th>
                                    <td>${tmp_WorkHoursPerWeek}</td>
                                </tr>
                                <tr>
                                    <th>Your prediction</th>
                                    <td>${tmp_label}</td>
                                </tr>
                                </table>
                            </div>
                        </div>
                        `
                    $('#rulegroup' + String(group_idx)).append(tmp);
                    tmp_right = 0;
                    break;
                }
            }
            if (tmp_right == 1) {//规则的预测和用户的实际预测相同或者未覆盖
                var tmp =  
                `
                <h4 id="ruletext${group_idx}">This rule matches your previous predictions!</h4>
                `
                $('#rulegroup' + String(group_idx)).append(tmp);
            }
        }
    }

    /* 添加rule */
    if (id.slice(0,7) == 'addrule') {
        console.log(id);
        var group_idx  = id.slice(7,);
        // 检查该条规则（及以上）的check的disabled属性是否为true
        var right = 1;
        for(var r=1;r<=parseInt(group_idx);r++){
            if(document.getElementById('rule'+String(r))!=null){
                if (document.getElementById('checkcondition' + String(r)).disabled != true) {
                    alert('Please check your Rule ' + String(r) + ' at first!');
                    right = 0;
                    return false;
                }
            }
        } 
        if(right==1){
            // 把上一个条件下的button移除 
            document.getElementById('bottombutton' + group_idx).remove();
            // 下面添加文本内容
            group_idx = parseInt(group_idx) + 1;
            rulecount.push(1);
            var tmp =
                `
                <div id="rule${group_idx}" class="col-xs-12" style="display: block;margin-top: 10px;">
                <form id="rulegroup${group_idx}" class="container-fluid list-group-item list-group-item-success" style="display: block;">
                    <h3>Rule ${group_idx}</h3>
                    <!--第一条规则的决定-->
                    <ul class="list-group list-group-flush" id="ruledecision${group_idx}">
                    <li class="list-group-item list-group-item-info">
                        <div class="form-group">
                        <div class="decision">
                            <label class="form-check-label" style="width:50%;float:left;text-align: center;">If a person satisfies this rule, you will predict her/his income to be:</label>
                            <div class="form-check form-check-inline" style="width:25%;float:left;margin-top: -2px;">
                            <input class="form-check-input" type="radio" name="ruledecision${group_idx}" value="0" id="ruledecision${group_idx}-1" onchange="chgDecision(${group_idx})">
                            <label id="choice${group_idx}-1" for="ruledecision${group_idx}-1" class="form-check-label">≤ 50k
                            </label>
                            </div>
                            <div class="form-check form-check-inline" style="width:25%;float:left;margin-top: -2px;">
                            <input class="form-check-input" type="radio" name="ruledecision${group_idx}" value="1" id="ruledecision${group_idx}-2" onchange="chgDecision(${group_idx})">
                            <label id="choice${group_idx}-2" for="ruledecision${group_idx}-2" class="form-check-label">> 50k
                            </label>
                            </div>
                        </div>
                        </div>
                    </li>
                    </ul>
                    <!--第一条规则的第一个条件-->
                    <ul class="list-group list-group-flush" id="condition${group_idx}-1">

                    <li class="wrap list-group-item list-group-item-info" style="height:60px;">
                    <h4>Condition 1</h4>    
                    <div class="form-group">
                        <div class="feature" id="feature${group_idx}-1">
                            <select class="form-control" id="featureselect${group_idx}-1" required onchange="chgFeature('${group_idx}-1')">
                            <option style="color:#7d7d7d">Please choose feature</option>
                            <option value="1" >Age</option>
                            <option value="2" >EducationNumber</option>
                            <option value="3" >MaritalStatus</option>
                            <option value="4" >Occupation</option>
                            <option value="5" >WorkHoursPerWeek</option>
                            </select>
                        </div>
                        <div class="relation" id="relation${group_idx}-1">
                            <select class="form-control" id="relationselect${group_idx}-1" required onchange="chgRelation('${group_idx}-1')">
                            <option style="color:#7d7d7d">Please choose relation</option>
                            </select>
                        </div>
                        <div class="value" id="value${group_idx}-1">
                            <select class="form-control" id="valueselect${group_idx}-1" required onchange="chgValue('${group_idx}-1')">
                            <option style="color:#7d7d7d">Please choose value</option>
                            </select>
                        </div>
                        <button class="btn btn-primary" id="deletecondition${group_idx}-1" style="margin-top:5px;">Delete</button>
                        </div>
                    </li>
                    </ul>
                    <button class="btn btn-primary" id="addcondition${group_idx}">Add condition</button>
                    <button class="btn btn-primary" id="checkcondition${group_idx}">Check</button>
                    <button class="btn btn-primary" id="deleteallcondition${group_idx}" style="float:right;">Delete the whole rule</button>
                </form>
                </div>
                <div id="bottombutton${group_idx}" style="text-align:center;">
                <button class="btn btn-primary" id="addrule${group_idx}" style="margin-top: 20px;">Add Rule</button>
                <button class="btn btn-primary" id="finishrule${group_idx}" style="margin-top: 20px;">Finish and Next</button>
                </div>
                `
            $('#userrule').append(tmp);
        }
    }

    /* 删除rule */
    if (id.slice(0, 18) == 'deleteallcondition'){
        console.log(id);
        var group_idx = id.slice(18,);
        document.getElementById('rule'+group_idx).remove();
    }

    /* 结束rule的构建 */
    if (id.slice(0, 10) == 'finishrule') { 
        console.log(id);
        var group_idx = id.slice(10,);
        // 检查该条规则（及以上）的check的disabled属性是否为true
        var right = 1;
        for (var r = 1; r <= parseInt(group_idx); r++) {
            if(document.getElementById('rule'+String(r)) != null){
                if (document.getElementById('checkcondition' + String(r)).disabled != true) {
                    alert('Please check your Rule ' + String(r) + ' at first!');
                    right = 0;
                    return false;
                }
            }
        } 
        // 在这里把数据传输到后端
        if (right == 1) {

			user_feedback_about_tree = document.getElementById('text-feedback-tree').value;

			if(user_feedback_about_tree == ''){
				alert('Please write some feedback.');
				return;
			}



            console.log('right==1');
            var tmp_rule_group = [];
            for(var r=1;r<=group_idx;r++){
                if(document.getElementById('rule'+String(r)) != null){
                    // 获取该rule对应的condition的“数量”(可能存在被删除的condition)
                    var tmp_count = rulecount[r - 1];
                    var tmp_feature_idx = 'none';
                    var tmp_relation_idx = 'none';
                    var tmp_value_idx = 'none';
                    var tmp_feature = 'none';
                    var tmp_relation = 'none';
                    var tmp_value = 'none';
                    var tmp_pred = 'none'; // 用户规则的预计预测
                    var tmp_rule = [];
                    var tmp_condition = [];
                    // 下面处理得到用户规则的预测的符合/反面
                    tmp_pred = $('#rulegroup' + String(r)).serializeArray()[0]['value'];
                    // 下面处理condition，添加到tmp_rule列表里面
                    for (var c = 1; c <= tmp_count; c++) {
                        // 对于存在的condition进行处理
                        if (document.getElementById('condition' + String(r) + '-' + String(c)) != null) {
                            tmp_condition = []; // 空的javascript字符串
                            tmp_feature_idx = document.getElementById('featureselect' + String(r) + '-' + String(c)).selectedIndex;
                            tmp_relation_idx = document.getElementById('relationselect' + String(r) + '-' + String(c)).selectedIndex;
                            tmp_value_idx = document.getElementById('valueselect' + String(r) + '-' + String(c)).value;
                            tmp_value_idx = tmp_value_idx.split(',');
                            tmp_feature = features[tmp_feature_idx - 1];
                            tmp_relation = relations[tmp_feature_idx - 1][tmp_relation_idx - 1];
                            if (tmp_feature_idx == 3 || tmp_feature_idx == 4) { // 非数值型
                                tmp_value = [];
                                for (var i = 0; i < tmp_value_idx.length; i++) {
                                    tmp_value.push(values[tmp_feature_idx - 1][parseInt(tmp_value_idx[i]) - 1]);
                                }
                            }
                            else { // 数值型
                                tmp_value = 'none';
                                tmp_value = values[tmp_feature_idx - 1][parseInt(tmp_value_idx) - 1];
                            }
                            tmp_condition.push(tmp_feature);
                            tmp_condition.push(tmp_relation);
                            tmp_condition.push(tmp_value);
                            tmp_rule.push(tmp_condition);
                        }

                    }
                    tmp_rule_group.push({ 'rule': tmp_rule, 'label': tmp_pred });
                }
            }
            console.log(tmp_rule_group);

			var id_last20 = [];

			for(var i=20;i<40;i++){
				id_last20.push(order_list[i]);
			}


            $.ajax({
                // url: "http://localhost:8081/get_user_rule",
                url: "http://49.232.60.34:8081/get_user_rule",
                type: "GET",
                async: false,
                data: { "user_rule_list": JSON.stringify(tmp_rule_group),"id_last20":String(id_last20),"exec_initial_rule":String(exec_initial_rule),"exec_initial_rule_neighbor":String(exec_initial_rule_neighbor)},
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
					// 首次更新谁更强
					if(who_is_better == 'AI'){
						document.getElementById("estimation").textContent = 'Based on the system\'s estimation, AI has a higher probability of making a correct decision in this task case than you.';
					}else{
						document.getElementById("estimation").textContent = 'Based on the system\'s estimation, you have a higher probability of making a correct decision in this task case than AI.';
					}

					//首次更新人的能力
					// generate_human_prob_first_time();

				
					
					console.log(user_rule);
					console.log(final_pred);
					console.log(who_is_better_list);

                },
                error: function (e) {
                    console.log("获取信息失败");
                }
            })
            document.getElementById('newdemo1').style.display = 'block';
            document.getElementById('bottom').style.display = 'block';
            document.getElementById('userrule').style.display = 'none';
            $(".nav-tabs a[href='#newdemo1']").tab('show');
            $("html, body").animate({ scrollTop: 0 }, "slow");


			// 把AI显示出来
			document.getElementById('ai_suggestion_region').style.display = 'block';

        }
    }
});


