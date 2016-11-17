/*
   New Perspectives on JavaScript
   Tutorial 8
   Case Problem 2

   Filename: functions.js

   Functions List:
   placeIt(object, x, y)
      Places an object at the coordiantes (x,y)

   getXCoord(object)
      Returns the x-coordinate of an object

*/


function placeIt(object, x, y) {
   object.style.left=x;
   object.style.top=y;
}


function getXCoord(object) {
   return parseInt(object.style.left);
}


