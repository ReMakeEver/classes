var one = "Monday";var two = "Tuesday";var three = "Wenesday";var four = "Thursday";var five = "Friday";var six = "Saturday";var seven = "Sunday";
var jan = "January";var feb = "Febuary";var mar = "March";var apr = "April";var may = "May";var jun = "June";var jul = "July";var aug = "August";var sep = "September";var oct = "October";var nov = "November";var dec = "December";
var am = "AM";var pm = "PM";var string;
function renew(){
 document.getElementById("theMonth").innerHTML = month();
 document.getElementById("theDay").innerHTML = day();
 document.getElementById("theTime").innerHTML = time();
}
function month(){
 var month = new Date().getMonth();
 if(month=="0"){ return jan; }if(month=="1"){ return feb; }if(month=="2"){ return mar; }if(month=="3"){ return apr; }if(month=="4"){ return may; }if(month=="5"){ return jun; }if(month=="6"){ return jul; }if(month=="7"){ return aug; }if(month=="8"){ return sep; }if(month=="9"){ return oct; }if(month=="10"){ return nov; }if(month=="11"){ return dec; } 
}
function day(){
 var day = new Date().getDay();
 if(day=="0"){ return one; }if(day=="1"){ return two; }if(day=="2"){ return three; }if(day=="3"){ return four; }if(day=="4"){ return five; }if(day=="5"){ return six; }if(day=="6"){ return seven; }
}
function time(){
 var d = new Date();var n = d.toLocaleTimeString();var len = n.length;
 string = n.substr(0,8)+" "+n.substr(len-2,len);
 return string;
}
