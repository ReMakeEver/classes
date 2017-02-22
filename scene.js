var SCENE = {
 "NewScene": function(back){createScene(back);},
 "RealSky": function(style,speed){animatedSky(style,speed);},
 "sunPoint": {
  "x": 0,
  "y": 0
 }
};
function createScene(back,level,speed){
 var canvas1 = '<canvas width="';var canvas2 = '" height="';var canvas3 = '"></canvas>';
 var width = window.innerWidth;var height = window.innerHeight;
 var string = canvas1+width+canvas2+height+canvas3;
 document.body.innerHTML += string;
 if(back==null || back==undefined){
  setStyle("#000000");
 }else{
  if(back=="normal" || back=="day"){
   setStyle("normal","medium");
  }else{
   if(back=="normal" && level=="animate"){
    setStyle("normal","high",speed);
   }
  }
 }
}
function setStyle(style,level,speed){
 if(style=="#000000" && level==null){
  var canvas = document.getElementsByTagName("CANVAS")[0];
  var context = canvas.getContext("2d");
  context.fillStyle = style;
  context.fillRect(0,0,window.innerWidth,window.innerHeight);
 }else{
  if(style=="normal" && level=="medium"){
   var width = (window.innerWidth/2)-30;var height = window.innerHeight;
   var canvas = document.getElementsByTagName("CANVAS")[0];
   var context = canvas.getContext("2d");
   var gradient = context.createLinearGradient(width,0,width,height);
   gradient.addColorStop(0,"#00AAFF");gradient.addColorStop(1, "#00FFFF");
   context.fillStyle = gradient;
   context.fillRect(0,0,window.innerWidth,window.innerHeight);
   var sunW = window.innerWidth/2;var height = window.innerHeight;
   var canvas = document.getElementsByTagName("CANVAS")[0];
   var context = canvas.getContext("2d");
   context.fillStyle = "#FFFF00";context.strokeStyle = "#FFFF00";
   context.beginPath();
   context.arc(width,50,50,0,2*Math.PI);
   context.stroke();context.fill();
  }else{
   if(style=="normal" && level=="high"){
    SCENE.RealSky(style,speed);
   }
  }
 }
}
function animatedSky(style,speed){
 setInterval(function(){
  var width = (window.innerWidth/w)-30;var height = window.innerHeight;
 }, speed);
}
