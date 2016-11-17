/*	
	New Perspectives on JavaScript
	Tutorial 9
	Tutorial Case 3
	
	Mollie's Barn Boutique
    Author:
	Date:
	
	Filename:		mollietxt.js
    Supporting Files:	mollietxt.htm, molie_prodtxt.htm
	
	Function List:
	findCookie()
		Used to extract the value of a cookie based on the name of the
		cookie.
	deterUser()
		Determines if the user has already provided log in information. If
		so, then the login window is not visible; instead, the
		"Enter" button is visible.
	valUser()
		It validates user log in data and then creates two cookies.
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
