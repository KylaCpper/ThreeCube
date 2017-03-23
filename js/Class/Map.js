function Map(){
	this.map;
}
Map.prototype.init=function(){
	this.map=this.getMap();

}
Map.prototype.getMap=function(){
		var map={
			"1":{"name":"name1","function":"func1","info":"info1","image":"./image/Map/1.png"},
			"2":{"name":"name2","function":"func2","info":"info2","image":"./image/Map/1.png"}
		}
		return map;
}