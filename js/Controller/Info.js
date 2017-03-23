function InfoWindow(item){
	$("#use").click(function(){
		$("#Window_2").append("使用"+item.name+"<br/>");
	})
	$("#discard").click(function(){
		$("#Window_2").append("丢弃"+item.name+"<br/>");
	})
	
}