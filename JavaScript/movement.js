var log;

function movement(event){
 var x = event.keyCode;
 if(x=="119"){
  log += x;
  forward();
 }
 if(x=="97"){
  log += x;
  turnL();
 }
 if(x=="115"){
  log += x;
  backward();
 }
 if(x=="100"){
  log += x;
  turnR();
 }
}
