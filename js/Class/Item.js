function Item(){
	this.item;
}
Item.prototype.init=function(){
	this.item=this.getItemMap();

}
Item.prototype.getItemMap=function(){
		var item={
			"1":{"name":"name1","function":"func1","weight":"1","info":"info1","image":"./image/item/1.png"},
			"2":{"name":"name2","function":"func2","weight":"2","info":"info2","image":"./image/item/1.png"}
		}
		return item;
}