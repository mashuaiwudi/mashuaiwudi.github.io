var idx_list = ['1-1', '2-1', '2-2', '3-1', '3-2', '3-3', '3-4', '4-1', '4-2', '4-3', '4-4', '4-5', '4-6', '4-7', '4-8'];
var rule_list = [];
var user_rule_list = {};
var features = ['Label', 'Age', 'Workclass', 'Education.num', 'Marital.status', 'Occupation', 'Race', 'Sex', 'Work.hours.per.week']

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
    '1-1':0,
    '2-1':1, 
    '2-2':2, 
    '3-1':3, 
    '3-2':4, 
    '3-3':5, 
    '3-4':6, 
    '4-1':7, 
    '4-2':8, 
    '4-3':9, 
    '4-4':10, 
    '4-5':11, 
    '4-6':12, 
    '4-7':13, 
    '4-8':14
}

function init() {
    console.log('init the page!');
    //selectMultip.register();
    rule_list = [];

    //一次性画出所有的连线
    for(var i=0;i<7;i++){
        idx = idx_list[i];
        // 获取节点的编号并显示出来
        var parentNode = document.getElementById('node' + idx);
        var childIdx = map[idx];
        var childNode1 = document.getElementById('node' + childIdx[0]);
        var childNode2 = document.getElementById("node" + childIdx[1]);
        $("body").append(drawLine('line' + idx + 'left', 'choice' + idx + 'left', 'Y', parentNode, childNode1));
        $("body").append(drawLine('line' + idx + 'right', 'choice' + idx + 'right', 'N', parentNode, childNode2));
    }

    $.ajax({
        //url: "http://localhost:8081/send_rule_tofront",
        url: "http://49.232.60.34:8081/send_rule_tofront",
        type: "post",
        async: false, 
        processData: false,
        contentType: false,
        success: function (data) { // data是接收的后台返回数据
            rule_list = data;
            rule_list = JSON.parse(data);
            console.log(rule_list);
            // 下面对15个节点中非None的进行展示并修改内容
            for (var i = 0; i < 15; i++) {
                var tmp_node = document.getElementById('node' + idx_list[i]);
                if (rule_list[i] != 'None') {
                    var tmp_data = rule_list[i];

                    if(tmp_data[0] == 'Label' && map_idx[idx_list[i]] <= 6){
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
                    for(var k=0;k<9;k++){
                        if(tmp_data[0] == features[k]){
                            tmp_index_feature = k;
                            tmp_feature[tmp_index_feature+1].selected = true;
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
                            tmp_relation[tmp_index+1].selected = true;
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
                    tmp_node.style.display = 'none'; 
                    
                    if (map_idx[idx_list[i]] <= 6){
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
    for(var i=0;i<15;i++){
        var tmp_idx = idx_list[i];
        var tmp;
        if(document.getElementById('node' + tmp_idx).style.display != 'none'){
            var tmp_feature = document.getElementById('feature' + tmp_idx).value;
            if(tmp_feature  == ''){
                alert('Please complement the node!');
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
                alert('Please complement the node!');
                break;
            }
            if (tmp_idx == '1-1') {
                if (tmp_feature == '1') {
                    alert('The feature of the root nodes must not be label!');
                    break;
                }
            }
            if (tmp_idx == '4-1' || tmp_idx == '4-2' || tmp_idx == '4-3' || tmp_idx == '4-4' || tmp_idx == '4-5' || tmp_idx == '4-6' || tmp_idx == '4-7' || tmp_idx == '4-8') {
                if (tmp_feature != '1') {
                    alert('The feature of the leaf nodes must be label!');
                    break;
                }
            }
            tmp = {"feature":features[parseInt(tmp_feature) - 1], "relation":tmp_relation, "value":tmp_true_value};
        }
        else{
            tmp = 'none';
        }
        user_rule_list[String(i)] = tmp;
    }
    console.log(user_rule_list);

    $.ajax({
        //url: "http://localhost:8081/get_user_rule",
        url: "http://49.232.60.34:8081/get_user_rule",
        type: "GET",
        async: false,
        data: { "user_rule_list": JSON.stringify(user_rule_list)},
        success: function(data) { 
            console.log('获取信息成功');
            window.close();
        },
        error: function (e) {
            console.log("获取信息失败"); 
        }
    })

    //window.close();
});

var relations = [
    ["is"],
    [">", "<="],
    ["is", "isn't"],
    [">", "<="],
    ["is", "isn't"],
    ["is", "isn't"],
    ["is", "isn't"],
    ["is", "isn't"],
    [">", "<="]
]

var values = [
    ["≤50k", ">50k"],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'],
    ["Federal-gov", "Local-gov", "Private", "Self-emp-not-inc"],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    ["Divorced", "Married-civ-spouse", "Never-married", "Separated"],
    ["Tech-support", "Other-service", "Exec-managerial"],
    ["Asian-Pac-Islander", "Black", "Other", "White"],
    ["Female", "Male"],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99']
]


function drawLine(lineId,choiceId,content,startObj, endObj) {
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
    var feature = document.getElementById("feature" + idx).selectedIndex-1;

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
        var parentNode = document.getElementById('node' + idx);
        var childIdx = map[idx];
        var childNode1 = document.getElementById('node' + childIdx[0]);
        var childNode2 = document.getElementById("node" + childIdx[1]);
        childNode1.style.display = 'block';
        childNode2.style.display = 'block';

        if(map_idx[idx] <=6){
            document.getElementById("line" + idx + 'left').style.display = "block";
            document.getElementById("line" + idx + 'right').style.display = "block";
            document.getElementById("choice" + idx + 'left').style.display = "block";
            document.getElementById("choice" + idx + 'right').style.display = "block";
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

    x += W/2;
    y += H/2;

    return { x, y };
}