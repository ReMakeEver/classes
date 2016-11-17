/*
   New Perspectives on JavaScript
   Tutorial 10
   Case Problem 3

   Author: Aaron Kitchen
   Date:   3/1/2007

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

function updateTotals() {
   document.getElementById("totalContr").innerHTML=amount.length;
 
   totalContributions=0;
   for (i=0; i<amount.length; i++) totalContributions+=amount[i];

   document.getElementById("totalAmt").innerHTML=totalContributions;
}

function makeTable() {
   headerRow = document.getElementById("titleRow");
   blankRow = document.getElementById("emptyRow");
   dataRow = blankRow.cloneNode(true);

   for (i=0; i<amount.length; i++) addRow(i);

   updateTotals();
}

function addRow(index) {
   newRow = dataRow.cloneNode(true);
   newRow.childNodes[1].innerHTML=date[index];
   newRow.childNodes[2].innerHTML=lastName[index]+", "+firstName[index];
   newRow.childNodes[3].innerHTML=street[index]+"<br />"+city[index]+", "+state[index]+" "+zip[index];
   newRow.childNodes[4].innerHTML=amount[index];

   if (index==0) blankRow.parentNode.replaceChild(newRow, blankRow);
   else headerRow.parentNode.insertBefore(newRow, headerRow.nextSibling);
}

function addRecord() {
   recordNum = amount.length;

   firstName[recordNum]=document.donations.fname.value;
   lastName[recordNum]=document.donations.lname.value;
   street[recordNum]=document.donations.street.value;
   city[recordNum]=document.donations.city.value;
   stateIndex=document.donations.state.selectedIndex;
   state[recordNum]=document.donations.state.options[stateIndex].text;
   zip[recordNum]=document.donations.zip.value;
   amount[recordNum]=parseInt(document.donations.amount.value);
   date[recordNum]=document.donations.date.value;

   addRow(recordNum);
   updateTotals();
}

function removeRecord(index) {
   firstName.splice(index,1);
   lastName.splice(index,1);
   street.splice(index,1);
   city.splice(index,1);
   state.splice(index,1);
   zip.splice(index,1);
   amount.splice(index,1);
   date.splice(index,1);
}

function removeNode(node) {
   prevNode = node.previousSibling;
   node.parentNode.removeChild(node);
   return prevNode;
}


function removeRecords() {
   headerRow = document.getElementById("titleRow");
   recordNum=amount.length;

   for (n=headerRow.nextSibling; n!=null; n=n.nextSibling) {
      recordNum--;
      if (n.nodeName=="TR") {
         if (n.firstChild.firstChild.checked) {
            removeRecord(recordNum);
            n = removeNode(n);
         }
      }
   }
   updateTotals();
}



