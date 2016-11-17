/*	
	New Perspectives on JavaScript
	Tutorial 9
	Case 1
	
	McCarver Family Foundation
	Author:
	Date:
	
	Filename:		mc_carver.js
	Supporting files:	mc_carver.htm, mc_carverfeedback.htm
	
	Function List:
	findCookie()
		Used to extract the value of a cookie based on the name of the
		cookie.
	sendForm()
		Validates the forms and then uses the fields values to create
		cookies that will support a feedback page.
	createCookies()
		This function creates the cookies needed to store the form data and
		pass it to a feedback page.
		
		
		
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

d1 = "";
d2 = "";
d3 = "";
d4 = "";
d5 = "";
function sendForm(){
	d1 = document.charity.name1.value;
	d2 = document.charity.add1.value;
	d3 = document.charity.em1.value;
	d4 = document.charity.money.value;
	d5 = document.charity.donate.value;

	createCookies(d1,d2,d3,d4,d5)
}

