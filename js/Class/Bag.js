function Bag(){
	this.item;
	this.getBag=function(){
		return {"1":"2",
				"2":"3"
			   };	
	}
}
Bag.prototype.init=function(){
	this.item=this.getBag();
}
