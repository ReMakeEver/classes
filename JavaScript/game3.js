var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );camera.position.set( 0, 100, 2000)
var renderer = new THREE.WebGLRenderer();
renderer.setSize( renderer.domElement );
document.body.appendChild( renderer.domElement );

var sky = new THREE.Sky();

function createSky(){
 scene.add( sky.mesh );
 var eC = {
  turbidity: 20,
  reileigh: 2,
  mieCoefficient: 0.005,
  mieDirectionalG: 0.8,
  luminance: 1,
  inclination: 0.49,
  azimuth: 0.25,
  sun: ! true
 };
 var uniforms = sky.uniforms;
 uniforms.turbidity.value = eC.turbidity;
 uniforms.reileigh.value = eC.reileigh;
 uniforms.luminance.value = eC.luminance;
 uniforms.mieCoefficient.value = eC.mieCoefficient;
 uniforms.mieDirectionalG.value = eC.mieDirectionalG;
 renderer.render( scene, camera );
}

var render = function(){
 requestAnimationFrame( render );
 createSky();
 renderer.render( scene, camera );
};
render();
