var crypt = {
 "Encrypt": function(string,times){return encryptString(string);},
 "Decrypt": function(string){decryptString(string);}
};
function encryptString(string,times){
 var data = "";
 if(times==null){
  for(var i = 0;i<string.length;i++){
   data += string.charCodeAt(i);
  }
 }else{
  if(times==2){
   var string2 = "";
   for(var i = 0;i<string.length;i++){
    string2 += string.charCodeAt(i);
   }
   return level2En(string2);
  }
 }
 return data;
}
function level2En(string){
 var data = "";
 for(var i = 0;i<string.length;i++){
  data += string.charCodeAt(i);
 }
 return data;
}
function decryptString(string){
 var split = string.split(",");
 var data = "";
 for(var i = 0;i<split.length;i++){
  data += String.fromCharCode(split[i]);
 }
 return data;
}
