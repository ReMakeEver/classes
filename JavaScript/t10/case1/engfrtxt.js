/*
   New Perspectives on JavaScript
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   

   Filename: engfr.js


   Function List:
   eventSource(e)
      Returns the source of an event in either event model

   swapFE(phrase, pnum)
      Changes a French phrase to the English version of that phrase.

   swapEF(phrase, pnum)
      Changes an English phrase ot the Frech version of that phrase.

   setUpTranslation()
      Insert the current week's french phrases into document and set up
      event handlers for the phrases.

*/

function eventSource(e) {
   var IE = document.all ? true:false;
   var DOM = document.addEventListener ? true: false;
   if (IE) return event.srcElement;
   else if (DOM) return e.currentTarget;
}
