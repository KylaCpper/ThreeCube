function OperationWindow(id){
	var data="<div class='pure-g'>"+
		"<div class='pure-u-1-1'><p title="+id+"><img src='"+Item.item[id].image+"' style='height:80px;width:80px;'/></p></div>"+
		"</div>"+
		"<div class='pure-g'>"+
		"<div class='pure-u-1-6'><p>物品:</p></div>"+
		"<div class='pure-u-1-2'><p>"+Item.item[id].name+"</p></div>"+
		"</div>"+
		"<div class='pure-g'>"+
		"<div class='pure-u-1-6'><p>负重:</p></div>"+
		"<div class='pure-u-1-2'><p>"+Item.item[id].weight+"kg</p></div>"+
		"</div>"+
		"<div class='pure-g'>"+
		"<div class='pure-u-1-6'><p>详情:</p></div>"+
		"<div class='pure-u-1-2'><p>"+Item.item[id].info+"</p></div>"+
		"</div>"+
		"<div class='pure-g'>"+
		"<div class='pure-u-1-6'><p>功能:</p></div>"+
		"<div class='pure-u-1-2'><p>"+Item.item[id].function+"</p></div>"+
		"</div>"+
		"<div class='pure-g'>"+
		"<div class='pure-u-1-2'><button class='pure-button' id='use'>使用</button></div>"+
		"<div class='pure-u-1-2'><button class='pure-button' id='discard'>丢弃</button></div>"+
		"</div>";

	$("#Window_3").html(data)
	InfoWindow(Item.item[id])

}