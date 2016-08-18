var menu = "<font size='12'>";menu += "<a href='javascript:enter()'>Begin Tour</a>";menu += "</font>";

document.getElementById("menu").innerHTML = menu;
function enter(){  render(); }

var scene1 = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight*.8 );
document.getElementById("canvas").appendChild( renderer.domElement );

function render(){
  requestAnimationFrame( render );
  renderer.render( scene1, camera );
}
