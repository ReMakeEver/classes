/* 
   New Perspectives on JavaScript
   Tutorial 4
   Case Problem 1

   The Golf Page
   Name: 
   Date: 

   Function List:
   placeIt(id, x, y)
      Places the id object at the coordinates (x, y)

   showIt(id)
      Shows the id object by setting the object visibility to "visible"

   getFontSize(id)
      Retrieves the font size of the id object

   setFontSize(id, fs)
      Sets the font size of the id object to fs

   changeFontSize(id, dfs)
      Changes the font size of the id object by dfs
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