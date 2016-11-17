/* 
   New Perspectives on JavaScript
   Tutorial 4
   Case Problem 3

   Avalon Books
   Name: Chiricahua National Monument
   Date: 8/1/2007

   Function List:
   placeIt(id, x, y)
      Places the id object at the coordinates (x,y)

   hideIt(id)
      Hides the id object by setting its visibility style to "hidden"

   showIt(id)
      Hides the id object by setting its visibility style to "visible"

*/

function placeIt(id, x, y) {
   object=document.getElementById(id);
   object.style.left=x+"px";
   object.style.top=y+"px";
}

function showIt(id) {
   object=document.getElementById(id);
   object.style.visibility="visible";
}

function hideIt(id) {
   object=document.getElementById(id);
   object.style.visibility="hidden";
}