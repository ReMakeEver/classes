var SCENE = {
 "NewScene": function(back){createScene(back);},
 "setStyle": function(type){setSceneBack(type);}
};
function createScene(back){
 var canvas1 = '<canvas width="';var canvas2 = '" height="';var canvas3 = '"></canvas>';
 var width = window.innerWidth;var height = window.innerHeight;
 var string = canvas1+width+canvas2+height+canvas3;
 document.body.innerHTML += string;
 if(back[0]==null || back[0]==undefined){
  SCENE.setStyle("none");
 }
}
function setSceneBack(type){
 if(type[0]==null || type[0]==undefined){
  var canvas = document.getElementsByTagName("CANVAS")[0];
  var width = window.innerWidth;var height = window.innerHeight;
  var context = canvas.getContext("2d");
  context.fillStyle = "#000000";context.fillRect(0,0,width,height);
 }
}
