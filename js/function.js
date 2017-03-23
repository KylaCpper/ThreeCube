 function ClearWindow(){
	$("#Window_1").html("")
}
function Init(property){

	$.getScript("./js/Config.js");
	$.getScript("./js/Controller/Info.js");
	$.getScript("./js/Controller/Map.js");
	$.getScript("./js/Controller/People.js");
	$.getScript("./js/Controller/Bag.js");
	$.getScript("./js/Controller/Operation.js");
	$.getScript("./js/Class/People.js",function(){
		
		
		People=new People();
		People.init(property);

	});
	$.getScript("./js/class/Item.js",function(){
		
		Item=new Item();
 		Item.init();
	});
	
	$.getScript("./js/class/Bag.js",function(){
		
		Bag=new Bag();
 		Bag.init();
	});
	$.getScript("./js/class/Map.js",function(){
		
		Map=new Map();
 		Map.init();
	});
}



function Windows(property){
	Init(property);
	$(".Header").children().click(function(){
		$(".Header").children().each(function(){
			$(this).removeClass("current");
		})
		var MainId=$(this).attr("id")
		$("#"+$(this).attr("id")+"").addClass("current")
		if(MainId=="People"){

			PeopleWindow();		//People.testfun()
		}
		else if(MainId=="Bag"){
			BagWindow();
		}
		else if(MainId=="Map"){
			MapWindow();
		}
	});	
	ClearWindow();
}
function RandomInt(max,min){
	return Math.ceil(Math.random()*(max-min)+min);
}

function RandomProperty(){
		var data ={
			"Head":"1.png",
			"Name":$('#name').val(),
			"Sex":$('input:radio[name="sex"]:checked').val(),
			"Hunger":"100",
			"Thirsty":"100"
		}
		
		var property={
			"Strength":"10",
			"Speed":"10",
			"Iq":"10",
			"Eq":"10",
			"Insight":"10"	
		};
		for(var key in property){
			data[key]=RandomInt(10,8);
			
		}
		if(data.Sex==0){
			data.Strength+=2;
		}else {
			data.Insight+=2;
		}
		return data;
}

function RandomPropertyWindow(){
	var data=RandomProperty();
		var Property="";
		for(var key in data){
			Property+=key+":"+data[key]+"<br/>";
		}
		$('#Window_1').html("<div class='pure-g'>"+
					"<div class='pure-u-1-6'><p>属性:</p></div>"+
				    "<div class='pure-u-1-2'><p>"+Property+"</p></div>"+
				    "</div>"+
				    "<div class='pure-g'>"+
					"<div class='pure-u-1-2'><p><button id='next1' class='pure-button'>创建</button></p></div>"+
				    "<div class='pure-u-1-2'><p><button id='back1' class='pure-button'>返回</button></p></div>"+
				    "</div>"
				    )
		return data;
}
function CreateRoleWindow(){
		$('#Window_1').html("<div class='pure-g'>"+
					"<div class='pure-u-1-6'><p>性别:</p></div>"+
					"<div class='pure-u-1-2'><p>"+
												"<label class='pure-radio'>"+
									       		 	"<input type='radio' name='sex' value='0'>男"+
									    		"</label>"+
									    		"<label class='pure-radio'>"+
									       		 	"<input type='radio' name='sex' value='1' checked>女"+
									    		"</label>"+
											"</p></div>"+
				    "</div>"+
				    "<div class='pure-g'>"+
					"<div class='pure-u-1-6'><p>名字:</p></div>"+
				    "<div class='pure-u-1-2'><p> <form class='pure-form'><input id='name' type='text' class='pure-input-rounded'></form></p></div>"+
				    "</div>"+
				    "<div class='pure-g'>"+
					"<div class='pure-u-1-6'><p>头像:</p></div>"+
				    "<div class='pure-u-1-2'><p id='headimg'>暂未开放</p></div>"+
				    "</div>"+
				    "<div class='pure-g'>"+
					"<div class='pure-u-1-2'><p><button id='next0' class='pure-button'>确定</button></p></div>"+
				    "<div class='pure-u-1-2'><p><button id='back0' class='pure-button'>返回</button></p></div>"+
				    "</div>")
}
function StartWindow(){
	$('#Window_1').html("<div class='pure-g'>"+
					"<div class='pure-u-1-2'><p><button id='login' class='pure-button'>老角色</button></p></div>"+
				    "<div class='pure-u-1-2'><p><button id='create' class='pure-button'>创建新角色</button></p></div>"+
				    "</div>")
}