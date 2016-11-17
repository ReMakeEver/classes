/*
   New Perspectives on JavaScript
   Tutorial 10
   Case Problem 2

   Author: 
   Date:   

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

