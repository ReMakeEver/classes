/*
   New Perspectives on JavaScript
   Tutorial 8
   Case Problem 3

   Filename: makepuzzle.js

   Global Variables:
   clues_across
      Array of the clues in the puzzle rows
   clues_down
      Array of the clues in the puzzle columns
   words
      Array containing the puzzle solution


   Functions List:
   writeClues()
      Write the clues into the puzzle

   showAns()
      Display the puzzle solution


*/

var clues_across = new Array();
clues_across[0]="1: Personal servant";
clues_across[1]="2: Home";
clues_across[2]="3: Measure";
clues_across[3]="4: Quaking tree";
clues_across[4]="5: City in Northern England";

var clues_down = new Array();
clues_down[0]="1: Of the visceral nerve";
clues_down[1]="2: To lower in rank";
clues_down[2]="3: Diamond magnifier";
clues_down[3]="4: Sharpened";
clues_down[4]="5: Children older than 12";

var words = new Array(
  "V","A","L","E","T",
  "A","B","O","D","E",
  "G","A","U","G","E",
  "A","S","P","E","N",
  "L","E","E","D","S");

function writeClues() {
   for (i=1;i<=5;i++) {
      across=document.getElementById("across"+i);
      down=document.getElementById("down"+i);

      writeText(across,clues_across[i-1]);
      writeText(down,clues_down[i-1]);
   }
}

function showAns() {
  for(i=0; i<5; i++) {
    for(j=0; j<5; j++) {
      cell = document.getElementById("grid" + j + i);
      writeText(cell, words[(i*5)+(j)]);
      cell.style.backgroundColor="lightgreen";
    }
  }
}