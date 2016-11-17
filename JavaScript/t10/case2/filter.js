/*
   New Perspectives on JavaScript
   Tutorial 10
   Case Problem 2

   Author: David Forrest
   Date:   3/1/2007

   Filename: filter.js


   Function List:
   resetTable()
      Resets the data table, displaying all table rows

   countRecords()
      Contains the number of visible rows in the data table, displaying the
      total in the "records" table cell

   checkCell(cell, filterText)
      If the inner content of the table cell does not equal the text string
      filterText, hides the table row of which the table cell is part.

   findCell(row, cellNum, filterText)
      Loops through the table cells within a table row moving from the 
      first cell to the last, until it finds the cellNum cell.

   filterTable(cellNum, filterText)
      Hides a table row if the content of the cellNum table cell does not equal
      the value of filterText

   filter()
      Filters the data table based on the values selected in the drop-down 
      selection lists. Also updates the record count.

   init()
      Initiates the Web page creating event handlers for each select element
      and counting the number of records in the data table

*/

function resetTable() {
   allRows = document.getElementsByTagName("tr");
   for (i=0; i<allRows.length; i++) allRows[i].style.display="";
}

function countRecords() {
   var headRow = document.getElementById("titleRow");
   rowCount=0;
   for (n=headRow.nextSibling; n!=null; n=n.nextSibling) {
      if (n.nodeName=="TR") {
         if (n.style.display=="") rowCount++;
      }
   }
   document.getElementById("records").innerHTML=rowCount;
}

function checkCell(cell, filterText) {
   if (cell.innerHTML != filterText) cell.parentNode.style.display="none";
}

function findCell(row, cellNum, filterText) {
   cellCount=0;
   for (cell=row.firstChild; cell!=null; cell=cell.nextSibling) {
      if (cell.nodeName=="TD") {
         cellCount++;
         if (cellCount==cellNum) checkCell(cell, filterText);
      }
   }
}

function filterTable(cellNum, filterText) {
   var headRow = document.getElementById("titleRow");

   for (row=headRow.nextSibling; row!=null; row=row.nextSibling) {
      if (row.nodeName=="TR") {
         findCell(row, cellNum, filterText);
      }

   }
}

function filter() {
   resetTable();
   allSelects = document.getElementsByTagName("select");
   for (i=0; i<allSelects.length; i++) {
      filterIndex = allSelects[i].selectedIndex;
      filterText = allSelects[i].options[filterIndex].text;
      if (filterText !="") filterTable(i+1, filterText);      
   }
   countRecords();
}

function init() {
   var allSelects = document.getElementsByTagName("select");
   for (i=0; i<allSelects.length; i++) allSelects[i].onchange=filter;
   countRecords();
}








