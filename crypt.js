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
   for(var i = 0;i<string2.length;i++){
    data += string2.charCodeAt(i);
   }
  }
 }
 return data;
}
function decryptString(string){
}
