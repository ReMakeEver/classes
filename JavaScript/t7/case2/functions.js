/*
   New Perspectives on JavaScript
   Tutorial 7
   Case Problem 2

   Filename: functions.js

   Functions List:

   toFixed2(value)
      Converts value to a text string rounded to 2 decimal places.

*/

function toFixed2(value) {
   n = Math.round(value*100)/100;
   if (n == Math.round(n)) return n+".00";
   else if (n*10 == Math.round(n*10)) return n+"0";
   else return String(n);
}