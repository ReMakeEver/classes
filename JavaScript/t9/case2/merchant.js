/*	
	New Perspectives on JavaScript
	Tutorial 9
	Case 2
	
	Merchant's Market
	Author: Vernon Jones
	Date: 3/28/2008
	
	Filename:		merchant.js
    	Supporting Files:	merchant_thanks.htm, merchant_acct.htm,
				merchant.htm

	Function List:
	findCookie()
		Used to extract the value of a cookie based on the name of the
		cookie.
	checkAcct()
		Checks to see if a user has already registerd with the Merchant's
		Market.
	handleAll()
		Verifies the form fields are not empty and then creates the
		required cookies.
	buildCookies()
		Creates all cookies necessary to support theregistration process.
	reDirect()
		If the cookie value held in a variable is not empty, the user is
		redirected to the account page.
	newCookie()
		Creates a new cookie at the end of the regisrtation prcess.
		
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
			return unescape(cookie);
	  	}
       	}
       return unescape(cookie);
}

var currDate = new Date();
var expdate = new Date(currDate.getTime() + 365 * 24 * 60 * 60 * 1000);

function reDirect(){
	if(first != "")
	{
		window.location = "merchant_acct.htm";
	}
}

function newCookie(){
	document.cookie= "reg=registered;expires="+expdate.toGMTString();
}

function buildCookies(first,last,em,acct_num,r_num){
	document.cookie= "first="+first+";expires="+expdate.toGMTString();
	document.cookie= "last="+last+";expires="+expdate.toGMTString();
	document.cookie= "em="+em+";expires="+expdate.toGMTString();
	document.cookie= "acct_num="+acct_num +";expires="+expdate.toGMTString();
	document.cookie= "r_num="+r_num +";expires="+expdate.toGMTString();
}

first = findCookie("first");
last = findCookie("last");
em = findCookie("em");
acct_num = findCookie("acct_num");
r_num = findCookie("r_num");

/* Helper functions */

reg = findCookie("reg")
function checkAcct(){
	if(reg !=null)
	{
		alert("You have already registered with Merchant's Market. Please log in using your Username and Password.");
		return false;
	}
}	



function handleAll(){
	var first=document.market.first.value;
	var last = document.market.last.value;
	var em=document.market.em.value;
	var acct_num=document.market.acct_num.value;
	var r_num=document.market.r_num.value;
	if((first== "")||(last == "")||(em == "")||(acct_num == "")||(r_num == ""))
		{
			alert("Please be sure to fill out all fields on this form.")
			return false;
			document.market.focus();
		}

	else
		{
			buildCookies(first,last,em,acct_num,r_num)			
		}
	reDirect()
}
