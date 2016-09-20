var one = "Monday";var two = "Tuesday";var three = "Wenesday";var four = "Thursday";var five = "Friday";var six = "Saturday";var seven = "Sunday";
var min = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
var hr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var jan = "January";var feb = "Febuary";var mar = "March";var apr = "April";var may = "May";var jun = "June";var jul = "July";var aug = "August";var sep = "September";var oct = "October";var nov = "November";var dec = "December";
var am = "AM";var pm = "PM";
function renew(){
 document.getElementById("theMonth").innerHTML = month();
 document.getElementById("theDay").innerHTML = day();
}
function month(){
 var month = new Date().getMonth();
 if(month=="1"){ return jan; }if(month=="2"){
}
function day(){
 var day = new Date().getDay();
 if(day=="0"){ return one; }if(day=="1"){ return two; }if(day=="2"){ return three; }if(day=="3"){ return four; }if(day=="4"){ return five; }if(day=="5"){ return six; }if(day=="6"){ return seven; }
}
