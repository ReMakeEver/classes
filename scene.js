var SCENE = {
 "NewScene": function(back){createScene(back);},
 "setStyle": function(type){setSceneBack(type);},
 "addSun": function(type){setSceneSun(type);}
};
function createScene(back){
 var canvas1 = '<canvas width="';var canvas2 = '" height="';var canvas3 = '"></canvas>';
 var width = window.innerWidth;var height = window.innerHeight;
 var string = canvas1+width+canvas2+height+canvas3;
 document.body.innerHTML += string;
 if(back==null || back==undefined){SCENE.setStyle("none");}else{
  if(back=="normal"){SCENE.setStyle("normal");}
 }
}
function setSceneBack(type){
 var bType = type.split(",");
 if(bType[0]=="none"){
  var canvas = document.getElementsByTagName("CANVAS")[0];
  var width = window.innerWidth;var height = window.innerHeight;
  var context = canvas.getContext("2d");
  context.fillStyle = "#000000";context.fillRect(0,0,width,height);
 }
 if(bType[0]=="normal"){
  var canvas = document.getElementsByTagName("CANVAS")[0];
  var width = window.innerWidth/2;var height = window.innerHeight+10;
  var context = canvas.getContext("2d");
  var gradient =  context.createLinearGradient(width,0,width,height);
  gradient.addColorStop(0, "#0088FF");gradient.addColorStop(1, "#FF8800");
  context.fillStyle = gradient;
  context.fillRect(0,0,window.innerWidth,window.innerHeight);
  SCENE.addSun("normal");
 }
}
function setSceneSun(type){
 var sType = type.split(",");
 if(sType[0]=="normal"){
  var canvas = document.getElementsByTagName("CANVAS")[0];
  var width1 = window.innerWidth/2;var width2 = window.innerWidth/4;
  var context = canvas.getContext("2d");
  context.beginPath();
  context.arc(width1,width2,width2,0,2*Math.PI);
  context.strokeStyle = "#FFFF00";context.fillStyle = "#FFFF00";
  context.stroke();
 }
}
