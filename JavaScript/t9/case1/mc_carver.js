/*	
	New Perspectives on JavaScript
	Tutorial 9
	Case 1
	
	McCarver Family Foundation
	Author: Steve Phelps
	Date: 10/06/2009
	
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

var now = new Date();
var expdate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

function createCookies(d1,d2,d3,d4,d5){
	document.cookie= "d1="+d1+";expires="+expdate.toGMTString();
	document.cookie= "d2="+d2+";expires="+expdate.toGMTString();
	document.cookie= "d3="+d3+";expires="+expdate.toGMTString();
	document.cookie= "d4="+d4+";expires="+expdate.toGMTString();
	document.cookie= "d5="+d5+";expires="+expdate.toGMTString();
	window.location = "mc_carverfeedback.htm";
}

d1 = findCookie("d1");
d2 = findCookie("d2");
d3 = findCookie("d3");
d4 = findCookie("d4");
d5 = findCookie("d5");
