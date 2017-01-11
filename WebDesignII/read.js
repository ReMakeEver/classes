function read1(){
 var xmlHttp;
 if(window.XMLHttpRequest){
  xmlHttp = new XMLHttpRequest();
 }else{
  xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
 }
 xmlHttp.onreadystatechange = function(){
  if(this.readyState === 4 & this.status == 200){
   doc1(this); 
  }
 }
}
function doc1(xml){
 var parser, xmlDoc;
 parser = new DOMParser();
 xmlDoc = parser.parseFromString(xml.responseText, "text/xml");
 document.getElementById("divBody").innerHTML = parse1(xmlDoc.documentElement);
}
function parse1(xml){
 var i, element, xLen, txt;
 txt = "";
 x = x.childNodes;
 xLen = x.length;
 for(i = 0;i<xLen;i++){
  element = x[i];
  if(element.nodeName == "title"){
   txt += "<font size='12'>"+element.nodeValue+"</font>";
  }
 }
}
