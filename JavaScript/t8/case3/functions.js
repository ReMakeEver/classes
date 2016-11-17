
/*
   New Perspectives on JavaScript
   Tutorial 8
   Case Problem 3

   Filename: functions.js

   Global Variables:
   IEDOM
      A Boolean value indicating whether the browser supports the IE DOM
   W3CDOM
      A Boolean value indicating whether the browser supports the W3C DOM


   Functions List:
   writeText(object, text)
      Writes text into the object
*/


var IEDOM = document.all ? true:false;
var W3CDOM = document.getElementById ? true: false;


function writeText(object, text) {
  if (IEDOM) {
    object.innerText=text; 
  } else if (W3CDOM) {
    var newCell = document.createTextNode(text); 
    object.replaceChild(newCell, object.childNodes[0]);
  }
}




