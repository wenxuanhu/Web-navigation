// window.onload=function(){
// 	var testdiv=document.getElementById('testdiv');
// 	// alert(testdiv.innerHTML);
// 	testdiv.innerHTML="<p>I inserted <em>this</em> content</p>";
// }
// 
// window.onload=function(){
// var para=document.createElement("p");//创建p元素
// var info="nodeName: "
// info+=para.nodeName;
// info+=" nodeytpe: ";
// info+=para.nodeType;
// alert(info);
// }
// 
// window.onload=function(){
// var para=document.createElement("p");
// var testdiv=document.getElementById("testdiv");
// testdiv.appendChild(para);
// var txt=document.createTextNode("Hello World");//创建了一个文本节点
// para.appendChild(txt);
// }

window.onload=function(){
	var para =document.createElement("p");
	var txt1=document.createTextNode("This is ");
	para.appendChild(txt1);
	var emphasis=document.createElement("em");
	var txt2=document.createTextNode("my");
	emphasis.appendChild(txt2);
	para.appendChild(emphasis);
	var txt3=document.createTextNode("content");
	para.appendChild(txt3);
	var testdiv=document.getElementById("testdiv");
	testdiv.appendChild(para);
}