var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );camera.position.set( 0, 100, 2000)
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var render = function(){
 requestAnimationFrame( render );
 init();
 renderer.render( scene, camera );
};
render();
