function init(list){
	var result=[];
	for(var i=0;i<list.length;i++)
	{
		var item = 'item' +list[i];
		result.push(function(){alert(item + '' +list[i])});

	}
	return result;
}
function foo(){
	var list=init([1,2,3]);
	for(var j=0;j<list.length;j++){
		list[j]();
	}
}

foo();