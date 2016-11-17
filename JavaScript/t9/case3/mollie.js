/*	
	New Perspectives on JavaScript
	Tutorial 9
	Tutorial Case 3
	
	Mollie's Barn Boutique
    Author: Patti Wicks
	Date: 10/30/2009
	
	Filename:		mollie.js
	Supporting Files:	mollie.htm, molie_prod.htm
	
	Function List:
	findCookie()
		Used to extract the value of a cookie based on the name of the
		cookie.
	deterUser()
		Determines if the user has already provided log in information. If
		so, then will not have the log inwindow visibile, instead the
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

u = findCookie("u");
p = findCookie("p");

function deterUser(){
	if((u!=null)&&(p!=null))
		{
			document.getElementById('login').style.visibility = "hidden";
			document.getElementById('first').style.visibility = "hidden";
			document.getElementById('button').style.visibility = "visible";
		
		}
	
}
function valUser(){
	if((u!=null)&&(p!=null))
		{
			window.location="mollie_prod.htm";
		}
		
	user = document.enter.user.value;
	pwd = document.enter.pwd.value;
	if((user =="")&&(pwd==""))
		{
			return false;
		}
	else
		{
			var today = new Date();
			var expdate = new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000);

			document.cookie="u="+user+";expires="+expdate.toGMTString();
			document.cookie="p="+pwd +";expires="+expdate.toGMTString();
		}
  
}

	