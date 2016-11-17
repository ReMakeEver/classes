/*	
	New Perspectives on JavaScript
	Tutorial 9
	Tutorial Case 4
	
	Dan James Collection
	Author: Vernon Jones
	Date: 3/28/2008
	
	Filename:		dan_cart.htm
	Supporting files:	dan.css, dan.htm, dan.js
	
	Function List:
	getCookie()
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

function makeTable(){
	document.write("<table width='500'><tr>");
	document.write("<th>Item Name</th><th>Item Price</th>");
	document.write("<th>Quantity</th><th>Cost</th></tr>");
}

function endTable(){
	document.write("</table>");
}

function addCart(itm,p,v){
	if(v == 0)
		{
			q = document.item1.bowl1.value;
		}
	if(v == 1)
		{
			q = document.item2.bowl2.value;
		}
	if(q == 0)
		{
			alert("Please enter a quantity greater than zero.");
			return false;
		}
	var currDate = new Date();
	var expdate = new Date(currDate.getTime() + 180 * 24 * 60 * 60 * 1000);

	document.cookie= "dan"+v+"="+itm+","+p+","+q+";expires="+expdate.toGMTString();
	alert("Thank you for your purchase of the "+itm+"."); 
}

function seeItm(){
	addTot = 0;
	var itm = new Array();
	itm[0] = findCookie("dan0");
	itm[1] = findCookie("dan1");

	if((itm[0] ==null)&&(itm[1] ==null))
		{
			document.write("Your cart is empty.");
			return false;
		}
	else
		{			
		makeTable()
		for(i=0;i<=itm.length;i++)
		  {
		   if((itm[i] != null)&&(itm[i] != ""))
			{
	  		   document.write("<tr><td>");
			   stopnow = itm[i].indexOf(",");
			   start =  itm[i].substring(0,stopnow);
			   document.write(start+"</td><td>");

			   px = itm[i].indexOf(",")+1;
			   px2 = itm[i].indexOf(",",px);
			   tot_px = parseFloat(itm[i].substring(px,px2));
			   tot_px1 = tot_px.toFixed(2);
			   document.write(tot_px1+"</td><td align='center'>");

			   quant = parseInt(itm[i].substring(itm[i].length-1,itm[i].length));
			   document.write(quant+"</td><td align='right'>");

			   cost_raw = quant*tot_px;
			   cost = cost_raw.toFixed(2);
			   cost_tot = parseFloat(cost);
			   addTot +=cost_tot;
			   total = addTot.toFixed(2)
			   document.write("$"+cost+"</td><td align='right'>");
			   document.write("<a href=# onclick='delItm("+[i]+")'>Remove Item</a>");
			   document.write("</td></tr>");
			}
	  	   }
		document.write("<tr><td colspan='4' align='right'>The total cost of your order is <b>$"+total+"</b></td></tr>");
		}
		endTable();
}
 
function delItm(itm){
	document.cookie = "dan"+itm+"=;expires=Thu, 01-Jan-70 00:00:01 GMT;"
	location.reload();
}