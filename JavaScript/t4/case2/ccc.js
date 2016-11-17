/* 
   New Perspectives on JavaScript
   Tutorial 4
   Case Problem 2

   The Chamberlain Civic Center
   Name: Laura Bromquist
   Date: 8/1/2006

   Function List:
   placeIt(id, x, y)
      Places the id object at the page coordinates (x,y)

   shiftIt(id, dx, dy)
      Shifts the id object dx pixels to the left and dy pixels down

   yCoord(id)
      Returns the y-coordinate of the id object

*/

function placeIt(id, x, y) {
   var object=document.getElementById(id);
   object.style.left=x+"px";
   object.style.top=y+"px"; 
}

function shiftIt(id, dx, dy) {
   var object=document.getElementById(id);
   object.style.left=parseInt(object.style.left)+dx+"px";
   object.style.top=parseInt(object.style.top)+dy+"px";
}

function yCoord(id) {
   var object=document.getElementById(id);
   return parseInt(object.style.top);
}