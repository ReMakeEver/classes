/*
   New Perspectives on JavaScript
   Tutorial 5
   Case Problem 2

   Filename: tiles.js

   Variables List:
   x
      Contains a array of numbers from 0 to 15. The order of the
      numbers is set randomly using a for loop
   Tiles
      Contains an array of 16 image objects.

*/


var x = new Array();
x[0]=0;
x[1]=1;
x[2]=2;
x[3]=3;
x[4]=4;
x[5]=5;
x[6]=6;
x[7]=7;
x[8]=8;
x[9]=9;
x[10]=10;
x[11]=11;
x[12]=12;
x[13]=13;
x[14]=14;
x[15]=15;

for (i=0;i<=15;i++) {
  ri=Math.floor(Math.random()*(16-i))+i;
  temp=x[ri];
  x[ri]=x[i];
  x[i]=temp;
}

var Tiles = new Array();
Tiles[0]=new Image();
Tiles[1]=new Image();
Tiles[2]=new Image();
Tiles[3]=new Image();
Tiles[4]=new Image();
Tiles[5]=new Image();
Tiles[6]=new Image();
Tiles[7]=new Image();
Tiles[8]=new Image();
Tiles[9]=new Image();
Tiles[10]=new Image();
Tiles[11]=new Image();
Tiles[12]=new Image();
Tiles[13]=new Image();
Tiles[14]=new Image();
Tiles[15]=new Image();

Tiles[x[0]].src="image1.jpg";
Tiles[x[1]].src="image2.jpg";
Tiles[x[2]].src="image3.jpg";
Tiles[x[3]].src="image4.jpg";
Tiles[x[4]].src="image5.jpg";
Tiles[x[5]].src="image6.jpg";
Tiles[x[6]].src="image7.jpg";
Tiles[x[7]].src="image8.jpg";
Tiles[x[8]].src="image1.jpg";
Tiles[x[9]].src="image2.jpg";
Tiles[x[10]].src="image3.jpg";
Tiles[x[11]].src="image4.jpg";
Tiles[x[12]].src="image5.jpg";
Tiles[x[13]].src="image6.jpg";
Tiles[x[14]].src="image7.jpg";
Tiles[x[15]].src="image8.jpg";