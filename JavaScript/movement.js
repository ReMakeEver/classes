var box1 = new THREE.BoxGeometry( 1,1,1 );var box2 = new THREE.BoxGeometry( 2,2,2 );var box3 = new THREE.BoxGeometry( 3,3,3 );
var sph1 = new THREE.SphereGeometry( 1,32,32,0,6.2,0,3.1 );var sph2 = new THREE.SphereGeometry( 5,32,32,0,6.2,0,3.1 );var sph3 = new THREE.SphereGeometry( 10,32,32,0,6.2,0,3.1 );
var con1 = new THREE.ConeGeometry( 1,10,64 );var con2 = new THREE.ConeGeometry( 5,10,64 );var con3 = new THREE.ConeGeometry( 5,10,64 );

var black = new THREE.MeshBasicMaterial({ color: 0x000000 });
var blue = new THREE.MeshBasicMaterial({ color: 0x0000ff });
var lime = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var red = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var white = new THREE.MeshBasicMaterial({ color 0xffffff });

var log;

function movement(event){
 var x = event.keyCode;
 if(x=="119"){
  log += x;
  forward();
 }
 if(x=="97"){
  log += x;
  turnL();
 }
 if(x=="115"){
  log += x;
  backward();
 }
 if(x=="100"){
  log += x;
  turnR();
 }
}
