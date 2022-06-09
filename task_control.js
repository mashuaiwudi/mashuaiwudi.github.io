

var user_id = 0;

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


$("#pager-0").click(function(){

    $(".nav-tabs a[href='#newdemo1']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$('#popupPage-1').modal('show');
	setTimeout(function() {
	    $('#popupPage-1').modal('hide');
	}, 1000);

	var userinfo = $("#form_info").serializeArray();
	console.log(userinfo[0]);
	console.log(userinfo[0]['value']);
	user_id = userinfo[0]['value'];

	
});


$("#next-task").click(function(){

	var objData1 = $("#firstdecision1").serializeArray();
	var objData2 = $("#finaldecision1").serializeArray();
	
	// console.log(objData);
	firstdecision_1 = objData1[0];
	firstconfidence_1 = objData1[1];

	seconddecision_1 = objData2[0];
	secondconfidence_1 = objData2[1];


	// question1_1 = objData;



	$(".nav-tabs a[href='#newdemo2']").tab('show');
	document.getElementById('progressbar2').style.width = '5%';
	document.getElementById('progressbar2').textContent = '5%';
	for (var i = 0; i < 11; i++) {
		var tb = document.getElementById('tab2');//获取表格的dom节点
		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
		td.innerHTML = '222';//动态修改表格的内容为222
		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
		td.innerHTML = '222';//动态修改表格的内容为222
	}
});













$("#next-task2").click(function(){
	$(".nav-tabs a[href='#newdemo3']").tab('show');
	document.getElementById('progressbar3').style.width = '10%';
	document.getElementById('progressbar3').textContent = '10%';
	for (var i = 0; i < 11; i++) {
		var tb = document.getElementById('tab3');//获取表格的dom节点
		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
		td.innerHTML = '333';//动态修改表格的内容为222
		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
		td.innerHTML = '333';//动态修改表格的内容为222
	}

});

$("#next-task3").click(function(){
	// $(".nav-tabs a[href='#newdemo4']").tab('show');
	// document.getElementById('progressbar4').style.width = '15%';
	// document.getElementById('progressbar4').textContent = '15%';
	// for (var i = 0; i < 11; i++) {
	// 	var tb = document.getElementById('tab4');//获取表格的dom节点
	// 	var td = tb.rows[i].cells[0];//获取0行0列的td单元格
	// 	td.innerHTML = '111';//动态修改表格的内容为222
	// 	var td = tb.rows[i].cells[1];//获取0行0列的td单元格
	// 	td.innerHTML = '222';//动态修改表格的内容为222
	// }
	submitData_ms();
});

// $("#next-task4").click(function(){
// 	$(".nav-tabs a[href='#newdemo5']").tab('show');
// 	document.getElementById('progressbar5').style.width = '20%';
// 	document.getElementById('progressbar5').textContent = '20%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab5');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task5").click(function(){
// 	$(".nav-tabs a[href='#newdemo6']").tab('show');
// 	document.getElementById('progressbar6').style.width = '25%';
// 	document.getElementById('progressbar6').textContent = '25%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab6');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task6").click(function(){
// 	$(".nav-tabs a[href='#newdemo7']").tab('show');
// 	document.getElementById('progressbar7').style.width = '30%';
// 	document.getElementById('progressbar7').textContent = '30%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab7');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task7").click(function(){
// 	$(".nav-tabs a[href='#newdemo8']").tab('show');
// 	document.getElementById('progressbar8').style.width = '35%';
// 	document.getElementById('progressbar8').textContent = '35%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab8');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task8").click(function(){
// 	$(".nav-tabs a[href='#newdemo9']").tab('show');
// 	document.getElementById('progressbar9').style.width = '40%';
// 	document.getElementById('progressbar9').textContent = '40%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab9');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task9").click(function(){
// 	$(".nav-tabs a[href='#newdemo10']").tab('show');
// 	document.getElementById('progressbar10').style.width = '45%';
// 	document.getElementById('progressbar10').textContent = '45%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab10');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task10").click(function(){
// 	$(".nav-tabs a[href='#newdemo11']").tab('show');
// 	document.getElementById('progressbar11').style.width = '50%';
// 	document.getElementById('progressbar11').textContent = '50%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab11');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task11").click(function(){
// 	$(".nav-tabs a[href='#newdemo12']").tab('show');
// 	document.getElementById('progressbar12').style.width = '55%';
// 	document.getElementById('progressbar12').textContent = '55%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab12');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task12").click(function(){
// 	$(".nav-tabs a[href='#newdemo13']").tab('show');
// 	document.getElementById('progressbar13').style.width = '60%';
// 	document.getElementById('progressbar13').textContent = '60%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab13');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task13").click(function(){
// 	$(".nav-tabs a[href='#newdemo14']").tab('show');
// 	document.getElementById('progressbar14').style.width = '65%';
// 	document.getElementById('progressbar14').textContent = '65%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab14');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task14").click(function(){
// 	$(".nav-tabs a[href='#newdemo15']").tab('show');
// 	document.getElementById('progressbar15').style.width = '70%';
// 	document.getElementById('progressbar15').textContent = '70%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab15');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task15").click(function(){
// 	$(".nav-tabs a[href='#newdemo16']").tab('show');
// 	document.getElementById('progressbar16').style.width = '75%';
// 	document.getElementById('progressbar16').textContent = '75%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab16');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task16").click(function(){
// 	$(".nav-tabs a[href='#newdemo17']").tab('show');
// 	document.getElementById('progressbar17').style.width = '80%';
// 	document.getElementById('progressbar17').textContent = '80%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab17');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task17").click(function(){
// 	$(".nav-tabs a[href='#newdemo18']").tab('show');
// 	document.getElementById('progressbar18').style.width = '85%';
// 	document.getElementById('progressbar18').textContent = '85%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab18');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task18").click(function(){
// 	$(".nav-tabs a[href='#newdemo19']").tab('show');
// 	document.getElementById('progressbar19').style.width = '90%';
// 	document.getElementById('progressbar19').textContent = '90%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab19');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task19").click(function(){
// 	$(".nav-tabs a[href='#newdemo20']").tab('show');
// 	document.getElementById('progressbar20').style.width = '95%';
// 	document.getElementById('progressbar20').textContent = '95%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab20');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });

// $("#next-task20").click(function(){
// 	$(".nav-tabs a[href='#newdemo2']").tab('show');
// 	document.getElementById('progressbar2').style.width = '5%';
// 	document.getElementById('progressbar2').textContent = '5%';
// 	for (var i = 0; i < 11; i++) {
// 		var tb = document.getElementById('tab2');//获取表格的dom节点
// 		var td = tb.rows[i].cells[0];//获取0行0列的td单元格
// 		td.innerHTML = '111';//动态修改表格的内容为222
// 		var td = tb.rows[i].cells[1];//获取0行0列的td单元格
// 		td.innerHTML = '222';//动态修改表格的内容为222
// 	}
// });





function submitData_ms(){
	// var xhr = new XMLHttpRequest();
	// //var url = "http://165.227.108.67/mingfei/submit.php"
	// var url = "https://shuaima.info/userstudy/submit.php"
	// xhr.open("POST", url, true);
	// xhr.setRequestHeader("Content-Type", "application/json");
	// // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	// xhr.onreadystatechange = function () {
	// 	if (xhr.readyState === 4 && xhr.status === 200) {
	// 		document.getElementById('user_id').innerHTML = xhr.responseText;
	// 		console.log(xhr.responseText);
	// 		//alert("Your response has been saved successfully!");
	// 		$("#learning_finishModal").modal('show');
	//     }
	// };

	data = {"firstdecision_1": firstdecision_1,
			"firstconfidence_1": firstconfidence_1,
			// "aisuggestion_1": aisuggestion_1,
			// "aiconfidence_1": aiconfidence_1,
			"seconddecision_1": seconddecision_1,
			"secondconfidence_1": secondconfidence_1,
			"firstdecision_2": firstdecision_2,
			"firstconfidence_2": firstconfidence_2,
			// "aisuggestion_2": aisuggestion_2,
			// "aiconfidence_2": aiconfidence_2,
			"seconddecision_2": seconddecision_2,
			"secondconfidence_2": secondconfidence_2,
			"firstdecision_3": firstdecision_3,
			"firstconfidence_3": firstconfidence_3,
			// "aisuggestion_3": aisuggestion_3,
			// "aiconfidence_3": aiconfidence_3,
			"seconddecision_3": seconddecision_3,
			"secondconfidence_3": secondconfidence_3,
		}

	var dataJson = JSON.stringify(data);
	//xhr.send(dataJson);
	var blob = new Blob([dataJson], {type: "text/plain;charset=utf-8"});
    saveAs(blob, user_id + ".json");
}