function BagWindow(){
	ClearWindow();
	//item  id
	var BagMap=Bag.getBag();
	//BagMap={id:num}
	var data="<div class='pure-g' id='item'>";

	for(var id in BagMap){
			data+="<div class='pure-u-1-8'><p title="+id+"><img src='"+Item.item[id].image+"'height='40' width='40'/></p><span>"+BagMap[id]+"</span></div>"
	}
	data+="</div>";
	$("#Window_1").html(data)
	$("#item").children().click(function(){
		OperationWindow($(this).find("p").attr("title"));
		
	});
}