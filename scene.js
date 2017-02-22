var SCENE = {
 "NewScene": function(back){createScene(back);}
};
function createScene(back){
 var canvas1 = '<canvas width="';var canvas2 = '" height="';var canvas3 = '"></canvas>';
 var width = window.innerWidth;var height = window.innerHeight;
 var string = canvas1+width+canvas2+height+canvas3;
 document.body.innerHTML += string;
 if(back==null||back==undefined){
  setStyle("#000000");
 }else{
  if(back=="normal"){
   setStyle("normal","medium");
  }
 }
}
function setStyle(style,level){
 if(style=="#000000" && level==null){
  var canvas = document.getElementsByTagName("CANVAS")[0];
  var context = canvas.getContext("2d");
  context.fillStyle = style;
  context.fillRect(0,0,window.innerWidth,window.innerHeight);
 }else{
 }
}
