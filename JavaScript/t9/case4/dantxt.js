/*	
	New Perspectives on JavaScript
	Tutorial 10
	Case 4
	
	Dan James Collection
	Author: 
	Date: 
	
	Filename:		dantxt.js
	Supporting files:	dantxt.htm, dancarttxt.htm
	
	Function List:
	findCookie()
		Used to extract the value of a cookie based on the name of the
		cookie.
	makeTable()
		Dynamically createsa a table heading to support dynamically created
		rows and columns.
	endTable()
		Dynamically adds a closing <table> tag to the dynamic table.
	addCart()
		Informs the user of the item and the quantity of that item that
		have been placed in a shopping cart.
	seeItm()
		Extracts the items held in cookies and displays their values in a
		dynamically created table.
	delItm()
		Deletes all item and form cookies when the user submits the order
		at the end of the shopping process.
		
*/

function findCookie(val){
	   var cookie = null;
	   var findVal = val + "=";
	   var dc = document.cookie;
       if (dc.length > 0)
	{
          var start = dc.indexOf(findVal);
          if (start >= 0)
		{
             		start += findVal.length;
             		lastVal = dc.indexOf(";", start);
             		if (lastVal == -1)
				{
                			lastVal = dc.length;
			 	}
             		cookie = (dc.substring(start, lastVal));
          	}
	  else
	  	{
			return cookie;
	  	}
       	}
       return cookie;
}

