var combn_code = [
		[1, 2, 3, 4],
		[2, 3, 4, 1],
		[3, 4, 1, 2],
		[4, 1, 2, 3],
		[2, 3, 4, 1],
		[3, 4, 1, 2],
		[4, 1, 2, 3],
		[1, 2, 3, 4],
		[3, 4, 1, 2],
		[4, 1, 2, 3],
		[1, 2, 3, 4],
		[2, 3, 4, 1],
		[4, 1, 2, 3],
		[1, 2, 3, 4],
		[2, 3, 4, 1],
		[3, 4, 1, 2],
	];

var id_vid_real 	= ["learning1_vid_real", "learning2_vid_real", "learning3_vid_real", "learning4_vid_real"];
var id_vid_sim 		= ["vid_sim_1", "vid_sim_2", "vid_sim_3", "vid_sim_4"];

var id_q_rating 	= ["panel_question_1_1", "panel_question_2_1", "panel_question_3_1", "panel_question_4_1"]

var id_thumbnail 	= ["thumbnail-1", "thumbnail-2", "thumbnail-3", "thumbnail-4"]
var id_thumbnail_ 	= ["thumbnail-1-1", "thumbnail-2-2", "thumbnail-3-3", "thumbnail-4-4"]
var id_thumbnailtest 	= ["thumbnail-test-1", "thumbnail-test-2", "thumbnail-test-3", "thumbnail-test-4"]



var html_vid_real	= [];
var html_vid_sim 	= [];

var html_q_rating   = [];

// user id: unique for answering the questionairs
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
var user_id = uuidv4();


// get elements
for (var i = 0; i < id_vid_real.length; i++) {
	html_vid_real.push(document.getElementById(id_vid_real[i]));
	html_vid_sim.push(document.getElementById(id_vid_sim[i]));

	html_q_rating.push(document.getElementById(id_q_rating[i]));
}

Math.random();
Math.random();

// from 1 to 16, randomly pick one
var currMode = combn_code[Math.floor(Math.random() * combn_code.length)];
var currSport = combn_code[Math.floor(Math.random() * combn_code.length)];

// the key is to get currMode and currSport


var containerlist = [['container1-1', 'container1-2', 'container1-3', 'container1-4', 'container1-5'],
['container2-1', 'container2-2', 'container2-3', 'container2-4', 'container2-5'],
['container3-1', 'container3-2', 'container3-3', 'container3-4', 'container3-5'],
['container4-1', 'container4-2', 'container4-3', 'container4-4', 'container4-5']]

var firstviewlist = [['firstview1-1', 'firstview1-2', 'firstview1-3', 'firstview1-4', 'firstview1-5'],
['firstview2-1', 'firstview2-2', 'firstview2-3', 'firstview2-4', 'firstview2-5'],
['firstview3-1', 'firstview3-2', 'firstview3-3', 'firstview3-4', 'firstview3-5'],
['firstview4-1', 'firstview4-2', 'firstview4-3', 'firstview4-4', 'firstview4-5']]



var action1_mode1_360 = ['20926128475f870426d48b3', '20525552165f87045ff2139', '15269423075f87049c026c9', '629439685f8704d28b3e4', '712926975f8705077739f']
var action1_mode2_360 = ['16623954235f87053a94e52', '869160165f87058746b88', '12459136935f8705bb345e5', '1754284085f8705f59e69c', '12997085285f87062b66c7c']
var action1_mode3_360 = ['8946917235f87066f792bc', '8946917235f87066f792bc', '8946917235f87066f792bc', '8946917235f87066f792bc', '8946917235f87066f792bc']
var action1_mode4_360 = ['9905934355f8706ae3d3fc', '9905934355f8706ae3d3fc', '9905934355f8706ae3d3fc', '9905934355f8706ae3d3fc', '9905934355f8706ae3d3fc']
var action2_mode1_360 = ['19022558285f87013e54c45', '9306625755f87015cb0325', '20443433535f87018a9bc27', '15554488975f8701aa85061', '4359013615f8701c1408ff']
var action2_mode2_360 = ['3111629605f8701d740f8d', '158148075f8701ee9390c', '3041428045f87020576025', '3041428045f87021c5c922', '15623009925f8702383cb9b']
var action2_mode3_360 = ['1172474315f87025057224', '1172474315f87025057224', '1172474315f87025057224', '1172474315f87025057224', '1172474315f87025057224']
var action2_mode4_360 = ['15197695805f87026984d72', '15197695805f87026984d72', '15197695805f87026984d72', '15197695805f87026984d72', '15197695805f87026984d72']
var action3_mode1_360 = ['9076983905f8707e09d0ca', '9076983905f87080946c10', '15641350745f87082b1a809', '20874607055f870850c9e27', '12096046705f870874ab3e9']
var action3_mode2_360 = ['19033139505f87089d8ea6c', '21468115445f8708be6a834', '11226573865f8708e4e7797', '17810406805f870901da039', '17794780095f87092868cb8']
var action3_mode3_360 = ['16867232905f87094acb36e', '16867232905f87094acb36e', '16867232905f87094acb36e', '16867232905f87094acb36e', '16867232905f87094acb36e']
var action3_mode4_360 = ['9341697465f87097298f7b', '9341697465f87097298f7b', '9341697465f87097298f7b', '9341697465f87097298f7b', '9341697465f87097298f7b']
var action4_mode1_360 = ['5576139155f870ddfc71bc', '20436166105f870e21045b2', '9874218585f870e683d902', '3854146645f870eb7d7307', '4340908055f870f033d154']
var action4_mode2_360 = ['1154230655f870f7275ca0', '1709584905f870fbc3f185', '19051169405f8710116f03c', '9234133545f871052687cd', '12160381365f8710987dc8c']
var action4_mode3_360 = ['17731534095f8710e68237e', '17731534095f8710e68237e', '17731534095f8710e68237e', '17731534095f8710e68237e', '17731534095f8710e68237e']
var action4_mode4_360 = ['13625726635f871137707df', '13625726635f871137707df', '13625726635f871137707df', '13625726635f871137707df', '13625726635f871137707df']
var resources360 = [[action1_mode1_360, action1_mode2_360, action1_mode3_360, action1_mode4_360],
[action2_mode1_360, action2_mode2_360, action2_mode3_360, action2_mode4_360],
[action3_mode1_360, action3_mode2_360, action3_mode3_360, action3_mode4_360],
[action4_mode1_360, action4_mode2_360, action4_mode3_360, action4_mode4_360]]


var action1_mode1_firstview = ['newfirst-washing-mode1-1', 'newfirst-washing-mode1-2', 'newfirst-washing-mode1-3', 'newfirst-washing-mode1-4', 'newfirst-washing-mode1-5']
var action1_mode2_firstview = ['newfirst-washing-mode2-1', 'newfirst-washing-mode2-2', 'newfirst-washing-mode2-3', 'newfirst-washing-mode2-4', 'newfirst-washing-mode2-5']
var action1_mode3_firstview = ['newfirst-washing-mode3', 'newfirst-washing-mode3', 'newfirst-washing-mode3', 'newfirst-washing-mode3', 'newfirst-washing-mode3']
var action1_mode4_firstview = ['newfirst-washing-mode4', 'newfirst-washing-mode4', 'newfirst-washing-mode4', 'newfirst-washing-mode4', 'newfirst-washing-mode4']

var action2_mode1_firstview = ['newfirst-quanji-mode1-1', 'newfirst-quanji-mode1-2', 'newfirst-quanji-mode1-3', 'newfirst-quanji-mode1-4', 'newfirst-quanji-mode1-5']
var action2_mode2_firstview = ['newfirst-quanji-mode2-1', 'newfirst-quanji-mode2-2', 'newfirst-quanji-mode2-3', 'newfirst-quanji-mode2-4', 'newfirst-quanji-mode2-5']
var action2_mode3_firstview = ['newfirst-quanji-mode3', 'newfirst-quanji-mode3', 'newfirst-quanji-mode3', 'newfirst-quanji-mode3', 'newfirst-quanji-mode3']
var action2_mode4_firstview = ['newfirst-quanji-mode4', 'newfirst-quanji-mode4', 'newfirst-quanji-mode4', 'newfirst-quanji-mode4', 'newfirst-quanji-mode4']

var action3_mode1_firstview = ['newfirst-gangqin-mode1-1', 'newfirst-gangqin-mode1-2', 'newfirst-gangqin-mode1-3', 'newfirst-gangqin-mode1-4', 'newfirst-gangqin-mode1-5']
var action3_mode2_firstview = ['newfirst-gangqin-mode2-1', 'newfirst-gangqin-mode2-2', 'newfirst-gangqin-mode2-3', 'newfirst-gangqin-mode2-4', 'newfirst-gangqin-mode2-5']
var action3_mode3_firstview = ['newfirst-gangqin-mode3', 'newfirst-gangqin-mode3', 'newfirst-gangqin-mode3', 'newfirst-gangqin-mode3', 'newfirst-gangqin-mode3']
var action3_mode4_firstview = ['newfirst-gangqin-mode4', 'newfirst-gangqin-mode4', 'newfirst-gangqin-mode4', 'newfirst-gangqin-mode4', 'newfirst-gangqin-mode4']

var action4_mode1_firstview = ['newfirst-woshou-mode1-1', 'newfirst-woshou-mode1-2', 'newfirst-woshou-mode1-3', 'newfirst-woshou-mode1-4', 'newfirst-woshou-mode1-5']
var action4_mode2_firstview = ['newfirst-woshou-mode2-1', 'newfirst-woshou-mode2-2', 'newfirst-woshou-mode2-3', 'newfirst-woshou-mode2-4', 'newfirst-woshou-mode2-5']
var action4_mode3_firstview = ['newfirst-woshou-mode3', 'newfirst-woshou-mode3', 'newfirst-woshou-mode3', 'newfirst-woshou-mode3', 'newfirst-woshou-mode3']
var action4_mode4_firstview = ['newfirst-woshou-mode4', 'newfirst-woshou-mode4', 'newfirst-woshou-mode4', 'newfirst-woshou-mode4', 'newfirst-woshou-mode4']
var resourcesfirstview = [[action1_mode1_firstview, action1_mode2_firstview, action1_mode3_firstview, action1_mode4_firstview],
[action2_mode1_firstview, action2_mode2_firstview, action2_mode3_firstview, action2_mode4_firstview],
[action3_mode1_firstview, action3_mode2_firstview, action3_mode3_firstview, action3_mode4_firstview],
[action4_mode1_firstview, action4_mode2_firstview, action4_mode3_firstview, action4_mode4_firstview]]


var selected20keys = new Array();　//创建一个数组
for (var i = 0; i < html_vid_real.length; i++){
	vid_name_real = "newvideo/realaction_" + currSport[i] + ".mp4";
	//vid_name_sim = "sim_" + currSport[i] + "_" + currMode[i] + ".mp4";


	document.getElementById(id_thumbnail[i]).src = "pepperrobot-" + currSport[i] + ".png";
	document.getElementById(id_thumbnail_[i]).src = "pepperrobot-" + currSport[i] + ".png";
	document.getElementById(id_thumbnailtest[i]).src = "pepperrobot-" + currSport[i] + ".png";

	
	




	//一开始的真人演示视频可以继续这么搞
	var htmlSource = document.createElement("source");
	htmlSource.setAttribute("src", vid_name_real);
	htmlSource.setAttribute("type", "video/mp4");
	html_vid_real[i].appendChild(htmlSource);

	console.log(html_vid_real[i])


	//但是后面的360视频以及第一人称视频不要以添加source的方式来了
	//var htmlSource2 = document.createElement("source");
	//htmlSource2.setAttribute("src", vid_name_sim);
	//htmlSource2.setAttribute("type", "video/mp4");
	//html_vid_sim[i].appendChild(htmlSource2);
	/*
	var containername1 = containerlist[i][0]
	var containername2 = containerlist[i][1]
	var containername3 = containerlist[i][2]
	var containername4 = containerlist[i][3]
	var containername5 = containerlist[i][4]

	var firstviewname1 = firstviewlist[i][0]
	var firstviewname2 = firstviewlist[i][1]
	var firstviewname3 = firstviewlist[i][2]
	var firstviewname4 = firstviewlist[i][3]
	var firstviewname5 = firstviewlist[i][4]

	//随机得到一种动作下的一种模式的5个360视频
	var video360_1 = resources360[currSport[i]][currMode[i]][0]
	var video360_2 = resources360[currSport[i]][currMode[i]][1]
	var video360_3 = resources360[currSport[i]][currMode[i]][2]
	var video360_4 = resources360[currSport[i]][currMode[i]][3]
	var video360_5 = resources360[currSport[i]][currMode[i]][4]

	//随机得到一种动作下的一种模式的5个第一人称视频
	var videofirst_1 = resourcesfirstview[currSport[i]][currMode[i]][0]
	var videofirst_2 = resourcesfirstview[currSport[i]][currMode[i]][1]
	var videofirst_3 = resourcesfirstview[currSport[i]][currMode[i]][2]
	var videofirst_4 = resourcesfirstview[currSport[i]][currMode[i]][3]
	var videofirst_5 = resourcesfirstview[currSport[i]][currMode[i]][4]
	*/
	//把播放视频的html元素与视频绑定起来

	var cur_selected5keys = new Array();
	for(var j = 0; j < containerlist[i].length; j++){
		
		containername = document.getElementById(containerlist[i][j])

		containername.style.backgroundImage="url("+ "360cover-" + currSport[i] + ".png" +")";
		


		//containername = containerlist[i][j]
		firstviewname = document.getElementById(firstviewlist[i][j])

		firstviewname.poster = "firstcover-" + currSport[i] + ".png";

		console.log(firstviewname)

		console.log(currSport[i])
		console.log(currMode[i])

		video360 = resources360[currSport[i]-1][currMode[i]-1][j]
		console.log(video360)
		videofirst = 'newvideo/' + resourcesfirstview[currSport[i]-1][currMode[i]-1][j] + ".mp4"
		console.log(videofirst)
		//首先绑定360视频
		//其实所谓的绑定360视频，就是确定好了视频的key是什么，1-1，1-2，。。。，4-5，这20个播放框分别用什么key（从80个key里面挑出来），从但是并不真的init
		//play2VR.init(document.querySelector('#' + containername), video360);
		cur_selected5keys.push(video360)
		
		//然后绑定第一人称视频
		var htmlSource = document.createElement("source");
		htmlSource.setAttribute("src", videofirst);
		htmlSource.setAttribute("type", "video/mp4");
		firstviewname.appendChild(htmlSource);
	}
	selected20keys.push(cur_selected5keys)
	

	/*
	//首先绑定360视频
	play2VR.init(document.querySelector(containername1), video360_1);
	play2VR.init(document.querySelector(containername2), video360_1);
	play2VR.init(document.querySelector(containername3), video360_1);
	play2VR.init(document.querySelector(containername4), video360_1);
	play2VR.init(document.querySelector(containername5), video360_1);
	//其次绑定第一人称视频
	var htmlSource1 = document.createElement("source");
	htmlSource1.setAttribute("src", videofirst_1);
	htmlSource1.setAttribute("type", "video/webm");
	firstviewname1.appendChild(htmlSource1);

	var htmlSource2 = document.createElement("source");
	htmlSource2.setAttribute("src", videofirst_1);
	htmlSource2.setAttribute("type", "video/webm");
	firstviewname1.appendChild(htmlSource2);

	var htmlSource3 = document.createElement("source");
	htmlSource3.setAttribute("src", videofirst_1);
	htmlSource3.setAttribute("type", "video/webm");
	firstviewname1.appendChild(htmlSource3);

	var htmlSource4 = document.createElement("source");
	htmlSource4.setAttribute("src", videofirst_1);
	htmlSource4.setAttribute("type", "video/webm");
	firstviewname1.appendChild(htmlSource1);

	var htmlSource1 = document.createElement("source");
	htmlSource1.setAttribute("src", videofirst_1);
	htmlSource1.setAttribute("type", "video/webm");
	firstviewname1.appendChild(htmlSource1);

	*/


	

	
}



$("#init1_1").click(function(){
	play2VR.init(document.querySelector('#container1-1'), selected20keys[0][0]);
	setTimeout("videojs('firstview1-1').play()",2000);
});

$("#init1_2").click(function(){
	play2VR.init(document.querySelector('#container1-2'), selected20keys[0][1]);
	setTimeout("videojs('firstview1-2').play()",2000);
});

$("#init1_3").click(function(){
	play2VR.init(document.querySelector('#container1-3'), selected20keys[0][2]);
	setTimeout("videojs('firstview1-3').play()",2000);
});

$("#init1_4").click(function(){
	play2VR.init(document.querySelector('#container1-4'), selected20keys[0][3]);
	setTimeout("videojs('firstview1-4').play()",2000);
});

$("#init1_5").click(function(){
	play2VR.init(document.querySelector('#container1-5'), selected20keys[0][4]);
	setTimeout("videojs('firstview1-5').play()",2000);
});

$("#init2_1").click(function(){
	play2VR.init(document.querySelector('#container2-1'), selected20keys[1][0]);
	setTimeout("videojs('firstview2-1').play()",2000);
});

$("#init2_2").click(function(){
	play2VR.init(document.querySelector('#container2-2'), selected20keys[1][1]);
	setTimeout("videojs('firstview2-2').play()",2000);
});

$("#init2_3").click(function(){
	play2VR.init(document.querySelector('#container2-3'), selected20keys[1][2]);
	setTimeout("videojs('firstview2-3').play()",2000);
});

$("#init2_4").click(function(){
	play2VR.init(document.querySelector('#container2-4'), selected20keys[1][3]);
	setTimeout("videojs('firstview2-4').play()",2000);
});

$("#init2_5").click(function(){
	play2VR.init(document.querySelector('#container2-5'), selected20keys[1][4]);
	setTimeout("videojs('firstview2-5').play()",2000);
});

$("#init3_1").click(function(){
	play2VR.init(document.querySelector('#container3-1'), selected20keys[2][0]);
	setTimeout("videojs('firstview3-1').play()",2000);
});

$("#init3_2").click(function(){
	play2VR.init(document.querySelector('#container3-2'), selected20keys[2][1]);
	setTimeout("videojs('firstview3-2').play()",2000);
});

$("#init3_3").click(function(){
	play2VR.init(document.querySelector('#container3-3'), selected20keys[2][2]);
	setTimeout("videojs('firstview3-3').play()",2000);
});

$("#init3_4").click(function(){
	play2VR.init(document.querySelector('#container3-4'), selected20keys[2][3]);
	setTimeout("videojs('firstview3-4').play()",2000);
});

$("#init3_5").click(function(){
	play2VR.init(document.querySelector('#container3-5'), selected20keys[2][4]);
	setTimeout("videojs('firstview3-5').play()",2000);
});

$("#init4_1").click(function(){
	play2VR.init(document.querySelector('#container4-1'), selected20keys[3][0]);
	setTimeout("videojs('firstview4-1').play()",2000);
});

$("#init4_2").click(function(){
	play2VR.init(document.querySelector('#container4-2'), selected20keys[3][1]);
	setTimeout("videojs('firstview4-2').play()",2000);
});

$("#init4_3").click(function(){
	play2VR.init(document.querySelector('#container4-3'), selected20keys[3][2]);
	setTimeout("videojs('firstview4-3').play()",2000);
});

$("#init4_4").click(function(){
	play2VR.init(document.querySelector('#container4-4'), selected20keys[3][3]);
	setTimeout("videojs('firstview4-4').play()",2000);
});

$("#init4_5").click(function(){
	play2VR.init(document.querySelector('#container4-5'), selected20keys[3][4]);
	setTimeout("videojs('firstview4-5').play()",2000);
});

