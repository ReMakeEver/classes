var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( renderer.domElement );
document.body.appendChild( renderer.domElement );

var render = function(){
 requestAnimationFrame( render );
 renderer.render( scene, camera );
};
render();
