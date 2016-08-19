var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 60, 1, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

function makeSkybox( urls, size ){
 var skyboxCubemap = new THREE.CubeTextureLoader().load( urls );
 skyboxCubemap.format = THREE.RGBFormat;
 var skyboxShader = THREE.ShaderLib['cube'];
 skyboxShader.uniforms['tCube'].value = skyboxCubemap;
 return new THREE.Mesh(
  new THREE.BoxGeometry( size, size, size ),
  new THREE.ShaderMaterial({
   fragmentShader : skyboxShader.fragmentShader, vertexShader : skyboxShader.vertexShader,
   uniforms : skyboxShader.uniforms, depthWrite : false, side : THREE.BackSide
  })
 );
}

scene.add( camera );
scene.add( makeSkybox([
 'textures/sky/px.jpg',
 'textures/sky/nx.jpg',
 'textures/sky/py.jpg',
 'textures/sky/ny.jpg',
 'textures/sky/pz.jpg',
 'textures/sky/nz.jpg'
 ], 8000));

var start = function( gameViewportSize ){
 var resize = funciton(){
  var viewport = gameViewportSize();
  renderer.setSize( viewport.width, viewport.height );
  camera.aspect = viewport.width / viewport.height;
  camera.updateProjectionMatrix();
 };
 window.addEventListener( 'resize', resize, false );
 resize();
 var lastTimeStamp;
 var render = function( timeStamp ){
  var timeElapsed = lastTimeStamp ? timeStamp - lastTimeStamp : 0; lastTimeStamp = timeStamp;
  renderer.render( scene, camera );
  requestAnimationFrame( render );
 };
 requestAnimationFrame( render );
};
var gameViewportSize = function(){ return{
 width: window.innerWidth, height: window.innerHeight
}};
document.getElementById("containter").appendChild( renderer.domElement );
start( gameViewportSize );
