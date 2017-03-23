function PeopleWindow(){


	var PeopleMap=[
			{
				"头像:":"<img src='./image/head/"+People.Head+"' height='40'; width='40;'>",
				"名字:":People.Name
			},
			{
				"饥饿:":People.Hunger,
				"口渴:":People.Thirsty
			},
			{
				"体力:":People.Strength,
				"速度:":People.Speed
			},
			{
				"智力:":People.Iq,
				"情商:":People.Eq
			},
			{
				"洞察:":People.Insight,
				"洞察1:":""
			},
			{
				"1":"",
				"2":""
			}
		]
	
	var data="";
	for(var i=0;i<PeopleMap.length;i++){
		data+="<div class=\"pure-g\">";
		for(var key in PeopleMap[i]){
				data+="<div class=\"pure-u-1-4\"><p title='111'>"+key+"</p></div>"
				data+="<div class=\"pure-u-1-4\"><p>"+PeopleMap[i][key]+"</p></div>"
		}
		data+="</div>";
	}
	$("#Window_1").html(data)
}