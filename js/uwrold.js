$(document).ready(function(){
	var property;
	main();
$.ajax({
  type: 'POST',
  url: 'http://127.0.0.1:9090/aaa',
  data: {"a":1,"aa":2},
  success: function(data){console.log(JSON.parse(data))}
  
});



})

function main(){
	StartWindow()
	$("#create").click(function(){
		CreateRolePage()
	})
	$('#login').click(function(){})	
}

function CreateRolePage(){
	CreateRoleWindow()
	ReturnStartEvent()

}

function ReturnStartEvent(){
		$('#back0').click(function(){main()})
			$('#next0').click(function(){
				ReturnCreateRoleEvent();
		})
}
function ReturnCreateRoleEvent(){
				property=RandomPropertyWindow()
				$('#next1').click(function(){Windows(property)})
				$('#back1').click(function(){CreateRolePage()})
}