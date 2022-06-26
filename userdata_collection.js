// 这里存储的是选好的instance的信息
//var age = ["32", "61", "67", "40", "40", "56", "30", "57", "28", "43", "25", "24", "24", "28", "53", "52", "53", "39", "57", "63"];
var age = [
	'59', '28', '43', '42', '20', '30', '40', '38', '31', '28', '68', '65', '66', '24', 
	'75', '68', '67', '74', '67', '19', '31', '31', '53', '23',
	'33', '49', '28', '65', '32', '64', '51', '32', '28', '44', '27',
	'51', '55', '39', '42', '30', '63', '55', '42', '57', '40',
	'54', '34', '68', '61', '68', '27', '46', '60', '56', '40', '55', '67',
	'45', '63', '54', '44', '43', '51', '43', '48', '44', '39',
	'50', '22', '43', '65', '26', '52', '46', '36', '40', '52',
	'90', '82', '51', '61', '21', '71', '71', '73', '67', '26', '36', '35', '23',
	'74', '41', '38', '32', '51', '46', '45', '57', '34', '37'
];

//var workClass = ["Private", "Private", "Private", "Self-emp-inc", 
//"Self-emp-inc", "Self-emp-inc", "Local-gov", "Local-gov", "Local-gov", "Private",
//"Private", "Private", "Private", "Local-gov", "Private", "Private", 
//"Local-gov", "Private", "Private", "Federal-gov"];

var workClass = [
	'Local-gov', 'State-gov', 'Private', 'Private', 'Self-emp-not-inc', 'Self-emp-not-inc', 'Private', 'Local-gov', 'Private', 'Private', 'Private', 'Private', 'Local-gov', 'Private',
	'Private', 'Self-emp-inc', 'Self-emp-not-inc', 'Private', 'Self-emp-inc', 'Private', 'Private', 'Private', 'Local-gov', 'Private',
	'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Self-emp-not-inc', 'Federal-gov', 'Local-gov', 'Private', 'Private',
	'Self-emp-not-inc', 'Self-emp-inc', 'Private', 'Self-emp-inc', 'Private', 'Self-emp-not-inc', 'Private', 'Self-emp-inc', 'Private', 'Private',
	'Private', 'Private', 'Federal-gov', 'Private', 'Private', 'Private', 'Private', 'State-gov', 'Self-emp-not-inc', 'Self-emp-not-inc', 'Local-gov', 'Private',
	'Private', 'Federal-gov', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private',
	'Private', 'Self-emp-not-inc', 'Self-emp-inc', 'Self-emp-inc', 'Private', 'Self-emp-not-inc', 'Private', 'Private', 'Self-emp-not-inc', 'Self-emp-inc',
	'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Self-emp-not-inc', 'Private', 'Private', 'Private', 'Local-gov', 'Private',
	'State-gov', 'Private', 'Self-emp-not-inc', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private', 'Private'
];


//var education = ["Masters", "HS-grad", "Bachelors", "Assoc-acdm", 
//"Prof-school", "Some-college", "Some-college", "Masters", "Masters", "Bachelors",
//"Bachelors", "HS-grad", "Bachelors", "Bachelors", "Masters", "Some-college", "Masters",
//"Prof-school", "Masters", "Doctorate"];

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



//var education_number = ["14", "9", "13", "12", "15", "10", "10", "14", "14", "13", "13", "9", "13", "13", "14", "10", "14", "15", "14", "16"];

var education_number = [
	'9', '10', '11', '9', '10', '10', '13', '14', '9', '6', '9', '9', '13', '10',
	'13', '11', '14', '9', '9', '8', '13', '9', '14', '7',
	'2', '3', '15', '9', '10', '14', '10', '13', '12', '10', '11',
	'13', '15', '15', '14', '16', '13', '11', '9', '16', '16',
	'4', '9', '9', '9', '10', '10', '3', '13', '14', '15', '14', '13',
	'16', '16', '14', '13', '14', '10', '14', '13', '10', '14',
	'10', '9', '10', '13', '15', '15', '15', '15', '15', '15',
	'9', '9', '10', '9', '11', '9', '9', '9', '10', '11', '9', '10', '9',
	'16', '10', '15', '14', '16', '15', '7', '14', '13', '13'
];



//var marital_status = ["Separated", "Divorced", "Widowed", 
//"Married-civ-spouse", "Married-civ-spouse", "Married-civ-spouse", "Never-married", "Married-civ-spouse", 
//"Married-civ-spouse", "Never-married", "Never-married", "Never-married", "Never-married", "Never-married",
//"Widowed", "Married-civ-spouse", "Widowed", "Married-civ-spouse", "Divorced", "Divorced"];

var marital_status = [
	'Separated', 'Separated', 'Widowed', 'Never-married', 'Never-married', 'Never-married', 'Never-married', 'Never-married', 'Separated', 'Widowed', 'Widowed', 'Widowed', 'Widowed', 'Never-married',
	'Widowed', 'Widowed', 'Widowed', 'Widowed', 'Widowed', 'Married-civ-spouse', 'Never-married', 'Never-married', 'Never-married', 'Never-married',
	'Married-civ-spouse', 'Married-civ-spouse', 'Never-married', 'Divorced', 'Never-married', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Separated', 'Never-married',
	'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Divorced', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse',
	'Divorced', 'Divorced', 'Divorced', 'Divorced', 'Married-civ-spouse', 'Married-civ-spouse', 'Divorced', 'Divorced', 'Divorced', 'Divorced', 'Married-civ-spouse', 'Divorced',
	'Divorced', 'Divorced', 'Divorced', 'Divorced', 'Divorced', 'Divorced', 'Divorced', 'Married-spouse-absent', 'Married-civ-spouse', 'Married-civ-spouse',
	'Married-civ-spouse', 'Never-married', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Divorced', 'Married-civ-spouse', 'Married-civ-spouse',
	'Widowed', 'Widowed', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse', 'Married-civ-spouse',
	'Never-married', 'Never-married', 'Never-married', 'Separated', 'Never-married', 'Divorced', 'Divorced', 'Divorced', 'Separated', 'Never-married'
];


//var occupation = ["Exec-managerial", "Sales", "Exec-managerial", "Craft-repair", "Prof-specialty", "Exec-managerial", 
//"Protective-serv", "Prof-specialty", "Prof-specialty", "Adm-clerical",
//"Sales", "Sales", "Tech-support", "Prof-specialty", "Prof-specialty",
//"Exec-managerial", "Prof-specialty", "Prof-specialty", "Exec-managerial", "Exec-managerial"];

var occupation = [
	'Protective-serv', 'Exec-managerial', 'Prof-specialty', 'Adm-clerical', 'Farming-fishing', 'Sales', 'Tech-support', 'Prof-specialty', 'Machine-op-inspct', 'Adm-clerical', 'Adm-clerical', 'Prof-specialty', 'Prof-specialty', 'Adm-clerical',
	'Prof-specialty', 'Sales', 'Prof-specialty', 'Adm-clerical', 'Exec-managerial', 'Prof-specialty', 'Exec-managerial', 'Craft-repair', 'Exec-managerial', 'Craft-repair',
	'Craft-repair', 'Other-service', 'Prof-specialty', 'Adm-clerical', 'Machine-op-inspct', 'Prof-specialty', 'Prof-specialty', 'Prof-specialty', 'Protective-serv', 'Exec-managerial', 'Prof-specialty',
	'Sales', 'Prof-specialty', 'Prof-specialty', 'Exec-managerial', 'Prof-specialty', 'Prof-specialty', 'Prof-specialty', 'Exec-managerial', 'Tech-support', 'Prof-specialty',
	'Machine-op-inspct', 'Other-service', 'Prof-specialty', 'Sales', 'Prof-specialty', 'Adm-clerical', 'Craft-repair', 'Prof-specialty', 'Sales', 'Other-service', 'Prof-specialty', 'Exec-managerial',
	'Prof-specialty', 'Exec-managerial', 'Prof-specialty', 'Exec-managerial', 'Exec-managerial', 'Adm-clerical', 'Prof-specialty', 'Sales', 'Adm-clerical', 'Exec-managerial',
	'Exec-managerial', 'Prof-specialty', 'Sales', 'Sales', 'Prof-specialty', 'Prof-specialty', 'Prof-specialty', 'Prof-specialty', 'Prof-specialty', 'Prof-specialty',
	'Prof-specialty', 'Exec-managerial', 'Transport-moving', 'Prof-specialty', 'Craft-repair', 'Prof-specialty', 'Sales', 'Farming-fishing', 'Prof-specialty', 'Adm-clerical', 'Prof-specialty', 'Exec-managerial', 'Sales',
	'Prof-specialty', 'Craft-repair', 'Prof-specialty', 'Exec-managerial', 'Prof-specialty', 'Prof-specialty', 'Transport-moving', 'Exec-managerial', 'Sales', 'Exec-managerial'
];


//var relationship = ["Not-in-family", "Unmarried", "Not-in-family", "Husband", "Husband", "Wife",
//"Not-in-family", "Wife", "Wife", "Not-in-family",
//"Not-in-family", "Own-child", "Own-child", "Other-relative", "Unmarried", "Husband", "Unmarried", "Husband",
//"Not-in-family", "Not-in-family"];

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

//var race = ["White", "White", "White", "White", "Amer-Indian-Eskimo", "White", "Black",
//"Black", "White", "White", "White", "White", "White", "White", "Black",
//"White", "Black", "Asian-Pac-Islander", "White", "White"];

var race = [
	' Other', 'White', 'White', ' Other', 'White', ' Other', ' Other', 'White', 'White', 'White', 'White', 'White', ' Other', 'White',
	'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', ' Other',
	'White', 'White', 'White', 'White', 'White', ' Other', 'White', ' Other', 'White', 'White', 'White',
	' Other', 'White', ' Other', ' Other', ' Other', ' Other', 'White', 'White', 'White', ' Other',
	'White', 'White', 'White', 'White', 'White', ' Other', 'White', 'White', 'White', 'White', 'White', 'White',
	' Other', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White',
	'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White',
	'White', 'White', 'White', 'White', 'White', 'White', 'White', ' Other', 'White', 'White', 'White', 'White', 'White',
	'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White'
];

//var gender = ["Male", "Female", "Male", "Male", "Male", "Female", "Male", "Female", "Female", "Male",
//"Female", "Female", "Male", "Male", "Female", "Male", "Female", "Male", "Male", "Female"];

var gender = [
	'Female', 'Male', 'Female', 'Female', 'Male', 'Male', 'Female', 'Female', 'Female', 'Female', 'Female', 'Female', 'Female', 'Male',
	'Female', 'Female', 'Male', 'Female', 'Female', 'Female', 'Female', 'Male', 'Female', 'Male',
	'Male', 'Male', 'Male', 'Female', 'Female', 'Male', 'Female', 'Male', 'Male', 'Male', 'Female',
	'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male',
	'Female', 'Female', 'Female', 'Female', 'Female', 'Female', 'Female', 'Female', 'Female', 'Female', 'Female', 'Female',
	'Female', 'Female', 'Female', 'Male', 'Female', 'Female', 'Female', 'Female', 'Female', 'Female',
	'Male', 'Female', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male',
	'Female', 'Female', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male',
	'Female', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male', 'Male'
];

//var work_hours_per_week = ["55", "25", "40", "50", "60", 
//"50", "40", "40", "55", "40", "40", "32", "40", "50", "35", "60", "35", "67", "50", "60"];

var work_hours_per_week = [
	'40', '40', '36', '40', '10', '40', '48', '60', '40', '35', '30', '10', '25', '24',
	'16', '50', '2', '40', '40', '40', '50', '40', '50', '40',
	'32', '40', '40', '59', '40', '60', '60', '40', '40', '45', '36',
	'40', '35', '67', '60', '40', '32', '50', '60', '40', '45',
	'40', '45', '40', '25', '40', '20', '45', '40', '60', '35', '40', '5',
	'35', '60', '40', '50', '40', '40', '40', '70', '6', '65',
	'50', '40', '55', '60', '60', '45', '50', '45', '70', '35',
	'40', '18', '40', '32', '40', '15', '52', '40', '40', '45', '60', '40', '40',
	'20', '60', '45', '55', '40', '40', '76', '50', '50', '40'
];

//var native_country = ["United-States", "United-States", "United-States", "United-States", "United-States", 
//"United-States", "United-States", "United-States", "United-States", "United-States",
//"United-States", "United-States", "United-States", "United-States", "United-States",
//"United-States", "United-States", "India", "United-States", "United-States"];

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
//var ai_prediction = [">50K", ">50K", ">50K", ">50K", ">50K", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", "<=50k", ">50k", "<=50k", ">50k", ">50k", ">50k"];
//var ai_confidence = ["Low", "Low", "Low", "Low", "Low", "Low", "Low", "Low", "Low", "Low", "High", "High", "High", "High", "High", "High", "High", "High", "High", "High"];

var ai_prediction = [
	'0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0',
	'1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
	'0', '1', '0', '1', '0', '1', '0', '1', '1', '0', '0',
	'1', '1', '1', '1', '0', '1', '1', '1', '1', '1',
	'1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '0', '0',
	'0', '1', '1', '1', '1', '1', '1', '1', '0', '1',
	'1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
	'1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
	'1', '1', '1', '1', '1', '1', '1', '1', '1', '1'
]

var ai_confidence = [
	'0.6216167206682555', '0.7146916549221887', '0.772933862102368', '0.7587938013326399', '0.875164796894885', '0.6564622605435884', '0.6732843501939749', '0.5591891178610003', '0.8366841140153807', '0.9278775481216162', '0.6843732405148932', '0.8646302625356018', '0.7439977935506774', '0.718993031807494',
	'0.9960324364873704', '0.9982713465413844', '0.9663998316411408', '0.9621837974665878', '0.9544306553733344', '0.8763577236257762', '0.900891322880216', '0.901285296571052', '0.9614110040297412', '0.8149867946726844',
	'0.5299615987754885', '0.698582494528702', '0.5405403084789995', '0.714319957946243', '0.734013882026537', '0.8330364664199791', '0.500735128245773', '0.5114029840025582', '0.5116450761675574', '0.5075233000607042', '0.8462460624775809',
	'0.6218446526255553', '0.7434592321334867', '0.811982737142438', '0.6644689663145358', '0.561411666198271', '0.5496193671974842', '0.7396242986742564', '0.7309399994055602', '0.7187363419014673', '0.5639968106543571',
	'0.7536544493693658', '0.7124151429097416', '0.9243783276848776', '0.5800891636562067', '0.5919457014367343', '0.8916216865736452', '0.5717558443566074', '0.6480748653276321', '0.7290999773340371', '0.5157230274805505', '0.5266532544554148', '0.5904315050351159',
	'0.5068468909345887', '0.8762539611564146', '0.7300044560182705', '0.7300197767714125', '0.5137617625881119', '0.5874319600863697', '0.549338876755109', '0.616841000458873', '0.8479821889314698', '0.5217977920486334',
	'0.99999999999999', '0.9999999999997348', '0.9999999999999902', '0.9999999999999942', '0.9999999999999865', '0.9999999999999872', '0.9999999999999892', '0.9999999999999872', '0.9999999999999925', '0.9999999999999836',
	'0.8808445930002256', '0.711671816527071', '0.8236856635076228', '0.7888856762954077', '0.5157818482364523', '0.7209004581552609', '0.9032259589012532', '0.7804459112289759', '0.8630516785572214', '0.5498748261343406', '0.8002609976153473', '0.7057979070619294', '0.5791470168867493',
	'0.576848393767986', '0.7131879266529904', '0.638765883740267', '0.6224990130049852', '0.6884965793709504', '0.8452796728537232', '0.9302375114563745', '0.9039520893183406', '0.5942863082099977', '0.5502344045105448'
]

//var ground_truth = [1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1];

var ground_truth = [
	'0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
	'1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
	'0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
	'1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
	'0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
	'1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
	'1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
	'0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
	'1', '1', '1', '1', '1', '1', '1', '1', '1', '1'
]

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
//const order_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const order_list = [];
for(var i = 0;i < 100;i++){
	order_list.push(i);
}

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


var ground_truth_1 = null;

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

var current_instance_data = null;

var attention_slider_data = [];
var rule_data = [];

var all_data_tosave = [];


var ai_suggestion_seen = false;

var timestamp1 = null;
var timestamp2 = null;

$("#pager-0").click(function(){

	timestamp1 = new Date().getTime(); //1610075969354 

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
	aiprediction1 = ai_prediction[order_list[current_idx]];
	aiconfidence1 = ai_confidence[order_list[current_idx]];


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




	//暗含groundtruth
	// if(ground_truth[order_list[current_idx]] == 0){
	// 	document.getElementById('hidden_groundtruth').textContent = 'AI\'s prediction and its confidence_';
	// }else{
	// 	document.getElementById('hidden_groundtruth').textContent = 'AI\'s prediction and its confidence__';
	// }
	

	document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;

	current_idx += 1;

});


var attention_tocheck = true;


$("#next-task").click(function(){

	if(document.getElementById('radio-first-decision-1').checked == false && document.getElementById('radio-first-decision-2').checked == false){
		alert("Please make your prediction");
		return false;
	}
	if(document.getElementById('radio-first-confidence-1').checked == false && document.getElementById('radio-first-confidence-2').checked == false){
		alert("Please indicate your confidence");
		return false;
	}
	if((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && (document.getElementById('radio-first-confidence-1').checked == true || document.getElementById('radio-first-confidence-2').checked == true)){
		//保存用户的两次决策结果

		timestamp2 = new Date().getTime(); //1610075969354 
		

		var objData1 = $("#firstdecision1").serializeArray();
		var objData2 = $("#finaldecision1").serializeArray();
		
		// console.log(objData);
		
		firstdecision_1 = objData1[0];
		firstconfidence_1 = objData1[1];

		aisuggestion_1 = ai_prediction[order_list[current_idx-1]];
		aiconfidence_1 = ai_confidence[order_list[current_idx-1]];
		ground_truth_1 = ground_truth[order_list[current_idx-1]];

		seconddecision_1 = objData2[0];
		secondconfidence_1 = objData2[1];

		var time_spent = timestamp2 - timestamp1;
		timestamp1 = timestamp2;

		console.log("time spent:" + time_spent);

		current_instance_data = [current_idx, order_list[current_idx - 1], firstdecision_1, firstconfidence_1, time_spent, aisuggestion_1, aiconfidence_1,ground_truth_1];

		console.log(current_instance_data);

		all_data_tosave.push(current_instance_data);

		console.log(all_data_tosave);

		// 这是之前的写法，展示一个新的界面
		// $(".nav-tabs a[href='#newdemo2']").tab('show');


		if (current_idx < order_list.length-99){
			//随机找一个时间，去attention check

			if (attention_tocheck && current_idx == 50){
				attention_tocheck = false;
				
				document.getElementById('question1').textContent = "Q1. What is the answer of 35 plus 20?";
				document.getElementById('attentioncheck1').textContent = "Below 50";
				document.getElementById('attentioncheck2').textContent = "Above 50";

				/*
				在这里，我要试着改成纯动态页面，就用一个页面，来展示任意数量的instance
				*/


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




				// step3，把用户选项框清零

				document.getElementById('radio-first-decision-1').checked = false;
				document.getElementById('radio-first-decision-2').checked = false;
				document.getElementById('radio-first-confidence-1').checked = false;
				document.getElementById('radio-first-confidence-2').checked = false;


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
				document.getElementById('attentioncheck1').textContent = "Below 50k";
				document.getElementById('attentioncheck2').textContent = "Above 50k";

				/*
				在这里，我要试着改成纯动态页面，就用一个页面，来展示任意数量的instance
				*/


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




				// step3，把用户选项框清零

				document.getElementById('radio-first-decision-1').checked = false;
				document.getElementById('radio-first-decision-2').checked = false;
				document.getElementById('radio-first-confidence-1').checked = false;
				document.getElementById('radio-first-confidence-2').checked = false;


				// step4，对页面的其他位置进行更新，比如进度数字，进度条

				var percentage = current_idx/order_list.length*100;
				console.log(percentage);
				document.getElementById('progressbar1').style.width = percentage + '%';
				document.getElementById('progressbar1').textContent = percentage + '%';
				document.getElementById('progress-text').textContent = current_idx + 1 + '/' + order_list.length;


				// step5，重置按钮状态
				ai_suggestion_seen = false;
			}
			

		}else{
			
			document.getElementById("attention_slider").style.display="block";
			document.getElementById("user_rule").style.display = "block";
			document.getElementById("add_rule").style.display = "block";
			document.getElementById("go_to_next").style.display = "block";
			document.getElementById("user_prediction").style.display="none";
		}
		current_idx += 1;
	}



});



$("#go_to_next").click(function(){
	document.getElementById("attention_slider").style.display="none";
	//document.getElementById("user_rule").style.display = "none";
	//document.getElementById("add_rule").style.display = "none";
	//document.getElementById("go_to_next").style.display = "none";
	$("#finishModal").modal('show');
	submitData_ms();
	var percentage = parseInt(current_idx/order_list.length*100);
	console.log(percentage);
	document.getElementById('progressbar1').style.width = percentage + '%';
	document.getElementById('progressbar1').textContent = percentage + '%';
	// document.getElementById('progress-text').textContent = current_idx + '/' + order_list.length;

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

	var age = document.getElementById("age_range").value;
	var work = document.getElementById("workclass_range").value;
	var education = document.getElementById("education_range").value;
	var educationnum = document.getElementById("educationnum_range").value;
	var Marital = document.getElementById("Marital_range").value;
	var occupation = document.getElementById("occupation_range").value;
	var relationship = document.getElementById("relationship_range").value;
	var race = document.getElementById("race_range").value;
	var gender = document.getElementById("gender_range").value;
	var whpw = document.getElementById("whpw_range").value;
	var country = document.getElementById("country_range").value;

	attention_slider_data.push(age,work,education,educationnum,Marital,occupation,relationship,race,gender,whpw,country);

	console.log(attention_slider_data);

	for(var i = 0; i < addnum+1; i++){
		var tmpdict = {};
		tmpdict["feature"] = document.getElementById("feature"+String(i)).value;
		tmpdict["relation"] = document.getElementById("relation" + String(i)).value;
		tmpdict["value"] = document.getElementById("value" + String(i)).value;
		rule_data.push(tmpdict);
	}

	var userinfo_alldata = {
		"uid": user_id,
		"user_info": userinfo,
		"decision_data": all_data_tosave,
		"attention_slider_data": attention_slider_data,
		"rule_data": rule_data
	}
	var dataJson = JSON.stringify(userinfo_alldata);
	// xhr.send(dataJson);
	

	/*
	* 把数据存为本地json文件，不上传到server
	*/
	var blob = new Blob([dataJson], {type: "text/plain;charset=utf-8"});
    saveAs(blob, user_id + ".json");
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
	[">", "=", "<"],
	["is", "isn't"],
	["is", "isn't"],
	["is", "isn't"],
	["is", "isn't"],
	["is", "isn't"],
	[">", "=", "<"],
	["is", "isn't"]
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
	["Preschool", "1st - 4th", "5th-6th", "7th-8th", "9th", "10th", "11th", "12th", "HS-grad", "Prof-school", "Some-college", "Assoc-acdm", "Assoc-voc", "Bachelors", "Masters", "Doctorate"],
	["0~4", "5~9", "10~14", "15~19", "20~24", "25~29", "30~34", "35~39"],
	["Married-civ-spouse", "Divorced", "Never-married", "Separated", "Widowed", "Married-spouse-absent", "Married-AF-spouse"],
	["Tech-support", "Craft-repair", "Other-service", "Sales", "Exec-managerial", "Prof-specialty", "Handlers-cleaners", "Machine-op-inspct", "Adm-clerical", "Farming-fishing", "Transport-moving", "Priv-house-serv", "Protective-serv", "Armed-Forces"],
	["Wife", "Own-child", "Husband", "Not-in-family", "Other-relative", "Unmarried"],
	["White", "Asian-Pac-Islander", "Amer-Indian-Eskimo", "Other", "Black"],
	["Female", "Male"],
	["0~9", "10~19", "20~29", "30~39", "40~49", "50~59", "60~69", "70~79", "80~89", "90~99"],
	["United-States","Others"]
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

