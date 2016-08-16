var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var key = "none";

var grass = new THREE.MeshBasicMaterial({ color: 0x00aa00 });

var plane = new THREE.PlaneGeometry( 30,30,1 );

var landPiece1 = new THREE.Mesh( plane, grass );var landPiece2 = new THREE.Mesh( plane, grass );var landPiece3 = new THREE.Mesh( plane, grass ); var landPiece4 = new THREE.Mesh( plane, grass );

scene.add( landPiece1 );scene.add( landPiece2 );scene.add( landPiece3 );scene.add( landPiece4 );

// Camera Position:
camera.position.x=0;
camera.position.y=0;
camera.position.z=0;
// Land Position:
landPiece1.position.x=0;landPiece2.position.x=0;landPiece3.position.x=0;landPiece4.position.x=0;
landPiece1.position.y=0;landPiece2.position.y=0;landPiece3.position.y=0;landPiece4.position.y=0;
landPiece1.position.z=0;landPiece2.position.z=0;landPiece3.position.z=0;landPiece4.position.z=0;

// Camera Rotation:
camera.rotation.x=0;
// Land Rotation:
landPiece1.rotation.x=0;landPiece2.rotation.x=0;landPiece3.rotation.x=0;landPiece4.rotation.x=0;
landPiece1.rotation.y=0;landPiece2.rotation.y=0;landPiece3.rotation.y=0;landPiece4.rotation.y=0;
landPiece1.rotation.z=0;landPiece2.rotation.z=0;landPiece3.rotation.z=0;landPiece4.rotation.z=0;

function render(){
 if(key==="none"){
  requestAnimationFrame( render );
  renderer.render( scene, camera );
 }
}
