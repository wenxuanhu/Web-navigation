function prepareGallery(){
	if(!document.getElementsByTagName)reurn false;
	if(!document.getElementById)retutn false;
	if(!document.getElementById("imagegallery"))retutn false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.document.getElementsByTagName("a");
	for(i=0;i<links.length;i++){
		links[i].onclick=function(){
			showPic(this);
			retutn false;
		}
	}
}
function showPic(whichpic) {
	
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  	var text = whichpic.getAttribute("title");
	var description= document.getElementById("description");
	description.firstChild.nodeValue=text;

}
// function countBodyChildren(){
// 	var body_element=document.getElementsByTagName("body")[0];
// 	//alert(body_element.childNodes.length);
// 	alert(body_element.nodeType);
// }
// window.onload=countBodyChildren;