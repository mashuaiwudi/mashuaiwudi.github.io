// 这里存储的是选好的instance的信息
// var age_training = ["32", "61", "67", "40", "40", "56", "30", "57", "28", "43", "25", "24", "24", "28", "53", "52", "53", "39", "57", "63"];
// var age = [
// 	'59', '28', '43', '42',
// 	'75', '68', '67', '74', '67', '19',
// 	'33', '49', '28', '65',
// 	'51', '55', '39', '42',
// 	'54', '34', '68', '61', '68', '27',
// 	'45', '63', '54', '44',
// 	'50', '22', '43', '65',
// 	'90', '82', '51', '61',
// 	'74', '41', '38', '32'
// ];

// var workClass_training = ['Private', 'Private', 'Private', 'self employment(incorporated)', 'self employment(incorporated)', 'self employment(incorporated)', 'Local government', 'Local government', 'Local government', 'Private', 'Private', 'Private', 'Private', 'Local government', 'Private', 'Private', 'Local government', 'Private', 'Private', 'Federal government'];

// var workClass = ['Local government', 'State government', 'Private', 'Private', 'Private', 'self employment(incorporated)', 'self employment(not incorporated)', 'Private', 'self employment(incorporated)', 'Private', 'Private', 'Private', 'Private', 'Private', 'self employment(not incorporated)', 'self employment(incorporated)', 'Private', 'self employment(incorporated)', 'Private', 'Private', 'Federal government', 'Private', 'Private', 'Private', 'Private', 'Federal government', 'Private', 'Private', 'Private', 'self employment(not incorporated)', 'self employment(incorporated)', 'self employment(incorporated)', 'Private', 'Private', 'Private', 'Private', 'State government', 'Private', 'self employment(not incorporated)', 'Private'];


// var education_training = ["Masters", "HS-grad", "Bachelors", "Assoc-acdm",
// 	"Prof-school", "Some-college", "Some-college", "Masters", "Masters", "Bachelors",
// 	"Bachelors", "HS-grad", "Bachelors", "Bachelors", "Masters", "Some-college", "Masters",
// 	"Prof-school", "Masters", "Doctorate"];

// var education = [
// 	'HS-grad', 'Some-college', 'Assoc-voc', 'HS-grad', 'Some-college', 'Some-college', 'Bachelors', 'Masters', 'HS-grad', ' School', 'HS-grad', 'HS-grad', 'Bachelors', 'Some-college',
// 	'Bachelors', 'Assoc-voc', 'Masters', 'HS-grad', 'HS-grad', ' School', 'Bachelors', 'HS-grad', 'Masters', ' School',
// 	' School', ' School', 'Prof-school', 'HS-grad', 'Some-college', 'Masters', 'Some-college', 'Bachelors', 'Assoc-acdm', 'Some-college', 'Assoc-voc',
// 	'Bachelors', 'Prof-school', 'Prof-school', 'Masters', 'Doctorate', 'Bachelors', 'Assoc-voc', 'HS-grad', 'Doctorate', 'Doctorate',
// 	' School', 'HS-grad', 'HS-grad', 'HS-grad', 'Some-college', 'Some-college', ' School', 'Bachelors', 'Masters', 'Prof-school', 'Masters', 'Bachelors',
// 	'Doctorate', 'Doctorate', 'Masters', 'Bachelors', 'Masters', 'Some-college', 'Masters', 'Bachelors', 'Some-college', 'Masters',
// 	'Some-college', 'HS-grad', 'Some-college', 'Bachelors', 'Prof-school', 'Prof-school', 'Prof-school', 'Prof-school', 'Prof-school', 'Prof-school',
// 	'HS-grad', 'HS-grad', 'Some-college', 'HS-grad', 'Assoc-voc', 'HS-grad', 'HS-grad', 'HS-grad', 'Some-college', 'Assoc-voc', 'HS-grad', 'Some-college', 'HS-grad',
// 	'Doctorate', 'Some-college', 'Prof-school', 'Masters', 'Doctorate', 'Prof-school', ' School', 'Masters', 'Bachelors', 'Bachelors'
// ];



// var education_number_training = ["14", "9", "13", "12", "15", "10", "10", "14", "14", "13", "13", "9", "13", "13", "14", "10", "14", "15", "14", "16"];

// var education_number = [
// 	'9', '10', '11', '9',
// 	'13', '11', '14', '9', '9', '8',
// 	'2', '3', '15', '9',
// 	'13', '15', '15', '14',
// 	'4', '9', '9', '9', '10', '10',
// 	'16', '16', '14', '13',
// 	'10', '9', '10', '13',
// 	'9', '9', '10', '9',
// 	'16', '10', '15', '14'
// ];


// var marital_status_training = ['Separated', 'Divorced', 'Widowed', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Never married', 'Never married', 'Never married', 'Never married', 'Widowed', 'Married civilian spouse', 'Widowed', 'Married civilian spouse', 'Divorced', 'Divorced'];

// var marital_status = ['Separated', 'Separated', 'Widowed', 'Never married', 'Widowed', 'Widowed', 'Widowed', 'Widowed', 'Widowed', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Divorced', 'Divorced', 'Divorced', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Divorced', 'Divorced', 'Divorced', 'Married civilian spouse', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Widowed', 'Widowed', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Never married', 'Never married', 'Separated'];

// var occupation_training = ['Executive Managerial', 'Sales', 'Executive Managerial', 'Craft repair', 'Professional specialty', 'Executive Managerial', 'Protective service', 'Professional specialty', 'Professional specialty', 'Administrative clerical', 'Sales', 'Sales', 'Technical support', 'Professional specialty', 'Professional specialty', 'Executive Managerial', 'Professional specialty', 'Professional specialty', 'Executive Managerial', 'Executive Managerial'];

// var occupation = ['Protective service', 'Executive Managerial', 'Professional specialty', 'Administrative clerical', 'Professional specialty', 'Sales', 'Professional specialty', 'Administrative clerical', 'Executive Managerial', 'Professional specialty', 'Craft repair', 'Other service', 'Professional specialty', 'Administrative clerical', 'Sales', 'Professional specialty', 'Professional specialty', 'Executive Managerial', 'Machine operation inspector', 'Other service', 'Professional specialty', 'Sales', 'Professional specialty', 'Administrative clerical', 'Professional specialty', 'Executive Managerial', 'Professional specialty', 'Executive Managerial', 'Executive Managerial', 'Professional specialty', 'Sales', 'Sales', 'Professional specialty', 'Executive Managerial', 'Transport moving', 'Professional specialty', 'Professional specialty', 'Craft repair', 'Professional specialty', 'Executive Managerial'];


// var relationship_training = ["Not-in-family", "Unmarried", "Not-in-family", "Husband", "Husband", "Wife",
// 	"Not-in-family", "Wife", "Wife", "Not-in-family",
// 	"Not-in-family", "Own-child", "Own-child", "Other-relative", "Unmarried", "Husband", "Unmarried", "Husband",
// 	"Not-in-family", "Not-in-family"];

// var relationship = [
// 	'Other-relative', 'Own-child', 'Not-in-family', 'Other-relative', 'Own-child', 'Other-relative', 'Not-in-family', 'Not-in-family', 'Unmarried', 'Unmarried', 'Not-in-family', 'Unmarried', 'Not-in-family', 'Not-in-family',
// 	'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Other-relative', 'Not-in-family', 'Unmarried', 'Not-in-family', 'Own-child',
// 	'Not-in-family', 'Husband', 'Not-in-family', 'Unmarried', 'Other-relative', 'Husband', 'Wife', 'Husband', 'Husband', 'Not-in-family', 'Not-in-family',
// 	'Husband', 'Husband', 'Husband', 'Unmarried', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband',
// 	'Unmarried', 'Unmarried', 'Not-in-family', 'Unmarried', 'Wife', 'Wife', 'Not-in-family', 'Not-in-family', 'Unmarried', 'Not-in-family', 'Wife', 'Not-in-family',
// 	'Unmarried', 'Not-in-family', 'Not-in-family', 'Unmarried', 'Unmarried', 'Unmarried', 'Unmarried', 'Unmarried', 'Wife', 'Wife',
// 	'Husband', 'Unmarried', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Not-in-family', 'Husband', 'Husband',
// 	'Not-in-family', 'Not-in-family', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband',
// 	'Other-relative', 'Unmarried', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family'
// ];

// var race_training = ['White', 'White', 'White', 'White', 'American Indian Eskimo', 'White', 'Black', 'Black', 'White', 'White', 'White', 'White', 'White', 'White', 'Black', 'White', 'Black', 'Asian Pacific Islander', 'White', 'White'];

// var race = ['Other', 'White', 'White', 'Other', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'Other', 'White', 'Other', 'Other', 'White', 'White', 'White', 'White', 'White', 'Other', 'Other', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White'];

// var gender_training = ["Male", "Female", "Male", "Male", "Male", "Female", "Male", "Female", "Female", "Male",
// "Female", "Female", "Male", "Male", "Female", "Male", "Female", "Male", "Male", "Female"];

// var gender = [
// 	'Female', 'Male', 'Female', 'Female',
// 	'Female', 'Female', 'Male', 'Female', 'Female', 'Female',
// 	'Male', 'Male', 'Male', 'Female',
// 	'Male', 'Male', 'Male', 'Male',
// 	'Female', 'Female', 'Female', 'Female', 'Female', 'Female',
// 	'Female', 'Female', 'Female', 'Male',
// 	'Male', 'Female', 'Male', 'Male',
// 	'Female', 'Female', 'Male', 'Male',
// 	'Female', 'Male', 'Male', 'Male'
// ];

// var work_hours_per_week_training = ["55", "25", "40", "50", "60", 
// "50", "40", "40", "55", "40", "40", "32", "40", "50", "35", "60", "35", "67", "50", "60"];

// var work_hours_per_week = [
// 	'40', '40', '36', '40',
// 	'16', '50', '2', '40', '40', '40',
// 	'32', '40', '40', '59',
// 	'40', '35', '67', '60',
// 	'40', '45', '40', '25', '40', '20',
// 	'35', '60', '40', '50',
// 	'50', '40', '55', '60',
// 	'40', '18', '40', '32',
// 	'20', '60', '45', '55'
// ];

// var native_country_training = ["United-States", "United-States", "United-States", "United-States", "United-States", 
// "United-States", "United-States", "United-States", "United-States", "United-States",
// "United-States", "United-States", "United-States", "United-States", "United-States",
// "United-States", "United-States", "India", "United-States", "United-States"];

// var native_country = [
// 	'United-States', 'United-States', 'United-States', 'Trinadad&Tobago', 'United-States', 'South', 'Philippines', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
// 	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'Vietnam',
// 	'Mexico', 'Greece', 'Canada', 'Canada', 'Holand-Netherlands', 'China', 'Canada', 'Iran', 'England', 'England', 'Canada',
// 	'China', 'Greece', 'India', 'India', 'China', 'China', 'Germany', 'Italy', 'Germany', 'Hong',
// 	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
// 	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
// 	'United-States', 'Dominican-Republic', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
// 	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'Vietnam', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
// 	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States'
// ];

// // 这里存储的是AI的预测信息
// var ai_prediction_training = ["> 50K", "> 50K", "> 50K", "> 50K", "> 50K", "≤ 50k", "≤ 50k", "≤ 50k", "≤ 50k", "≤ 50k", "≤ 50k", "≤ 50k", "≤ 50k", "≤ 50k", "≤ 50k", "> 50k", "≤ 50k", "> 50k", "> 50k", "> 50k"];
// //var ai_confidence_training = ["Low", "Low", "Low", "Low", "Low", "Low", "Low", "Low", "Low", "Low", "High", "High", "High", "High", "High", "High", "High", "High", "High", "High"];
// var ai_confidence_training = ["0.622499013","0.580089164","0.578381953","0.662724463","0.692598085",
// "0.579245423","0.594818315","0.643020112","0.661659212","0.619377498","0.805955563","0.88420485",
// "0.921871302","0.84435447","0.86544124","0.805443566","0.86544124","0.811982737","0.903952089",
// "0.876253961"]

// var ai_prediction = [
// 	'0', '0', '0', '0',
// 	'1', '1', '1', '1', '1', '1',
// 	'0', '1', '0', '1',
// 	'1', '1', '1', '1',
// 	'1', '1', '1', '1', '1', '0',
// 	'0', '1', '1', '1',
// 	'1', '1', '1', '1',
// 	'1', '1', '1', '1',
// 	'1', '1', '1', '1',
// ]

// var ai_confidence = [
// 	'0.6216167206682555', '0.7146916549221887', '0.772933862102368', '0.7587938013326399',
// 	'0.9960324364873704', '0.9982713465413844', '0.9663998316411408', '0.9621837974665878', '0.9544306553733344', '0.8763577236257762',
// 	'0.5299615987754885', '0.698582494528702', '0.5405403084789995', '0.714319957946243',
// 	'0.6218446526255553', '0.7434592321334867', '0.811982737142438', '0.6644689663145358',
// 	'0.7536544493693658', '0.7124151429097416', '0.9243783276848776', '0.5800891636562067', '0.5919457014367343', '0.8916216865736452',
// 	'0.5068468909345887', '0.8762539611564146', '0.7300044560182705', '0.7300197767714125',
// 	'0.99999999999999', '0.9999999999997348', '0.9999999999999902', '0.9999999999999942',
// 	'0.8808445930002256', '0.711671816527071', '0.8236856635076228', '0.7888856762954077',
// 	'0.576848393767986', '0.7131879266529904', '0.638765883740267', '0.6224990130049852'
// ]

// var ground_truth_training = [1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1];

// var ground_truth = [
// 	'0', '0', '0', '0',
// 	'1', '1', '1', '1', '1', '1',
// 	'0', '0', '0', '0',
// 	'1', '1', '1', '1',
// 	'0', '0', '0', '0', '0', '0',
// 	'1', '1', '1', '1',
// 	'1', '1', '1', '1',
// 	'0', '0', '0', '0',
// 	'1', '1', '1', '1'
// ]








// // const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// const order_list_training = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// //const order_list_training = [0];

// var task_num = 40;

// const order_list = [];
// for(var i = 0;i < task_num;i++){
// 	order_list.push(i);
// }

// for (let i = 1; i < order_list.length; i++) {
//     const random = Math.floor(Math.random() * (i + 1));
//     [order_list[i], order_list[random]] = [order_list[random], order_list[i]];
// }






//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
// 上面是根据雷颖最开始选出的100个case中我继续挑选出来的40个case
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================

// 这里存储的是选好的instance的信息

// var age_training = ['58', '26'];

// var age = ['90', '66', '54', '34', '38', '45', '45', '61', '33', '59', '37', '71', '48', '73', '40', '50', '43', '55', '41', '43', '47', '20', '34', '41', '46', '39', '38', '36', '40', '43', '36', '66', '22', '34', '22', '45', '72', '31', '32', '22'];


// var workClass_training = ['State government', 'Private'];

// var workClass = ['Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'self employment(incorporated)', 'self employment(not incorporated)', 'Private', 'Private', 'self employment(not incorporated)', 'self employment(not incorporated)', 'Private', 'Private', 'self employment(incorporated)', 'Local government', 'Federal government', 'self employment(incorporated)', 'self employment(not incorporated)', 'self employment(not incorporated)', 'Federal government', 'Federal government', 'Federal government', 'Local government', 'Federal government', 'Federal government', 'Local government', 'self employment(not incorporated)', 'Private', 'Private', 'Private', 'Private', 'State government', 'Private', 'Private', 'Private', 'Private'];


// var education_training = ["Bachelors", "Masters"];


// var education = [
// 	'HS-grad', 'Some-college', 'Assoc-voc', 'HS-grad', 'Some-college', 'Some-college', 'Bachelors', 'Masters', 'HS-grad', ' School', 'HS-grad', 'HS-grad', 'Bachelors', 'Some-college',
// 	'Bachelors', 'Assoc-voc', 'Masters', 'HS-grad', 'HS-grad', ' School', 'Bachelors', 'HS-grad', 'Masters', ' School',
// 	' School', ' School', 'Prof-school', 'HS-grad', 'Some-college', 'Masters', 'Some-college', 'Bachelors', 'Assoc-acdm', 'Some-college', 'Assoc-voc',
// 	'Bachelors', 'Prof-school', 'Prof-school', 'Masters', 'Doctorate', 'Bachelors', 'Assoc-voc', 'HS-grad', 'Doctorate', 'Doctorate',
// 	' School', 'HS-grad', 'HS-grad', 'HS-grad', 'Some-college', 'Some-college', ' School', 'Bachelors', 'Masters', 'Prof-school', 'Masters', 'Bachelors',
// 	'Doctorate', 'Doctorate', 'Masters', 'Bachelors', 'Masters', 'Some-college', 'Masters', 'Bachelors', 'Some-college', 'Masters',
// 	'Some-college', 'HS-grad', 'Some-college', 'Bachelors', 'Prof-school', 'Prof-school', 'Prof-school', 'Prof-school', 'Prof-school', 'Prof-school',
// 	'HS-grad', 'HS-grad', 'Some-college', 'HS-grad', 'Assoc-voc', 'HS-grad', 'HS-grad', 'HS-grad', 'Some-college', 'Assoc-voc', 'HS-grad', 'Some-college', 'HS-grad',
// 	'Doctorate', 'Some-college', 'Prof-school', 'Masters', 'Doctorate', 'Prof-school', ' School', 'Masters', 'Bachelors', 'Bachelors'
// ];



// var education_number_training = ['14', '9'];

// var education_number = ['9', '10', '4', '9', '6', '16', '7', '9', '2', '6', '16', '9', '13', '9', '15', '9', '12', '15', '15', '15', '15', '10', '9', '9', '14', '10', '16', '13', '14', '14', '13', '9', '10', '16', '8', '9', '9', '14', '6', '10'];


// var marital_status_training = ['Married civilian spouse', 'Never married'];

// var marital_status = ['Widowed', 'Widowed', 'Divorced', 'Divorced', 'Separated', 'Divorced', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Widowed', 'Never married', 'Married civilian spouse', 'Married spouse absent', 'Married civilian spouse', 'Never married', 'Widowed', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Married civilian spouse', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Never married', 'Married civilian spouse', 'Widowed', 'Never married', 'Married civilian spouse', 'Never married', 'Separated', 'Married civilian spouse', 'Divorced', 'Married civilian spouse', 'Never married'];


// var occupation_training = ['Professional specialty', 'Handlers/Cleaners'];

// var occupation = ['Professional specialty', 'Professional specialty', 'Machine operation inspector', 'Other service', 'Administrative clerical', 'Professional specialty', 'Transport moving', 'Professional specialty', 'Craft repair', 
// 'Executive Managerial', 'Professional specialty', 'Professional specialty', 'Sales', 'Farming/Fishing', 'Professional specialty', 'Sales', 'Craft repair', 'Professional specialty', 'Professional specialty', 
// 'Professional specialty', 'Professional specialty', 'Farming/Fishing', 'Farming/Fishing', 'Administrative clerical', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Administrative clerical', 
// 'Executive Managerial', 'Executive Managerial', 'Sales', 'Executive Managerial', 'Administrative clerical', 'Professional specialty', 'Protective service', 'Administrative clerical', 'Professional specialty', 
// 'Other service', 'Handlers/Cleaners', 'Protective service'];


// var relation_training = ["Own-child", "Not-in-family"];

// var relationship = [
// 	'Other-relative', 'Own-child', 'Not-in-family', 'Other-relative', 'Own-child', 'Other-relative', 'Not-in-family', 'Not-in-family', 'Unmarried', 'Unmarried', 'Not-in-family', 'Unmarried', 'Not-in-family', 'Not-in-family',
// 	'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Other-relative', 'Not-in-family', 'Unmarried', 'Not-in-family', 'Own-child',
// 	'Not-in-family', 'Husband', 'Not-in-family', 'Unmarried', 'Other-relative', 'Husband', 'Wife', 'Husband', 'Husband', 'Not-in-family', 'Not-in-family',
// 	'Husband', 'Husband', 'Husband', 'Unmarried', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband',
// 	'Unmarried', 'Unmarried', 'Not-in-family', 'Unmarried', 'Wife', 'Wife', 'Not-in-family', 'Not-in-family', 'Unmarried', 'Not-in-family', 'Wife', 'Not-in-family',
// 	'Unmarried', 'Not-in-family', 'Not-in-family', 'Unmarried', 'Unmarried', 'Unmarried', 'Unmarried', 'Unmarried', 'Wife', 'Wife',
// 	'Husband', 'Unmarried', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Not-in-family', 'Husband', 'Husband',
// 	'Not-in-family', 'Not-in-family', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband',
// 	'Other-relative', 'Unmarried', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family'
// ];


// var race_training = ['White', 'Black'];

// var race = ['White', 'Black', 'White', 'White', 'White', 'Black', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'Asian Pacific Islander', 'White', 'White', 'White', 'White', 'White', 'Asian Pacific Islander', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'Black', 'White', 'White', 'Other', 'American Indian Eskimo', 'White'];


// var gender_training = ["Male", "Male"];

// var gender = ['Female', 'Female', 'Female', 'Female', 'Male', 'Female', 'Male', 'Male', 'Male', 'Female', 'Female', 'Male', 'Female', 'Male', 'Male', 'Female', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Female', 'Female', 'Male', 'Male', 'Male', 'Male', 'Female', 'Female', 'Male', 'Female', 'Male', 'Male', 'Male', 'Female', 'Male', 'Female', 'Male', 'Male'];


// var work_hours_per_week_training = ['50', '48'];

// var work_hours_per_week = ['40', '40', '40', '45', '40', '35', '76', '32', '32', '50', '60', '15', '70', '40', '45', '72', '70', '35', '45', '55', '45', '10', '12', '40', '40', '50', '50', '55', '55', '50', '50', '25', '40', '60', '35', '40', '25', '30', '40', '40'];


// var native_country_training = ["United-States", "United-States"];

// var native_country = [
// 	'United-States', 'United-States', 'United-States', 'Trinadad&Tobago', 'United-States', 'South', 'Philippines', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
// 	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'Vietnam',
// 	'Mexico', 'Greece', 'Canada', 'Canada', 'Holand-Netherlands', 'China', 'Canada', 'Iran', 'England', 'England', 'Canada',
// 	'China', 'Greece', 'India', 'India', 'China', 'China', 'Germany', 'Italy', 'Germany', 'Hong',
// 	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
// 	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
// 	'United-States', 'Dominican-Republic', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
// 	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'Vietnam', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
// 	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States'
// ];

// // 这里存储的是AI的预测信息

// var ai_prediction_training = ["> 50k", "≤ 50k"];

// var ai_confidence_training = ['0.7722023142621077', '0.9172004176087836'];

// var ai_prediction = ['0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1', '1', '1', '1', '1', '0', '0', '0', '1', '0', '1', '1', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0'];

// var ai_confidence = ['0.8256794455624219', '0.9139922899827683', '0.9674651464406278', '0.9003118803411082', '0.9640366031852303', '0.5614957631156398', '0.580046224191187', '0.7042106244188575', '0.989210379278014', '0.9735990272723786', '0.5306069831670094', '0.7373402176734691', '0.5184585164619124', '0.6376745278895763', '0.5745224742241828', '0.8911124700539883', '0.7824183236123533', '0.753135761539271', '0.7517678288705638', '0.7813657237149165', '0.7553890337117464', '0.9698433117251849', '0.9802381720624269', '0.9415987460254959', '0.7063127930902737', '0.6306090891184164', '0.8246863424896459', '0.6510711517454828', '0.6236538209318925', '0.6512962576167385', '0.509563297606612', '0.9519540459276236', '0.90271251883988', '0.8242576115442988', '0.9672847748460264', '0.9643669907597742', '0.6592154080024399', '0.7494007895042715', '0.963354966987499', '0.9067514918772035'];

// var ai_attention = [
// 	['0.15722189147447224', '0.03275199294988147', '-0.23827654509224053', '-0.0850448061609952', '-0.0015745969499808621', '0.0', '-0.054553905202193824', '-0.11383401238996997']
// 	,
// 	['0.15007582250272694', '0.027639485102810103', '-0.011883566751901827', '-0.09321840528499546', '0.0002042964284469588', '0.0', '-0.045525920680576204', '-0.10950342318823776']
// 	,
// 	['0.15806227600595307', '0.030088506665395493', '-0.24640069020780433', '0.09085704797424955', '-0.0010835366877466703', '0.0', '-0.04665525573987388', '-0.12377436362091297']
// 	,
// 	['-0.049152272424287526', '0.019613754098382872', '-0.23915299849787858', '0.08912400089837764', '-0.005121118000481451', '0.0', '-0.049165061573239764', '0.018123855588083177']
// 	,
// 	['0.0186838452434168', '0.023137420228605335', '-0.23170544301049367', '-0.08883759361943967', '0.0006150639607932364', '0.0', '0.048427102252757336', '-0.11651313581705668']
// 	,
// 	['0.02508574136696011', '0.03167743324886635', '0.31382348509272995', '0.09466372481656023', '-0.0025030895995550428', '0.0', '-0.05026034740538187', '-0.11634143061351529']
// 	,
// 	['0.019790440562383736', '0.028335815654482305', '-0.24254148355832536', '0.09193519103586226', '-0.0013986945722850763', '0.0', '0.04878762572325829', '0.12767780313816693']
// 	,
// 	['0.1623641067974969', '0.02522339229323612', '-0.24104532525661398', '0.09191266154490801', '0.003402542522655084', '0.0', '0.047368243099959594', '-0.11796233576344134']
// 	,
// 	['-0.05164263214407097', '0.024294223455015005', '-0.24159077626930286', '0.09354916491173168', '-0.0004311976363657491', '0.0', '0.04752099645977725', '-0.11544142783472294']
// 	,
// 	['0.16626996330074764', '-0.0186835839065356', '-0.24309500356309885', '-0.10249002548934509', '0.004629172121741517', '0.0', '-0.049387878683928126', '0.12918680992914303']
// 	,
// 	['-0.05363312754371053', '-0.026354006613635985', '0.3105958763838557', '-0.07975119931556861', '-0.005073688458647038', '0.0', '-0.04648034195458263', '0.13403237377318558']
// 	,
// 	['0.16164905038494892', '0.03418838077754879', '-0.2396566949828206', '0.08723892591387697', '-0.0022542574360099516', '0.0', '0.04952384109028747', '-0.12040978108425544']
// 	,
// 	['0.017072130370566433', '0.02815084231542712', '0.31387596662126604', '-0.07071697255983649', '0.0032827802513910914', '0.0', '-0.05295824794172085', '0.12444537443687768']
// 	,
// 	['0.16153745816642215', '-0.023303454909346693', '-0.23469105093622963', '0.09036126416312035', '0.0012982964678406976', '0.0', '0.05511624283650554', '-0.12105976113308974']
// 	,
// 	['0.018636582662377547', '-0.03149014909526948', '0.3148806786249689', '-0.0806375312848783', '0.005158213465115321', '0.0', '0.05409998313098397', '0.018293918943058964']
// 	,
// 	['0.1634991222896868', '0.025570625399915715', '-0.24899394030261365', '-0.09259564368733478', '-0.0051808490721633165', '0.0', '-0.05270819996583065', '0.13637523200500182']
// 	,
// 	['0.02475694308775771', '0.019882326654458358', '0.06203352037957277', '0.08739034458193379', '0.013358116186291779', '0.0', '0.057616663961659376', '0.14386516617710987']
// 	,
// 	['0.1627814391570595', '-0.027078938480242867', '0.3066129498799502', '0.09474821584863093', '0.002855332091223754', '0.0', '0.05415859016254328', '-0.12385051607128318']
// 	,
// 	['0.02056465465630962', '0.02649539131241515', '0.31480323403990673', '0.10000596831089524', '-0.001539926788953559', '0.0', '0.057239623459261625', '0.03842886370723124']
// 	,
// 	['0.01964238626522872', '0.022988918141257128', '0.31051565726055663', '0.09832817854742863', '-0.002023625056379369', '0.0', '0.05925345764552919', '0.1372013610263132']
// 	,
// 	['0.022399408608258373', '-0.023725098612280653', '0.3069671201820278', '0.10000343558885737', '-0.010906880748595697', '0.0', '0.04939983781417198', '0.03559895919101972']
// 	,
// 	['-0.10934669376818791', '-0.03221938468219543', '-0.020774660461503044', '-0.07947483534952685', '0.002234548302990635', '0.0', '0.05035210474613225', '-0.11680907338141533']
// 	,
// 	['-0.05159710740064799', '-0.03246752998392407', '-0.23400691392162576', '0.08750009036722768', '0.006018245945356332', '0.0', '-0.05304384844065767', '-0.1271281809057152']
// 	,
// 	['0.020767603776125968', '0.03016748446122533', '-0.23203535041662077', '-0.07175181168590541', '0.01299469765314712', '0.0', '-0.04973253300159647', '-0.11648646561685477']
// 	,
// 	['0.022248169753099036', '0.03138608474165429', '0.3146839776851756', '0.09539687875302492', '0.010533911680967506', '0.0', '0.05397815525478756', '-0.12811989005482408']
// 	,
// 	['0.023486756248928566', '0.028486502192908807', '-0.012315486529633185', '0.09136096615737986', '0.0018943736004432216', '0.0', '0.05395239170833432', '0.13755985336701285']
// 	,
// 	['0.026676377084448817', '0.024195226235021516', '0.3183589221714858', '0.09876005020115354', '0.005878312749434407', '0.0', '0.05198071052738746', '0.14602919669002534']
// 	,
// 	['-0.055737626809205514', '0.018485892029160057', '0.32354268764046984', '0.09341824884741258', '0.0010039146922932083', '0.0', '0.05232798652486773', '0.1356642530757811']
// 	,
// 	['0.024522370699598204', '0.029967871201878934', '0.30811316043941056', '-0.07601816107498006', '0.001649315751411786', '0.0', '-0.051951811341454227', '0.1354058419166703']
// 	,
// 	['0.01645525155262919', '0.040046888314305404', '0.30775827390730914', '-0.07560520569143274', '0.005167819067619432', '0.0', '-0.04879982531107962', '0.1337219703112222']
// 	,
// 	['-0.055599780315686284', '-0.012289579445741296', '0.30657362162653695', '0.09693401412730325', '-0.0002430554699569613', '0.0', '0.051856809183009465', '0.1452531742676049']
// 	,
// 	['0.16180728048748272', '0.027302755685856724', '-0.23633364170403565', '-0.08946260626105657', '0.004664737251126067', '0.0', '-0.05376484957018087', '-0.11289235742643662']
// 	,
// 	['-0.11856143980194171', '0.02444054378377615', '-0.026677403741443374', '-0.07771517707786992', '0.010866983682550844', '0.0', '0.05131116244179831', '-0.11249219432053287']
// 	,
// 	['-0.05230298921862648', '0.016429400238269495', '0.31050627268937625', '0.09870047963283946', '0.00019770805107751014', '0.0', '0.06016804718478721', '0.13666132966740885']
// 	,
// 	['-0.1123972994826342', '0.02840254118665614', '-0.23411497892365898', '-0.07651490861163263', '-0.0010399453895968106', '0.0', '0.047688878050495036', '-0.11583918723234714']
// 	,
// 	['0.01590028833396587', '-0.01890177621645429', '-0.2340227889292679', '-0.0906540756804301', '-0.00604750012413133', '0.0', '-0.04909118587205861', '-0.11791089700988698']
// 	,
// 	['0.16711099419222505', '0.022586795781880883', '-0.24813221402595365', '0.09277544036664283', '-0.0029339974864318152', '0.0', '0.0532084427106672', '-0.11665873436177931']
// 	,
// 	['-0.04733290866782103', '0.03809449130998479', '0.30738225281427883', '0.09479259167859437', '-0.005745560968364014', '0.0', '-0.05630886655421775', '-0.12861246379039334']
// 	,
// 	['-0.0473932030342777', '0.030238614812604633', '-0.24218672220207157', '0.09378591744790091', '0.005846672959942816', '0.0', '0.046469069829691186', '-0.11782854423450051']
// 	,
// 	['-0.11485898637907756', '0.032342224478864944', '-0.023870002745415276', '-0.07317334623390519', '-0.012177612930321623', '0.0', '0.05853268636855053', '-0.10655774440305085']
// ];

// var ground_truth_training = ['1', '0'];

// var ground_truth = ['0', '0', '0', '0', '0', '1', '1', '0', '0', '1', '1', '0', '1', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0'];


// const order_list_training = [0, 1];

// var task_num = 40;

// const order_list = [];
// for(var i = 0;i < task_num;i++){
// 	order_list.push(i);
// }

// for (let i = 1; i < order_list.length; i++) {
//     const random = Math.floor(Math.random() * (i + 1));
//     [order_list[i], order_list[random]] = [order_list[random], order_list[i]];
// }

// console.log(order_list);










/* 第一批各condition采集了5个被试，所用的数据*/


// var age_training = ['49', '23', '39', '76', '38', '49', '51', '32', '27', '29', '26', '51', '23', '45', '22', '55', '45', '52', '44', '68'];

// var age = ['37', '43', '53', '28', '23', '67', '23', '30', '41', '28', '29', '34', '68', '69', '42', '50', '35', '65', '48', '39'];


// var workClass_training = ['self employment(incorporated)', 'Private', 'Private', 'Private', 'Private', 'Federal government', 'self employment(incorporated)', 'Private', 'self employment(incorporated)', 'Private', 'State government', 'Private', 'Private', 'Local government', 'Private', 'self employment(not incorporated)', 'self employment(incorporated)', 'Private', 'Private', 'self employment(not incorporated)'];

// var workClass = ['self employment(incorporated)', 'State government', 'Federal government', 'Private', 'State government', 'self employment(incorporated)', 'Private', 'Private', 'Federal government', 'Private', 'Private', 'Private', 'self employment(not incorporated)', 'Private', 'Private', 'self employment(incorporated)', 'self employment(incorporated)', 'self employment(not incorporated)', 'Private', 'Private'];



// var education_number_training = ['11', '13', '12', '14', '10', '13', '13', '15', '9', '12', '12', '10', '10', '9', '13', '10', '13', '10', '10', '11'];

// var education_number = ['12', '15', '16', '15', '13', '13', '13', '12', '12', '9', '9', '10', '9', '16', '10', '14', '10', '15', '13', '13'];


// var marital_status_training = ['Married civilian spouse', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Never married', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Separated', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Married civilian spouse'];

// var marital_status = ['Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Never married', 'Married civilian spouse', 'Never married', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Divorced', 'Divorced', 'Never married', 'Married civilian spouse', 'Married civilian spouse'];


// var occupation_training = ['Executive Managerial', 'Administrative clerical', 'Craft repair', 'Executive Managerial', 'Sales', 'Executive Managerial', 'Executive Managerial', 'Professional specialty', 'Sales', 'Administrative clerical', 'Administrative clerical', 'Executive Managerial', 'Handlers/Cleaners', 'Other service', 'Professional specialty', 'Craft repair', 'Executive Managerial', 'Professional specialty', 'Transport moving', 'Professional specialty'];

// var occupation = ['Sales', 'Professional specialty', 'Professional specialty', 'Professional specialty', 'Professional specialty', 'Executive Managerial', 'Other service', 'Administrative clerical', 'Professional specialty', 'Craft repair', 'Craft repair', 'Technical support', 'Farming/Fishing', 'Professional specialty', 'Administrative clerical', 'Executive Managerial', 'Executive Managerial', 'Professional specialty', 'Executive Managerial', 'Sales'];

// var race_training = ['White', 'White', 'White', 'White', 'White', 'White', 'White', 'Asian Pacific Islander', 'White', 'Asian Pacific Islander', 'Black', 'White', 'White', 'Black', 'White', 'White', 'Asian Pacific Islander', 'White', 'White', 'White'];

// var race = ['White', 'Black', 'White', 'Black', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White'];


// var gender_training = ['Male', 'Female', 'Male', 'Male', 'Male', 'Male', 'Male', 'Female', 'Male', 'Female', 'Female', 'Male', 'Male', 'Female', 'Female', 'Male', 'Female', 'Male', 'Male', 'Male'];

// var gender = ['Male', 'Male', 'Male', 'Male', 'Female', 'Male', 'Female', 'Female', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Female', 'Male', 'Male', 'Male', 'Male', 'Male'];


// var work_hours_per_week_training = ['60', '40', '60', '40', '40', '40', '40', '50', '50', '40', '40', '45', '40', '40', '40', '50', '25', '50', '50', '40'];

// var work_hours_per_week = ['40', '40', '60', '50', '27', '16', '20', '40', '40', '40', '40', '84', '45', '50', '40', '80', '60', '60', '50', '50'];


// var ai_prediction_training = ['1', '0', '1', '1', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1'];

// var ai_prediction = ['0', '1', '1', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '1', '0', '1', '0', '1', '1', '1'];


// var ai_confidence_training = ['0.5670254897369433', '0.9052360339775339', '0.5778231680396659', '0.8650246098784862', '0.7623068574857921', '0.6528253203164082', '0.6028434787297063', '0.6728260073113845', '0.899029185532578', '0.9372138956994225', '0.9496509275223372', '0.6085822190280632', '0.8503867162473004', '0.9599533638987742', '0.9120568936632487', '0.5640185125034871', '0.8592745936711597', '0.5654395871092195', '0.5321352759653987', '0.5655745817915773'];

// var ai_confidence = ['0.633362177745395', '0.6083980050719481', '0.9259864092161364', '0.5200618169319258', '0.9503444546366031', '0.5646529393518654', '0.9504682722035155', '0.8015096549913441', '0.5207342906173159', '0.8687084269335736', '0.8640755552392604', '0.5330127240001198', '0.5692630280301798', '0.93175759506527', '0.9305217389084697', '0.9273313393478186', '0.5456903260484625', '0.8580906177112373', '0.6688891420394484', '0.575771509289871'];


// var ground_truth_training = ['1', '0', '1', '1', '1', '1', '1', '1', '0', '0', '0', '1', '0', '0', '1', '0', '1', '0', '0', '0'];

// var ground_truth = ['1', '0', '1', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '1', '0', '1', '0', '0', '1', '1'];


// var ai_attention = [
// 	[-1.50497415e-01, -5.73702138e-02,  6.18775075e-01,
// 		1.49153708e-01, -2.08087446e-02,  1.92232570e-02,
// 		3.38579602e-01,  3.98836970e-02],
// 	  [ 8.96580346e-02, -2.04473326e-01,  1.71719237e+00,
// 		1.49153708e-01, -1.14354362e-02, -1.94368487e-01,
// 		3.38579602e-01,  3.98836970e-02],
// 	  [ 4.89917118e-01,  2.36836011e-01,  2.08333147e+00,
// 		1.49153708e-01, -1.14354362e-02,  1.92232570e-02,
// 		3.38579602e-01,  7.04611980e-01],
// 	  [-5.10730590e-01,  1.61813424e-02,  1.71719237e+00,
// 	   -3.24350127e-01, -1.14354362e-02, -1.94368487e-01,
// 		3.38579602e-01,  3.72247839e-01],
// 	  [-7.10860132e-01, -2.04473326e-01,  9.84914173e-01,
// 	   -3.24350127e-01, -1.14354362e-02,  1.92232570e-02,
// 	   -8.28936267e-01, -3.92189687e-01],
// 	  [ 1.05027983e+00, -5.73702138e-02,  9.84914173e-01,
// 		1.49153708e-01,  1.66844889e-02,  1.92232570e-02,
// 		3.38579602e-01, -7.57790243e-01],
// 	  [-7.10860132e-01,  1.61813424e-02,  9.84914173e-01,
// 	   -3.24350127e-01, -2.06212785e-03,  1.92232570e-02,
// 	   -8.28936267e-01, -6.24844586e-01],
// 	  [-4.30678773e-01,  1.61813424e-02,  6.18775075e-01,
// 		6.22657543e-01,  3.07444515e-02,  1.92232570e-02,
// 	   -8.28936267e-01,  3.98836970e-02],
// 	  [ 9.60621799e-03,  2.36836011e-01,  6.18775075e-01,
// 		1.49153708e-01, -1.14354362e-02,  1.92232570e-02,
// 		3.38579602e-01,  3.98836970e-02],
// 	  [-5.10730590e-01,  1.61813424e-02, -4.79642218e-01,
// 		1.49153708e-01,  2.13711431e-02,  1.92232570e-02,
// 		3.38579602e-01,  3.98836970e-02],
// 	  [-4.70704682e-01,  1.61813424e-02, -4.79642218e-01,
// 		1.49153708e-01,  2.13711431e-02,  1.92232570e-02,
// 		3.38579602e-01,  3.98836970e-02],
// 	  [-2.70575140e-01,  1.61813424e-02, -1.13503120e-01,
// 		1.49153708e-01, -2.54953988e-02,  1.92232570e-02,
// 		3.38579602e-01,  1.50228592e+00],
// 	  [ 1.09030574e+00, -1.30921770e-01, -4.79642218e-01,
// 		1.49153708e-01,  1.19978347e-02,  1.92232570e-02,
// 		3.38579602e-01,  2.06065768e-01],
// 	  [ 1.13033165e+00,  1.61813424e-02,  2.08333147e+00,
// 		1.49153708e-01, -1.14354362e-02,  1.92232570e-02,
// 		3.38579602e-01,  3.72247839e-01],
// 	  [ 4.96321263e-02,  1.61813424e-02, -1.13503120e-01,
// 	   -3.24350127e-01,  3.07444515e-02,  1.92232570e-02,
// 	   -8.28936267e-01,  3.98836970e-02],
// 	  [ 3.69839393e-01, -5.73702138e-02,  1.35105327e+00,
// 		6.22657543e-01,  1.66844889e-02,  1.92232570e-02,
// 		3.38579602e-01,  1.36934026e+00],
// 	  [-2.30549232e-01, -5.73702138e-02, -1.13503120e-01,
// 		6.22657543e-01,  1.66844889e-02,  1.92232570e-02,
// 		3.38579602e-01,  7.04611980e-01],
// 	  [ 9.70228017e-01, -1.30921770e-01,  1.71719237e+00,
// 	   -3.24350127e-01, -1.14354362e-02,  1.92232570e-02,
// 		3.38579602e-01,  7.04611980e-01],
// 	  [ 2.89787576e-01,  1.61813424e-02,  9.84914173e-01,
// 		1.49153708e-01,  1.66844889e-02,  1.92232570e-02,
// 		3.38579602e-01,  3.72247839e-01],
// 	  [-7.04455986e-02,  1.61813424e-02,  9.84914173e-01,
// 		1.49153708e-01, -2.08087446e-02,  1.92232570e-02,
// 		3.38579602e-01,  3.72247839e-01]
// ];














var age_training = ['61', '48', '70', '31', '42', '27', '32', '36', '35', '30', '39', '36', '26', '22', '56', '47', '45', '42', '47', '68'];

var age = ['48', '55', '45', '34', '49', '35', '43', '80', '58', '40', '39', '24', '43', '33', '70', '21', '22', '59', '68', '40'];


var workClass_training = ['Local government', 'State government', 'self employment(incorporated)', 'Local government', 'Private', 'Private', 'State government', 'State government', 'Private', 'Private', 'State government', 'Private', 'Private', 'Private', 'Private', 'Private', 'self employment(not incorporated)', 'Private', 'Private', 'Federal government'];

var workClass = ['self employment(not incorporated)', 'Private', 'Private', 'Private', 'self employment(incorporated)', 'Private', 'Private', 'Private', 'Private', 'Local government', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'self employment(not incorporated)', 'State government'];



var education_number_training = ['14', '16', '16', '13', '13', '15', '14', '14', '15', '13', '13', '12', '13', '12', '11', '11', '11', '10', '9', '10'];

var education_number = ['16', '16', '9', '9', '11', '13', '11', '11', '13', '15', '15', '13', '13', '12', '11', '10', '13', '12', '11', '14'];


var marital_status_training = ['Divorced', 'Divorced', 'Married civilian spouse', 'Never married', 'Married civilian spouse', 'Never married', 'Never married', 'Never married', 'Never married', 'Married civilian spouse', 'Never married', 'Married civilian spouse', 'Never married', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Divorced'];

var marital_status = ['Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Separated', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Divorced', 'Married civilian spouse', 'Never married', 'Never married', 'Widowed', 'Married civilian spouse', 'Married civilian spouse'];


var occupation_training = ['Professional specialty', 'Professional specialty', 'Executive Managerial', 'Professional specialty', 'Technical support', 'Professional specialty', 'Administrative clerical', 'Professional specialty', 'Professional specialty', 'Professional specialty', 'Executive Managerial', 'Sales', 'Professional specialty', 'Handlers/Cleaners', 'Craft repair', 'Sales', 'Farming/Fishing', 'Technical support', 'Executive Managerial', 'Administrative clerical'];

var occupation = ['Professional specialty', 'Professional specialty', 'Administrative clerical', 'Administrative clerical', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Craft repair', 'Transport moving', 'Professional specialty', 'Executive Managerial', 'Sales', 'Professional specialty', 'Professional specialty', 'Machine operation inspector', 'Sales', 'Sales', 'Executive Managerial', 'Professional specialty', 'Professional specialty'];


var race_training = ['White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'Asian Pacific Islander', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'Black'];

var race = ['White', 'White', 'White', 'Black', 'White', 'White', 'White', 'White', 'White', 'Black', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White'];


var gender_training = ['Female', 'Male', 'Male', 'Male', 'Male', 'Female', 'Female', 'Female', 'Male', 'Female', 'Female', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Female', 'Male', 'Female'];

var gender = ['Male', 'Male', 'Female', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Female', 'Female', 'Male', 'Male', 'Female', 'Male', 'Male', 'Female', 'Female', 'Male', 'Male'];


var work_hours_per_week_training = ['70', '50', '40', '40', '40', '40', '38', '30', '45', '20', '40', '60', '50', '20', '48', '40', '50', '40', '60', '40'];

var work_hours_per_week = ['60', '40', '40', '40', '60', '45', '45', '24', '45', '40', '48', '40', '55', '32', '50', '40', '16', '40', '40', '35'];


var ai_prediction_training = ['1', '1', '1', '0', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0'];

var ai_prediction = ['1', '1', '0', '0', '1', '1', '0', '1', '1', '0', '0', '0', '1', '0', '1', '0', '0', '0', '1', '1'];


var ai_confidence_training = ['0.8428171752417997', '0.8835320702949286', '0.9068897556855608', '0.6601942835483634', '0.5221019930535833', '0.803229839231149', '0.8602732946607505', '0.8771301026914721', '0.5182636102365169', '0.9011465517955352', '0.8642569766610272', '0.5378241029086058', '0.663521865679136', '0.8987686510617616', '0.5570771153384472', '0.6080198616116932', '0.5746822115810195', '0.8982077612331438', '0.6151596031104204', '0.6456534040219943'];

var ai_confidence = ['0.8763947393912713', '0.8482935946848027', '0.8691865177381048', '0.8645550772351465', '0.5670254897369433', '0.5041614596634386', '0.5975879019915624', '0.5968256330427815', '0.7963894796241315', '0.7666531105686796', '0.5396114594392363', '0.6518801871566856', '0.6550015563483265', '0.8297349589154424', '0.6979166955079072', '0.9104639466559736', '0.9587531753552283', '0.8415193741465107', '0.5655745817915773', '0.5004440316683663'];


var ground_truth_training = ['0', '1', '1', '0', '1', '0', '0', '0', '1', '0', '0', '1', '1', '0', '1', '1', '1', '1', '0', '0'];

var ground_truth = ['1', '1', '0', '0', '1', '1', '1', '0', '0', '0', '1', '0', '1', '0', '1', '0', '0', '1', '0', '1'];


var ai_attention = [[ 0.28978758, -0.13092177,  2.08333147,  0.14915371, -0.01143544,
	0.01922326,  0.3385796 ,  0.70461198],
  [ 0.56996893,  0.01618134,  2.08333147,  0.14915371, -0.01143544,
	0.01922326,  0.3385796 ,  0.0398837 ],
  [ 0.16970985,  0.01618134, -0.47964222,  0.62265754,  0.03074445,
	0.01922326, -0.82893627,  0.0398837 ],
  [-0.27057514,  0.01618134, -0.47964222,  0.14915371,  0.03074445,
   -0.19436849,  0.3385796 ,  0.0398837 ],
  [ 0.32981348, -0.05737021,  0.25263598,  0.14915371,  0.01668449,
	0.01922326,  0.3385796 ,  0.70461198],
  [-0.23054923,  0.01618134,  0.98491417,  0.14915371,  0.01668449,
	0.01922326,  0.3385796 ,  0.20606577],
  [ 0.08965803,  0.01618134,  0.25263598,  0.14915371,  0.01668449,
	0.01922326,  0.3385796 ,  0.20606577],
  [ 1.57061664,  0.01618134,  0.25263598,  0.14915371,  0.02137114,
	0.01922326,  0.3385796 , -0.49189893],
  [ 0.69004666,  0.01618134,  0.98491417,  0.62265754, -0.03018205,
	0.01922326,  0.3385796 ,  0.20606577],
  [-0.03041969,  0.16328445,  1.71719237, -0.56110204, -0.01143544,
   -0.19436849, -0.82893627,  0.0398837 ],
  [-0.0704456 ,  0.01618134,  1.71719237,  0.14915371,  0.01668449,
	0.01922326, -0.82893627,  0.30577501],
  [-0.67083422,  0.01618134,  0.98491417,  0.14915371, -0.02080874,
	0.01922326,  0.3385796 ,  0.0398837 ],
  [ 0.08965803,  0.01618134,  0.98491417,  0.14915371, -0.01143544,
	0.01922326,  0.3385796 ,  0.53842991],
  [-0.31060105,  0.01618134,  0.61877508,  0.62265754, -0.01143544,
	0.01922326, -0.82893627, -0.22600762],
  [ 1.17035756,  0.01618134,  0.25263598,  0.14915371,  0.00262453,
	0.01922326,  0.3385796 ,  0.37224784],
  [-0.79091195,  0.01618134, -0.11350312, -0.32435013, -0.02080874,
	0.01922326,  0.3385796 ,  0.0398837 ],
  [-0.75088604,  0.01618134,  0.98491417, -0.32435013, -0.02080874,
	0.01922326, -0.82893627, -0.75779024],
  [ 0.73007257,  0.01618134,  0.61877508, -0.79785396,  0.01668449,
	0.01922326, -0.82893627,  0.0398837 ],
  [ 1.09030574, -0.13092177,  0.25263598,  0.14915371, -0.01143544,
	0.01922326,  0.3385796 ,  0.0398837 ],
  [-0.03041969, -0.20447333,  1.35105327,  0.14915371, -0.01143544,
	0.01922326,  0.3385796 , -0.12629837]];



var human_attention_original = null;



var task_num_training = 1;
var task_num = 20;


const order_list_training = [];

for(var i = 0;i < task_num_training;i++){
	order_list_training.push(i);
}

for (let i = 1; i < order_list_training.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [order_list_training[i], order_list_training[random]] = [order_list_training[random], order_list_training[i]];
}

console.log(order_list_training);






const order_list = [];
for(var i = 0;i < task_num;i++){
	order_list.push(i);
}

for (let i = 1; i < order_list.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [order_list[i], order_list[random]] = [order_list[random], order_list[i]];
}

console.log(order_list);


//console.log(order_list);


// var currMode = combn_code[Math.floor(Math.random() * combn_code.length)];


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

var reason_1 = null;
var reason_2 = null;

var first_feature = null;
var second_feature = null;

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



var all_data_tosave = [];
var all_data_tosave_training = [];


var ai_suggestion_seen = false;

var timestamp1 = null;
var timestamp2 = null;
var timetrain = null;

var interaction_log_in_this_button = null;
var user_interaction_log_thispape = [];
var user_interaction_log = [];

var questionnaire_data = null;

var case_num_each_confidence = [0, 0, 0, 0, 0];
var correct_case_num_each_confidence = [0, 0, 0, 0, 0];


var attention_check_useranswer = [];

// Highchart
var reliability_data = [0, 0, 0, 0, 0];


const reliability_chart = Highcharts.chart('container_reliability', {
	exporting:{
		enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
	},
	credits: {
		enabled: false
	},



	title: {
		text: 'Self-confidence vs Accuracy'
	},

	xAxis: [{
		categories: ['0.5','0.6','0.7','0.8','0.9','1'],
		title: { text: 'Confidence',
		style:{
			fontSize: '16px'
		}},
		labels: {
		style:{
			fontSize: '16px'
		}
		},
		alignTicks: false
	}],

	yAxis: [{
		max: 1,
		min: 0,
		title: { text: 'Accuracy',
		style:{
			fontSize: '16px'
		}},
		labels: {
		style:{
			fontSize: '16px'
		}
		}
	}],

	// plotOptions: {
	// 	histogram: {
	// 	accessibility: {
	// 		point: {
	// 		valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
	// 		}
	// 	}
	// 	}
	// },

	tooltip: {
		pointFormat: '<b>{point.y:.1f}</b>'
	},

	series: [{
		name: 'Actual Accuracy',
		type: 'histogram',
		data: reliability_data,
		baseSeries: 's1',
		zIndex: -1
	}, {
		name: 'Target Accuracy',
		type: 'spline',
		marker: {
		enabled: false,
		states:{
			hover:{
			enabled: false
			}
		},
		},
		data: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],

	},

	]
});


var reliability_data_perfect = [0.55, 0.65, 0.75, 0.85, 0.95];

const reliability_chart_perfect = Highcharts.chart('container_reliability_perfect', {
	exporting:{
		enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
	},
	credits: {
		enabled: false
	},



	title: {
		text: 'Self-confidence vs Accuracy'
	},

	xAxis: [{
		categories: ['0.5','0.6','0.7','0.8','0.9','1'],
		title: { text: 'Confidence',
		style:{
			fontSize: '16px'
		}},
		labels: {
		style:{
			fontSize: '16px'
		}
		},
		alignTicks: false
	}],

	yAxis: [{
		max: 1,
		min: 0,
		title: { text: 'Accuracy',
		style:{
			fontSize: '16px'
		}},
		labels: {
		style:{
			fontSize: '16px'
		}
		}
	}],
	tooltip: {
		pointFormat: '<b>{point.y:.1f}</b>'
	},
	// plotOptions: {
	// 	histogram: {
	// 	accessibility: {
	// 		point: {
	// 		valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
	// 		}
	// 	}
	// 	}
	// },

	// plotOptions: {
	// 	line: {
	// 		dataLabels: {
	// 			enabled: true,
	// 			formatter: function() {
	// 				return 'HEIHEI';
	// 			},
	// 			// format: "{x}      {y}"
	// 		}
	// 	}
	// },

	series: [{
		name: 'Actual Accuracy',
		type: 'histogram',
		data: reliability_data_perfect,
		// dataLabels: {
		// 	enabled: true,
		// 	rotation: -90,
		// 	color: '#FFFFFF',
		// 	align: 'right',
		// 	// format: '{point.y:.2f}', // one decimal
		// 	formatter: function() {
		// 		return 'HEIHEI';
		// 	},
		// 	y: 10, // 10 pixels down from the top
		// 	style: {
		// 	  fontSize: '13px',
		// 	  fontFamily: 'Verdana, sans-serif'
		// 	}
		// },
		baseSeries: 's1',
		zIndex: -1
	}, {
		name: 'Target Accuracy',
		type: 'spline',
		marker: {
		enabled: false,
		states:{
			hover:{
			enabled: false
			}
		},
		},
		data: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
	},

	]
});



const reliability_chart_intro = Highcharts.chart('container_reliability_intro', {
	exporting:{
		enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
	},
	credits: {
		enabled: false
	},



	title: {
		text: 'Self-confidence vs Accuracy'
	},

	xAxis: [{
		categories: ['0.5','0.6','0.7','0.8','0.9','1'],
		title: { text: 'Confidence',
		style:{
			fontSize: '16px'
		}},
		labels: {
		style:{
			fontSize: '16px'
		}
		},
		alignTicks: false
	}],

	yAxis: [{
		max: 1,
		min: 0,
		title: { text: 'Accuracy',
		style:{
			fontSize: '16px'
		}},
		labels: {
		style:{
			fontSize: '16px'
		}
		}
	}],

	tooltip: {
		pointFormat: '<b>{point.y:.1f}</b>'
	},


	// plotOptions: {
	// 	histogram: {
	// 	accessibility: {
	// 		point: {
	// 		valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
	// 		}
	// 	}
	// 	}
	// },

	series: [{
		name: 'Actual Accuracy',
		type: 'histogram',
		data: reliability_data,
		baseSeries: 's1',
		zIndex: -1
	}, {
		name: 'Target Accuracy',
		type: 'spline',
		marker: {
		enabled: false,
		states:{
			hover:{
			enabled: false
			}
		},
		},
		data: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
	},

	]
});


var prolific_id = 'prolific_id';






var categories = [
	'Age', 'WorkClass', 'Year of Education', 'Marital Status', 'Occupation', 'Race', 'Gender',  'Work hour/week', 'Base chance'
];
	
const explanation_chart = Highcharts.chart('container', {
	exporting:{
		enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
	},
	credits: {
		enabled: false
	},
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
		-2.2, -2.1, -2.2, -2.4, 0, 0, 0, 0, -1
		],
		color:"#A4D3EE"
	}, {
		name: '> 50k/y',
		data: [
		0, 0, 0, 0, 2.6, 1, 2, 3, 0
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
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户初始decision的第一个radiobutton
$("#radio-first-decision-1").click(function(){
	var what_clicked = "radio-first-decision-1";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('radio-first-decision-1').value;
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log(this_value);
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this, this_value];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户初始decision的第二个radiobutton
$("#radio-first-decision-2").click(function(){
	var what_clicked = "radio-first-decision-2";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('radio-first-decision-2').value;
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log(this_value);
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this, this_value];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户初始的confidence
$("#range-first-confidence-1").click(function(){
	var what_clicked = "range-first-confidence-1";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('range-first-confidence-1').value;
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log(this_value);
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this, this_value];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});




//第二步的查看AI建议的按钮
$("#see_suggestion1").click(function(){
	var what_clicked = "see_suggestion1";
	var timestamp_this = new Date().getTime(); //1610075969354
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});



//进入第三步的按钮
$("#makefinaldecision_button").click(function(){
	var what_clicked = "makefinaldecision_button";
	var timestamp_this = new Date().getTime(); //1610075969354
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户最终decision的第一个radiobutton
$("#radio-final-decision-1").click(function(){
	var what_clicked = "radio-final-decision-1";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('radio-final-decision-1').value;
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log(this_value);
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this, this_value];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户最终decision的第二个radiobutton
$("#radio-final-decision-2").click(function(){
	var what_clicked = "radio-final-decision-2";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('radio-final-decision-2').value;
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log(this_value);
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this, this_value];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户最终的confidence
$("#range-final-confidence-1").click(function(){
	var what_clicked = "range-final-confidence-1";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('range-final-confidence-1').value;
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log(this_value);
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this, this_value];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//进入下一个task的按钮
$("#next-task").click(function(){
	var what_clicked = "next-task";
	var timestamp_this = new Date().getTime(); //1610075969354
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//结束的按钮
$("#go_to_next").click(function(){
	var what_clicked = "go_to_next";
	var timestamp_this = new Date().getTime(); //1610075969354
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//退出的按钮
$("#exit_button").click(function(){
	var what_clicked = "exit_button";
	var timestamp_this = new Date().getTime(); //1610075969354
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});


$("#page-train").click(function(){
	var what_clicked = "page-train";
	var timestamp_this = new Date().getTime(); //1610075969354
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});


$("#pager-training-20tasks").click(function(){
	var what_clicked = "pager-training-20tasks";
	var timestamp_this = new Date().getTime(); //1610075969354
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});
$("#pager-0").click(function(){
	var what_clicked = "pager-0";
	var timestamp_this = new Date().getTime(); //1610075969354
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

$("#next-task_training").click(function(){
	var what_clicked = "next-task_training";
	var timestamp_this = new Date().getTime(); //1610075969354
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});






$("#page-train").click(function(){

	timestamp1 = new Date().getTime(); //1610075969354 

	var percentage = parseInt(11/order_list.length*100);
	//console.log(percentage);

	var objData = $("#form_info").serializeArray();
	if(!checkFormInfo(objData)){
		return;
	}
	else{
		userinfo = objData;
	}

	prolific_id = userinfo[0].value;

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




$("#pager-training-20tasks").click(function(){

	// 先进行attention check
	if((document.getElementById('attention_question_1-1').checked == false && document.getElementById('attention_question_1-2').checked == false) || (document.getElementById('attention_question_2-1').checked == false && document.getElementById('attention_question_2-2').checked == false)){
		alert("Please answer the above question");
		return false;
	}else{

		var attentionData1 = $("#firstcheck").serializeArray();
        var attentionData2 = $("#secondcheck").serializeArray();
        
        
        attention_check_useranswer.push([attentionData1[0].value, attentionData2[0].value]);



		var attentionData1 = $("#firstcheck").serializeArray();
		console.log(attentionData1);
		var attentionData2 = $("#firstcheck").serializeArray();
		console.log(attentionData2.value);
		// if(attentionData1[0].value == 1 || attentionData2[0].value == 1){
		// 	alert("Sorry! You failed the attention check!");
		// 	document.getElementById("pager-training-20tasks").textContent = "You failed attention check";
		// 	document.getElementById("pager-training-20tasks").style.display = "none";
		// }else{

		if(current_idx_training == 0){
			timestamp2 = new Date().getTime();
			timetrain = timestamp2 - timestamp1;
		}
	
		$(".nav-tabs a[href='#traindemo1']").tab('show');
		$("html, body").animate({ scrollTop: 0 }, "slow");
	
		document.getElementById('whole_procedure').src="step2.png";
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
		// }
	}
});



$("#pager-0").click(function(){

	timestamp1 = new Date().getTime(); //1610075969354 

	var percentage = parseInt(11/order_list.length*100);
	//console.log(percentage);

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
	document.getElementById('whole_procedure').src="step3.png";

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
	
	

	//第二处，AI预测表
	var tb = document.getElementById('AI_suggestion');//获取表格的dom节点
	var td = tb.rows[0].cells[1];//获取0行0列的td单元格
	if(ai_prediction[order_list[current_idx]] == 1){
		td.innerHTML = '> 50k';//动态修改表格的内容为222
	}
	else{
		td.innerHTML = '≤ 50k';//动态修改表格的内容为222
	}



	document.getElementById('radio-first-decision-1').checked = false;
	document.getElementById('radio-first-decision-2').checked = false;
	document.getElementById('range-first-confidence-1').value = "0.4";
	document.getElementById('radio-final-decision-1').checked = false;
	document.getElementById('radio-final-decision-2').checked = false;


	// document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


	// step4，对页面的其他位置进行更新，比如进度数字，进度条

	var percentage = current_idx/order_list.length*100;
	document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
	document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';


	document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


	document.getElementById("introduction_before_main_tasks").style.display = "none";

	update_reliability();

	generate_explanation();

	current_idx += 1;


});



$("#go_to_questionnaire").click(function(){
	$(".nav-tabs a[href='#questionnaire']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

	document.getElementById('whole_procedure').src="step4.png";
	document.getElementById("go_to_next").style.display = "block";
});


var attention_tocheck = false;


$("#next-task").click(function(){

	if(document.getElementById('radio-final-decision-1').checked == false && document.getElementById('radio-final-decision-2').checked == false){
		alert("Please make your final prediction");
		return false;
	}
	/*if((document.getElementById('radio-final-decision-1').checked == true || document.getElementById('radio-final-decision-2').checked == true) && (document.getElementById('radio-final-confidence-1').checked == true || document.getElementById('radio-final-confidence-2').checked == true)){*/
	if (document.getElementById('radio-final-decision-1').checked == true || document.getElementById('radio-final-decision-2').checked == true) {
		

		// 先存储数据！！！
		// 即将进入下一页了，把这一页的用户的interaction log都保存下来，用于区分
		user_interaction_log.push(user_interaction_log_thispape);


		//保存用户的两次决策结果

		timestamp2 = new Date().getTime(); //1610075969354 
		
		var objData2 = $("#finaldecision1").serializeArray();
		


		aisuggestion_1 = ai_prediction[order_list[current_idx-1]];
		aiconfidence_1 = ai_confidence[order_list[current_idx-1]];
		ground_truth_1 = ground_truth[order_list[current_idx-1]];

		seconddecision_1 = objData2[0];



		var time_spent = timestamp2 - timestamp1;
		timestamp1 = timestamp2;

		//console.log("time spent:" + time_spent);

		current_instance_data = [current_idx, order_list[current_idx - 1], firstdecision_1, firstconfidence_1, aisuggestion_1, aiconfidence_1, seconddecision_1, ground_truth_1, time_spent];


		console.log(current_instance_data);

		all_data_tosave.push(current_instance_data);

		//console.log(all_data_tosave);

		// 这是之前的写法，展示一个新的界面
		// $(".nav-tabs a[href='#newdemo2']").tab('show');
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
				// document.getElementById("firstdecision1").style.display="none";
				document.getElementById("suggestion1").style.display="none";
				document.getElementById("finaldecision1").style.display="none";

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


				//第二处，AI预测表
				var tb = document.getElementById('AI_suggestion');//获取表格的dom节点
				var td = tb.rows[0].cells[1];//获取0行0列的td单元格
				if(ai_prediction[order_list[current_idx]] == 1){
					td.innerHTML = '> 50k';//动态修改表格的内容为222
				}
				else{
					td.innerHTML = '≤ 50k';//动态修改表格的内容为222
				}

				// step3，把用户选项框清零

				document.getElementById('radio-first-decision-1').checked = false;
				document.getElementById('radio-first-decision-2').checked = false;
				document.getElementById('range-first-confidence-1').value = "0.4";

				document.getElementById('radio-final-decision-1').checked = false;
				document.getElementById('radio-final-decision-2').checked = false;

				document.getElementById('range-first-confidence-1-show').value = "0";
				document.getElementById('range-first-confidence-2-show').value = "0";


				// document.getElementById('suggested_conf').textContent = 'x%';

				// step4，对页面的其他位置进行更新，比如进度数字，进度条

				// step4，对页面的其他位置进行更新，比如进度数字，进度条
		
				var percentage = current_idx/order_list.length*100;
				document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
				document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';
				document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


				current_idx -= 1;
			}else{
				document.getElementById('question1').textContent = "Q1. What is your prediction?";
				document.getElementById('attentioncheck1').textContent = "≤ 50k";
				document.getElementById('attentioncheck2').textContent = "> 50k";

				/*
				在这里，我要试着改成纯动态页面，就用一个页面，来展示任意数量的instance
				*/
				// step1，先把页面该折叠的地方折叠
				// document.getElementById("firstdecision1").style.display="none";
				document.getElementById("suggestion1").style.display="none";
				document.getElementById("finaldecision1").style.display="none";


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

				//第二处，AI预测表
				var tb = document.getElementById('AI_suggestion');//获取表格的dom节点
				var td = tb.rows[0].cells[1];//获取0行0列的td单元格
				if(ai_prediction[order_list[current_idx]] == 1){
					td.innerHTML = '> 50k';//动态修改表格的内容为222
				}
				else{
					td.innerHTML = '≤ 50k';//动态修改表格的内容为222
				}


				// step3，把用户选项框清零

				document.getElementById('radio-first-decision-1').checked = false;
				document.getElementById('radio-first-decision-2').checked = false;
				document.getElementById('range-first-confidence-1').value = "0.4";

				document.getElementById('radio-final-decision-1').checked = false;
				document.getElementById('radio-final-decision-2').checked = false;

				document.getElementById('range-first-confidence-1-show').value = "0";
				document.getElementById('range-first-confidence-2-show').value = "0";


				// document.getElementById('suggested_conf').textContent = 'x%';


				// step4，对页面的其他位置进行更新，比如进度数字，进度条

				// step4，对页面的其他位置进行更新，比如进度数字，进度条
		
				var percentage = current_idx/order_list.length*100;
				document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
				document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';
				document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;

				// update_reliability();


				// step5，重置按钮状态
				ai_suggestion_seen = false;
			}

			generate_explanation();
			

		}else{
			

			document.getElementById("go_to_questionnaire").style.display = "block";
			document.getElementById("user_prediction").style.display="none";
			document.getElementById("profile").style.display="none";

			// step4，对页面的其他位置进行更新，比如进度数字，进度条
	
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
		document.getElementById('range-first-confidence-1').disabled = false;

		$("html, body").animate({ scrollTop: 0 }, "slow");
		
		//清除当前页的log
		user_interaction_log_thispape = [];
	}


});





function update_reliability(){

	if (current_idx > 0){
		var last_human_pred = current_instance_data[2]['value'];
		var last_groundtruth = current_instance_data[4];
		var last_human_conf = current_instance_data[3]['value'];
		console.log(current_instance_data);
		console.log(last_human_pred);
		console.log(last_groundtruth);
		console.log(last_human_conf);
	
		// if (0 < last_human_conf && last_human_conf <= 0.1){
		// 	case_num_each_confidence[0] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[0] ++;
		// 	}
		// }
	
		// if (0.1 < last_human_conf && last_human_conf <= 0.2){
		// 	case_num_each_confidence[1] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[1] ++;
		// 	}
		// }
	
		// if (0.2 < last_human_conf && last_human_conf <= 0.3){
		// 	case_num_each_confidence[2] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[2] ++;
		// 	}
		// }
	
		// if (0.3 < last_human_conf && last_human_conf <= 0.4){
		// 	case_num_each_confidence[3] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[3] ++;
		// 	}
		// }
	
		// if (0.4 < last_human_conf && last_human_conf <= 0.5){
		// 	case_num_each_confidence[4] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[4] ++;
		// 	}
		// }
	
		if (0.5 < last_human_conf && last_human_conf <= 0.6){
			case_num_each_confidence[0] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[0] ++;
			}
		}
	
		if (0.6 < last_human_conf && last_human_conf <= 0.7){
			case_num_each_confidence[1] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[1] ++;
			}
		}
	
		if (0.7 < last_human_conf && last_human_conf <= 0.8){
			case_num_each_confidence[2] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[2] ++;
			}
		}
	
		if (0.8 < last_human_conf && last_human_conf <= 0.9){
			case_num_each_confidence[3] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[3] ++;
			}
		}
	
		if (0.9 < last_human_conf && last_human_conf <= 1){
			case_num_each_confidence[4] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[4] ++;
			}
		}
	
		reliability_data = [];
	
		console.log(correct_case_num_each_confidence);
		console.log(case_num_each_confidence);
		for (var i = 0; i < 5; i++){
			if (case_num_each_confidence[i] != 0){
				actual_acc = correct_case_num_each_confidence[i]/case_num_each_confidence[i];
			}
			else{
				actual_acc = 0;
			}		
			reliability_data.push(actual_acc);
		}
	}


	// 更新reliability chart中的数值
	reliability_chart.update({
		series: [{
			name: 'Actual Accuracy',
			type: 'histogram',
			data: reliability_data,
			baseSeries: 's1',
			zIndex: -1
		}, {
			name: 'Target Accuracy',
			type: 'spline',
			marker: {
			enabled: false,
			states:{
				hover:{
				enabled: false
				}
			},
			},
			data: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
			tooltip: {
			valueSuffix: ''
			}
		}]
	});




}



function update_reliability_intro(){
	console.log(all_data_tosave_training.length);
	// 先把一开始那20个task的人在不同confidence水平下的accuracy统计出来
	for(var ind = 0; ind < all_data_tosave_training.length; ind ++){
		console.log(i);
	

		each_training_task = all_data_tosave_training[ind];

		var last_human_pred = each_training_task[2]['value'];
		var last_groundtruth = each_training_task[4];
		var last_human_conf = each_training_task[3]['value'];


		console.log(each_training_task);
		console.log(last_human_pred);
		console.log(last_groundtruth);
		console.log(last_human_conf);
	
		// if (0 < last_human_conf && last_human_conf <= 0.1){
		// 	case_num_each_confidence[0] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[0] ++;
		// 	}
		// }
	
		// if (0.1 < last_human_conf && last_human_conf <= 0.2){
		// 	case_num_each_confidence[1] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[1] ++;
		// 	}
		// }
	
		// if (0.2 < last_human_conf && last_human_conf <= 0.3){
		// 	case_num_each_confidence[2] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[2] ++;
		// 	}
		// }
	
		// if (0.3 < last_human_conf && last_human_conf <= 0.4){
		// 	case_num_each_confidence[3] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[3] ++;
		// 	}
		// }
	
		// if (0.4 < last_human_conf && last_human_conf <= 0.5){
		// 	case_num_each_confidence[4] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[4] ++;
		// 	}
		// }
	
		if (0.5 < last_human_conf && last_human_conf <= 0.6){
			case_num_each_confidence[0] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[0] ++;
			}
		}
	
		if (0.6 < last_human_conf && last_human_conf <= 0.7){
			case_num_each_confidence[1] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[1] ++;
			}
		}
	
		if (0.7 < last_human_conf && last_human_conf <= 0.8){
			case_num_each_confidence[2] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[2] ++;
			}
		}
	
		if (0.8 < last_human_conf && last_human_conf <= 0.9){
			case_num_each_confidence[3] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[3] ++;
			}
		}
	
		if (0.9 < last_human_conf && last_human_conf <= 1){
			case_num_each_confidence[4] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[4] ++;
			}
		}
	
		reliability_data = [];
	
		console.log(correct_case_num_each_confidence);
		console.log(case_num_each_confidence);
		for (var i = 0; i < 5; i++){
			if (case_num_each_confidence[i] != 0){
				actual_acc = correct_case_num_each_confidence[i]/case_num_each_confidence[i];
			}
			else{
				actual_acc = 0;
			}		
			reliability_data.push(actual_acc);
		}
	}

	

	// 更新reliability chart中的数值
	reliability_chart_intro.update({
		series: [{
			name: 'Actual Accuracy',
			type: 'histogram',
			data: reliability_data,
			baseSeries: 's1',
			zIndex: -1
		}, {
			name: 'Target Accuracy',
			type: 'spline',
			marker: {
			enabled: false,
			states:{
				hover:{
				enabled: false
				}
			},
			},
			data: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
			tooltip: {
			valueSuffix: ''
			}
		}]
	});



	var tb = document.getElementById('intro_table');//获取表格的dom节点

	for (var iiidx=0; iiidx<5; iiidx ++){

		var td = tb.rows[iiidx+1].cells[1];//获取0行0列的td单元格
		td.innerHTML = correct_case_num_each_confidence[iiidx];

		var td = tb.rows[iiidx+1].cells[2];//获取0行0列的td单元格
		td.innerHTML = case_num_each_confidence[iiidx];
	}

}






$("#see_suggestion1").click(function () {

	//获取人自己的预测数据

	var objData1 = $("#firstdecision1").serializeArray();

	if(document.getElementById('radio-first-decision-1').checked == false && document.getElementById('radio-first-decision-2').checked == false){
		alert("Please make your prediction");
		return false;
	}
	if(document.getElementById('range-first-confidence-1').value < 0.5){
		alert("Please indicate your confidence");
		return false;
	}
	/*if((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && (document.getElementById('radio-first-confidence-1').checked == true || document.getElementById('radio-first-confidence-2').checked == true)){*/
	if ((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && document.getElementById('range-first-confidence-1').value >= 0.5) {
		firstdecision_1 = objData1[0];
		firstconfidence_1 = objData1[1];

		// console.log(firstdecision_1);
		// console.log(firstconfidence_1);
		// console.log(firstdecision_1['value']);

		var pred_value = null;
		// var conf_value = null;
		if (firstdecision_1['value'] == 0){
			pred_value = "≤ 50k";
		}else{
			pred_value = "> 50k";
		}

		// if (firstconfidence_1['value'] == 0){
		// 	conf_value = "Low";
		// }else{
		// 	conf_value = "High";
		// }

		var tb = document.getElementById('human_own_prediction');//获取表格的dom节点
		// 更新人的预测
		var td = tb.rows[0].cells[1];//获取0行0列的td单元格
		td.innerHTML = pred_value;//动态修改表格的内容为222
		// var td = tb.rows[0].cells[2];//获取0行0列的td单元格
		// td.innerHTML = conf_value;//动态修改表格的内容为222

		// 更新人和AI的confidence的slidebar
		document.getElementById('range-first-confidence-2-show').value = ai_confidence[order_list[current_idx-1]]; //AI
		document.getElementById('range-first-confidence-1-show').value = firstconfidence_1['value']; //user


		// 更新人和AI的confidence的数值块
		var td = tb.rows[0].cells[3];//获取1行4列的td单元格
		td.innerHTML = parseInt(firstconfidence_1['value']*100) + '%';

		var tb = document.getElementById('AI_suggestion');//获取表格的dom节点
		var td = tb.rows[0].cells[3];//获取1行4列的td单元格
		td.innerHTML = parseInt(ai_confidence[order_list[current_idx-1]]*100) + '%';



		document.getElementById("suggestion1").style.display="block";
		ai_suggestion_seen = true;

		//冻结step1中的按钮
		document.getElementById('radio-first-decision-1').disabled = true;
		document.getElementById('radio-first-decision-2').disabled = true;
		document.getElementById('range-first-confidence-1').disabled = true;
		
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



var ground_truth_is_show = 0;
$("#show_groundtruth").click(function () {
	if (document.getElementById('radio-first-decision-1_training').checked == false && document.getElementById('radio-first-decision-2_training').checked == false) {
		alert("Please make your prediction");
		return false;
	}
	if(document.getElementById('range-first-confidence-1_training').value < 0.5){
		alert("Please indicate your confidence");
		return false;
	}
	
	/*if((document.getElementById('radio-first-decision-1_training').checked == true || document.getElementById('radio-first-decision-2_training').checked == true) && (document.getElementById('radio-first-confidence-1_training').checked == true || document.getElementById('radio-first-confidence-2_training').checked == true)){*/
	if ((document.getElementById('radio-first-decision-1_training').checked == true || document.getElementById('radio-first-decision-2_training').checked == true) && document.getElementById('range-first-confidence-1_training').value >= 0.5) {
		var gt = ground_truth_training[order_list_training[current_idx_training-1]];
		//console.log(current_idx_training);
		if(gt == 1){
			console.log('>=50k');
			document.getElementById('groundtruth').textContent = '> 50k';
			//$('#groundtruth').textContent = '>=50K';
		}
		else{
			console.log('≤ 50K');
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
		alert("Please check your answer with the actual income");
		return false;
	}
	/*if((document.getElementById('radio-first-decision-1_training').checked == true || document.getElementById('radio-first-decision-2_training').checked == true) && (document.getElementById('radio-first-confidence-1_training').checked == true || document.getElementById('radio-first-confidence-2_training').checked == true) && ground_truth_is_show == 1){*/
	if ((document.getElementById('radio-first-decision-1_training').checked == true || document.getElementById('radio-first-decision-2_training').checked == true)) {
		//保存用户的两次决策结果

		timestamp2 = new Date().getTime(); //1610075969354 
		

		var objData1 = $("#firstdecision1_training").serializeArray();

		
		// console.log(objData);
		
		firstdecision_1 = objData1[0];
		firstconfidence_1 = objData1[1];

		ground_truth_1 = ground_truth_training[order_list_training[current_idx_training-1]];

		var time_spent = timestamp2 - timestamp1;
		timestamp1 = timestamp2;

		//console.log("time spent:" + time_spent);

		current_instance_data_training = [current_idx_training, order_list_training[current_idx_training - 1], firstdecision_1, firstconfidence_1, ground_truth_1, time_spent];


		// current_instance_data = [current_idx_training, order_list_training[current_idx_training - 1], firstdecision_1, firstconfidence_1, time_spent,  ground_truth_1];

		console.log(current_instance_data_training);

		all_data_tosave_training.push(current_instance_data_training);

		//console.log(all_data_tosave_training);

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
			document.getElementById('range-first-confidence-1_training').value = "0.4";
			document.getElementById('groundtruth').textContent = ' ';
			ground_truth_is_show = 0;


			// step4，对页面的其他位置进行更新，比如进度数字，进度条

			var percentage = current_idx_training/order_list_training.length*100;
			//console.log(percentage);

			document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
			document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';
			document.getElementById('progress-text-training').textContent = current_idx_training + 1 + '/' + order_list_training.length;
			

		}else{
			// document.getElementById("goodjob").style.display="block";
			update_reliability_intro();
			document.getElementById("introduction_before_main_tasks").style.display="block";
			document.getElementById("pager-0").style.display = "block";
			document.getElementById("user_prediction_training").style.display="none";
			document.getElementById("profile_training").style.display="none";



			var percentage = current_idx_training/order_list_training.length*100;
			//console.log(percentage);
			document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
			document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';
			document.getElementById('progress-text-training').textContent = current_idx_training + '/' + order_list_training.length;
		}
		current_idx_training += 1;
	}



});



$("#see_realtime_feedback").click(function(){
	//把按钮冻结
	var objData1 = $("#firstdecision1").serializeArray();

	console.log(objData1);

	if(document.getElementById('radio-first-decision-1').checked == false && document.getElementById('radio-first-decision-2').checked == false){
		alert("Please make your prediction");
		return false;
	}
	if(document.getElementById('range-first-confidence-1').value < 0.5){
		alert("Please indicate your confidence in your decision");
		return false;
	}
	/*if((document.getElementById('radio-final-decision-1').checked == true || document.getElementById('radio-final-decision-2').checked == true) && (document.getElementById('radio-final-confidence-1').checked == true || document.getElementById('radio-final-confidence-2').checked == true)){*/
	if ((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && document.getElementById('range-first-confidence-1').value >= 0.5) {

		
		firstdecision_1 = objData1[0];
		firstconfidence_1 = objData1[1];
		
		
		
		
		var true_answer = null;

		if (ground_truth[order_list[current_idx-1]] == 0){
			true_answer = "≤ 50k";
		}else{
			true_answer = "> 50k";
		}




		document.getElementById('radio-first-decision-1').disabled = true;
		document.getElementById('radio-first-decision-2').disabled = true;
		document.getElementById('range-first-confidence-1').disabled = true;
	
		document.getElementById('realtime_feedback').textContent = 'The actual income of this person is ' + true_answer;
		document.getElementById('realtime_feedback').style.display = "block";
	
	
		document.getElementById("next-task").style.display="block";	
	}



});





$("#go_to_next").click(function(){

	var objData = $("#post-task-questionnaire").serializeArray();
	console.log(objData);


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


//must input personal info
function checkIterationFormInfo(objData){
	
	if (objData.length < 12) {
		alert("Please answer all questions before finishing the experiment");
		return false;
	}

	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			// alert("Please answer question: " + objData[i].name);
			alert("Please answer all questions before finishing the experiment");
			return false;
		}
	}
	return true;
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
			console.log(xhr.responseText);
			//alert("Your response has been saved successfully!");
			$("#finishModal").modal('show');
	    }
	};


	var userinfo_alldata = {
		"uid": user_id,

		"prolific_id": prolific_id,

		"condition": 'Exp2_ReliabilityChart3',

		"user_info": userinfo,

		"time_read_tutorial":timetrain,
		"decision_data_training": all_data_tosave_training,


		"decision_data": all_data_tosave,

		"interaction_log": user_interaction_log,

		"questionnaire_data": questionnaire_data,

		"simple_attention_check": attention_check_useranswer,

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
	console.log(sltrelation);
	var relationchoices = relations[sltfeature.selectedIndex - 1];
	//console.log(relationchoices)

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
	//console.log(valuechoices)

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
	//console.log(sltrelation);
	var relationchoices = relations[sltfeature.selectedIndex - 1];
	//console.log(relationchoices)

	for (var i = 0; i < relationchoices.length; i++) {
		sltrelation[i + 1] = new Option(relationchoices[i]);
	}
}

function getValue_training() {
	var sltfeature = document.getElementById("feature_training" + String(addnum_training));
	$("#value_training" + String(addnum_training)).find("option").remove();
	var sltvalue = document.getElementById("value_training" + String(addnum_training));
	var valuechoices = values[sltfeature.selectedIndex - 1];
	//console.log(valuechoices)

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



function intro_page_draw_reliability_chart(){
	
	console.log(all_data_tosave_training.length);
	// 先把一开始那20个task的人在不同confidence水平下的accuracy统计出来
	for(var ind = 0; ind < all_data_tosave_training.length; ind ++){
		console.log(i);
	

		each_training_task = all_data_tosave_training[ind];

		var last_human_pred = each_training_task[2]['value'];
		var last_groundtruth = each_training_task[4];
		var last_human_conf = each_training_task[3]['value'];


		console.log(each_training_task);
		console.log(last_human_pred);
		console.log(last_groundtruth);
		console.log(last_human_conf);
	
		// if (0 < last_human_conf && last_human_conf <= 0.1){
		// 	case_num_each_confidence[0] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[0] ++;
		// 	}
		// }
	
		// if (0.1 < last_human_conf && last_human_conf <= 0.2){
		// 	case_num_each_confidence[1] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[1] ++;
		// 	}
		// }
	
		// if (0.2 < last_human_conf && last_human_conf <= 0.3){
		// 	case_num_each_confidence[2] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[2] ++;
		// 	}
		// }
	
		// if (0.3 < last_human_conf && last_human_conf <= 0.4){
		// 	case_num_each_confidence[3] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[3] ++;
		// 	}
		// }
	
		// if (0.4 < last_human_conf && last_human_conf <= 0.5){
		// 	case_num_each_confidence[4] ++;
		// 	if (last_human_pred == last_groundtruth){
		// 		correct_case_num_each_confidence[4] ++;
		// 	}
		// }
	
		if (0.5 < last_human_conf && last_human_conf <= 0.6){
			case_num_each_confidence[0] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[0] ++;
			}
		}
	
		if (0.6 < last_human_conf && last_human_conf <= 0.7){
			case_num_each_confidence[1] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[1] ++;
			}
		}
	
		if (0.7 < last_human_conf && last_human_conf <= 0.8){
			case_num_each_confidence[2] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[2] ++;
			}
		}
	
		if (0.8 < last_human_conf && last_human_conf <= 0.9){
			case_num_each_confidence[3] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[3] ++;
			}
		}
	
		if (0.9 < last_human_conf && last_human_conf <= 1){
			case_num_each_confidence[4] ++;
			if (last_human_pred == last_groundtruth){
				correct_case_num_each_confidence[4] ++;
			}
		}
	
		reliability_data = [];
	
		console.log(correct_case_num_each_confidence);
		console.log(case_num_each_confidence);
		for (var i = 0; i < 5; i++){
			if (case_num_each_confidence[i] != 0){
				actual_acc = correct_case_num_each_confidence[i]/case_num_each_confidence[i];
			}
			else{
				actual_acc = 0;
			}		
			reliability_data.push(actual_acc);
		}
	}


	update_reliability_intro();
}




function generate_explanation(){

	console.log('Any problem?');
	console.log(current_idx);
	console.log([order_list[current_idx]]);

	var age_importance = parseFloat(ai_attention[order_list[current_idx]][0]);
	var workclass_importance = parseFloat(ai_attention[order_list[current_idx]][1]);
	var education_importance = parseFloat(ai_attention[order_list[current_idx]][2]);
	var marital_importance = parseFloat(ai_attention[order_list[current_idx]][3]);
	var occupation_importance = parseFloat(ai_attention[order_list[current_idx]][4]);
	var race_importance = parseFloat(ai_attention[order_list[current_idx]][5]);
	var gender_importance = parseFloat(ai_attention[order_list[current_idx]][6]);
	var workhour_importance = parseFloat(ai_attention[order_list[current_idx]][7]);



	all_importance = [age_importance, workclass_importance, education_importance, marital_importance, occupation_importance, race_importance, gender_importance, workhour_importance];
	console.log('=======');
	console.log(current_idx);
	console.log(all_importance);


	positive_list = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	negative_list = [0, 0, 0, 0, 0, 0, 0, 0, -1.48360688];

	for(var i = 0; i<8; i++){
		if (all_importance[i] > 0){
			positive_list[i] = all_importance[i];
		}
		else{
			negative_list[i] = all_importance[i];
		}
	}

	explanation_chart.update({
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





$(document).ready(function () {
	var menuYloc = $("#profile").offset().top; //此ID为随着屏幕滚动div的ID
	$(window).scroll(function () {
		var offsetTop = menuYloc + $(window).scrollTop() + "px";
		$("#profile").animate({ top: offsetTop }, { duration: 100, queue: false }); //此ID为随着屏幕滚动div的ID
	});
});