function displayAbbreviations(){
	var abbreviations=documents.getElementsByTagName("abbr");
	if(abbreviations.length<1)return false;
	var fefs =new Array();
	for(i=0;i<abbreviations.length,i++){
		var definition=abbreviations[i].getAttribute("title");
		var key=abbreviations[i].lastChild.nodeValue;
		defs[key]=definition;//把title的内容连接到缩略语上。
	}
}