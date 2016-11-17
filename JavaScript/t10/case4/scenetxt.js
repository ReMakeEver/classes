/*
   New Perspectives on JavaScript
   Tutorial 10
   Case Problem 4

   Author:   
   Date:     

   Filename: scene.js


   Function List:
   uniqueElemText(elemName)
      Returns the unique content from HTML tags with the
      tag name elemName. The list is sorted in alphabetical
      ordered and returned as an array.
*/



function uniqueElemText(elemName) {
   elems = document.getElementsByTagName(elemName);
   elemsArray = new Array();

   for (var i=0; i<elems.length; i++) elemsArray[i]=elems[i].innerHTML;  
   elemsArray.sort();
   for (i=0; i<elemsArray.length-1; i++) {
      if (elemsArray[i]==elemsArray[i+1]) {
         elemsArray.splice(i+1,1);
         i--;
      }
   }
   return elemsArray;
}