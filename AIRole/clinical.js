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
// "Prof-school", "Some-college", "Some-college", "Masters", "Masters", "Bachelors",
// "Bachelors", "HS-grad", "Bachelors", "Bachelors", "Masters", "Some-college", "Masters",
// "Prof-school", "Masters", "Doctorate"];

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

// var occupation = ['Protective service', 'Executive Managerial', 'Professional specialty', 'Administrative clerical', 'Professional specialty', 'Sales', 'Professional specialty', 'Administrative clerical', 'Executive Managerial', ' specialty', 'Craft repair', 'Other service', 'Professional specialty', 'Administrative clerical', 'Sales', 'Professional specialty', 'Professional specialty', 'Executive Managerial', 'Machine operation inspector', 'Other service', 'Professional specialty', 'Sales', 'Professional specialty', 'Administrative clerical', 'Professional specialty', 'Executive Managerial', 'Professional specialty', 'Executive Managerial', 'Executive Managerial', 'Professional specialty', 'Sales', 'Sales', 'Professional specialty', 'Executive Managerial', 'Transport moving', 'Professional specialty', 'Professional specialty', 'Craft repair', 'Professional specialty', 'Executive Managerial'];


// var relationship_training = ["Not-in-family", "Unmarried", "Not-in-family", "Husband", "Husband", "Wife",
// "Not-in-family", "Wife", "Wife", "Not-in-family",
// "Not-in-family", "Own-child", "Own-child", "Other-relative", "Unmarried", "Husband", "Unmarried", "Husband",
// "Not-in-family", "Not-in-family"];

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

// var occupation = ['Professional specialty', 'Professional specialty', 'Machine operation inspector', 'Other service', 'Administrative clerical', 'Professional specialty', 'Transport moving', 'Professional specialty', 'Craft repair', 'Executive Managerial', 'Professional specialty', 'Professional specialty', 'Sales', 'Farming/Fishing', 'Professional specialty', 'Sales', 'Craft repair', 'Professional specialty', 'Professional specialty', 'Professional specialty', 'Professional specialty', 'Farming/Fishing', 'Farming/Fishing', 'Administrative clerical', 'Executive Managerial', 'Executive Managerial', 'Executive Managerial', 'Administrative clerical', 'Executive Managerial', 'Executive Managerial', 'Sales', 'Executive Managerial', 'Administrative clerical', 'Professional specialty', 'Protective service', 'Administrative clerical', 'Professional specialty', 'Other service', 'Handlers/Cleaners', 'Protective service'];


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







// Data gathered from http://populationpyramid.net/germany/2015/

// Age categories

//---------------------------------
//---------------------------------
//这是AIRoles的数据

var AIRoles_index = 1;


// var text_content = ['Mario Cuomo - One of the Greatest Orators in American History I left Governor Cuomo\'s office that day thinking what I had always thought about him -- that he would have been a great president.  I felt so strongly about this that, at the end of the interview, I mustered the courage to ask him, as many did, why he chose not to run.',
// 'The Madness of THAAD Terminal High-Altitude Area Defense (THAAD) has not been demonstrated to work effectively. It pushes China and North Korea to spend more money on more missiles to overwhelm THAAD (just as the U.S. is moved to spend more money on missile upgrades to counteract the missile defense of other countries). And it is a poor substitute for arms-control negotiations.',
// 'Mike Boggs\' Record Catches Up to Him Federal judicial nominees routinely -- and appropriately -- assure senators that their personal feelings and political positions will play no role in their judicial decisions. But this particular nominee did exactly the opposite when running for election as a state judge in 2004.',
// 'Around the World, America\'s Taxman Cometh by way of the Foreign Account Tax Compliance Act (FATCA) Looking in the proverbial eyes of my cyber American overseas friends, it is easy to empathize with the difficulty of their new, broad range of tax obligations, reporting, banking, expenses, and gut-wrenching decisions.',
// 'The New Millenials: A Thousand Reasons to Believe That the Lost Generation Is Redrawing the Map If you are lost, if you feel overwhelmed by uncertainty, embrace the uncertainty. Uncertainty is another word for opportunity. Open your laptop -- or an old-fashioned pen and paper will do just fine -- and draw your own map.',
// 'Extending Your Social Media Reach: Working the Facebook Author Tag Feature In this digital age, marketing is progressing with leaps and bounds. The advent of social networks has further opened up new avenues for marketers to promote their products and increase their reach. Probably, one of the best social networks for advertising right now is Facebook.',
// 'The Deficit Is Down and the Deficit Hawks Are Furious Not only is the deficit down sharply from its levels of 2009 and 2010, when it was near 10 percent of GDP, it is below the levels that even the deficit hawks had targeted back in those years. In other words, even if we had followed the lead of deficit crusaders like Erskine Bowles and Alan Simpson, the deficit would be no lower today.',
// 'Let\'s Talk Toilet Paper I once worked in a Fortune 500 paper mill that manufactured toilet paper. The mill produced tons of it. Literally tons of it per day, 24/7, 360 days a year. The only "down days" were  Christmas Eve, Christmas Day, Labor Day, the day after Labor Day, and the Fourth of July. Civilians were surprisingly curious about the operation. Here are the answers to five common questions.',
// 'I Fell in Love Slowly and Then All at Once With The Fault in Our Stars The Fault in Our Stars is not a story about cancer. The Fault in Our Stars is a story about love. It\'s about the kind of love that most people only dream about, that very few find, and that those who have experienced will never forget.',
// 'Which Film Will Win the Palme d\'Or? The two souls of cinema coexist in Cannes: independent cinema and commercial cinema. And this magical equilibrium must be preserved, one embellishing the other, making it sing the way a fine wine inspires a delicious dish. Who, then, will win the Palme d\'Or this year?',
// 'Hangout Snapshot: Get a Closer Look at Zella Day This spot the next several days will feature upcoming artists who were performing at the 2015 Hangout festival in Gulf Shores, Alabama, from May 15-17.  It kicks off with Zella Day, a 20-year-old singer-songwriter from Pinetop, Arizona, who now resides in Los Angeles.',
// 'Podcast Review: Gilbert Gottfried\'s Amazing Colossal Podcast, LIVE with Lewis Black It seems I just recently reviewed Gilbert Gottfried\'s Amazing Colossal Podcast but I\'m doing it again so soon because I simply couldn\'t resist his latest offering. A LIVE team-up of epic proportions in front of an audience at Caroline\'s in New York, featuring Gottfried and fellow comedian Lewis Black.',
// 'Mother\s Day In my work teaching older adults, I listen to their issues, guide them in living healthier lives, and build their confidence to keep them moving strong.  I feel I have an honored role.  Together we sort out what matters most in their lives, and find solutions to help them live full, enriched, independent lives.  In return, I receive their joy and wisdom.',
// 'Why It Took Me So Long to Recover Whatever stage of recovery you might be at, know that freedom from the eating disorder is possible. Freedom can be your reality. No matter where you have been or what you have suffered through, hold on. It gets better. There is a future with you in it that is bright and shining.',
// 'What\'s the ROI of a Smile? Smiling is good for you -- both physically and mentally. In fact, there are a slew of scientific studies that prove the physical and psychological effects of smiling. And I\'m not talking about fake smiles, but honest-to-goodness smiles that reach your eyes. They not only affect you, but also have an impact on others around you.',
// 'Let Them Eat Cake! We are all going to die.  Our parents are going to die. There is nothing any of us can do to stop that. So if you truly love someone, help that person find the most happiness they can during their time on this plane of existence, even if that shortens it slightly. I\'d rather have five good years than eight lousy ones.',
// 'Not Worried About Big Brother or Big Government I personally do not believe the U.S. Government is controlled by shadowy figures lurking behind a smoke smoke screen of faux democracy. If anything, the political and social events of the last few years are evidence that no one is ultimately "in control" and that every player is each equally frustrated.',
// 'Why Facebook and YouTube Should Err on the Side of Free Speech They do have a right to set limits that exceed speech rules in democratic countries like the U.S. but they also have a solemn responsibility to take their roles seriously and not arbitrarily censor content unless it clearly violates their stated guidelines.',
// 'The Myth of the Aging Hacker and How to Fight It Technology has a reputation for being a young person\'s game. That\'s a perception I would like to change. Sure, when I was young I had a dozen ideas a day. But I hardly ever completed anything. Now that I am older, I have the ability to finish what I started.',
// 'Of MOOCs and Technology: Why True Education Is Not Content Delivery Today\'s students don\'t need more technology; they don\'t need more PowerPoint and computer-based learning platforms.  What they need are enthusiastic and talented and creative teachers and professors who see education not as a job but as a calling.'];

var text_content = ['Women in Business Q & A: Marilyn Johnson, CEO, International Women\'s Forum In her early career, she was an elementary school educator and a television personality, reporting news and weather. A graduate of John Marshall University, her advanced degrees are in Education, and she attended the Harvard Business School Strategic Leadership Forum representing Finance Sector Marketing for IBM.',
        'Fiduciary Rule: The Real Agenda There\'s a powerful agenda behind the opposition to the rule proposed by the U.S. Department of Labor (DOL) requiring that advisors to retirement plans be fiduciaries: The securities industry wants to preserve its ability to give conflicted advice. There\'s a lot at stake.',
        'Profit Sharing: Labor\'s New Opportunity The stand-out national problem we have today is that in recent decades, profit sharing examples in industry have declined and fallen out of media attention. Profit sharing was commonplace in the first half of the 20th century, but several decades of strong post-World War II growth persuaded many American managers that regular wage and benefit increases could effectively share the wealth with the workforces.',
        'The Deficit Is Down and the Deficit Hawks Are Furious Not only is the deficit down sharply from its levels of 2009 and 2010, when it was near 10 percent of GDP, it is below the levels that even the deficit hawks had targeted back in those years. In other words, even if we had followed the lead of deficit crusaders like Erskine Bowles and Alan Simpson, the deficit would be no lower today.',
        'Which Film Will Win the Palme d\'Or? The two souls of cinema coexist in Cannes: independent cinema and commercial cinema. And this magical equilibrium must be preserved, one embellishing the other, making it sing the way a fine wine inspires a delicious dish. Who, then, will win the Palme d\'Or this year?',
        'Hangout Snapshot: Get a Closer Look at Zella Day This spot the next several days will feature upcoming artists who were performing at the 2015 Hangout festival in Gulf Shores, Alabama, from May 15-17.  It kicks off with Zella Day, a 20-year-old singer-songwriter from Pinetop, Arizona, who now resides in Los Angeles.',
        'Podcast Review: Gilbert Gottfried\'s Amazing Colossal Podcast, LIVE with Lewis Black It seems I just recently reviewed Gilbert Gottfried\'s Amazing Colossal Podcast but I\'m doing it again so soon because I simply couldn\'t resist his latest offering. A LIVE team-up of epic proportions in front of an audience at Caroline\'s in New York, featuring Gottfried and fellow comedian Lewis Black.',
        '"Pour Some Poison" & "Gypsy Runaway Train": Premieres by David Ford and The Roys, Plus a Conversation with bree Debuting here is a "Track-by-Track" of Gypsy Runaway Train, the brand new CD from award-winning brother/sister duo The Roys. Get ready to be rur-i-fied by hot vocals, steamin\' pickin\', unbridled enthusiasm and passion.',
        'Visualizing the Future You Want I truly believe that if my professor hadn\'t reminded me that I knew everything and walked us through that activity, I wouldn\'t have done so well. Can you think of a time when you\'ve visualized success and it\'s worked? Maybe before a race or a big event? Prior to a lecture or trip?',
        '40 Years on the Fence I think in turning 40, perhaps it is forcing me to take a step back. Not to look at 40 years that have passed, but rather 14, 600 days that have passed - - 14, 600 days to make myself either a better person, a worse person or a person that can make a difference in someone else \'s life.',
        'Finding the Face of Depression in a Mirror Then came the Robin Williams news, and a profound sadness as I pictured him in his final moments, believing that the darkness of the world was too much to bear. He gave me hours of happiness for so many years. The least I could do to repay him is to not let his tragic death be in vain.',
        'Two Years After Sandy: Addressing the Emotional Needs of Survivors Two years after Superstorm Sandy hit New York, many individuals, families and communities have recovered, but others are still struggling. The damage wrought by Sandy disrupted thousands of lives and brought communities together in a show of strength, support and resilience.',
        'Bernie\'s Running:  It\'s The Perfect Storm for the Left Senator Bernie Sander\'s announcement that he will seek the Democratic Party nomination for the presidency creates the best possible circumstances for Liberals and traditional Democrats to get their policies accepted as a mandate for action. Now Liberals have to focus on promoting the delivery mechanism.',
        'Rethinking Why to Prioritize Girls\' Education While the individuals and institutions promoting this idea genuinely care about girls, it has unintended consequences. Girls\' education should be promoted because girls matter in and of themselves, rather than because of their potential value as instruments of development change.',
        'Future of WTO Negotiations Hangs in the Balance at G20 Trade Ministers\' Meeting On July 19, Trade Ministers from the G20 group of countries will convene for their annual meeting in Sydney, Australia. The meetings can be used to build consensus toward positions that can be brought back to forums where decisions can be enforced, such as the WTO. And this is exactly what the US plans to do.',
        'Israel\'s Espionage on US Negotiators casts a Shadow on Critical Alliance As Israel reflects on increasing instability in the Middle East and political shoring up needed after Netanyahu\'s election victory, it must remember that the only country in the world that provides it with diplomatic cover in international forums remains the United States',
        'Sneak Peek: HuffPost Brings Real Time Collaboration to the Newsroom If you\'re a regular reader of the Huffington Post you might not have given much thought to the technology behind the news articles that you read, share and comment upon on our site. Since 2005 the tech team at HuffPost has been working hand-in -glove with our editors to create the ultimate digital content delivery system.',
        'Digital Marketing In The Era Of The Empowered Consumer Even though Brinker\'s passion is marketing tools he says at the end of the day they are but a means to an end. The real focus is how marketing is changing to deliver a better customer experience with digital technologies, which comes down to the people and process.',
        'President Takes Aim at Cybersecurity Through Executive Order Just a few hours before the State of the Union address, President Obama signed an executive order authorizing new policies to protect U.S. critical infrastructure cybersecurity. The call for additional legislation in this area acknowledges the need for continued vigilance.',
        'What Silicon Valley Executives Keep Getting Wrong About Education Successful Silicon Valley entrepreneurs who clearly understand the importance of understanding the market and suggestion2-business how effective their products are seem to leave those important instincts at the door when they comment on K-12 education.'];


// var ground_truth_AIRoles = [3,3,3,3,0,0,0,0,1,1,1,1,2,2,2,2,4,4,4,4];
var ground_truth_AIRoles = [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4];

// var ai_prediction = [
// [3, 0, 1, 2, 4],
// [3, 0, 2, 4, 1],
// [3, 1, 0, 2, 4],
// [3, 0, 2, 1, 4],
// [2, 0, 3, 1, 4],
// [4, 0, 2, 3, 1],
// [0, 3, 1, 2, 4],
// [3, 0, 1, 2, 4],
// [1, 2, 3, 0, 4],
// [1, 3, 0, 2, 4],
// [1, 3, 0, 2, 4],
// [1, 3, 0, 2, 4],
// [2, 3, 0, 1, 4],
// [2, 0, 3, 4, 1],
// [2, 3, 0, 1, 4],
// [2, 3, 0, 4, 1],
// [3, 0, 2, 1, 4],
// [3, 0, 4, 2, 1],
// [2, 3, 0, 4, 1],
// [0, 3, 4, 2, 1]];
// var ai_prediction = [[0, 3, 1, 4, 2],
//               [3, 0, 2, 1, 4],
//               [0, 3, 4, 2, 1],
//               [0, 3, 1, 2, 4],
//               [1, 3, 0, 2, 4],
//               [1, 3, 0, 2, 4],
//               [1, 3, 0, 2, 4],
//               [1, 0, 3, 2, 4],
//               [2, 0, 1, 3, 4],
//               [2, 0, 3, 1, 4],
//               [3, 1, 2, 0, 4],
//               [3, 0, 2, 1, 4],
//               [3, 0, 1, 2, 4],
//               [3, 0, 2, 1, 4],
//               [3, 0, 1, 2, 4],
//               [3, 0, 1, 2, 4],
//               [0, 4, 3, 2, 1],
//               [0, 4, 3, 2, 1],
//               [3, 0, 4, 2, 1],
//               [0, 2, 4, 3, 1]]

// var ai_confidence = [
// [0.04,0.04,0.01,0.9,0.01],
// [0.3,0.03,0.07,0.56,0.04],
// [0.02,0.03,0.01,0.92,0.01],
// [0.31,0.04,0.07,0.55,0.03],
// [0.3,0.11,0.38,0.15,0.06],
// [0.26,0.01,0.03,0.02,0.66],
// [0.34,0.18,0.13,0.31,0.04],
// [0.25,0.1,0.09,0.52,0.04],
// [0.06,0.56,0.2,0.15,0.03],
// [0.08,0.58,0.08,0.23,0.03],
// [0.06,0.67,0.05,0.17,0.05],
// [0.06,0.82,0.02,0.08,0.02],
// [0.12,0.04,0.66,0.16,0.03],
// [0.09,0.02,0.83,0.04,0.02],
// [0.11,0.1,0.62,0.12,0.04],
// [0.07,0.03,0.73,0.12,0.04],
// [0.14,0.06,0.1,0.66,0.04],
// [0.24,0.06,0.07,0.44,0.18],
// [0.27,0.06,0.31,0.29,0.07],
// [0.59,0.04,0.1,0.15,0.12]];



var features_AIRoles = [['Cuomo', 'president', 'Governor', 'interview', 'American', 'he', 'History', 'him', 'always', 'end'], ['Defense', 'Korea', 'more', 'spend', 'missile', 'North', 'work', 'countries', 'to', 'poor'], ['political', 'state', 'election', 'Federal', 'Mike', 'personal', 'play', 'But', 'particular', 'senators'], ['American', 'tax', 'World', 'Foreign', 'my', 'America', 'banking', 'new', 'Act', 'Tax'], ['your', 'Reasons', 'you', 'uncertainty', 'or', 'draw', 'will', 'lost', 'word', 'and'], ['Facebook', 'Your', 'social', 'products', 'marketing', 'digital', 'new', 'Probably', 'advent', 'right'], ['deficit', '10', 'Simpson', 'targeted', 'and', '2010', 'like', 'would', 'Not', 'lower'], ['Labor', '24', 'Day', 'were', 'mill', 'July', 'Civilians', 'Let', 'Fortune', 'per'], ['Stars', 'Our', 'love', 'Then', 'Love', 'about', 'will', 'few', 'dream', 'With'], ['Film', 'Cannes', 'must', 'Or', 'cinema', 'will', 'win', 'making', 'And', 'magical'], ['singer', 'Arizona', 'artists', 'Alabama', 'festival', 'old', 'Look', 'Closer', 'will', 'Day'], ['Podcast', 'comedian', 'Review', 'Gottfried', 'Amazing', 'audience', 'LIVE', 'York', 'fellow', 'of'], ['lives', 'my', 'their', 'them', 'and', 'issues', 'joy', 'most', 'feel', 'build'], ['you', 'your', 'eating', 'freedom', 'or', 'Me', 'Why', 'recovery', 'Freedom', 'have'], ['you', 'your', 'They', 'impact', 'studies', 'scientific', 'and', 'prove', 'not', 'affect'], ['Eat', 'Them', 'happiness', 'can', 'truly', 'you', 'love', 'die', 'most', 'five'], ['Government', 'political', 'smoke', 'democracy', 'equally', 'screen', 'few', 'social', 'or', 'events'], ['YouTube', 'speech', 'Facebook', 'They', 'countries', 'Speech', 'content', 'limits', 'Side', 'democratic'], ['Sure', 'Technology', 'How', 'But', 'started', 'would', 'reputation', 'when', 'Hacker', 'what'], ['Technology', 'technology', 'Content', 'students', 'and', 'based', 'Education', 'learning', 'Of', 'teachers']];
var importance_positive = [[0.14166328770698527, 0.10470828262760198, 0.09515690604170879, 0, 0.04455987213424266, 0.037848883731881125, 0.0334257660382896, 0.030523373081875967, 0, 0], [0.07065891794545998, 0.06611628434635627, 0, 0, 0.043984626612176496, 0.040290671830225555, 0, 0.03944845119654354, 0, 0.030505859806805778], [0.0919112119316126, 0.08516695724481074, 0.07413613655958583, 0.05974193705515703, 0.05760596521822545, 0, 0, 0.03001450636965783, 0, 0.018259663235656285], [0.07722967095400977, 0.07667528195069936, 0, 0.061956976318897114, 0, 0.051309371057556286, 0, 0, 0.04500784665563348, 0.03696681018029324], [0, 0, 0, 0.027671039822962706, 0, 0.026483854427230287, 0.02298400664406438, 0.02263011743138256, 0.02012898462093179, 0], [0, 0, 0, 0, 0, 0, 0, 0.010143104366757255, 0.009389385058073716, 0.008898031755042356], [0.07117362452560917, 0, 0, 0.030971027263982705, 0, 0, 0, 0.023436473306838238, 0.02028942783749461, 0.019609475262334693], [0.060573638804247924, 0, 0.05354675730913626, 0.043988818835673, 0, 0.03598270179113606, 0.03162977866434736, 0.031185275807541414, 0, 0], [0, 0.08421348263822469, 0, 0.041926997517804744, 0, 0.03390911657409482, 0.025242600128444544, 0, 0, 0], [0, 0, 0.05406548454327226, 0.04350643612200986, 0, 0.03162760395515887, 0.02090618704285141, 0.020862496596046335, 0, 0], [0, 0.063240857995317, 0, 0.04756709940062459, 0, 0, 0, 0.02524843515544446, 0.024806325930809305, 0.024127671692329433], [0, 0, 0, 0.02683535910785321, 0, 0, 0.018595948553781428, 0.01683041580655271, 0, 0.013253205681857711], [0, 0, 0.06341433636579416, 0.04970826399313829, 0, 0.03714857996047133, 0, 0, 0, 0], [0, 0, 0, 0.03383437833818343, 0, 0, 0, 0, 0.02073395105469158, 0.015569623813626055], [0, 0, 0.03679624758632844, 0, 0, 0, 0, 0.01900487855118153, 0.01419883912413522, 0.013493188174414089], [0, 0.044189113411881975, 0, 0, 0, 0, 0, 0.025737120758766253, 0, 0], [0.26777741481812106, 0.14829566191998747, 0, 0.08101645030749813, 0, 0, 0, 0, 0, 0.03367507729614668], [0, 0.07812479039018204, 0, 0.06267197850158296, 0.05275768442168206, 0.049039179227221695, 0, 0.04160520045918946, 0, 0.03975604238865657], [0.07890815367840184, 0, 0, 0.0462183126281476, 0, 0.040808589018674644, 0, 0, 0.025867806679494763, 0], [0, 0, 0, 0.05202799312797465, 0, 0, 0.03970938171606516, 0, 0.032136057205862247, 0.03193560455061402]];
var importance_negative = [[0, 0, 0, -0.05127143020579729, 0, 0, 0, 0, -0.029078551147917846, -0.028538021057663798], [0, 0, -0.051790022508597225, -0.04899611474746234, 0, 0, -0.039969227918477825, 0, -0.039016501064268426, 0], [0, 0, 0, 0, 0, -0.034819032159987266, -0.03298891362215849, 0, -0.028050866028154476, 0], [0, 0, -0.06940496968305968, 0, -0.05219576454769841, 0, -0.0510782993048205, -0.05022999987520832, 0, 0], [-0.11209444743993538, -0.05628204297009711, -0.05471652552679581, 0, -0.027004149249088408, 0, 0, 0, 0, -0.019699592123222608], [-0.06162364364420798, -0.031121629505577557, -0.029194880141367074, -0.020541001835672503, -0.01814528443262857, -0.01730134645051968, -0.010305194684456296, 0, 0, 0], [0, -0.06096862784360591, -0.04031948399674215, 0, -0.030307501903317203, -0.02830552262612234, -0.025585248894968528, 0, 0, 0], [0, -0.05970125006601638, 0, 0, -0.04026976422924439, 0, 0, 0, -0.03105529404816096, -0.027050456010965222], [-0.1857173847494656, 0, -0.056931060955709226, 0, -0.03793757975261596, 0, 0, -0.022554969963389643, -0.018446129399032816, -0.012518030775587791], [-0.13375905903075128, -0.06385879748790009, 0, 0, -0.04204545612305402, 0, 0, 0, -0.02073697149093879, -0.016307726842465366], [-0.14959567376429098, 0, -0.04812445557204745, 0, -0.042270637184129885, -0.03696354375377006, -0.03601864804261268, 0, 0, 0], [-0.07039302043325323, -0.06079715401689436, -0.029931659367267993, 0, -0.024071670200107722, -0.02180085385644903, 0, 0, -0.016688130062170594, 0], [-0.06652950637144969, -0.06577478263639705, 0, 0, -0.041531686140606504, 0, -0.0351449786203953, -0.03334168188611488, -0.03272543514301482, -0.026630842117823093], [-0.07933014336011808, -0.04683343069266031, -0.036326360457823184, 0, -0.02775882966429463, -0.025819220644130815, -0.02421932697302215, -0.021220615128480044, 0, 0], [-0.0811515132674575, -0.05540293441700887, 0, -0.031813329795407484, -0.026464388054877087, -0.025700641326969906, -0.02154181445835646, 0, 0, 0], [-0.05517246036250324, 0, -0.043156377624536744, -0.04127315164279938, -0.03439295310415657, -0.03180528524916391, -0.031357037234781775, 0, -0.02289532137323115, -0.01595165777825328], [0, 0, -0.08393664462180707, 0, -0.05142297911954692, -0.04663679358739537, -0.046274502218613706, -0.042524962642316415, -0.03953133977222307, 0], [-0.11369907068147894, 0, -0.07459603519458614, 0, 0, 0, -0.04295155185295203, 0, -0.041065643709753255, 0], [0, -0.07705519759185941, -0.06429788113159968, 0, -0.0409729055203274, 0, -0.028561088981271736, -0.02761612541575277, 0, -0.023971267101025668], [-0.06711786272813963, -0.06601963498164551, -0.059228552121677124, 0, -0.051276417100558795, -0.04033899777481045, 0, -0.0392412509191341, 0, 0]];
var importance_AIRoles = [[0.14166328770698527, 0.10470828262760198, 0.09515690604170879, -0.05127143020579729, 0.04455987213424266, 0.037848883731881125, 0.0334257660382896, 0.030523373081875967, -0.029078551147917846, -0.028538021057663798], [0.07065891794545998, 0.06611628434635627, -0.051790022508597225, -0.04899611474746234, 0.043984626612176496, 0.040290671830225555, -0.039969227918477825, 0.03944845119654354, -0.039016501064268426, 0.030505859806805778], [0.0919112119316126, 0.08516695724481074, 0.07413613655958583, 0.05974193705515703, 0.05760596521822545, -0.034819032159987266, -0.03298891362215849, 0.03001450636965783, -0.028050866028154476, 0.018259663235656285], [0.07722967095400977, 0.07667528195069936, -0.06940496968305968, 0.061956976318897114, -0.05219576454769841, 0.051309371057556286, -0.0510782993048205, -0.05022999987520832, 0.04500784665563348, 0.03696681018029324], [-0.11209444743993538, -0.05628204297009711, -0.05471652552679581, 0.027671039822962706, -0.027004149249088408, 0.026483854427230287, 0.02298400664406438, 0.02263011743138256, 0.02012898462093179, -0.019699592123222608], [-0.06162364364420798, -0.031121629505577557, -0.029194880141367074, -0.020541001835672503, -0.01814528443262857, -0.01730134645051968, -0.010305194684456296, 0.010143104366757255, 0.009389385058073716, 0.008898031755042356], [0.07117362452560917, -0.06096862784360591, -0.04031948399674215, 0.030971027263982705, -0.030307501903317203, -0.02830552262612234, -0.025585248894968528, 0.023436473306838238, 0.02028942783749461, 0.019609475262334693], [0.060573638804247924, -0.05970125006601638, 0.05354675730913626, 0.043988818835673, -0.04026976422924439, 0.03598270179113606, 0.03162977866434736, 0.031185275807541414, -0.03105529404816096, -0.027050456010965222], [-0.1857173847494656, 0.08421348263822469, -0.056931060955709226, 0.041926997517804744, -0.03793757975261596, 0.03390911657409482, 0.025242600128444544, -0.022554969963389643, -0.018446129399032816, -0.012518030775587791], [-0.13375905903075128, -0.06385879748790009, 0.05406548454327226, 0.04350643612200986, -0.04204545612305402, 0.03162760395515887, 0.02090618704285141, 0.020862496596046335, -0.02073697149093879, -0.016307726842465366], [-0.14959567376429098, 0.063240857995317, -0.04812445557204745, 0.04756709940062459, -0.042270637184129885, -0.03696354375377006, -0.03601864804261268, 0.02524843515544446, 0.024806325930809305, 0.024127671692329433], [-0.07039302043325323, -0.06079715401689436, -0.029931659367267993, 0.02683535910785321, -0.024071670200107722, -0.02180085385644903, 0.018595948553781428, 0.01683041580655271, -0.016688130062170594, 0.013253205681857711], [-0.06652950637144969, -0.06577478263639705, 0.06341433636579416, 0.04970826399313829, -0.041531686140606504, 0.03714857996047133, -0.0351449786203953, -0.03334168188611488, -0.03272543514301482, -0.026630842117823093], [-0.07933014336011808, -0.04683343069266031, -0.036326360457823184, 0.03383437833818343, -0.02775882966429463, -0.025819220644130815, -0.02421932697302215, -0.021220615128480044, 0.02073395105469158, 0.015569623813626055], [-0.0811515132674575, -0.05540293441700887, 0.03679624758632844, -0.031813329795407484, -0.026464388054877087, -0.025700641326969906, -0.02154181445835646, 0.01900487855118153, 0.01419883912413522, 0.013493188174414089], [-0.05517246036250324, 0.044189113411881975, -0.043156377624536744, -0.04127315164279938, -0.03439295310415657, -0.03180528524916391, -0.031357037234781775, 0.025737120758766253, -0.02289532137323115, -0.01595165777825328], [0.26777741481812106, 0.14829566191998747, -0.08393664462180707, 0.08101645030749813, -0.05142297911954692, -0.04663679358739537, -0.046274502218613706, -0.042524962642316415, -0.03953133977222307, 0.03367507729614668], [-0.11369907068147894, 0.07812479039018204, -0.07459603519458614, 0.06267197850158296, 0.05275768442168206, 0.049039179227221695, -0.04295155185295203, 0.04160520045918946, -0.041065643709753255, 0.03975604238865657], [0.07890815367840184, -0.07705519759185941, -0.06429788113159968, 0.0462183126281476, -0.0409729055203274, 0.040808589018674644, -0.028561088981271736, -0.02761612541575277, 0.025867806679494763, -0.023971267101025668], [-0.06711786272813963, -0.06601963498164551, -0.059228552121677124, 0.05202799312797465, -0.051276417100558795, -0.04033899777481045, 0.03970938171606516, -0.0392412509191341, 0.032136057205862247, 0.03193560455061402]];

var features_business = [['Business', 'CEO', 'Marketing', 'Women', 'she', 'Leadership', 'her', 'John', 'career', 'Finance'], ['Department', 'industry', 'to', 'rule', 'its', 'give', 'securities', 'advice', 'Labor', 'retirement'], ['War', 'growth', 'World', 'industry', 'decades', 'sharing', 'in', 'wealth', 'managers', 'Labor'], ['deficit', '10', 'the', 'its', 'percent', 'words', 'levels', 'of', 'and', 'is'], ['Film', 'the', 'And', 'Or', 'Cannes', 'in', 'wine', 'this', 'Who', 'cinema'], ['singer', 'in', 'old', 'festival', 'from', 'Day', 'artists', 'at', '15', 'the'], ['Podcast', 'comedian', 'Amazing', 'York', 'team', 'his', 'in', 'epic', 'of', 'offering'], ['brand', 'by', 'Track', 'The', 'to', 'David', 'sister', 'Premieres', 'duo', 'award'], ['my', 'success', 'us', 'Future', 'wouldn', 'event', 'worked', 'Want', 'or', 'walked'], ['14', 'passed', 'life', 'to', '600', 'in', 'Years', 'difference', 'make', '40'], ['him', 'in', 'his', 'to', 'death', 'the', 'of', 'He', 'Williams', 'Depression'], ['communities', 'York', 'show', 'Years', 'and', 'individuals', 'of', 'Sandy', 'struggling', 'Survivors'], ['Bernie', 'Democrats', 'Democratic', 'Senator', 'Party', 'traditional', 'for', 'the', 'to', 'Perfect'], ['girls', 'value', 'Girls', 'change', 'Why', 'individuals', 'of', 'care', 'and', 'in'], ['to', 'Trade', 'WTO', 'build', 'in', 'meetings', 'be', '19', 'On', 'And'], ['Israel', 'political', 'election', 'country', 'in', 'States', 'Netanyahu', 'victory', 'East', 'the'], ['HuffPost', 'team', 'the', 'to', 'content', 'comment', 'Time', 'our', 'system', 'news'], ['marketing', 'Marketing', 'customer', 'Consumer', 'to', 'Of', 'the', 'experience', 'Era', 'The'], ['Obama', 'executive', 'Executive', 'President', 'for', 'Order', 'protect', 'State', 'address', 'legislation'], ['market', 'entrepreneurs', 'Successful', 'Valley', 'leave', 'Executives', 'comment', 'Keep', 'the', 'important']];
var features_entertainment = [['Business', 'CEO', 'her', 'Women', 'she', 'Leadership', 'Marketing', 'Finance', 'John', 'Marilyn'], ['to', 'Labor', 'Department', 'The', 'agenda', 'advice', 'Real', 'of', 'Agenda', 'its'], ['decades', 'Labor', 'of', 'problem', 'Profit', 'out', 'have', 'in', 'sharing', '20th'], ['of', 'Simpson', 'percent', 'Furious', 'Are', 'the', 'is', 'its', 'Alan', 'deficit'], ['Film', 'Cannes', 'must', 'Or', 'And', 'cinema', 'will', 'making', 'of', 'sing'], ['singer', 'Arizona', 'artists', 'festival', 'from', 'will', 'Look', 'old', 'songwriter', 'Los'], ['Podcast', 'comedian', 'Amazing', 'Gottfried', 'Review', 'York', 'of', 'audience', 'fellow', 'epic'], ['by', 'David', 'The', 'to', 'Premieres', 'Track', 'duo', 'award', 'sister', 'Plus'], ['or', 'to', 'my', 'think', 'that', 'race', 'you', 'event', 'before', 'of'], ['to', 'think', 'have', 'difference', 'or', 'back', '600', 'that', 'can', '14'], ['to', 'Williams', 'of', 'Robin', 'Depression', 'his', 'Then', 'him', 'news', 'final'], ['show', 'Sandy', 'of', 'York', 'hit', 'communities', 'are', 'thousands', 'others', 'together'], ['Bernie', 'Democrats', 'Democratic', 'Senator', 'Perfect', 'to', 'presidency', 'for', 'will', 'policies'], ['Girls', 'of', 'Education', 'Why', 'should', 'care', 'change', 'to', 'education', 'value'], ['to', 'Trade', 'of', 'can', 'US', 'And', 'countries', 'will', 'WTO', 'back'], ['Israel', 'political', 'election', 'States', 'Netanyahu', 'on', 'must', 'East', 'US', 'country'], ['to', 'tech', 'HuffPost', 'site', 'technology', 'Collaboration', 'Brings', 'Peek', 'Real', '2005'], ['marketing', 'to', 'Marketing', 'The', 'Consumer', 'are', 'Digital', 'experience', 'process', 'end'], ['Obama', 'President', 'State', 'Executive', 'order', 'new', 'for', 'to', 'Takes', 'continued'], ['market', 'Successful', 'Wrong', 'to', 'entrepreneurs', 'important', 'Education', 'are', 'Valley', 'understanding']];
var features_healthy = [['Business', 'CEO', 'Marketing', 'Women', 'Leadership', 'career', 'weather', 'John', 'and', 'Finance'], ['Labor', 'Department', 'the', 'its', 'to', 'The', 'Rule', 'agenda', 'There', 'lot'], ['Labor', 'American', 'Profit', 'War', 'the', 'share', 'and', 'national', 'media', 'profit'], ['the', 'its', '10', 'and', 'Deficit', 'had', 'would', 'deficit', 'even', 'Are'], ['Film', 'dish', 'way', 'the', 'Cannes', 'wine', 'other', 'Win', 'Will', 'The'], ['singer', 'May', 'festival', 'Alabama', 'at', 'This', '20', 'artists', 'upcoming', 'Get'], ['Podcast', 'Black', 'comedian', 'Gottfried', 'Review', 'his', 'LIVE', 'Amazing', 'audience', 'because'], ['David', 'The', 'here', 'brand', 'and', 'Premieres', 'to', 'Track', 'passion', 'Train'], ['my', 'or', 'you', 'You', 'us', 'Future', 'truly', 'walked', 'Want', 'trip'], ['life', 'myself', 'person', 'passed', 'or', 'Years', 'either', 'to', 'can', 'someone'], ['Depression', 'his', 'him', 'He', 'happiness', 'Finding', 'to', 'the', 'news', 'moments'], ['communities', 'Sandy', 'lives', 'and', 'Emotional', 'strength', 'York', 'Years', 'Needs', 'struggling'], ['Bernie', 'Democrats', 'Democratic', 'Party', 'Senator', 'he', 'Perfect', 'the', 'Running', 'best'], ['because', 'Why', 'institutions', 'matter', 'should', 'girls', 'and', 'value', 'education', 'their'], ['can', 'the', 'Trade', '19', 'July', 'US', 'Future', 'will', 'Balance', 'what'], ['Israel', 'political', 'election', 'country', 'Netanyahu', 'East', 'needed', 'States', 'US', 'the'], ['HuffPost', 'you', 'the', 'our', 'content', 'tech', 'news', 'technology', 'Huffington', 'team'], ['marketing', 'Marketing', 'the', 'says', 'he', 'customer', 'focus', 'day', 'better', 'The'], ['Obama', 'President', 'State', 'Through', 'Union', 'few', 'area', 'the', 'legislation', 'Order'], ['entrepreneurs', 'market', '12', 'Keep', 'What', 'the', 'Silicon', 'comment', 'Successful', 'Valley']];
var features_politics = [['Business', 'CEO', 'Marketing', 'Women', 'news', 'School', 'career', 'Education', 'John', 'Leadership'], ['Department', 'industry', 'securities', 'Agenda', 'rule', 'agenda', 'its', 'give', 'advice', 'to'], ['War', 'sharing', 'decades', 'growth', 'World', 'industry', 'American', 'national', 'wealth', 'in'], ['deficit', '10', 'Simpson', 'and', '2010', 'like', 'targeted', 'would', 'lower', 'Not'], ['Film', 'Cannes', 'must', 'Or', 'cinema', 'will', 'making', 'win', 'And', 'magical'], ['singer', 'Arizona', 'artists', 'Alabama', 'Look', 'festival', 'old', 'Day', 'will', 'Closer'], ['Podcast', 'comedian', 'Review', 'Gottfried', 'Amazing', 'audience', 'LIVE', 'fellow', 'York', 'of'], ['David', 'brand', 'new', 'Premieres', 'duo', 'Conversation', 'Roys', 'Some', 'by', 'Train'], ['You', 'or', 'you', 'my', 'truly', 'believe', 'everything', 'big', 'professor', 'and'], ['passed', 'myself', 'person', 'or', '40', 'life', '14', 'have', 'me', 'Not'], ['Williams', 'Robin', 'his', 'Depression', 'him', 'news', 'He', 'Then', 'happiness', 'Finding'], ['communities', 'Sandy', 'and', 'families', 'Emotional', 'struggling', 'individuals', 'hit', 'thousands', 'show'], ['Bernie', 'Democrats', 'Democratic', 'Senator', 'Perfect', 'Party', 'traditional', 'presidency', 'he', 'Liberals'], ['girls', 'Education', 'care', 'Girls', 'because', 'institutions', 'value', 'and', 'Why', 'individuals'], ['Trade', 'WTO', 'can', '19', 'US', 'build', 'countries', 'be', 'meetings', 'July'], ['Israel', 'political', 'election', 'Netanyahu', 'country', 'East', 'on', 'victory', 'US', 'must'], ['HuffPost', 'technology', 'you', 'digital', 'tech', 'content', 'share', 'system', 'news', 'our'], ['marketing', 'Marketing', 'Digital', 'customer', 'digital', 'he', 'Of', 'experience', 'Consumer', 'The'], ['Obama', 'President', 'State', 'executive', 'new', 'few', 'legislation', 'area', 'Order', 'address'], ['market', 'Successful', 'products', 'entrepreneurs', 'leave', 'Education', 'seem', 'Silicon', 'Executives', 'important']];
var features_tech = [['Business', 'Women', 'Marketing', 'her', 'Leadership', 'IBM', 'and', 'career', 'School', 'in'], ['Labor', 'There', 'its', 'Department', 'agenda', 'plans', 'The', 'powerful', 'Agenda', 'industry'], ['American', 'Labor', 'decades', 'national', 'New', 'could', 'sharing', 'share', 'in', 'strong'], ['and', 'only', 'its', 'levels', 'Alan', 'those', 'years', 'would', 'when', 'if'], ['Film', 'And', 'Or', 'Who', 'will', 'way', 'independent', 'this', 'making', 'The'], ['singer', 'feature', 'from', '2015', 'at', 'next', 'now', 'This', 'will', 'were'], ['Podcast', 'comedian', 'Amazing', 'Black', 'his', 'Gottfried', 'York', 'audience', 'an', 'New'], ['by', 'David', 'The', 'Some', 'and', 'ready', 'duo', 'Track', 'Get', 'to'], ['Future', 'and', 'my', 'me', 'that', 've', 'done', 'you', 'when', 'Visualizing'], ['person', 'life', 'look', 'make', 'me', 'that', '600', 'can', 'years', '14'], ['his', 'could', 'world', 'him', 'death', 'me', 'to', 'years', 'He', 'Face'], ['Sandy', 'and', 'After', 'Two', 'others', 'New', 'families', 'support', 'brought', 'disrupted'], ['Bernie', 'Democrats', 'Democratic', 'Senator', 'Party', 'delivery', 'Perfect', 'presidency', 'Left', 'he'], ['Girls', 'because', 'and', 'care', 'Education', 'girls', 'Why', 'development', 'potential', 'institutions'], ['can', 'Future', 'be', '19', 'annual', 'US', 'Trade', 'in', 'countries', 'brought'], ['political', 'Israel', 'election', 'country', 'on', 'Netanyahu', 'East', 'must', 'Middle', 'States'], ['tech', 'technology', 'digital', 'site', 'you', 'team', 'the', 'Since', 'our', 'share'], ['marketing', 'Digital', 'Marketing', 'digital', 'Consumer', 'and', 'to', 'comes', 'the', 'Era'], ['Obama', 'President', 'Cybersecurity', 'State', 'new', 'Just', 'legislation', 'Union', 'need', 'area'], ['Valley', 'Silicon', 'Successful', 'important', 'Wrong', 'entrepreneurs', 'those', 'when', 'products', 'leave']];

var importance_business = [[0.28897699734585475, 0.1171283601512316, 0.09377074523589685, 0.08087475770423201, -0.05635501236539162, 0.05093189857737517, -0.04270522502808377, -0.037500619689600605, 0.03078050574124001, 0.027373645525711403], [-0.07934411712451628, 0.06966598733240145, 0.06471005677387516, -0.05277409578562592, 0.05141680579904521, -0.05011773317440988, 0.04256338723282651, 0.04150507626072244, 0.04083658953736793, 0.032303368958445905], [-0.08510640327478873, 0.08080986580376354, 0.06773520520317945, 0.06462188491075822, -0.06404836821836953, 0.06387972220423338, 0.05958566093700467, -0.05265582819808047, 0.0443580634277832, 0.0428395844619971], [-0.08689535218823437, 0.048872524550746234, 0.04819735102690382, 0.04387721616672298, 0.0376162852558827, -0.03665638280679751, 0.031109549681694156, 0.0290793966575409, 0.023582628206714407, 0.019206702890722367], [-0.03464634186906741, 0.02022218840598639, -0.01914390041940079, 0.014855745715186556, -0.012583999029369524, 0.01155083467723693, 0.009747520241636042, -0.008453635784181427, -0.008068126626120766, -0.007607326113123985], [-0.037823139034524715, 0.016579764376412225, -0.013753189183363839, -0.0125825931691213, 0.01166009787140594, -0.01036180976885682, -0.009783621070146265, 0.008885672176171902, 0.008520637954917216, 0.00657833781780512], [-0.050757775375802346, -0.025442440210638937, -0.018238093338414276, 0.0179974744799291, 0.016760596349565237, -0.015979131880700284, 0.012729969095408002, -0.012366051782624697, 0.011159446108352707, 0.008609784979932627], [0.050453874788476655, 0.04640046850722453, -0.025104483000537768, -0.0203003861103081, 0.01940996527739182, -0.016258183887531794, -0.015946200447347198, -0.015142222208573182, -0.015040996497431734, -0.014007514015902577], [-0.04901032613811044, 0.040664431416884084, -0.027965071110252718, 0.027001149553690925, -0.024020309315891802, -0.022435523724956132, 0.02237155904913643, 0.020165814214591817, 0.018848646731552798, 0.013456569449388143], [-0.05149923946819985, -0.0404414967183417, -0.0399325229568372, 0.03860227978691354, 0.034582948588989415, 0.03341922645940187, 0.027503884956395747, 0.022854525844557435, 0.022668903419973706, 0.022086236333413417], [-0.04226593626034928, 0.04109958447555806, -0.04009220182076564, 0.03732586411948975, -0.03397200386689426, 0.028596084124934033, 0.024927125730204593, -0.01395532570154496, -0.013177446320830451, -0.010612118705346856], [-0.06896827145348243, 0.043622026344027356, -0.03833698797746892, 0.03598062105735732, 0.03283493640976465, 0.032809218958062276, 0.03225300392794217, 0.03177398582921564, 0.028002858124998364, -0.02512241376275342], [-0.03891641003001207, -0.029790323319760486, -0.02609943219642072, -0.017050646241068078, -0.016599048485457218, 0.014119570685823118, 0.012449736499123742, 0.0070783019384295254, 0.0061213651192119755, 0.006116410751595052], [-0.10366348760114713, 0.07602712426414661, -0.051414984977596744, 0.04620083514633061, 0.04266408423023879, 0.03328286160570312, 0.030510177967940748, -0.027169361898201728, 0.02396967256591997, 0.023446153284888877], [0.05484934506377948, -0.054585064560411234, 0.05452684166638607, 0.05283653197096004, 0.04634127773002619, 0.04227758529413106, 0.0405093095983447, -0.03289482752718126, -0.028938545346535997, -0.0245950017376689], [-0.029527129364064965, -0.021938631880074652, -0.017084620238503895, -0.012436318969339253, 0.012034851630238486, 0.011579840312183422, -0.011341646144561311, -0.008653358611590454, -0.008444033642366525, 0.007131320518454537], [-0.08835439921434605, 0.0759591783077114, 0.06826950858470368, 0.056654777101934145, 0.05198030622961566, 0.04646625802508581, 0.038340746219328294, -0.03084143584086604, -0.03025594512992959, -0.020701313882515608], [0.18375057897311028, 0.1427005109043507, 0.043575450921684855, 0.04334166401858285, 0.04183946359093352, -0.0276550962586175, 0.025179596232519006, 0.02394305467869768, 0.021260615492809082, -0.01848687310665687], [-0.07789759934857013, 0.05567771729011296, 0.038549597401041934, -0.03699959353375845, 0.031155212974870332, -0.019691431393785003, -0.018875149238273575, -0.01776271244656621, -0.01519476754205755, -0.013529709136883155], [0.10925756246110668, 0.10445224798988711, 0.10048407739285854, -0.07643988938423749, 0.06133339843383838, 0.04425925890439495, 0.043758098816412204, -0.04208364061721551, 0.041343242656668014, 0.03758336513492138]];
var importance_business_pos = [[0.28897699734585475, 0.1171283601512316, 0.09377074523589685, 0.08087475770423201, 0, 0.05093189857737517, 0, 0, 0.03078050574124001, 0.027373645525711403], [0, 0.06966598733240145, 0.06471005677387516, 0, 0.05141680579904521, 0, 0.04256338723282651, 0.04150507626072244, 0.04083658953736793, 0.032303368958445905], [0, 0.08080986580376354, 0.06773520520317945, 0.06462188491075822, 0, 0.06387972220423338, 0.05958566093700467, 0, 0.0443580634277832, 0.0428395844619971], [0, 0.048872524550746234, 0.04819735102690382, 0.04387721616672298, 0.0376162852558827, 0, 0.031109549681694156, 0.0290793966575409, 0.023582628206714407, 0.019206702890722367], [0, 0.02022218840598639, 0, 0.014855745715186556, 0, 0.01155083467723693, 0.009747520241636042, 0, 0, 0], [0, 0.016579764376412225, 0, 0, 0.01166009787140594, 0, 0, 0.008885672176171902, 0.008520637954917216, 0.00657833781780512], [0, 0, 0, 0.0179974744799291, 0.016760596349565237, 0, 0.012729969095408002, 0, 0.011159446108352707, 0.008609784979932627], [0.050453874788476655, 0.04640046850722453, 0, 0, 0.01940996527739182, 0, 0, 0, 0, 0], [0, 0.040664431416884084, 0, 0.027001149553690925, 0, 0, 0.02237155904913643, 0.020165814214591817, 0.018848646731552798, 0.013456569449388143], [0, 0, 0, 0.03860227978691354, 0.034582948588989415, 0.03341922645940187, 0.027503884956395747, 0.022854525844557435, 0.022668903419973706, 0.022086236333413417], [0, 0.04109958447555806, 0, 0.03732586411948975, 0, 0.028596084124934033, 0.024927125730204593, 0, 0, 0], [0, 0.043622026344027356, 0, 0.03598062105735732, 0.03283493640976465, 0.032809218958062276, 0.03225300392794217, 0.03177398582921564, 0.028002858124998364, 0], [0, 0, 0, 0, 0, 0.014119570685823118, 0.012449736499123742, 0.0070783019384295254, 0.0061213651192119755, 0.006116410751595052], [0, 0.07602712426414661, 0, 0.04620083514633061, 0.04266408423023879, 0.03328286160570312, 0.030510177967940748, 0, 0.02396967256591997, 0.023446153284888877], [0.05484934506377948, 0, 0.05452684166638607, 0.05283653197096004, 0.04634127773002619, 0.04227758529413106, 0.0405093095983447, 0, 0, 0], [0, 0, 0, 0, 0.012034851630238486, 0.011579840312183422, 0, 0, 0, 0.007131320518454537], [0, 0.0759591783077114, 0.06826950858470368, 0.056654777101934145, 0.05198030622961566, 0.04646625802508581, 0.038340746219328294, 0, 0, 0], [0.18375057897311028, 0.1427005109043507, 0.043575450921684855, 0.04334166401858285, 0.04183946359093352, 0, 0.025179596232519006, 0.02394305467869768, 0.021260615492809082, 0], [0, 0.05567771729011296, 0.038549597401041934, 0, 0.031155212974870332, 0, 0, 0, 0, 0], [0.10925756246110668, 0.10445224798988711, 0.10048407739285854, 0, 0.06133339843383838, 0.04425925890439495, 0.043758098816412204, 0, 0.041343242656668014, 0.03758336513492138]];
var importance_business_neg = [[0, 0, 0, 0, -0.05635501236539162, 0, -0.04270522502808377, -0.037500619689600605, 0, 0], [-0.07934411712451628, 0, 0, -0.05277409578562592, 0, -0.05011773317440988, 0, 0, 0, 0], [-0.08510640327478873, 0, 0, 0, -0.06404836821836953, 0, 0, -0.05265582819808047, 0, 0], [-0.08689535218823437, 0, 0, 0, 0, -0.03665638280679751, 0, 0, 0, 0], [-0.03464634186906741, 0, -0.01914390041940079, 0, -0.012583999029369524, 0, 0, -0.008453635784181427, -0.008068126626120766, -0.007607326113123985], [-0.037823139034524715, 0, -0.013753189183363839, -0.0125825931691213, 0, -0.01036180976885682, -0.009783621070146265, 0, 0, 0], [-0.050757775375802346, -0.025442440210638937, -0.018238093338414276, 0, 0, -0.015979131880700284, 0, -0.012366051782624697, 0, 0], [0, 0, -0.025104483000537768, -0.0203003861103081, 0, -0.016258183887531794, -0.015946200447347198, -0.015142222208573182, -0.015040996497431734, -0.014007514015902577], [-0.04901032613811044, 0, -0.027965071110252718, 0, -0.024020309315891802, -0.022435523724956132, 0, 0, 0, 0], [-0.05149923946819985, -0.0404414967183417, -0.0399325229568372, 0, 0, 0, 0, 0, 0, 0], [-0.04226593626034928, 0, -0.04009220182076564, 0, -0.03397200386689426, 0, 0, -0.01395532570154496, -0.013177446320830451, -0.010612118705346856], [-0.06896827145348243, 0, -0.03833698797746892, 0, 0, 0, 0, 0, 0, -0.02512241376275342], [-0.03891641003001207, -0.029790323319760486, -0.02609943219642072, -0.017050646241068078, -0.016599048485457218, 0, 0, 0, 0, 0], [-0.10366348760114713, 0, -0.051414984977596744, 0, 0, 0, 0, -0.027169361898201728, 0, 0], [0, -0.054585064560411234, 0, 0, 0, 0, 0, -0.03289482752718126, -0.028938545346535997, -0.0245950017376689], [-0.029527129364064965, -0.021938631880074652, -0.017084620238503895, -0.012436318969339253, 0, 0, -0.011341646144561311, -0.008653358611590454, -0.008444033642366525, 0], [-0.08835439921434605, 0, 0, 0, 0, 0, 0, -0.03084143584086604, -0.03025594512992959, -0.020701313882515608], [0, 0, 0, 0, 0, -0.0276550962586175, 0, 0, 0, -0.01848687310665687], [-0.07789759934857013, 0, 0, -0.03699959353375845, 0, -0.019691431393785003, -0.018875149238273575, -0.01776271244656621, -0.01519476754205755, -0.013529709136883155], [0, 0, 0, -0.07643988938423749, 0, 0, 0, -0.04208364061721551, 0, 0]];

var importance_entertainment = [[-0.10922698476288477, -0.047813075680576, 0.04215728375278819, -0.03869637515052468, 0.031408566514971696, -0.030036910228352778, -0.02955945126234434, -0.022929561691586827, 0.010540154259903048, 0.009512885795246387], [-0.041911492605431214, -0.02447227901240425, -0.02226835017413797, 0.011550819765945455, -0.010880561305591384, -0.010587197608808864, 0.010227701545856439, -0.0096945360875016, -0.009499664983696143, -0.008540975285271828], [-0.022713009476628864, -0.021367072435248824, -0.01974863211901839, -0.015550378266644545, -0.01459112169572791, 0.01351767288395205, -0.013315381190676939, -0.012258176631327996, 0.008781397260219988, 0.005864721431138387], [-0.05361753630446053, 0.04202092755912901, -0.037623897425841026, 0.028445550527126048, -0.027296811153841454, -0.026665201942915582, -0.02335457776826416, -0.023176880619516803, 0.019240076344114725, 0.018462340317721863], [0.20852989409301775, 0.09140903874481013, -0.06302540884352555, -0.05165105024706426, 0.04708534005018452, 0.040507874108848214, -0.03756542093843628, -0.03517287553624699, -0.033867590292744075, 0.022545305240446945], [0.22830748275564225, -0.08976371261599243, 0.053739480373763755, 0.04614727962555153, -0.04506651447593482, -0.04388119744722041, 0.034899281755613465, 0.03484245264016079, 0.026308415819367225, 0.023398427317626775], [0.15321321076880287, 0.10026641700808532, 0.051432561681429866, -0.05075324640698971, 0.041823691838130374, -0.04034128023278915, -0.03873080234714995, 0.036877474194019995, 0.02395642859570776, 0.02372778816206635], [-0.0823110119489765, 0.06954631598155595, 0.04273972649977948, -0.04253248566437083, 0.04246268845948986, 0.04098091376532551, 0.03662436130550002, 0.032657311646859505, 0.03184736892920739, 0.026771856621368304], [-0.06992068470501597, -0.03263374929126549, -0.03244392356889645, 0.028339282547038196, -0.02657554833917039, 0.02502406141912846, -0.024663992072005335, 0.023031875252050436, -0.022653981137627874, -0.020997458863526577], [-0.07492585776137278, 0.02812428716508593, -0.025750829442405015, -0.02507793144530105, -0.022313149073441944, 0.01922942609040424, -0.018681929598221018, -0.018285429142418954, -0.017884756629725045, 0.015258147968935211], [-0.10823072440816464, 0.09412114785405064, -0.07394463646725268, 0.07133484154789466, -0.06796034971092275, 0.06237873162544125, -0.04937616393398852, 0.04621601704031987, -0.0351696169766912, 0.023204690102818722], [0.0737376882269704, -0.055305826030775176, -0.04983420691911876, -0.039323546099171665, 0.030361960489310745, -0.029328461516961696, -0.028148792445384336, -0.026348975809462966, -0.02602962460403243, 0.022131026442141228], [-0.029512145134732104, -0.020168865772604353, -0.017925567260967955, -0.013870115504192995, 0.011661962916123, -0.007866026955456889, -0.005605561754320773, -0.005424463637882587, -0.00492979142687566, -0.00383806177994593], [0.11057985753549478, -0.042155459712113354, -0.037399399969733745, -0.031160084373854403, -0.03030860203711611, -0.02815691287847816, -0.026438345350628143, -0.022871951859344476, -0.020845557853050225, -0.020029669612935667], [-0.04113109405794583, -0.04099410039372851, -0.020449787904214495, -0.01809417263294717, -0.01773816858012724, 0.017564315519346202, -0.01687792724872744, -0.01335938131969791, 0.011411231711591273, 0.008981325503837718], [-0.023426872683033655, -0.01758399946443975, -0.016867208400297564, -0.014699731986227307, -0.01302550136314029, 0.011331879569170446, -0.00974230634627626, -0.009683809161101028, -0.007917471767673871, -0.0071285743063911776], [-0.036990891661713494, -0.025912574013182674, -0.0231753399894603, -0.0194930171972292, -0.015234357024694799, 0.007016039866942373, 0.006563640305413803, 0.004967996314253483, 0.0032264844994823413, 0.0029779397099649304], [-0.035464888804643546, -0.030350305286991352, -0.025790079485828427, 0.018027048795386677, -0.014562681621332566, -0.01261187118914885, -0.011971359502144797, -0.011873277622721508, -0.011167391237708286, 0.007870002227204735], [-0.044589418811760234, -0.02975266338124243, -0.027056052979256427, -0.010772428530790901, -0.010126234281648234, 0.009981325700976514, -0.009861942145206123, -0.00952833212935201, 0.008938517513201079, 0.008335651398226129], [-0.01702998118685513, -0.015161534707176568, -0.014480405186846264, -0.012252148124869541, -0.011597688341211847, -0.010971033079619311, -0.010903673379647039, -0.010660006020565186, 0.007174089198463385, 0.006377858393519974]];
var importance_entertainment_pos = [[0, 0, 0.04215728375278819, 0, 0.031408566514971696, 0, 0, 0, 0.010540154259903048, 0.009512885795246387], [0, 0, 0, 0.011550819765945455, 0, 0, 0.010227701545856439, 0, 0, 0], [0, 0, 0, 0, 0, 0.01351767288395205, 0, 0, 0.008781397260219988, 0.005864721431138387], [0, 0.04202092755912901, 0, 0.028445550527126048, 0, 0, 0, 0, 0.019240076344114725, 0.018462340317721863], [0.20852989409301775, 0.09140903874481013, 0, 0, 0.04708534005018452, 0.040507874108848214, 0, 0, 0, 0.022545305240446945], [0.22830748275564225, 0, 0.053739480373763755, 0.04614727962555153, 0, 0, 0.034899281755613465, 0.03484245264016079, 0.026308415819367225, 0.023398427317626775], [0.15321321076880287, 0.10026641700808532, 0.051432561681429866, 0, 0.041823691838130374, 0, 0, 0.036877474194019995, 0.02395642859570776, 0.02372778816206635], [0, 0.06954631598155595, 0.04273972649977948, 0, 0.04246268845948986, 0.04098091376532551, 0.03662436130550002, 0.032657311646859505, 0.03184736892920739, 0.026771856621368304], [0, 0, 0, 0.028339282547038196, 0, 0.02502406141912846, 0, 0.023031875252050436, 0, 0], [0, 0.02812428716508593, 0, 0, 0, 0.01922942609040424, 0, 0, 0, 0.015258147968935211], [0, 0.09412114785405064, 0, 0.07133484154789466, 0, 0.06237873162544125, 0, 0.04621601704031987, 0, 0.023204690102818722], [0.0737376882269704, 0, 0, 0, 0.030361960489310745, 0, 0, 0, 0, 0.022131026442141228], [0, 0, 0, 0, 0.011661962916123, 0, 0, 0, 0, 0], [0.11057985753549478, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0.017564315519346202, 0, 0, 0.011411231711591273, 0.008981325503837718], [0, 0, 0, 0, 0, 0.011331879569170446, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0.007016039866942373, 0.006563640305413803, 0.004967996314253483, 0.0032264844994823413, 0.0029779397099649304], [0, 0, 0, 0.018027048795386677, 0, 0, 0, 0, 0, 0.007870002227204735], [0, 0, 0, 0, 0, 0.009981325700976514, 0, 0, 0.008938517513201079, 0.008335651398226129], [0, 0, 0, 0, 0, 0, 0, 0, 0.007174089198463385, 0.006377858393519974]];
var importance_entertainment_neg = [[-0.10922698476288477, -0.047813075680576, 0, -0.03869637515052468, 0, -0.030036910228352778, -0.02955945126234434, -0.022929561691586827, 0, 0], [-0.041911492605431214, -0.02447227901240425, -0.02226835017413797, 0, -0.010880561305591384, -0.010587197608808864, 0, -0.0096945360875016, -0.009499664983696143, -0.008540975285271828], [-0.022713009476628864, -0.021367072435248824, -0.01974863211901839, -0.015550378266644545, -0.01459112169572791, 0, -0.013315381190676939, -0.012258176631327996, 0, 0], [-0.05361753630446053, 0, -0.037623897425841026, 0, -0.027296811153841454, -0.026665201942915582, -0.02335457776826416, -0.023176880619516803, 0, 0], [0, 0, -0.06302540884352555, -0.05165105024706426, 0, 0, -0.03756542093843628, -0.03517287553624699, -0.033867590292744075, 0], [0, -0.08976371261599243, 0, 0, -0.04506651447593482, -0.04388119744722041, 0, 0, 0, 0], [0, 0, 0, -0.05075324640698971, 0, -0.04034128023278915, -0.03873080234714995, 0, 0, 0], [-0.0823110119489765, 0, 0, -0.04253248566437083, 0, 0, 0, 0, 0, 0], [-0.06992068470501597, -0.03263374929126549, -0.03244392356889645, 0, -0.02657554833917039, 0, -0.024663992072005335, 0, -0.022653981137627874, -0.020997458863526577], [-0.07492585776137278, 0, -0.025750829442405015, -0.02507793144530105, -0.022313149073441944, 0, -0.018681929598221018, -0.018285429142418954, -0.017884756629725045, 0], [-0.10823072440816464, 0, -0.07394463646725268, 0, -0.06796034971092275, 0, -0.04937616393398852, 0, -0.0351696169766912, 0], [0, -0.055305826030775176, -0.04983420691911876, -0.039323546099171665, 0, -0.029328461516961696, -0.028148792445384336, -0.026348975809462966, -0.02602962460403243, 0], [-0.029512145134732104, -0.020168865772604353, -0.017925567260967955, -0.013870115504192995, 0, -0.007866026955456889, -0.005605561754320773, -0.005424463637882587, -0.00492979142687566, -0.00383806177994593], [0, -0.042155459712113354, -0.037399399969733745, -0.031160084373854403, -0.03030860203711611, -0.02815691287847816, -0.026438345350628143, -0.022871951859344476, -0.020845557853050225, -0.020029669612935667], [-0.04113109405794583, -0.04099410039372851, -0.020449787904214495, -0.01809417263294717, -0.01773816858012724, 0, -0.01687792724872744, -0.01335938131969791, 0, 0], [-0.023426872683033655, -0.01758399946443975, -0.016867208400297564, -0.014699731986227307, -0.01302550136314029, 0, -0.00974230634627626, -0.009683809161101028, -0.007917471767673871, -0.0071285743063911776], [-0.036990891661713494, -0.025912574013182674, -0.0231753399894603, -0.0194930171972292, -0.015234357024694799, 0, 0, 0, 0, 0], [-0.035464888804643546, -0.030350305286991352, -0.025790079485828427, 0, -0.014562681621332566, -0.01261187118914885, -0.011971359502144797, -0.011873277622721508, -0.011167391237708286, 0], [-0.044589418811760234, -0.02975266338124243, -0.027056052979256427, -0.010772428530790901, -0.010126234281648234, 0, -0.009861942145206123, -0.00952833212935201, 0, 0], [-0.01702998118685513, -0.015161534707176568, -0.014480405186846264, -0.012252148124869541, -0.011597688341211847, -0.010971033079619311, -0.010903673379647039, -0.010660006020565186, 0, 0]];

var importance_healthy = [[-0.019963380395395313, -0.00679311929349504, -0.005896211590410278, -0.005553100731402585, -0.003929214895590346, -0.003784534863701864, 0.003683559899407373, -0.003588549507513958, 0.0033026510288582073, -0.0020843881402252537], [-0.02181987560111829, -0.013225707874956503, -0.011235119475497768, -0.010921246281647076, 0.008310246370472636, -0.008059806442785217, 0.006608208539511642, -0.00543196461324929, 0.005085928013934283, -0.004937902471127219], [-0.015851803631677056, -0.015676173938710073, -0.011882046181348667, -0.01113276450022229, -0.010262083576317652, 0.00895471856122882, 0.008455099049188397, -0.007606676039880526, -0.0066363380098746864, -0.006356205961860558], [-0.03956724099275249, -0.02192506496613551, 0.019403521868573095, 0.01853839255716003, 0.01713397184941171, 0.01665299476897732, -0.015214067680372858, -0.012728595074818997, 0.010763963347471818, 0.01074012900676696], [-0.03167482455674631, 0.015267260373767109, 0.013654900019747285, -0.013368221639588479, -0.012887334528367905, 0.01261684527560559, 0.011658288321756, -0.011218929052972334, -0.010820128570401419, -0.00786577408680039], [-0.031308438349676844, 0.01355457086404868, -0.011071959597412848, -0.00944028179338925, -0.008462743861221263, 0.007443299788320412, 0.007404991651211856, -0.0070981181071544195, -0.006604418867891609, 0.006141341985297787], [-0.02203477803002045, -0.012829617140377034, -0.011751018696064392, 0.010031148023798045, -0.008681837486470776, -0.00824352094385051, 0.0070853890981491955, -0.006826864567834976, -0.006604620462773038, 0.006018963746819932], [-0.017807685369672296, -0.014039264543209869, -0.012339595700697809, -0.012301705456004685, 0.009143450253381627, -0.007186018445731607, 0.006687101700869079, -0.006502144344964317, 0.006202113291075869, 0.005984651739658093], [0.13433703888646809, 0.09928070805028698, 0.08247691161748366, 0.06962339869565146, 0.04816856693914742, -0.04774530752784235, 0.04243046336979466, -0.03699680663674923, -0.036165194572182084, -0.03169247228312385], [0.07900902599001965, 0.07033780782041843, 0.03828394097758971, -0.03749492210857649, 0.036888886291494026, -0.03609614009557744, -0.03256422368177716, 0.02885352994241786, 0.026657450932202592, 0.02055652773253127], [0.1609888689118268, -0.09708548390856864, -0.0703024464833675, -0.06059821980608922, 0.055641274675033214, 0.04829939638289437, 0.03768135475425592, -0.03760655319182844, -0.033501162941877737, 0.027402652170807194], [-0.04423625677931589, -0.03773571251514497, 0.03368875507886572, 0.027869762343003368, 0.022164079884847775, 0.01875389942306072, -0.018399846971725257, -0.017884480725755783, -0.017003664546834916, 0.015674757229672674], [-0.013726671060537134, -0.009345411568776671, -0.008346300940494593, -0.006262747849460587, -0.005967851578934398, -0.004663481531437819, 0.004309746904128665, -0.0036020811191675405, 0.0029862474088009215, 0.0027876288334715725], [0.050706986975296554, 0.026854677688797277, -0.023337654612842842, 0.02213067774030205, -0.020814651477382012, -0.01952587348967657, 0.018511760741536792, -0.01732909252798764, -0.015747802333147185, -0.012594522151007431], [0.023587201407186602, -0.015586715016513668, -0.012636512858839405, -0.01258468808146012, -0.010536408248536322, -0.010513624712888242, -0.008922824191929132, -0.008296869508583025, 0.007785982328405808, 0.004607164146911191], [-0.01157740627035082, -0.009545034097460681, -0.008091706454524507, -0.006311760572697893, -0.004657315291653192, -0.004440841241396846, 0.004083822806222449, -0.0038572631116608118, -0.003055401362920979, -0.0029072028322981477], [-0.03803905363453813, 0.03106173046719476, -0.02648585183317818, 0.022625150496584652, -0.017985239592305417, -0.017432798936600567, -0.012834753762640328, -0.012524743472642692, 0.011994504043917876, -0.011592988781994579], [-0.04014986604676834, -0.03076760115260836, -0.01173184382372238, -0.011091536420182645, -0.010643129301157062, -0.009566068664175536, 0.008966634464441207, 0.008681400085856031, 0.00801302416374678, -0.007388101003408241], [-0.03115160215766334, -0.02164556077100905, -0.013512941680109464, 0.010273147122114096, -0.009829715931532175, 0.009248519432422931, 0.00801039748037042, -0.007193966910432589, -0.006714957939482103, -0.004940447665064694], [-0.0471935338061559, -0.04451456555730407, 0.03314863420380871, 0.031485080823728084, 0.029757815778300993, -0.02923601734706614, -0.027417907240583798, -0.021748862783404148, -0.021529673974225297, -0.02117378404198983]];
var importance_healthy_pos = [[0, 0, 0, 0, 0, 0, 0.003683559899407373, 0, 0.0033026510288582073, 0], [0, 0, 0, 0, 0.008310246370472636, 0, 0.006608208539511642, 0, 0.005085928013934283, 0], [0, 0, 0, 0, 0, 0.00895471856122882, 0.008455099049188397, 0, 0, 0], [0, 0, 0.019403521868573095, 0.01853839255716003, 0.01713397184941171, 0.01665299476897732, 0, 0, 0.010763963347471818, 0.01074012900676696], [0, 0.015267260373767109, 0.013654900019747285, 0, 0, 0.01261684527560559, 0.011658288321756, 0, 0, 0], [0, 0.01355457086404868, 0, 0, 0, 0.007443299788320412, 0.007404991651211856, 0, 0, 0.006141341985297787], [0, 0, 0, 0.010031148023798045, 0, 0, 0.0070853890981491955, 0, 0, 0.006018963746819932], [0, 0, 0, 0, 0.009143450253381627, 0, 0.006687101700869079, 0, 0.006202113291075869, 0.005984651739658093], [0.13433703888646809, 0.09928070805028698, 0.08247691161748366, 0.06962339869565146, 0.04816856693914742, 0, 0.04243046336979466, 0, 0, 0], [0.07900902599001965, 0.07033780782041843, 0.03828394097758971, 0, 0.036888886291494026, 0, 0, 0.02885352994241786, 0.026657450932202592, 0.02055652773253127], [0.1609888689118268, 0, 0, 0, 0.055641274675033214, 0.04829939638289437, 0.03768135475425592, 0, 0, 0.027402652170807194], [0, 0, 0.03368875507886572, 0.027869762343003368, 0.022164079884847775, 0.01875389942306072, 0, 0, 0, 0.015674757229672674], [0, 0, 0, 0, 0, 0, 0.004309746904128665, 0, 0.0029862474088009215, 0.0027876288334715725], [0.050706986975296554, 0.026854677688797277, 0, 0.02213067774030205, 0, 0, 0.018511760741536792, 0, 0, 0], [0.023587201407186602, 0, 0, 0, 0, 0, 0, 0, 0.007785982328405808, 0.004607164146911191], [0, 0, 0, 0, 0, 0, 0.004083822806222449, 0, 0, 0], [0, 0.03106173046719476, 0, 0.022625150496584652, 0, 0, 0, 0, 0.011994504043917876, 0], [0, 0, 0, 0, 0, 0, 0.008966634464441207, 0.008681400085856031, 0.00801302416374678, 0], [0, 0, 0, 0.010273147122114096, 0, 0.009248519432422931, 0.00801039748037042, 0, 0, 0], [0, 0, 0.03314863420380871, 0.031485080823728084, 0.029757815778300993, 0, 0, 0, 0, 0]];
var importance_healthy_neg = [[-0.019963380395395313, -0.00679311929349504, -0.005896211590410278, -0.005553100731402585, -0.003929214895590346, -0.003784534863701864, 0, -0.003588549507513958, 0, -0.0020843881402252537], [-0.02181987560111829, -0.013225707874956503, -0.011235119475497768, -0.010921246281647076, 0, -0.008059806442785217, 0, -0.00543196461324929, 0, -0.004937902471127219], [-0.015851803631677056, -0.015676173938710073, -0.011882046181348667, -0.01113276450022229, -0.010262083576317652, 0, 0, -0.007606676039880526, -0.0066363380098746864, -0.006356205961860558], [-0.03956724099275249, -0.02192506496613551, 0, 0, 0, 0, -0.015214067680372858, -0.012728595074818997, 0, 0], [-0.03167482455674631, 0, 0, -0.013368221639588479, -0.012887334528367905, 0, 0, -0.011218929052972334, -0.010820128570401419, -0.00786577408680039], [-0.031308438349676844, 0, -0.011071959597412848, -0.00944028179338925, -0.008462743861221263, 0, 0, -0.0070981181071544195, -0.006604418867891609, 0], [-0.02203477803002045, -0.012829617140377034, -0.011751018696064392, 0, -0.008681837486470776, -0.00824352094385051, 0, -0.006826864567834976, -0.006604620462773038, 0], [-0.017807685369672296, -0.014039264543209869, -0.012339595700697809, -0.012301705456004685, 0, -0.007186018445731607, 0, -0.006502144344964317, 0, 0], [0, 0, 0, 0, 0, -0.04774530752784235, 0, -0.03699680663674923, -0.036165194572182084, -0.03169247228312385], [0, 0, 0, -0.03749492210857649, 0, -0.03609614009557744, -0.03256422368177716, 0, 0, 0], [0, -0.09708548390856864, -0.0703024464833675, -0.06059821980608922, 0, 0, 0, -0.03760655319182844, -0.033501162941877737, 0], [-0.04423625677931589, -0.03773571251514497, 0, 0, 0, 0, -0.018399846971725257, -0.017884480725755783, -0.017003664546834916, 0], [-0.013726671060537134, -0.009345411568776671, -0.008346300940494593, -0.006262747849460587, -0.005967851578934398, -0.004663481531437819, 0, -0.0036020811191675405, 0, 0], [0, 0, -0.023337654612842842, 0, -0.020814651477382012, -0.01952587348967657, 0, -0.01732909252798764, -0.015747802333147185, -0.012594522151007431], [0, -0.015586715016513668, -0.012636512858839405, -0.01258468808146012, -0.010536408248536322, -0.010513624712888242, -0.008922824191929132, -0.008296869508583025, 0, 0], [-0.01157740627035082, -0.009545034097460681, -0.008091706454524507, -0.006311760572697893, -0.004657315291653192, -0.004440841241396846, 0, -0.0038572631116608118, -0.003055401362920979, -0.0029072028322981477], [-0.03803905363453813, 0, -0.02648585183317818, 0, -0.017985239592305417, -0.017432798936600567, -0.012834753762640328, -0.012524743472642692, 0, -0.011592988781994579], [-0.04014986604676834, -0.03076760115260836, -0.01173184382372238, -0.011091536420182645, -0.010643129301157062, -0.009566068664175536, 0, 0, 0, -0.007388101003408241], [-0.03115160215766334, -0.02164556077100905, -0.013512941680109464, 0, -0.009829715931532175, 0, 0, -0.007193966910432589, -0.006714957939482103, -0.004940447665064694], [-0.0471935338061559, -0.04451456555730407, 0, 0, 0, -0.02923601734706614, -0.027417907240583798, -0.021748862783404148, -0.021529673974225297, -0.02117378404198983]];

var importance_politics = [[-0.15817167138551042, -0.06804683277829018, -0.06292209623046245, -0.03865498955581641, 0.02809302393207765, 0.027933034377206303, -0.026530887271933354, 0.024198086622179437, 0.023227815940008487, -0.019296288136454773], [0.11277567139182394, -0.07103842116934313, -0.051964905702527944, 0.05068672071043669, 0.05058464396380636, 0.04608934092114206, -0.04475824444441206, 0.043127128254086024, -0.03974418057622584, -0.0375013152262623], [0.09914282705052936, -0.09381066760749417, 0.0865737875512496, -0.08214913161522386, -0.06861268779463865, -0.06541597649213853, 0.058161214695477866, 0.05654163153706758, 0.052475921287445895, -0.04708021187080628], [0.07102330420772478, -0.06034133479965918, -0.040605599901230194, -0.029833401402893787, -0.027297964903636094, -0.027286782091134297, 0.027253165492733707, 0.02295730226463041, 0.021451879575258546, 0.02086448499916974], [-0.1325714160905778, -0.06461953950453428, 0.0540356849924015, 0.043193653496399864, -0.040737604176328886, 0.03145553194186148, 0.022003656165881645, 0.019827131757084174, -0.019427111550332988, -0.017413540092809536], [-0.15546817635313012, 0.06727678592898552, -0.05093442829766544, 0.04786184631425726, -0.03863073132611882, -0.038400801077097965, -0.03725251953286461, 0.02483621498166408, 0.024462080449278265, 0.02378438305920133], [-0.07191749206902939, -0.06006740524956297, -0.029279449364311275, 0.026824768258367073, -0.024865199541111622, -0.022179195782030446, 0.018000583169920086, -0.0167414850424285, 0.015188116853717019, 0.014312599457423053], [-0.03691402922522453, -0.03382185982906305, -0.031208371819854048, -0.024379861990774868, -0.022949153077502192, -0.02194773944151375, 0.017803084315535154, 0.017381803311309438, 0.01724840351648346, 0.015918846847017908], [-0.045339151656203114, -0.04411925714325706, -0.04298487015475303, -0.042553497429073175, -0.02303776907962032, 0.022945385571702483, -0.02244004888365701, 0.02226825575067355, 0.01782468329766762, -0.015007444438566187], [0.06808276080835729, -0.0511298830493829, -0.03877822247542574, -0.036428230991744276, -0.03437391186215173, -0.032826779732133715, 0.027910878256231956, 0.02630160915446013, -0.025172567168504426, 0.020126703331460407], [-0.08766167336577393, -0.08623552034455845, 0.08246531604137734, -0.08024396323399487, 0.07225615487269581, 0.0718686514731002, 0.06378586444426622, 0.06158907923397125, -0.039554923642232, -0.032619526040137195], [0.14157452646261073, 0.04595782591184022, -0.0440271938029167, 0.040459697117476746, -0.037136708751878265, -0.03130454327153986, -0.02942370005581595, -0.028200814566006722, 0.02807642617857919, -0.02551018192792819], [0.08775714299947592, 0.06237407503144481, 0.055362332386984944, 0.038440195873480375, -0.025427144478553074, 0.024417672075577237, -0.02120313264357763, 0.013749401800713476, 0.009955883493472085, 0.008585039831520655], [0.1178091574886494, 0.06989008963588594, 0.06170742219983137, -0.057194036593020844, -0.053744916974807946, 0.0430020428601973, -0.038380038201467355, -0.03238862718707083, -0.03215972376094012, -0.029775899412450183], [0.1120421012393782, -0.06960333973018977, -0.06068104252487911, 0.051716658911970435, 0.048626637993464936, -0.04789031697677935, 0.0388571947753446, -0.03739210011080894, -0.03664342705587626, 0.03342285434255509], [0.06811615612171712, 0.05266342681055372, 0.04421941537866234, 0.029537804921657595, 0.026850632250977936, 0.023184023811980835, -0.021543063507643453, 0.016499061547102085, 0.01514366623508116, 0.014777979091148105], [0.15731451503700025, -0.08841419432079498, -0.0870176883058003, -0.06879358172717676, -0.06606754172528957, -0.04490975362019329, -0.04344643437021074, 0.04287395699263519, 0.03263412912641093, 0.031396355631171304], [-0.07055661081757826, -0.05927700918621618, -0.028135914510258635, -0.024441191728570226, -0.020308339824618268, 0.0169525406266712, 0.016546561477731123, -0.016374363652285145, -0.014849728433438113, 0.010223557786882045], [0.1780762815702336, 0.11175905414204551, 0.07267877177440778, -0.05317156830873743, -0.04299081774860809, -0.04000945402079574, 0.0361505429182708, -0.03596177968110816, 0.031867612076905846, 0.02461326768802283], [-0.04231701532454389, -0.03744307424074852, -0.0339065038536096, -0.03382185600893503, -0.027592270166956367, 0.026236399518845075, 0.022624774697507583, -0.02109293714741608, -0.020019465789652732, -0.01608347530033044]];
var importance_politics_pos = [[0, 0, 0, 0, 0.02809302393207765, 0.027933034377206303, 0, 0.024198086622179437, 0.023227815940008487, 0], [0.11277567139182394, 0, 0, 0.05068672071043669, 0.05058464396380636, 0.04608934092114206, 0, 0.043127128254086024, 0, 0], [0.09914282705052936, 0, 0.0865737875512496, 0, 0, 0, 0.058161214695477866, 0.05654163153706758, 0.052475921287445895, 0], [0.07102330420772478, 0, 0, 0, 0, 0, 0.027253165492733707, 0.02295730226463041, 0.021451879575258546, 0.02086448499916974], [0, 0, 0.0540356849924015, 0.043193653496399864, 0, 0.03145553194186148, 0.022003656165881645, 0.019827131757084174, 0, 0], [0, 0.06727678592898552, 0, 0.04786184631425726, 0, 0, 0, 0.02483621498166408, 0.024462080449278265, 0.02378438305920133], [0, 0, 0, 0.026824768258367073, 0, 0, 0.018000583169920086, 0, 0.015188116853717019, 0.014312599457423053], [0, 0, 0, 0, 0, 0, 0.017803084315535154, 0.017381803311309438, 0.01724840351648346, 0.015918846847017908], [0, 0, 0, 0, 0, 0.022945385571702483, 0, 0.02226825575067355, 0.01782468329766762, 0], [0.06808276080835729, 0, 0, 0, 0, 0, 0.027910878256231956, 0.02630160915446013, 0, 0.020126703331460407], [0, 0, 0.08246531604137734, 0, 0.07225615487269581, 0.0718686514731002, 0.06378586444426622, 0.06158907923397125, 0, 0], [0.14157452646261073, 0.04595782591184022, 0, 0.040459697117476746, 0, 0, 0, 0, 0.02807642617857919, 0], [0.08775714299947592, 0.06237407503144481, 0.055362332386984944, 0.038440195873480375, 0, 0.024417672075577237, 0, 0.013749401800713476, 0.009955883493472085, 0.008585039831520655], [0.1178091574886494, 0.06989008963588594, 0.06170742219983137, 0, 0, 0.0430020428601973, 0, 0, 0, 0], [0.1120421012393782, 0, 0, 0.051716658911970435, 0.048626637993464936, 0, 0.0388571947753446, 0, 0, 0.03342285434255509], [0.06811615612171712, 0.05266342681055372, 0.04421941537866234, 0.029537804921657595, 0.026850632250977936, 0.023184023811980835, 0, 0.016499061547102085, 0.01514366623508116, 0.014777979091148105], [0.15731451503700025, 0, 0, 0, 0, 0, 0, 0.04287395699263519, 0.03263412912641093, 0.031396355631171304], [0, 0, 0, 0, 0, 0.0169525406266712, 0.016546561477731123, 0, 0, 0.010223557786882045], [0.1780762815702336, 0.11175905414204551, 0.07267877177440778, 0, 0, 0, 0.0361505429182708, 0, 0.031867612076905846, 0.02461326768802283], [0, 0, 0, 0, 0, 0.026236399518845075, 0.022624774697507583, 0, 0, 0]];
var importance_politics_neg = [[-0.15817167138551042, -0.06804683277829018, -0.06292209623046245, -0.03865498955581641, 0, 0, -0.026530887271933354, 0, 0, -0.019296288136454773], [0, -0.07103842116934313, -0.051964905702527944, 0, 0, 0, -0.04475824444441206, 0, -0.03974418057622584, -0.0375013152262623], [0, -0.09381066760749417, 0, -0.08214913161522386, -0.06861268779463865, -0.06541597649213853, 0, 0, 0, -0.04708021187080628], [0, -0.06034133479965918, -0.040605599901230194, -0.029833401402893787, -0.027297964903636094, -0.027286782091134297, 0, 0, 0, 0], [-0.1325714160905778, -0.06461953950453428, 0, 0, -0.040737604176328886, 0, 0, 0, -0.019427111550332988, -0.017413540092809536], [-0.15546817635313012, 0, -0.05093442829766544, 0, -0.03863073132611882, -0.038400801077097965, -0.03725251953286461, 0, 0, 0], [-0.07191749206902939, -0.06006740524956297, -0.029279449364311275, 0, -0.024865199541111622, -0.022179195782030446, 0, -0.0167414850424285, 0, 0], [-0.03691402922522453, -0.03382185982906305, -0.031208371819854048, -0.024379861990774868, -0.022949153077502192, -0.02194773944151375, 0, 0, 0, 0], [-0.045339151656203114, -0.04411925714325706, -0.04298487015475303, -0.042553497429073175, -0.02303776907962032, 0, -0.02244004888365701, 0, 0, -0.015007444438566187], [0, -0.0511298830493829, -0.03877822247542574, -0.036428230991744276, -0.03437391186215173, -0.032826779732133715, 0, 0, -0.025172567168504426, 0], [-0.08766167336577393, -0.08623552034455845, 0, -0.08024396323399487, 0, 0, 0, 0, -0.039554923642232, -0.032619526040137195], [0, 0, -0.0440271938029167, 0, -0.037136708751878265, -0.03130454327153986, -0.02942370005581595, -0.028200814566006722, 0, -0.02551018192792819], [0, 0, 0, 0, -0.025427144478553074, 0, -0.02120313264357763, 0, 0, 0], [0, 0, 0, -0.057194036593020844, -0.053744916974807946, 0, -0.038380038201467355, -0.03238862718707083, -0.03215972376094012, -0.029775899412450183], [0, -0.06960333973018977, -0.06068104252487911, 0, 0, -0.04789031697677935, 0, -0.03739210011080894, -0.03664342705587626, 0], [0, 0, 0, 0, 0, 0, -0.021543063507643453, 0, 0, 0], [0, -0.08841419432079498, -0.0870176883058003, -0.06879358172717676, -0.06606754172528957, -0.04490975362019329, -0.04344643437021074, 0, 0, 0], [-0.07055661081757826, -0.05927700918621618, -0.028135914510258635, -0.024441191728570226, -0.020308339824618268, 0, 0, -0.016374363652285145, -0.014849728433438113, 0], [0, 0, 0, -0.05317156830873743, -0.04299081774860809, -0.04000945402079574, 0, -0.03596177968110816, 0, 0], [-0.04231701532454389, -0.03744307424074852, -0.0339065038536096, -0.03382185600893503, -0.027592270166956367, 0, 0, -0.02109293714741608, -0.020019465789652732, -0.01608347530033044]];

var importance_tech = [[-0.009576954815426007, -0.0035119097819872923, -0.002789111194428049, -0.0021448425240576142, -0.0020861998051420554, 0.0019599139701858533, -0.0016445277103669367, -0.001403614556622255, -0.0010317541644987804, -0.0009598230943368606], [-0.008167254110780321, -0.00440053855083908, 0.003428790055303731, -0.0031964389506781484, -0.002786745284908878, 0.0026211054521947073, -0.0025236246229896836, -0.0024248563232221907, -0.0023935658791898714, 0.001977533965805859], [-0.011396143626935144, -0.01070171231536744, -0.01054601052228453, -0.0071715213981124746, 0.006062483876732084, 0.005694495097384813, 0.005524283009695111, 0.005476051977581691, -0.005448916414555657, 0.004865192767237598], [-0.008004004322916017, 0.004512270541938529, 0.004495967317158321, -0.0036109133971565597, 0.003402570844365968, -0.003334263804705687, 0.002879921334536799, -0.0026910601516892123, -0.00267844756453857, 0.0023459209727246305], [-0.008300073694455339, -0.004823495775087165, -0.004580572004225908, -0.0033324824812478826, 0.0029957159896125646, 0.002754004613628443, 0.0023899174494992886, 0.0022844163345336556, 0.002186067105853261, -0.0021409059339566406], [-0.021888286243604456, 0.009946805860438345, 0.007437135258637342, 0.006865930197916963, -0.006164737974556289, -0.005974922153477975, 0.004726984585165301, 0.004274263353594378, 0.003907959717599457, 0.0032091220969238383], [-0.01370372835630752, -0.007172447048557559, -0.006514952884262275, 0.004092424521296267, -0.003674432301791613, 0.0033643458730710095, 0.0028282217921938, -0.002698614664693012, 0.0026197103696482364, 0.0021334327337771113], [0.007803017188883874, -0.006458659271366776, -0.006110994056259379, 0.0043728645503622295, -0.0043059179185219966, -0.0035917835036358746, -0.0030970902020960108, -0.003070883173292246, 0.0029781146167380174, 0.002673773538649856], [0.014482148589463676, -0.010582094435427637, -0.010416883822259426, -0.006747775190391297, 0.006637956539096838, -0.006428459017248152, -0.0061066791307884906, 0.00555032760369854, -0.0052575987690185256, 0.004993393065859186], [-0.008855638402823265, -0.007349454224621239, 0.006025212174265917, -0.005889656958369093, -0.005558162962371062, 0.00481002835490387, 0.004696420481454754, 0.004264604516641946, 0.003562094809806996, 0.0033154678029013113], [-0.007169326122198284, 0.0068347886800364304, 0.005323780533217885, -0.004706484319486653, -0.004704001415664758, -0.004026982242357775, 0.003741800191518247, 0.003548458960459765, -0.0030617510073234983, 0.002814908604759159], [0.011432803715900965, -0.008351458499411317, -0.007081157115654364, 0.006379822930660238, -0.0061264161301035945, 0.004811001625171756, -0.004721017779007478, -0.004609099566528157, 0.0027923725200076003, 0.0017616190239819788], [-0.007592341799903003, -0.0049867839503227665, -0.004649720551786843, -0.0029643327738998657, -0.0023357345543684595, 0.0021713486570685728, 0.0016423965524025347, -0.0010037761941106848, -0.0009977685358363725, -0.0009374079645228468], [0.006671018457926538, 0.005996721237890648, -0.005588453522184053, -0.00550945471558133, -0.005093137100571982, 0.004848606686117134, -0.004136246968971486, 0.003009696424576686, -0.0029191723676257487, -0.00284451713859157], [0.016869329500883014, 0.008563819322361972, -0.0064432427722928105, -0.005748841593081388, -0.005250144764107008, -0.00514013177677467, -0.005120826867443353, -0.004397902843751192, -0.004180708272592373, 0.003886443066039832], [-0.005000335622913338, -0.0049009700000313145, -0.004202596252129164, -0.003195319777846974, 0.0028226233543323298, -0.002649321352497161, -0.0023514912475496815, -0.0021738610332132924, -0.001822766113288053, -0.0017293230709341197], [0.09680050202575548, 0.08558385414723187, 0.053524140505819384, 0.04137283299639246, 0.039965666347716394, -0.03724612470083629, -0.03708519735359135, -0.028775907775122175, -0.02527221131494462, 0.014622248342642061], [-0.03984133064093321, 0.032471333210921674, -0.02891283660696545, 0.01988149156346047, -0.008510221543574609, -0.007032381018409328, -0.006739797307342058, -0.006687501684395819, -0.006496436527453274, -0.00558769878857985], [-0.025342278904312784, -0.021296096389141317, 0.011539277657347654, -0.011485504151031284, 0.008410676629901281, 0.007156774655106756, -0.005986726718064448, -0.005915826171876059, 0.005846542801447688, 0.00537419359184116], [0.08008904546436445, 0.0780587989256624, -0.035735908346950174, -0.02821551162246928, -0.022231184754820416, -0.021103452242981224, -0.021081417266028538, -0.020229692459791268, 0.01908082713068162, -0.01892619787905269]];
var importance_tech_pos = [[0, 0, 0, 0, 0, 0.0019599139701858533, 0, 0, 0, 0], [0, 0, 0.003428790055303731, 0, 0, 0.0026211054521947073, 0, 0, 0, 0.001977533965805859], [0, 0, 0, 0, 0.006062483876732084, 0.005694495097384813, 0.005524283009695111, 0.005476051977581691, 0, 0.004865192767237598], [0, 0.004512270541938529, 0.004495967317158321, 0, 0.003402570844365968, 0, 0.002879921334536799, 0, 0, 0.0023459209727246305], [0, 0, 0, 0, 0.0029957159896125646, 0.002754004613628443, 0.0023899174494992886, 0.0022844163345336556, 0.002186067105853261, 0], [0, 0.009946805860438345, 0.007437135258637342, 0.006865930197916963, 0, 0, 0.004726984585165301, 0.004274263353594378, 0.003907959717599457, 0.0032091220969238383], [0, 0, 0, 0.004092424521296267, 0, 0.0033643458730710095, 0.0028282217921938, 0, 0.0026197103696482364, 0.0021334327337771113], [0.007803017188883874, 0, 0, 0.0043728645503622295, 0, 0, 0, 0, 0.0029781146167380174, 0.002673773538649856], [0.014482148589463676, 0, 0, 0, 0.006637956539096838, 0, 0, 0.00555032760369854, 0, 0.004993393065859186], [0, 0, 0.006025212174265917, 0, 0, 0.00481002835490387, 0.004696420481454754, 0.004264604516641946, 0.003562094809806996, 0.0033154678029013113], [0, 0.0068347886800364304, 0.005323780533217885, 0, 0, 0, 0.003741800191518247, 0.003548458960459765, 0, 0.002814908604759159], [0.011432803715900965, 0, 0, 0.006379822930660238, 0, 0.004811001625171756, 0, 0, 0.0027923725200076003, 0.0017616190239819788], [0, 0, 0, 0, 0, 0.0021713486570685728, 0.0016423965524025347, 0, 0, 0], [0.006671018457926538, 0.005996721237890648, 0, 0, 0, 0.004848606686117134, 0, 0.003009696424576686, 0, 0], [0.016869329500883014, 0.008563819322361972, 0, 0, 0, 0, 0, 0, 0, 0.003886443066039832], [0, 0, 0, 0, 0.0028226233543323298, 0, 0, 0, 0, 0], [0.09680050202575548, 0.08558385414723187, 0.053524140505819384, 0.04137283299639246, 0.039965666347716394, 0, 0, 0, 0, 0.014622248342642061], [0, 0.032471333210921674, 0, 0.01988149156346047, 0, 0, 0, 0, 0, 0], [0, 0, 0.011539277657347654, 0, 0.008410676629901281, 0.007156774655106756, 0, 0, 0.005846542801447688, 0.00537419359184116], [0.08008904546436445, 0.0780587989256624, 0, 0, 0, 0, 0, 0, 0.01908082713068162, 0]];
var importance_tech_neg = [[-0.009576954815426007, -0.0035119097819872923, -0.002789111194428049, -0.0021448425240576142, -0.0020861998051420554, 0, -0.0016445277103669367, -0.001403614556622255, -0.0010317541644987804, -0.0009598230943368606], [-0.008167254110780321, -0.00440053855083908, 0, -0.0031964389506781484, -0.002786745284908878, 0, -0.0025236246229896836, -0.0024248563232221907, -0.0023935658791898714, 0], [-0.011396143626935144, -0.01070171231536744, -0.01054601052228453, -0.0071715213981124746, 0, 0, 0, 0, -0.005448916414555657, 0], [-0.008004004322916017, 0, 0, -0.0036109133971565597, 0, -0.003334263804705687, 0, -0.0026910601516892123, -0.00267844756453857, 0], [-0.008300073694455339, -0.004823495775087165, -0.004580572004225908, -0.0033324824812478826, 0, 0, 0, 0, 0, -0.0021409059339566406], [-0.021888286243604456, 0, 0, 0, -0.006164737974556289, -0.005974922153477975, 0, 0, 0, 0], [-0.01370372835630752, -0.007172447048557559, -0.006514952884262275, 0, -0.003674432301791613, 0, 0, -0.002698614664693012, 0, 0], [0, -0.006458659271366776, -0.006110994056259379, 0, -0.0043059179185219966, -0.0035917835036358746, -0.0030970902020960108, -0.003070883173292246, 0, 0], [0, -0.010582094435427637, -0.010416883822259426, -0.006747775190391297, 0, -0.006428459017248152, -0.0061066791307884906, 0, -0.0052575987690185256, 0], [-0.008855638402823265, -0.007349454224621239, 0, -0.005889656958369093, -0.005558162962371062, 0, 0, 0, 0, 0], [-0.007169326122198284, 0, 0, -0.004706484319486653, -0.004704001415664758, -0.004026982242357775, 0, 0, -0.0030617510073234983, 0], [0, -0.008351458499411317, -0.007081157115654364, 0, -0.0061264161301035945, 0, -0.004721017779007478, -0.004609099566528157, 0, 0], [-0.007592341799903003, -0.0049867839503227665, -0.004649720551786843, -0.0029643327738998657, -0.0023357345543684595, 0, 0, -0.0010037761941106848, -0.0009977685358363725, -0.0009374079645228468], [0, 0, -0.005588453522184053, -0.00550945471558133, -0.005093137100571982, 0, -0.004136246968971486, 0, -0.0029191723676257487, -0.00284451713859157], [0, 0, -0.0064432427722928105, -0.005748841593081388, -0.005250144764107008, -0.00514013177677467, -0.005120826867443353, -0.004397902843751192, -0.004180708272592373, 0], [-0.005000335622913338, -0.0049009700000313145, -0.004202596252129164, -0.003195319777846974, 0, -0.002649321352497161, -0.0023514912475496815, -0.0021738610332132924, -0.001822766113288053, -0.0017293230709341197], [0, 0, 0, 0, 0, -0.03724612470083629, -0.03708519735359135, -0.028775907775122175, -0.02527221131494462, 0], [-0.03984133064093321, 0, -0.02891283660696545, 0, -0.008510221543574609, -0.007032381018409328, -0.006739797307342058, -0.006687501684395819, -0.006496436527453274, -0.00558769878857985], [-0.025342278904312784, -0.021296096389141317, 0, -0.011485504151031284, 0, 0, -0.005986726718064448, -0.005915826171876059, 0, 0], [0, 0, -0.035735908346950174, -0.02821551162246928, -0.022231184754820416, -0.021103452242981224, -0.021081417266028538, -0.020229692459791268, 0, -0.01892619787905269]];

//这是AIRoles的数据
//---------------------------------
//---------------------------------

// for(var i = 0; i < feature_importance.length; i++)
// {
// 	console.log(typeof(feature_importance[i]));
// }

// var tessst = ('dhj',2);
// console.log(typeof(tessst));
// console.log(tessst)


var categories1 = [
'medical', 'offers', 'Professional', 'online', 'for', 'such', 'Why', 'Twitter', 'voice', 'ways'
];
	
const chart1 = Highcharts.chart('explanation1', {
chart: {
	type: 'bar'
},
title: {
	text: null
},
xAxis: {
	categories: categories1,
	reversed: true,
	labels: {
	step: 1,
	style:{
		fontSize: '16px'
	}
	},
}, 

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
		'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
	}
},

series: [{
	name: 'NOT BUSINESS',
	data: [
		-0.14203645477026278, 0, 0, 0, 0, 0, 0, -0.026412569022124452,  -0.02129103475746552, -0.01934431956369927
	],
	color:"#5F9EA0"
}, {
	name: 'BUSINESS',
	data: [
		0, 0.07584092116156863, 0.06581142928551402, 0.05521963855846932, 0.04519346713589002, 0.042151476090971356, 0.03817440008557368, 0, 0, 0
	],
	color:"#1F77B4"
}]
});

const chart1_copy3 = Highcharts.chart('explanation1-copy3', {
chart: {
	type: 'bar'
},
title: {
	text: null
},
xAxis: {
	categories: categories1,
	reversed: true,
	labels: {
	step: 1,
	style:{
		fontSize: '16px'
	}
	},
}, 

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
		'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
	}
},

series: [{
	name: 'NOT BUSINESS',
	data: [
		-0.14203645477026278, 0, 0, 0, 0, 0, 0, -0.026412569022124452,  -0.02129103475746552, -0.01934431956369927
	],
	color:"#5F9EA0"
}, {
	name: 'BUSINESS',
	data: [
		0, 0.07584092116156863, 0.06581142928551402, 0.05521963855846932, 0.04519346713589002, 0.042151476090971356, 0.03817440008557368, 0, 0, 0
	],
	color:"#1F77B4"
}]
});

const chart1_copy2 = Highcharts.chart('explanation1-copy2', {
chart: {
	type: 'bar'
},
title: {
	text: null
},
xAxis: {
	categories: categories1,
	reversed: true,
	labels: {
	step: 1,
	style:{
		fontSize: '16px'
	}
	},
}, 

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
		'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
	}
},

series: [{
	name: 'NOT BUSINESS',
	data: [
		-0.14203645477026278, 0, 0, 0, 0, 0, 0, -0.026412569022124452,  -0.02129103475746552, -0.01934431956369927
	],
	color:"#5F9EA0"
}, {
	name: 'BUSINESS',
	data: [
		0, 0.07584092116156863, 0.06581142928551402, 0.05521963855846932, 0.04519346713589002, 0.042151476090971356, 0.03817440008557368, 0, 0, 0
	],
	color:"#1F77B4"
}]
});






var categories2 = [
	'Why', 'Should', 'to', 'for', 'information', 'patients', 'use', 'online', 'Twitter', 'Young'
	];
		
	const chart2 = Highcharts.chart('explanation2', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories2,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
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
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	
	series: [{
		name: 'NOT ENTERTAINMENT',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#5F9EA0"
	}, {
		name: 'ENTERTAINMENT',
		data: [
			 0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#FFCB9D"
	}]
	});

const chart2_copy3 = Highcharts.chart('explanation2-copy3', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories2,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
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
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	
	series: [{
		name: 'NOT ENTERTAINMENT',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#5F9EA0"
	}, {
		name: 'ENTERTAINMENT',
		data: [
			 0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#FFCB9D"
	}]
	});

const chart2_copy2 = Highcharts.chart('explanation2-copy2', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories2,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
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
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	
	series: [{
		name: 'NOT ENTERTAINMENT',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#5F9EA0"
	}, {
		name: 'ENTERTAINMENT',
		data: [
			 0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#FFCB9D"
	}]
	});

	const chart2_2 = Highcharts.chart('explanation2-2', {
		chart: {
			type: 'bar'
		},
		title: {
			text: null
		},
		xAxis: {
			categories: categories5,
			reversed: true,
			labels: {
			step: 1,
			style:{
				fontSize: '16px'
			}
			},
		}, 
		
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
				'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
			}
		},
		
		series: [{
			name: 'NOT TECHNOLOGY',
			data: [
				-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
				-0.013671647897261495, -0.012845277070345948, 0, 0
			],
			color:"#DEEBEB"
		}, {
			name: 'TECHNOLOGY',
			data: [
				 0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
			],
			color:"#9467BD"
		}]
		});


	var categories3 = [
		'medical', 'Twitter', 'patients', 'online', 'such', 'yourself', 'and', 'Physician', 'ways', 'Why'
		];
			
	const chart3 = Highcharts.chart('explanation3', {
		chart: {
			type: 'bar'
		},
		title: {
			text: null
		},
		xAxis: {
			categories: categories3,
			reversed: true,
			labels: {
			step: 1,
			style:{
				fontSize: '16px'
			}
			},
		}, 
		
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
				'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
			}
		},
		
		series: [{
			name: 'NOT HEALTHY LIVING',
			data: [
				0, -0.1453542173413021, 0, -0.04822536065914481, -0.04685356060513213, 0, 0, 0, 0, 0
			],
			color:"#7AAEB0"
		}, {
			name: 'HEALTHY LIVING',
			data: [
				0.17494307821877164, 0, 0.06472504900665006, 0, 0, 0.04308000361141943, 0.03189443182009782, 0.029599254317224998, 0.026075266013638007, 0.023247205671422577
			],
			color:"#2CA02C"
		}]
		});

	const chart3_copy3 = Highcharts.chart('explanation3-copy3', {
		chart: {
			type: 'bar'
		},
		title: {
			text: null
		},
		xAxis: {
			categories: categories3,
			reversed: true,
			labels: {
			step: 1,
			style:{
				fontSize: '16px'
			}
			},
		}, 
		
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
				'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
			}
		},
		
		series: [{
			name: 'NOT HEALTHY LIVING',
			data: [
				0, -0.1453542173413021, 0, -0.04822536065914481, -0.04685356060513213, 0, 0, 0, 0, 0
			],
			color:"#7AAEB0"
		}, {
			name: 'HEALTHY LIVING',
			data: [
				0.17494307821877164, 0, 0.06472504900665006, 0, 0, 0.04308000361141943, 0.03189443182009782, 0.029599254317224998, 0.026075266013638007, 0.023247205671422577
			],
			color:"#2CA02C"
		}]
		});
	
const chart3_copy2 = Highcharts.chart('explanation3-copy2', {
		chart: {
			type: 'bar'
		},
		title: {
			text: null
		},
		xAxis: {
			categories: categories3,
			reversed: true,
			labels: {
			step: 1,
			style:{
				fontSize: '16px'
			}
			},
		}, 
		
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
				'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
			}
		},
		
		series: [{
			name: 'NOT HEALTHY LIVING',
			data: [
				0, -0.1453542173413021, 0, -0.04822536065914481, -0.04685356060513213, 0, 0, 0, 0, 0
			],
			color:"#7AAEB0"
		}, {
			name: 'HEALTHY LIVING',
			data: [
				0.17494307821877164, 0, 0.06472504900665006, 0, 0, 0.04308000361141943, 0.03189443182009782, 0.029599254317224998, 0.026075266013638007, 0.023247205671422577
			],
			color:"#2CA02C"
		}]
		});



		var categories4 = [
			'online', 'professional', 'patients', 'yourself', 'opinions', 'and', 'would', 'Why', 'offers', 'increasingly'
			];
				
		const chart4 = Highcharts.chart('explanation4', {
			chart: {
				type: 'bar'
			},
			title: {
				text: null
			},
			xAxis: {
				categories: categories4,
				reversed: true,
				labels: {
				step: 1,
				style:{
					fontSize: '16px'
				}
				},
			}, 
			
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
					'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
				}
			},
			
			series: [{
				name: 'NOT POLITICS',
				data: [
					-0.04214214876615651, -0.03078224054441731, -0.028910145101560113, -0.027181383610585353, 0, -0.025191737502760648, 0, -0.022788996955857784, -0.021939389625652016, 0  
				],
				color:"#5F9EA0"
			}, {
				name: 'POLITICS',
				data: [
					0, 0, 0, 0, 0.026683765797252124, 0, 0.022835494467872593, 0, 0, 0.020922044483944746
				],
				color:"#D10A0F"
			}]
			});

		const chart4_copy3 = Highcharts.chart('explanation4-copy3', {
			chart: {
				type: 'bar'
			},
			title: {
				text: null
			},
			xAxis: {
				categories: categories4,
				reversed: true,
				labels: {
				step: 1,
				style:{
					fontSize: '16px'
				}
				},
			}, 
			
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
					'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
				}
			},
			
			series: [{
				name: 'NOT POLITICS',
				data: [
					-0.04214214876615651, -0.03078224054441731, -0.028910145101560113, -0.027181383610585353, 0, -0.025191737502760648, 0, -0.022788996955857784, -0.021939389625652016, 0  
				],
				color:"#5F9EA0"
			}, {
				name: 'POLITICS',
				data: [
					0, 0, 0, 0, 0.026683765797252124, 0, 0.022835494467872593, 0, 0, 0.020922044483944746
				],
				color:"#D10A0F"
			}]
			});

const chart4_copy2 = Highcharts.chart('explanation4-copy2', {
			chart: {
				type: 'bar'
			},
			title: {
				text: null
			},
			xAxis: {
				categories: categories4,
				reversed: true,
				labels: {
				step: 1,
				style:{
					fontSize: '16px'
				}
				},
			}, 
			
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
					'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
				}
			},
			
			series: [{
				name: 'NOT POLITICS',
				data: [
					-0.04214214876615651, -0.03078224054441731, -0.028910145101560113, -0.027181383610585353, 0, -0.025191737502760648, 0, -0.022788996955857784, -0.021939389625652016, 0  
				],
				color:"#5F9EA0"
			}, {
				name: 'POLITICS',
				data: [
					0, 0, 0, 0, 0.026683765797252124, 0, 0.022835494467872593, 0, 0, 0.020922044483944746
				],
				color:"#D10A0F"
			}]
			});



			var categories5 = [
				'Twitter', 'and', 'medical', 'online', 'Why', 'be', 'offers', 'information', 'providers', 'use'
				];
					
				const chart5 = Highcharts.chart('explanation5', {
				chart: {
					type: 'bar'
				},
				title: {
					text: null
				},
				xAxis: {
					categories: categories5,
					reversed: true,
					labels: {
					step: 1,
					style:{
						fontSize: '16px'
					}
					},
				}, 
				
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
						'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
					}
				},
				
				series: [{
					name: 'NOT TECHNOLOGY',
					data: [
						  0, -0.0439857007516732, -0.03872042257826044, 0, -0.028222141594886927, -0.024543454122409, -0.02348784755752732, 0, 0, 0
					],
					color:"#DEEBEB"
				}, {
					name: 'TECHNOLOGY',
					data: [
						0.1362141284382676, 0, 0, 0.03344750475770304, 0, 0, 0, 0.013443664876114599, 0.010709410917512669, 0.00974989891968158
					],
					color:"#9467BD"
				}]
				});

const chart5_copy2 = Highcharts.chart('explanation5-copy2', {
				chart: {
					type: 'bar'
				},
				title: {
					text: null
				},
				xAxis: {
					categories: categories5,
					reversed: true,
					labels: {
					step: 1,
					style:{
						fontSize: '16px'
					}
					},
				}, 
				
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
						'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
					}
				},
				
				series: [{
					name: 'NOT TECHNOLOGY',
					data: [
						  0, -0.0439857007516732, -0.03872042257826044, 0, -0.028222141594886927, -0.024543454122409, -0.02348784755752732, 0, 0, 0
					],
					color:"#DEEBEB"
				}, {
					name: 'TECHNOLOGY',
					data: [
						0.1362141284382676, 0, 0, 0.03344750475770304, 0, 0, 0, 0.013443664876114599, 0.010709410917512669, 0.00974989891968158
					],
					color:"#9467BD"
				}]
				});	



	const chart3_3 = Highcharts.chart('explanation3-3', {
		chart: {
			type: 'bar'
		},
		title: {
			text: null
		},
		xAxis: {
			categories: categories5,
			reversed: true,
			labels: {
			step: 1,
			style:{
				fontSize: '16px'
			}
			},
		}, 
		
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
				'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
			}
		},
		
		series: [{
			name: 'NOT TECHNOLOGY',
			data: [
				0, -0.1453542173413021, 0, -0.04822536065914481, -0.04685356060513213, 0, 0, 0, 0, 0
			],
			color:"#DEEBEB"
		}, {
			name: 'TECHNOLOGY',
			data: [
				0.17494307821877164, 0, 0.06472504900665006, 0, 0, 0.04308000361141943, 0.03189443182009782, 0.029599254317224998, 0.026075266013638007, 0.023247205671422577
			],
			color:"#9467BD"
		}]
		});




		
	const chart4_1 = Highcharts.chart('explanation4-1', {
	chart: {
		type: 'bar'
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories1,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '16px'
		}
		},
	}, 
	
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
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	
	series: [{
		name: 'NOT BUSINESS',
		data: [
			-0.14203645477026278, 0, 0, 0, 0, 0, 0, -0.026412569022124452,  -0.02129103475746552, -0.01934431956369927
		],
		color:"#5F9EA0"
	}, {
		name: 'BUSINESS',
		data: [
			0, 0.07584092116156863, 0.06581142928551402, 0.05521963855846932, 0.04519346713589002, 0.042151476090971356, 0.03817440008557368, 0, 0, 0
		],
		color:"#1F77B4"
	}]
	});
	
	
	
	
			
		const chart4_2 = Highcharts.chart('explanation4-2', {
		chart: {
			type: 'bar'
		},
		title: {
			text: null
		},
		xAxis: {
			categories: categories2,
			reversed: true,
			labels: {
			step: 1,
			style:{
				fontSize: '16px'
			}
			},
		}, 
		
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
				'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
			}
		},
		
		series: [{
			name: 'NOT ENTERTAINMENT',
			data: [
				-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
				-0.013671647897261495, -0.012845277070345948, 0, 0
			],
			color:"#5F9EA0"
		}, {
			name: 'ENTERTAINMENT',
			data: [
					0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
			],
			color:"#FFCB9D"
		}]
		});
	
	
	
	
	


const chart4_3 = Highcharts.chart('explanation4-3', {
chart: {
type: 'bar'
},
title: {
text: null
},
xAxis: {
categories: categories3,
reversed: true,
labels: {
step: 1,
style:{
fontSize: '16px'
}
},
}, 

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
'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
}
},

series: [{
name: 'NOT HEALTHY LIVING',
data: [
0, -0.1453542173413021, 0, -0.04822536065914481, -0.04685356060513213, 0, 0, 0, 0, 0
],
color:"#2CA02C"
}, {
name: 'HEALTHY LIVING',
data: [
0.17494307821877164, 0, 0.06472504900665006, 0, 0, 0.04308000361141943, 0.03189443182009782, 0.029599254317224998, 0.026075266013638007, 0.023247205671422577
],
color:"#7AAEB0"
}]
});






const chart4_4 = Highcharts.chart('explanation4-4', {
chart: {
type: 'bar'
},
title: {
text: null
},
xAxis: {
categories: categories4,
reversed: true,
labels: {
step: 1,
style:{
	fontSize: '16px'
}
},
}, 

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
	'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
}
},

series: [{
name: 'NOT POLITICS',
data: [
	-0.04214214876615651, -0.03078224054441731, -0.028910145101560113, -0.027181383610585353, 0, -0.025191737502760648, 0, -0.022788996955857784, -0.021939389625652016, 0  
],
color:"#5F9EA0"
}, {
name: 'POLITICS',
data: [
	0, 0, 0, 0, 0.026683765797252124, 0, 0.022835494467872593, 0, 0, 0.020922044483944746
],
color:"#D10A0F"
}]
});




	
const chart4_5 = Highcharts.chart('explanation4-5', {
chart: {
	type: 'bar'
},
title: {
	text: null
},
xAxis: {
	categories: categories5,
	reversed: true,
	labels: {
	step: 1,
	style:{
		fontSize: '16px'
	}
	},
}, 

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
		'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
	}
},

series: [{
	name: 'NOT TECHNOLOGY',
	data: [
			0, -0.0439857007516732, -0.03872042257826044, 0, -0.028222141594886927, -0.024543454122409, -0.02348784755752732, 0, 0, 0
	],
	color:"#DEEBEB"
}, {
	name: 'TECHNOLOGY',
	data: [
		0.1362141284382676, 0, 0, 0.03344750475770304, 0, 0, 0, 0.013443664876114599, 0.010709410917512669, 0.00974989891968158
	],
	color:"#9467BD"
}]
});












var age_training = ['58', '26'];

var age = ['72', '78', '40', '40', '70', '42', '42', '40', '47', '62', '36', '25', '24', '36', '90', '60', '90', '49', '38', '51'];


var workClass_training = ['State government', 'Private'];

var workClass = ['self employment(not incorporated)', 'self employment(incorporated)', 'Private', 'Local government', 'Private', 'Private', 'Private', 'Private', 'Private', 
'self employment(incorporated)', 'self employment(not incorporated)', 'Private', 'State government', 'State government', 'Local government', 'Private', 'Federal government', 'State government', 'Federal government', 'Private'];


var education_training = ["Bachelors", "Masters"];


var education = [
	'HS-grad', 'Some-college', 'Assoc-voc', 'HS-grad', 'Some-college', 'Some-college', 'Bachelors', 'Masters', 'HS-grad', ' School', 'HS-grad', 'HS-grad', 'Bachelors', 'Some-college',
	'Bachelors', 'Assoc-voc', 'Masters', 'HS-grad', 'HS-grad', ' School', 'Bachelors', 'HS-grad', 'Masters', ' School',
	' School', ' School', 'Prof-school', 'HS-grad', 'Some-college', 'Masters', 'Some-college', 'Bachelors', 'Assoc-acdm', 'Some-college', 'Assoc-voc',
	'Bachelors', 'Prof-school', 'Prof-school', 'Masters', 'Doctorate', 'Bachelors', 'Assoc-voc', 'HS-grad', 'Doctorate', 'Doctorate',
	' School', 'HS-grad', 'HS-grad', 'HS-grad', 'Some-college', 'Some-college', ' School', 'Bachelors', 'Masters', 'Prof-school', 'Masters', 'Bachelors',
	'Doctorate', 'Doctorate', 'Masters', 'Bachelors', 'Masters', 'Some-college', 'Masters', 'Bachelors', 'Some-college', 'Masters',
	'Some-college', 'HS-grad', 'Some-college', 'Bachelors', 'Prof-school', 'Prof-school', 'Prof-school', 'Prof-school', 'Prof-school', 'Prof-school',
	'HS-grad', 'HS-grad', 'Some-college', 'HS-grad', 'Assoc-voc', 'HS-grad', 'HS-grad', 'HS-grad', 'Some-college', 'Assoc-voc', 'HS-grad', 'Some-college', 'HS-grad',
	'Doctorate', 'Some-college', 'Prof-school', 'Masters', 'Doctorate', 'Prof-school', ' School', 'Masters', 'Bachelors', 'Bachelors'
];



var education_number_training = ['14', '9'];

var education_number = ['16', '13', '13', '14', '13', '9', '14', '14', '13', '13', '13', '14', '13', '15', '12', '12', '9', '16', '15', '14'];


var marital_status_training = ['Married civilian spouse', 'Never married'];

var marital_status = ['Married civilian spouse', 'Married civilian spouse', 'Never married', 'Never married', 'Married civilian spouse', 'Divorced', 'Never married', 'Never married', 'Divorced', 'Divorced', 'Never married', 'Married civilian spouse', 'Never married', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Married civilian spouse', 'Never married', 'Never married', 'Married civilian spouse'];


var occupation_training = ['Professional specialty', 'Handlers/Cleaners'];

var occupation = ['Professional specialty', 'Executive Managerial', 'Technical support', 'Administrative clerical', 'Handlers/Cleaners', 'Executive Managerial', 'Executive Managerial', 'Professional specialty', 'Handlers/Cleaners', 'Sales', 'Sales', 'Farming/Fishing', 'Administrative clerical', 'Professional specialty', 'Administrative clerical', 'Sales', 'Craft repair', 'Executive Managerial', 'Professional specialty', 'Professional specialty'];


var relation_training = ["Own-child", "Not-in-family"];

var relationship = [
	'Other-relative', 'Own-child', 'Not-in-family', 'Other-relative', 'Own-child', 'Other-relative', 'Not-in-family', 'Not-in-family', 'Unmarried', 'Unmarried', 'Not-in-family', 'Unmarried', 'Not-in-family', 'Not-in-family',
	'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Other-relative', 'Not-in-family', 'Unmarried', 'Not-in-family', 'Own-child',
	'Not-in-family', 'Husband', 'Not-in-family', 'Unmarried', 'Other-relative', 'Husband', 'Wife', 'Husband', 'Husband', 'Not-in-family', 'Not-in-family',
	'Husband', 'Husband', 'Husband', 'Unmarried', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband',
	'Unmarried', 'Unmarried', 'Not-in-family', 'Unmarried', 'Wife', 'Wife', 'Not-in-family', 'Not-in-family', 'Unmarried', 'Not-in-family', 'Wife', 'Not-in-family',
	'Unmarried', 'Not-in-family', 'Not-in-family', 'Unmarried', 'Unmarried', 'Unmarried', 'Unmarried', 'Unmarried', 'Wife', 'Wife',
	'Husband', 'Unmarried', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Not-in-family', 'Husband', 'Husband',
	'Not-in-family', 'Not-in-family', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband', 'Husband',
	'Other-relative', 'Unmarried', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family', 'Not-in-family'
];


var race_training = ['White', 'Black'];

var race = ['White', 'White', 'Asian Pacific Islander', 'White', 'White', 'Black', 'White', 'White', 'White', 'White', 'Black', 'White', 'White', 'White', 'Asian Pacific Islander', 'White', 'White', 'White', 'Asian Pacific Islander', 'White'];


var gender_training = ["Male", "Male"];

var gender = ['Male', 'Male', 'Female', 'Female', 'Male', 'Female', 'Female', 'Female', 'Male', 'Male', 'Female', 'Male', 'Female', 'Female', 'Male', 'Male', 'Male', 'Female', 'Female', 'Female'];


var work_hours_per_week_training = ['50', '48'];

var work_hours_per_week = ['25', '40', '48', '35', '40', '50', '40', '40', '51', '40', '50', '99', '65', '50', '20', '30', '30', '50', '57', '50'];


var native_country_training = ["United-States", "United-States"];

var native_country = [
	'United-States', 'United-States', 'United-States', 'Trinadad&Tobago', 'United-States', 'South', 'Philippines', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'Vietnam',
	'Mexico', 'Greece', 'Canada', 'Canada', 'Holand-Netherlands', 'China', 'Canada', 'Iran', 'England', 'England', 'Canada',
	'China', 'Greece', 'India', 'India', 'China', 'China', 'Germany', 'Italy', 'Germany', 'Hong',
	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
	'United-States', 'Dominican-Republic', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'Vietnam', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States',
	'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States', 'United-States'
];

// 这里存储的是AI的预测信息

var ai_prediction_training = ["> 50k", "≤ 50k"];

var ai_confidence_training = ['0.7722023142621077', '0.9172004176087836'];

var ai_prediction = ['1', '1', '0', '0', '1', '0', '0', '0', '1', '1', '0', '1', '0', '0', '1', '1', '1', '0', '0', '0'];

var ai_confidence = ['0.8527168728226026', '0.8172799740747534', '0.8438426909076009', '0.773697068876521', '0.7759115400776178', '0.8709236829260713', '0.7584563588914822', '0.7777162181947601', '0.7614246698925002', '0.784759741189202', '0.8601280114965606', '0.8547814468756936', '0.8329283546852766', '0.6132888653841058', '0.7030360013649503', '0.5287471084295037', 
'0.6178210502041036', '0.5050163488988225', '0.6227021681966238', '0.5015634623381726'];

var ai_attention = [
	['3.986522872115541e-12', '2.9245949809026177e-12', '4.091373813740422e-12', '5.089358181338356e-12', '1.3918638260645967e-12', '0.0', '5.600287742815999e-12', '-3.986948308578318e-12'],
	['1.5940428559645897e-11', '1.3078978336750327e-12', '1.550237308208764e-11', '2.2061086876424806e-11', '1.3981995080634493e-11', '0.0', '-1.1102195103745772e-11', '-1.586967603018479e-11'],
	['1.091577386901674e-10', '-6.659876004448066e-11', '9.745755784707839e-11', '-1.8088842882636944e-10', '9.294594170343487e-11', '0.0', '-2.0037903781080186e-10', '8.232187335169724e-11'],
	['2.7283530346888966e-11', '-2.1402587305521323e-11', '2.5449467695741276e-11', '-3.5475921514222057e-11', '-3.007791551633594e-11', '0.0', '-3.7707244438763794e-11', '-2.5632185761903048e-11'],
	['1.0261574979308379e-11', '-5.1512014523389874e-12', '1.0224145624511144e-11', '1.1190404068107523e-11', '4.808406204681015e-12', '0.0', '2.025985388881808e-11', '-1.1294542528059129e-11'],
	['1.537759264994382e-11', '2.0190968773123345e-12', '-2.2477319721556172e-11', '-8.388276729778664e-12', '-2.1715476934312987e-11', '0.0', '9.484346585139767e-12', '1.4673041385663642e-11'],
	['1.2100712890400912e-11', '-1.0341574475197044e-11', '1.043175455430448e-11', '-1.9340298704300498e-11', '1.119329858789607e-11', '0.0', '-2.0255207808249326e-11', '-1.2204949993576043e-11'],
	['9.510950118952093e-12', '-6.697110528625946e-13', '8.87721391160976e-12', '-1.1508787038313643e-11', '-9.019160824776234e-12', '0.0', '5.827505695511489e-12', '-8.791217476180098e-12'],
	['5.555112485888581e-12', '-2.429812984712897e-12', '5.4492696654412055e-12', '4.6302727979748456e-12', '3.24066960159639e-12', '0.0', '-2.1737900273262542e-12', '5.400728510160117e-12'],
	['5.208152384236182e-12', '3.3521218941667776e-12', '5.876756838088464e-12', '8.836087722929864e-12', '2.3423125272431965e-12', '0.0', '8.651149707002057e-12', '-5.643661610762974e-12'],
	['5.479944778598396e-12', '-5.139466718472739e-12', '5.358961301618284e-12', '-3.6149510582859072e-12', '-1.7960825867935248e-12', '0.0', '-8.57131735257405e-12', '5.037984280632705e-12'],
	['-1.218879629547121e-11', '-3.5321402515106504e-12', '4.9376662696255125e-12', '7.823214647652422e-12', '4.081428771739409e-12', '0.0', '-4.664103119143044e-13', '4.909135772783564e-12'],
	['-2.6930743383674686e-11', '8.306577831493417e-12', '1.0838122112259865e-11', '8.320730373029114e-12', '-1.3252905691197989e-11', '0.0', '-1.0076648184008051e-12', '1.1534092546823276e-11'],
	['1.7001775017870988e-11', '-6.693461733955727e-11', '1.899899423729172e-11', '3.1474480723071974e-11', '-3.5042999535227566e-11', '0.0', '-2.8945176377565012e-11', '1.6916116601267508e-11'],
	['3.333954824854482e-11', '-2.931867921458804e-11', '2.640477678125779e-11', '1.2676986317847025e-11', '4.089000450545987e-11', '0.0', '4.726459566082985e-11', '-3.4830024901744617e-11'],
	['2.052732865930652e-12', '6.6648035944398205e-12', '1.4716075802726896e-12', '-1.078792003869166e-12', '1.0174022565878711e-12', '0.0', '3.3144629207321253e-12', '-2.185819571588832e-12'],
	['5.435515080070943e-12', '-4.653006070120485e-12', '-4.130690066353201e-12', '3.1248616396294442e-12', '-1.2967081552174528e-12', '0.0', '9.29524741989951e-12', '-5.886778330299595e-12'],
	['3.2401457852471305e-11', '-1.0289535109312837e-10', '3.1182562497276306e-11', '-4.235512407580746e-11', '3.70018159632954e-11', '0.0', '-6.210909168207694e-11', '3.212477618854802e-11'],
	['7.016772418873751e-12', '-5.787323371041016e-12', '6.992000135386236e-12', '-1.3128296052474153e-11', '6.027691501997553e-12', '0.0', '-1.2473007771019355e-11', '6.793677353307949e-12'],
	['2.7764290258444993e-12', '-1.4959968538953762e-12', '2.8991410071325125e-12', '-2.0650911777001097e-12', '-3.881312801924313e-12', '0.0', '-1.9286394618691825e-12', '2.8551269489265894e-12']
];

var ground_truth_training = ['1', '0'];

var ground_truth = ['1', '1', '0', '0', '1', '0', '0', '0', '1', '1', '0', '1', '0', '1', '0', '0', '0', '1', '1', '1'];

const order_list_training = [0, 1];





var task_num = 20;

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


var ai_suggestion_seen = false;

var timestamp1 = null;
var timestamp2 = null;
var timetrain = null;

var interaction_log_in_this_button = null;
var user_interaction_log_thispape = [];
var user_interaction_log = [];

var questionnaire_data = null;

var what_clicked = 1;

/*
用户交互日志记录
*/
//用户第一步，做decision的按钮
$("#make_prediction_1").click(function(){
	what_clicked = "make_prediction_1";
	var timestamp_this = new Date().getTime(); //1610075969354
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户初始decision的第一个radiobutton
$("#radio-first-decision-1").click(function(){
	what_clicked = "radio-first-decision-1";
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
	what_clicked = "radio-first-decision-2";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('radio-first-decision-2').value;
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log(this_value);
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this, this_value];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户初始decision的第三个radiobutton
$("#radio-first-decision-3").click(function(){
	what_clicked = "radio-first-decision-3";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('radio-first-decision-3').value;
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log(this_value);
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this, this_value];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户初始decision的第4个radiobutton
$("#radio-first-decision-4").click(function(){
	what_clicked = "radio-first-decision-4";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('radio-first-decision-4').value;
	console.log(what_clicked);
	console.log(timestamp_this); 
	console.log(this_value);
	console.log('----');
	interaction_log_in_this_button = [what_clicked, timestamp_this, this_value];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户初始decision的第5个radiobutton
$("#radio-first-decision-5").click(function(){
	what_clicked = "radio-first-decision-5";
	var timestamp_this = new Date().getTime(); //1610075969354
	var this_value = document.getElementById('radio-first-decision-5').value;
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



//这是AIRoles的各种操作
//---------------------------------
//---------------------------------
//---------------------------------
//---------------------------------

// document.getElementById("category-text-content").innerHTML=text_content[0];

// $("#start-btn").click(function(){
// 	document.getElementsByClassName("tab-content").style.display = "block";
// 	console.log("hello");
// });
// alert()

$("#start-btn").click(function(){
	document.getElementById("first-category-task").style.display="block";
	document.getElementById("start-btn").style.display="none";
	document.getElementById("category-text-content").innerHTML=text_content[0];
});

$("#next-task-btn").click(function(){
	if(AIRoles_index<20){
	$(".nav-tabs a[href='#home']").tab('show');
	document.getElementById("next-task-btn").style.display="none";
	document.getElementById("category-text-content").innerHTML=text_content[AIRoles_index];
	AIRoles_index++;
	document.getElementById("the-index").innerHTML=AIRoles_index+"/20";}
	else{
		alert("Finished")
	}
});




//---------------------------------
//---------------------------------
//---------------------------------
//---------------------------------
//这是AIRoles的各种操作

function getTextNodeList (dom) {
  const nodeList = [...dom.childNodes]
  const textNodes = []
  while (nodeList.length) {
    const node = nodeList.shift()
    if (node.nodeType === node.TEXT_NODE) {
      textNodes.push(node)
    } else {
      nodeList.unshift(...node.childNodes)
    }
  }
  return textNodes
};

function getMatchList (content, keyword) {
	// console.log("content = ",content)
	// console.log("keyword = ",keyword)
  const characters = [...'[]()?.+*^${}:'].reduce((r, c) => (r[c] = true, r), {})
  keyword = keyword.split('').map(s => characters[s] ? `\\${s}` : s).join('[\\s\\n]*')
  const reg = new RegExp(keyword, 'gmi')
  return [...content.matchAll(reg)] // matchAll结果是个迭代器，用扩展符展开得到数组
}

function replaceMatchResult (content, textNodes,matchList,color) {
	console.log(matchList)
  for (let i = matchList.length - 1; i >= 0; i--) {
    const match = matchList[i]
    const matchStart = match.index, matchEnd = matchStart + match[0].length // 匹配结果在拼接字符串中的起止索引
    // 遍历文本信息列表，查找匹配的文本节点
      text = content;
	  startIdx = 0
	  endIdx = content.length-1
      let textNode = textNodes[0] // 这个节点中的部分或全部内容匹配到了关键词，将匹配部分截取出来进行替换
      const nodeMatchStartIdx = Math.max(0, matchStart - startIdx) // 匹配内容在文本节点内容中的开始索引
      const nodeMatchLength = Math.min(endIdx, matchEnd) - startIdx - nodeMatchStartIdx // 文本节点内容匹配关键词的长度
      
	//主要是这里有问题
	  if (nodeMatchStartIdx > 0) textNode = textNode.splitText(nodeMatchStartIdx) // textNode取后半部分
      if (nodeMatchLength < textNode.wholeText.length) textNode.splitText(nodeMatchLength)
	  //主要是这里有问题

      const font = document.createElement('font');
	  font.style.backgroundColor = color;
      font.innerText = text.substr(nodeMatchStartIdx, nodeMatchLength)           
      textNode.parentNode.replaceChild(font, textNode)
  }
}

// function replaceKeywords (htmlString, keyword, color) {
//   if (!keyword) return htmlString
//   const div = document.createElement('div')
//   div.innerHTML = htmlString
//   const textNodes = getTextNodeList(div)
//   const content = htmlString
//   const matchList = getMatchList(content, keyword)
//   replaceMatchResult(htmlString,textNodes, matchList,color)
//   return div.innerHTML
// }

function replaceMulti(htmlString, feature_list, color_list){

	const div = document.createElement('div');
	div.innerHTML = htmlString;
	const textNodes = getTextNodeList(div);//找到div下面所有的文本节点，而事实上只有一个
	
	for(var k = 0; k < feature_list.length; k++){
		const matchList = getMatchList(htmlString, feature_list[k]);
		replaceMatchResult(htmlString, textNodes, matchList,color_list[k]);
	}
}

function changeBackg(thetext, feature_list, color_list){
	var result;
	result = thetext;
	var newword;
	for(var i = 0; i < feature_list.length; i++){
		newword = '<font style=\"background: '+color_list[i]+'\">'+feature_list[i]+'</font>';
		result = result.replace(feature_list[i], newword);
	}
	return result;
}

function getColorList(grdtru, importance_list){
	var maxpos = Math.max.apply(null,importance_list);
	var minneg = Math.min.apply(null,importance_list);
	var color_list = []
	if(grdtru == 0){
		// business
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#5F9EA0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#75b6ae');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#e2edeb');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#B8D4E7');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#A8CAE2');
			else
				color_list.push('#88B6D7');
		}
	}
	else if(grdtru == 1){
		//entertainment
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#5F9EA0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#A7C9CA');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#daebe5');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#f7e2cf');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#fed1a9');
			else
				color_list.push('#f1c095');
		}
	}
	else if(grdtru == 2){
		//healthy
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#7AAEB0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#9dced0');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#D3E4E5');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#E3F2E3');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#B1DCB1');
			else
				color_list.push('#2CA02C');
		}
	}
	else if(grdtru == 3){
		//politics
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#7AAEB0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#9dced0');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#D3E4E5');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#eac4c4');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#e69898');
			else
				color_list.push('#E57777');
		}
	}
	else{
		//tech
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#a9dbdb');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#CCE0E0');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#e0eaea');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#F5F0F9');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#E5D9EF');
			else
				color_list.push('#9467BD');
		}
	}
	return color_list;
}

function updateCharts(){
	categories1 = features_business[AIRoles_index-1];
	chart1.update({
		xAxis: {
			categories: categories1,
		}, 
		series: [{
			data: importance_business_neg[AIRoles_index-1],
		}, {
			data: importance_business_pos[AIRoles_index-1],
		}]
	});
	chart1_copy2.update({
		xAxis: {
			categories: categories1,
		}, 
		series: [{
			data: importance_business_neg[AIRoles_index-1],
		}, {
			data: importance_business_pos[AIRoles_index-1],
		}]
	});
	chart1_copy3.update({
		xAxis: {
			categories: categories1,
		}, 
		series: [{
			data: importance_business_neg[AIRoles_index-1],
		}, {
			data: importance_business_pos[AIRoles_index-1],
		}]
	});

	categories2 = features_entertainment[AIRoles_index-1];
	chart2.update({
		xAxis: {
			categories: categories2,
		}, 
		series: [{
			data: importance_entertainment_neg[AIRoles_index-1],
		}, {
			data: importance_entertainment_pos[AIRoles_index-1],
		}]
	});
	chart2_copy2.update({
		xAxis: {
			categories: categories2,
		}, 
		series: [{
			data: importance_entertainment_neg[AIRoles_index-1],
		}, {
			data: importance_entertainment_pos[AIRoles_index-1],
		}]
	});
	chart2_copy3.update({
		xAxis: {
			categories: categories2,
		}, 
		series: [{
			data: importance_entertainment_neg[AIRoles_index-1],
		}, {
			data: importance_entertainment_pos[AIRoles_index-1],
		}]
	});
	chart2_2.update({
		xAxis: {
			categories: categories2,
		}, 
		series: [{
			data: importance_entertainment_neg[AIRoles_index-1],
		}, {
			data: importance_entertainment_pos[AIRoles_index-1],
		}]
	});

	categories3 = features_healthy[AIRoles_index-1];
	chart3.update({
		xAxis: {
			categories: categories3,
		}, 
		series: [{
			data: importance_healthy_neg[AIRoles_index-1],
		}, {
			data: importance_healthy_pos[AIRoles_index-1],
		}]
	});
	chart3_copy3.update({
		xAxis: {
			categories: categories3,
		}, 
		series: [{
			data: importance_healthy_neg[AIRoles_index-1],
		}, {
			data: importance_healthy_pos[AIRoles_index-1],
		}]
	});
	chart3_3.update({
		xAxis: {
			categories: categories3,
		}, 
		series: [{
			data: importance_healthy_neg[AIRoles_index-1],
		}, {
			data: importance_healthy_pos[AIRoles_index-1],
		}]
	});
	chart3_copy2.update({
		xAxis: {
			categories: categories3,
		}, 
		series: [{
			data: importance_healthy_neg[AIRoles_index-1],
		}, {
			data: importance_healthy_pos[AIRoles_index-1],
		}]
	});

	categories4 = features_politics[AIRoles_index-1];
	chart4.update({
		xAxis: {
			categories: categories4,
		}, 
		series: [{
			data: importance_politics_neg[AIRoles_index-1],
		}, {
			data: importance_politics_pos[AIRoles_index-1],
		}]
	});
	chart4_copy2.update({
		xAxis: {
			categories: categories4,
		}, 
		series: [{
			data: importance_politics_neg[AIRoles_index-1],
		}, {
			data: importance_politics_pos[AIRoles_index-1],
		}]
	});
	chart4_copy3.update({
		xAxis: {
			categories: categories4,
		}, 
		series: [{
			data: importance_politics_neg[AIRoles_index-1],
		}, {
			data: importance_politics_pos[AIRoles_index-1],
		}]
	});
	chart4_1.update({
		xAxis: {
			categories: categories4,
		}, 
		series: [{
			data: importance_politics_neg[AIRoles_index-1],
		}, {
			data: importance_politics_pos[AIRoles_index-1],
		}]
	});
	chart4_2.update({
		xAxis: {
			categories: categories4,
		}, 
		series: [{
			data: importance_politics_neg[AIRoles_index-1],
		}, {
			data: importance_politics_pos[AIRoles_index-1],
		}]
	});
	chart4_3.update({
		xAxis: {
			categories: categories4,
		}, 
		series: [{
			data: importance_politics_neg[AIRoles_index-1],
		}, {
			data: importance_politics_pos[AIRoles_index-1],
		}]
	});
	chart4_4.update({
		xAxis: {
			categories: categories4,
		}, 
		series: [{
			data: importance_politics_neg[AIRoles_index-1],
		}, {
			data: importance_politics_pos[AIRoles_index-1],
		}]
	});
	categories5 = features_tech[AIRoles_index-1];
	chart4_5.update({
		xAxis: {
			categories: categories4,
		}, 
		series: [{
			data: importance_politics_neg[AIRoles_index-1],
		}, {
			data: importance_politics_pos[AIRoles_index-1],
		}]
	});

	
	chart5.update({
		xAxis: {
			categories: categories5,
		}, 
		series: [{
			data: importance_tech_neg[AIRoles_index-1],
		}, {
			data: importance_tech_pos[AIRoles_index-1],
		}]
	});
}

$("#page-train1").click(function(){

	updateCharts();
	document.getElementById("next-task-btn").style.display="block";
	document.getElementById("suggestion1-text-BUSINESS").innerHTML=text_content[AIRoles_index-1];
	document.getElementById("suggestion1-text-ENTERTAINMENT").innerHTML=text_content[AIRoles_index-1];
	document.getElementById("suggestion1-text-HEALTHY").innerHTML=text_content[AIRoles_index-1];
	document.getElementById("suggestion1-text-POLITICS").innerHTML=text_content[AIRoles_index-1];
	document.getElementById("suggestion1-text-TECHNOLOGY").innerHTML=text_content[AIRoles_index-1];
	

	context_before_replace = document.getElementById("suggestion1-text-BUSINESS").innerHTML;
	
	var feature_list = features_business[AIRoles_index-1];
	var importance_list = importance_business[AIRoles_index-1];
	var color_list = getColorList(0, importance_list)
	document.getElementById("suggestion1-text-BUSINESS").innerHTML = changeBackg(context_before_replace, feature_list, color_list);

	feature_list = features_entertainment[AIRoles_index-1];
	importance_list = importance_entertainment[AIRoles_index-1];
	color_list = getColorList(1, importance_list)
	document.getElementById("suggestion1-text-ENTERTAINMENT").innerHTML = changeBackg(context_before_replace, feature_list, color_list);

	feature_list = features_healthy[AIRoles_index-1];
	importance_list = importance_healthy[AIRoles_index-1];
	color_list = getColorList(2, importance_list)
	document.getElementById("suggestion1-text-HEALTHY").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
	
	feature_list = features_politics[AIRoles_index-1];
	importance_list = importance_politics[AIRoles_index-1];
	color_list = getColorList(3, importance_list)
	document.getElementById("suggestion1-text-POLITICS").innerHTML = changeBackg(context_before_replace, feature_list, color_list);

	feature_list = features_tech[AIRoles_index-1];
	importance_list = importance_tech[AIRoles_index-1];
	color_list = getColorList(4, importance_list)
	document.getElementById("suggestion1-text-TECHNOLOGY").innerHTML = changeBackg(context_before_replace, feature_list, color_list);

	timestamp1 = new Date().getTime(); //1610075969354 
	//var percentage = parseInt(11/order_list.length*100);

	var objData = $("#form_info").serializeArray();
	if(!checkFormInfo(objData)){
		return;
	}
	else{
		userinfo = objData;
	}

    $(".nav-tabs a[href='#AI_suggestion1']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

});


$("#page-train2").click(function(){

	document.getElementById("next-task-btn").style.display="block";
	var grd_tru = ground_truth_AIRoles[AIRoles_index-1];
	
	updateCharts();

	//context_before_replace = document.getElementById("suggestion1-text-BUSINESS").innerHTML;
	
	var context_before_replace = text_content[AIRoles_index-1];

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

	if(what_clicked == "radio-first-decision-1"){

		var feature_list = features_business[AIRoles_index-1];
		var importance_list = importance_business[AIRoles_index-1];
		var color_list = getColorList(0, importance_list)
		document.getElementById("suggestion2-text1").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
		$(".nav-tabs a[href='#suggestion2-business']").tab('show');
	}
	else if(what_clicked == "radio-first-decision-2"){
		var feature_list = features_entertainment[AIRoles_index-1];
		var importance_list = importance_entertainment[AIRoles_index-1];
		var color_list = getColorList(1, importance_list)
		document.getElementById("suggestion2-text2").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
		$(".nav-tabs a[href='#suggestion2-entertainment']").tab('show');
	}
	else if(what_clicked == "radio-first-decision-3"){
		var feature_list = features_healthy[AIRoles_index-1];
		var importance_list = importance_healthy[AIRoles_index-1];
		var color_list = getColorList(2, importance_list)
		document.getElementById("suggestion2-text3").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
		$(".nav-tabs a[href='#suggestion2-healthy']").tab('show');
	}
	else if(what_clicked == "radio-first-decision-4"){
		var feature_list = features_politics[AIRoles_index-1];
		var importance_list = importance_politics[AIRoles_index-1];
		var color_list = getColorList(3, importance_list)
		document.getElementById("suggestion2-text4").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
		$(".nav-tabs a[href='#suggestion2-politics']").tab('show');
	}
	else{
		var feature_list = features_tech[AIRoles_index-1];
		var importance_list = importance_tech[AIRoles_index-1];
		var color_list = getColorList(4, importance_list)
		//console.log(changeBackg(context_before_replace, feature_list, color_list))
		document.getElementById("suggestion2-text5").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
		$(".nav-tabs a[href='#AI_suggestion2']").tab('show');
	}
	$("html, body").animate({ scrollTop: 0 }, "slow");

});

$("#page-train3").click(function(){

	// var theimg=document.getElementById("theimg");
	// theimg.parentNode.removeChild(theimg);
	document.getElementById("next-task-btn").style.display="block";
	var grd_tru = ground_truth_AIRoles[AIRoles_index-1];
	context_before_replace = text_content[AIRoles_index-1];

	updateCharts();

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

	if(grd_tru == 0){
		var feature_list = features_business[AIRoles_index-1];
		var importance_list = importance_business[AIRoles_index-1];
		var color_list = getColorList(0, importance_list)
		document.getElementById("suggestion3-text1").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
		$(".nav-tabs a[href='#suggestion3-1']").tab('show');
	}
	else if(grd_tru == 1){
		var feature_list = features_entertainment[AIRoles_index-1];
		var importance_list = importance_entertainment[AIRoles_index-1];
		var color_list = getColorList(1, importance_list)
		document.getElementById("suggestion3-text2").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
		$(".nav-tabs a[href='#suggestion3-2']").tab('show');
	}
	else if(grd_tru == 2){
		var feature_list = features_healthy[AIRoles_index-1];
		var importance_list = importance_healthy[AIRoles_index-1];
		var color_list = getColorList(2, importance_list)
		document.getElementById("suggestion3-text3").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
		$(".nav-tabs a[href='#suggestion3-3']").tab('show');
	}
	else if(grd_tru == 3){
		var feature_list = features_politics[AIRoles_index-1];
		var importance_list = importance_politics[AIRoles_index-1];
		var color_list = getColorList(3, importance_list)
		document.getElementById("suggestion3-text4").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
		$(".nav-tabs a[href='#suggestion3-4']").tab('show');
	}
	else if(grd_tru == 4){
		var feature_list = features_tech[AIRoles_index-1];
		var importance_list = importance_tech[AIRoles_index-1];
		var color_list = getColorList(4, importance_list)
		console.log(changeBackg(context_before_replace, feature_list, color_list))
		document.getElementById("suggestion3-text5").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
		$(".nav-tabs a[href='#AI_suggestion3']").tab('show');
	}

    
	$("html, body").animate({ scrollTop: 0 }, "slow");

});

$("#page-train4").click(function(){

	updateCharts();

	context_before_replace = text_content[AIRoles_index-1]
	
	var feature_list = features_business[AIRoles_index-1];
	var importance_list = importance_business[AIRoles_index-1];
	var color_list = getColorList(0, importance_list)

	var grd_tru = ground_truth_AIRoles[AIRoles_index-1];
	var thetitle;
	
	if(grd_tru == 0){
		thetitle = 'AI\'s suggestion: BUSINESS'
	}
	else if(grd_tru == 1){
		thetitle = 'AI\'s suggestion: ENTERTAINMENT'
	}
	else if(grd_tru == 2){
		thetitle = 'AI\'s suggestion: HEALTHY LIVING'
	}
	else if(grd_tru == 3){
		thetitle = 'AI\'s suggestion: POLITICS'
	}
	else if(grd_tru == 4){
		thetitle = 'AI\'s suggestion: TECHNOLOGY'
	}

	document.getElementById('title-4').innerHTML = thetitle;
	

	document.getElementById("text4-1").innerHTML = changeBackg(context_before_replace, feature_list, color_list);

	feature_list = features_entertainment[AIRoles_index-1];
	importance_list = importance_entertainment[AIRoles_index-1];
	color_list = getColorList(1, importance_list)
	document.getElementById("text4-2").innerHTML = changeBackg(context_before_replace, feature_list, color_list);

	feature_list = features_healthy[AIRoles_index-1];
	importance_list = importance_healthy[AIRoles_index-1];
	color_list = getColorList(2, importance_list)
	document.getElementById("text4-3").innerHTML = changeBackg(context_before_replace, feature_list, color_list);
	
	feature_list = features_politics[AIRoles_index-1];
	importance_list = importance_politics[AIRoles_index-1];
	color_list = getColorList(3, importance_list)
	document.getElementById("text4-4").innerHTML = changeBackg(context_before_replace, feature_list, color_list);

	feature_list = features_tech[AIRoles_index-1];
	importance_list = importance_tech[AIRoles_index-1];
	color_list = getColorList(4, importance_list)
	document.getElementById("text4-5").innerHTML = changeBackg(context_before_replace, feature_list, color_list);


	document.getElementById("next-task-btn").style.display="block";

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

    $(".nav-tabs a[href='#AI_suggestion4']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

});


	$("#go_to_questionnaire").click(function(){
	$(".nav-tabs a[href='#questionnaire']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");


	document.getElementById("go_to_next").style.display = "block";
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
		console.log(attentionData1);
		var attentionData2 = $("#firstcheck").serializeArray();
		console.log(attentionData2.value);
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
	document.getElementById('range-first-confidence-1').value = "-0.2";
	document.getElementById('radio-final-decision-1').checked = false;
	document.getElementById('radio-final-decision-2').checked = false;
	document.getElementById('range-final-confidence-1').value = "-0.2";

	// document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;

	var percentage = current_idx/order_list.length*100;
	//console.log(percentage);
	document.getElementById('progressbar1').style.width = percentage + '%';
	document.getElementById('progressbar1').textContent = percentage + '%';
	document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;

	current_idx += 1;

});


var attention_tocheck = false;


$("#next-task").click(function(){

	if(document.getElementById('radio-final-decision-1').checked == false && document.getElementById('radio-final-decision-2').checked == false){
		alert("Please make your final prediction");
		return false;
	}
	if(document.getElementById('range-final-confidence-1').value < 0){
		alert("Please indicate your confidence in your final decision");
		return false;
	}
	/*if((document.getElementById('radio-final-decision-1').checked == true || document.getElementById('radio-final-decision-2').checked == true) && (document.getElementById('radio-final-confidence-1').checked == true || document.getElementById('radio-final-confidence-2').checked == true)){*/
	if ((document.getElementById('radio-final-decision-1').checked == true || document.getElementById('radio-final-decision-2').checked == true) && document.getElementById('range-final-confidence-1').value >= 0) {
		
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

		seconddecision_1 = objData2[0];
		secondconfidence_1 = objData2[1];



		var time_spent = timestamp2 - timestamp1;
		timestamp1 = timestamp2;

		//console.log("time spent:" + time_spent);

		current_instance_data = [current_idx, order_list[current_idx - 1], firstdecision_1, firstconfidence_1, aisuggestion_1, aiconfidence_1, seconddecision_1, secondconfidence_1, ground_truth_1, time_spent];

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
				document.getElementById('range-first-confidence-1').value = "-0.2";
				document.getElementById('radio-final-decision-1').checked = false;
				document.getElementById('radio-final-decision-2').checked = false;
				document.getElementById('range-final-confidence-1').value = "-0.2"; 


				// step4，对页面的其他位置进行更新，比如进度数字，进度条

				var percentage = current_idx/order_list.length*100;
				console.log(percentage);
				document.getElementById('progressbar1').style.width = percentage + '%';
				document.getElementById('progressbar1').textContent = percentage + '%';
				document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


				// step5，重置按钮状态
				ai_suggestion_seen = false;

				current_idx -= 1;
			}else{
				document.getElementById('question1').textContent = "Q1. What is your prediction?";
				document.getElementById('attentioncheck1').textContent = "≤ 50k";
				document.getElementById('attentioncheck2').textContent = "> 50k";

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
				document.getElementById('range-first-confidence-1').value = "-0.2";
				document.getElementById('radio-final-decision-1').checked = false;
				document.getElementById('radio-final-decision-2').checked = false;
				document.getElementById('range-final-confidence-1').value= "-0.2";



				// step4，对页面的其他位置进行更新，比如进度数字，进度条

				var percentage = current_idx/order_list.length*100;
				//console.log(percentage);
				document.getElementById('progressbar1').style.width = percentage + '%';
				document.getElementById('progressbar1').textContent = percentage + '%';
				document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


				// step5，重置按钮状态
				ai_suggestion_seen = false;
			}
			

		}else{

			document.getElementById("go_to_questionnaire").style.display = "block";
			document.getElementById("user_prediction").style.display="none";

			document.getElementById("profile").style.display="none";

			// step4，对页面的其他位置进行更新，比如进度数字，进度条
	
			var percentage = current_idx/order_list.length*100;
			//console.log(percentage);
			document.getElementById('progressbar1').style.width = percentage + '%';
			document.getElementById('progressbar1').textContent = percentage + '%';
			document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


		}
		current_idx += 1;

		//把step1里面冻结的按钮再次恢复
		document.getElementById('radio-first-decision-1').disabled = false;
		document.getElementById('radio-first-decision-2').disabled = false;
		document.getElementById('range-first-confidence-1').disabled = false;

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
	
	if(document.getElementById('range-first-confidence-1_training').value < 0){
		alert("Please indicate your confidence");
		return false;
	}
	
	/*if((document.getElementById('radio-first-decision-1_training').checked == true || document.getElementById('radio-first-decision-2_training').checked == true) && (document.getElementById('radio-first-confidence-1_training').checked == true || document.getElementById('radio-first-confidence-2_training').checked == true)){*/
	if ((document.getElementById('radio-first-decision-1_training').checked == true || document.getElementById('radio-first-decision-2_training').checked == true) && document.getElementById('range-first-confidence-1_training').value >= 0) {
		var gt = ground_truth_training[current_idx_training-1];
		//console.log(current_idx_training);
		if(gt == 1){
			//console.log('>=50k');
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
		alert("Please check your answer with the groundtruth");
		return false;
	}
	/*if((document.getElementById('radio-first-decision-1_training').checked == true || document.getElementById('radio-first-decision-2_training').checked == true) && (document.getElementById('radio-first-confidence-1_training').checked == true || document.getElementById('radio-first-confidence-2_training').checked == true) && ground_truth_is_show == 1){*/
	if ((document.getElementById('radio-first-decision-1_training').checked == true || document.getElementById('radio-first-decision-2_training').checked == true)) {
		//保存用户的两次决策结果

		timestamp2 = new Date().getTime(); //1610075969354 
		

		var objData1 = $("#firstdecision1_training").serializeArray();
		var objData2 = $("#finaldecision1_traininig").serializeArray();
		
		// console.log(objData);
		
		firstdecision_1 = objData1[0];
		firstconfidence_1 = objData1[1];

		aisuggestion_1 = ai_prediction_training[order_list_training[current_idx_training-1]];
		aiconfidence_1 = ai_confidence_training[order_list_training[current_idx_training-1]];
		ground_truth_1 = ground_truth_training[order_list_training[current_idx_training-1]];

		seconddecision_1 = objData2[0];
		secondconfidence_1 = objData2[1];

		var time_spent = timestamp2 - timestamp1;
		timestamp1 = timestamp2;

		//console.log("time spent:" + time_spent);

		current_instance_data = [current_idx_training, order_list_training[current_idx_training - 1], firstdecision_1, firstconfidence_1, aisuggestion_1, aiconfidence_1, ground_truth_1, time_spent];
		// current_instance_data = [current_idx_training, order_list_training[current_idx_training - 1], firstdecision_1, firstconfidence_1, time_spent,  ground_truth_1];

		console.log(current_instance_data);

		all_data_tosave_training.push(current_instance_data);

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
			document.getElementById('range-first-confidence-1_training').value = "-0.2"
			document.getElementById('groundtruth').textContent = ' ';
			ground_truth_is_show = 0;


			// step4，对页面的其他位置进行更新，比如进度数字，进度条

			var percentage = current_idx_training/order_list_training.length*100;
			//console.log(percentage);
			document.getElementById('progressbar1').style.width = percentage + '%';
			document.getElementById('progressbar1').textContent = percentage + '%';
			document.getElementById('progress-text-training').textContent = current_idx_training + 1 + '/' + order_list_training.length;


			// step5，重置按钮状态
			ai_suggestion_seen = false;
			

		}else{
			document.getElementById("goodjob").style.display="block";
			document.getElementById("pager-0").style.display = "block";
			document.getElementById("user_prediction_training").style.display="none";

			document.getElementById("profile_training").style.display="none";



			var percentage = current_idx_training/order_list_training.length*100;
			//console.log(percentage);
			document.getElementById('progressbar1').style.width = percentage + '%';
			document.getElementById('progressbar1').textContent = percentage + '%';
			document.getElementById('progress-text-training').textContent = current_idx_training + '/' + order_list_training.length;
		}
		current_idx_training += 1;
	}



});


$("#see_suggestion1").click(function(){

	//获取人自己的预测数据


	var objData1 = $("#firstdecision1").serializeArray();

	//console.log(objData1);

	
	//console.log(document.getElementById('radio-first-decision-1').checked);


	if(document.getElementById('radio-first-decision-1').checked == false && document.getElementById('radio-first-decision-2').checked == false){
		alert("Please make your prediction");
		return false;
	}
	if(document.getElementById('range-first-confidence-1').value < 0){
		alert("Please indicate your confidence");
		return false;
	}
	/*if((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && (document.getElementById('radio-first-confidence-1').checked == true || document.getElementById('radio-first-confidence-2').checked == true)){*/
	if ((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && document.getElementById('range-first-confidence-1').value >= 0) {
		firstdecision_1 = objData1[0];
		firstconfidence_1 = objData1[1];

		ground_truth_1 = ground_truth_training[order_list_training[current_idx_training-1]];

		
		var pred_value = null;
		var conf_value = null;
		if (firstdecision_1['value'] == 0){
			pred_value = "≤ 50k";
		}else{
			pred_value = "> 50k";
		}



		
		var tb = document.getElementById('human_own_prediction');//获取表格的dom节点
		var td = tb.rows[0].cells[1];//获取0行0列的td单元格
		td.innerHTML = pred_value;//动态修改表格的内容为222



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


function submitData_ms(){

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
			console.log(xhr.responseText);
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


let nav = document.querySelectorAll(".nav>div");
let item = document.querySelectorAll(".item>div");

for (let i = 0; i < nav.length; i++) {
  nav[i].index = i;
  nav[i].onclick = function () {
	for (var j = 0; j < item.length; j++) {
	  nav[j].className = "";
	  item[j].style.display = "none";
	}
	this.className = "active";
	console.log(nav[i].index, 'index')
	item[nav[i].index].style.display = "block";
  };
}

let nav1 = document.querySelectorAll(".nav1>div");
let item1 = document.querySelectorAll(".item1>div");

for (let i = 0; i < nav1.length; i++) {
  nav1[i].index = i;
  nav1[i].onclick = function () {
	for (var j = 0; j < item1.length; j++) {
	  nav1[j].className = "";
	  item1[j].style.display = "none";
	}
	this.className = "active";
	console.log(nav1[i].index, 'index')
	item1[nav1[i].index].style.display = "block";
  };
}

