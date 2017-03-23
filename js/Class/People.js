function People(){
	this.head;
	this.name;
	this.sex;
	this.hunger;
	this.thirsty;
	this.strength;
	this.speed;
	this.iq;
	this.eq;
	this.insight;
	this.money=100;

}

People.prototype.init=function(data){
	for(var key in data)
		People[key]=data[key]
	
}
People.prototype.test=function(){
	console.log("test")
}

People.prototype.initProperty=function(){
		var data ={
			"head":"1.png",
			"name":"kyla",
			"sex":0,
			"hunger":"100",
			"thirsty":"100"
		}
		var property={
			"strength":"10",
			"speed":"10",
			"iq":"10",
			"eq":"10",
			"insight":"10"	
		};
		for(var key in property){
			data[key]=RandomInt(10,8);
			
		}
		if(data.Sex==0){
			data.strength+=2;
		}else {
			data.insight+=2;
		}
		return data;
}
People.prototype.getMap=function(){
	return{
		"1":"1",
		"2":"2"
	}


}