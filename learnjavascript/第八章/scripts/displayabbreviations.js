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
var dlist=document.createElement("dl");
for(key in defs){
	var definition=defs[key];
	var dtitle=document.createElement("dt");
	var dtitle_text=document.createTextNode(key);
	dtitle.appendChild(dtitle_text);
	var ddesc=document.createElement("dd");
	var ddesc_text=document.createTextNode(definition);
	ddesc.appendChild(ddesc_text);
	dlist.appendChild(dtitle);
	dlist.appendChild(ddesc);
}
var header=document.createElement("h2");
var header_text=document.createTextNode("abbreviations");
header.appendChild(header_text);
document.body.appendChild(dlist);
window.onload.displayAbbreviations;