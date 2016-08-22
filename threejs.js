var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1,1,1 );

var material = new THREE.MeshNormalMaterial();

var cube = new THREE.Mesh( geometry, material );var cube1 = new THREE.Mesh( geometry, material );
cube1.visible = false;

var group = new THREE.Group();
group.add( cube );group.add( cube1 );group.remove( cube1 );
group.children;
group.parent;

scene.add( group );
camera.position.z = 5;

var render = function(){
 requestAnimationFrame( render );
 cube.rotation.x += 0.1;
 cube.rotation.y += 0.1;
 renderer.render( scene, camera );
};
render();
