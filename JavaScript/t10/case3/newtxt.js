/*
   New Perspectives on JavaScript
   Tutorial 10
   Case Problem 3

   Author: 
   Date:   

   Filename: newdata.js


   Function List:
   updateTotals(phrase, pnum)
      Updates contents of the table cells "totalContr" and "totalAmt" displaying 
      the total number of contributors and the total contributions

   makeTable()
      Populates the contributors table with the entries of the 8 data arrays by
      calling the addRow() function for each item in the arrays.

   addRow(i)
      Adds a row to the contributors using data from the 8 data arrays who index
      value equals "i".

   addRecord()
      Adds a new record to the end of the 8 data arrays and then calls the addRow() function
      to add a new row to the contributors table and the updateTotals() function to
      update the tables cells displaying the total number of contributors and
      contributions.

    removeRecord(index)
       Removes a record from the eight data arrays whose index value equals index.

    removeNode(node)
       Removes a node from a node tree, and returns a reference to the node's previous sibling.

    removeRecords()
       Loops through the rows in the contributors table checking whether the remove
       checkbox has been selected. For each selected checkbox, the table row is removed
       and the corresponding entries in the 8 data arrays are removed. The updateTotals()
       function is then called.

*/

