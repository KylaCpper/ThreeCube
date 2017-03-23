function MapWindow(){
	ClearWindow();
	var map=Map.getMap();
	var data;
	for(var id in map){
		data+="<option>"+Map.map[id].name+"</option>"
	}
	$("#Window_1").html("<div class='pure-g'>"+
		"<div class='pure-u-1-2'><p>当前地点</p></div>"+
			"<div class='pure-u-1-2'><p>"+
				"<label for='state'>地点</label><br/>"+
	        		"<select id='state'>"+
	        		data+
	        		"</select>"+
				"</p>"+
			"</div>"+
		"</div>");
}
