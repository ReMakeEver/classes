var crypt = {
 "Encrypt": function(string,times){return encryptString(string,times);},
 "Decrypt": function(string,level){decryptString(string,level);}
};
function encryptString(string,times){
 var data = "";
 if(times==null || times==1){
  for(var i = 0;i<string.length;i++){
   data += string.charCodeAt(i);
  }
 }else{
  if(times==2){
   for(var i = 0;i<string.length;i++){
    data += string.charCodeAt(i);
   }
   return level2En(data);
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
function decryptString(string,level){
 var split = string.split(",");
 var data = "";
 if(level==null || level==1){
  for(var i = 0;i<split.length;i++){
   data += String.fromCharCode(split[i]);
  }
 }else{
  if(level==2){
   for(var i = 0;i<split.length;i++){
    data += String.fromCharCode(split[i])+",";
   }
   return level2De(data);
  }
 }
 return data;
}
 function level2De(string){
  var split = string.split(",");
  var data = "";
  for(var i = 0;i<split.length;i++){
   data += String.fromCharCode(split[i]);
  }
  return data;
 }
