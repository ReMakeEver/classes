var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( renderer.domElement );
document.body.appendChild( renderer.domElement );

var sky = new THREE.Sky();
scene.add( sky.mesh );
var sUni = sky.uniforms;
sUni.turbidity.value = 20;sUni.reileigh.value = 2;sUni.mieCoefficient.value = .005;sUni.mieDeirectionalG = .8;sUni.luminance.value = 1;sUni.inclination.value=0.49;sUni.azimuth.value = .25;

var render = function(){
 requestAnimationFrame( render );
 renderer.render( scene, camera );
};
render();
