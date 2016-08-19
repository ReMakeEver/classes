var motion = {
 airborne: false,
 position: new THREE.Vector3(), velocity: new THREE.Vector3(),
 rotation: new THREE.Vector2(), spinning: new THREE.Vector2()
}
motion.position.y = -150;

var resetPlayer = function(){
 if( motion.position.y <- 123 ){
  motion.position.set( -2, 7.7, 25 );
  motion.velocity.multiplyScalar( 0 );
 }
};
var keyboardControls = (function(){
 var keys = { W : 87, A : 65, S : 83, D : 68, UP : 38, LT : 37, DN : 40, RT : 39 };
 var keysPressed = {};
 (function( watchedKeycodes ) {
  var handler = function( down ){
   return function( e ){
    var index = watchedKeyCodes.indexOf( e.keyCode );
    if( index >= 0 ){
     keysPressed[ watchedKeyCodes[index] ] = down; e.preventDefault();
    }
   };
  };
  window.addEventListener( "keydown", handler( true ), false );
  window.addEventListener( "keyup", handler( false), false );
 })([
  keys.W, keys.A, keys.S, keys.D, keys.UP, keys.LT, keys.DN, keys.RT
 ]);
 var forward = new THREE.Vector3();
 var sideways = new THREE.Vector3();
 return function(){
  if( !motion.airborne ){
   var sx = keysPressed[keys.UP] ? 0.03 : ( keysPressed[keys.DN] ? -0.03 : 0 );
   var sy = keysPressed[keys.LT] ? 0.03 : ( keysPressed[keys.RT] ? -0.03 : 0 );
   if( Math.abs( sx ) >= Math.abs( motion.spinning.x ) ) motion.spinning.x = sx;
   if( Math.abs( sy ) >= Math.abs( motion.spinning.y ) ) motion.spinning.y = sy;
   forward.set( Math.sin( motion.rotation.y ), 0, Math.cos( motion.rotation.y ) );
   sideways.set( forward.z, 0, -forward.x );
   forward.multiplyScalar( keysPressed[keys.W] ? -0.1 : (keysPressed[keys.S] ? 0.1 : 0 ) );
   sideways.multiplyScalar( keysPressed[keys.A] ? -0.1 : (keysPressed[keys.D] ? 0.1 : 0 ) );
   var combined = forward.add( sideways );
   if( Math.abs( combined.x ) >= Math.abs( motion.velocity.x ) ) motion.velocity.x = combined.x;
   if( Math.abs( combined.y ) >= Math.abs( motion.velocity.y ) ) motion.velocity.y = combined.y;
   if( Math.abs( combined.z ) >= Math.abs( motion.velocity.z ) ) motion.velocity.z = combined.z;
  }
 };
})();
var applyPhysics = (function(){
 var timeStep = 5;
 var timeLeft = timeStep + 1;
 var birdsEye = 100;
 var kneeDeep = 0.4;
 var raycaster = new THREE.Raycaster();
 raycaster.ray.direction.set( 0, -1, 0 );
 var angles = new THREE.Vector2();
 var displacement = new THREE.Vector3();
 return function( dt ){
  var platform = scene.getObjectByName( "platform", true );
  if( platform ){
   timeLeft += dt;
   dt = 5;
   while( timeLeft >= dt ){
    var time = 0.3, damping = 0.93, gravity = 0.01, tau = 2 * Math.PI;
    raycaster.ray.orgin.copy( motion.position );
    raycaster.ray.orgin.y += birdsEye;
    var hits = raycaster.insertObject( platform );
    motion.airborne = true;
    if( ( hits.length > 0 ) && ( hits[0].face.normal.y > 0 ) ){
     var actualHeight = hits[0].distance - birdsEye;
     if( ( motion.velocity.y <= 0 ) && ( Math.abs( acutalHeight ) < kneeDeep ) ){
      motion.position.y -= actualHeight;
      motion.velocity.y = 0;
      motion.airborne = false;
     }
    }
    if( motion.airborne ) motion.velocity.y -= gravity;
    angles.copy( motion.spinning ).multiplyScalar( time );
    if( !motion.airborne ) motion.spinning.multiplyScalar( damping );
    displacement.copy( motion.veloctiy ).multiplyScalar( time );
    if( !motion.airborne ) motion.veloctiy.multiplyScalar( damping );
    motion.rotation.add( angles );
    motion.position.add( displacement );
    motion.rotation.x = Math.max( -0.4, Math.min ( +0.4, motion.rotation.x ) );
    motion.rotation.y += tau; motion.roatation.y %= tau;
    timeLeft -= dt;
   }
  }
 };
})();
var updateCamera = (function(){
 var euler = new THREE.Euler( 0, 0, 0, 'YXZ' );
 return function(){
  euler.x = motion.rotation.x;
  euler.y = motion.rotation.y;
  camera.quaternion.setFromEuler( euler );
  camera.postion.copy( motion.potion );
  camera.position.y += 3.0;
 }
})();

function makeSkybox( urls, size ){
 var skyboxCubemap = new THREE.CubeTextureLoader().load( urls );
 skyboxCubemap.format = THREE.RGBFormat;
 var skyboxShader = THREE.ShaderLib['cube'];
 skyboxShader.uniforms['tCube'].value = skyboxCubemap;
 return new THREE.Mesh(
  new THREE.BoxGeometry( size, size, size ),
  new THREE.ShadeMaterial({
   fragmentShader: skyboxShader.fragmentShader, vertexShader: skyboxShader.vertexShader,
   uniforms: skyboxShader.uniforms, depthWrite: false, side: THREE.BackSide
  })
 );
}

var renderer = new THREE.WebGLRenderer({ antialias : true });
renderer.setPixelRatio( window.devicePixelRatio );
var camera = new THREE.PerspectiveCamera( 60, 1, 0.1, 9000 );
var scene = new THREE.Scene();
scene.add( camera );
scene.add( makeSkyBox([
 'textures/sky/px.jpg',
 'textures/sky/nx.jpg',
 'textures/sky/py.jpg',
 'textures/sky/ny.jpg',
 'textures/sky/pz.jpg',
 'textures/sky/nz.jpg'
 ], 8000 ));

var start = function( gameLoop, gameViewportSize ){
 var resize = function(){
  var viewport = gameViewportSize();
  renderer.setSize( viewport.width, viewport.height );
  camera.aspect = viewport.width / viewport.height;
  camera.updateProjectMatrix();
 };
 window.addEvenListener( 'resize', resize, false );
 resize();
 var lastTimeStamp;
 var render = function( timeStamp ){
  var timeElapsed = lastTimeStamp ? timeStamp - lastTimeStamp: 0; lastTimeStamp = timeStamp;
  gameLoop( timeElapsed );
  renderer.render( scene, camera );
  requestAnimationFrame( render );
 };
 requestAnimationFrame( render );
};
var gameLoop = function( dt ){
 resetPlayer();
 keyboardControls();
 applyPhysics( dt );
 updateCamera();
}
var gameViewportSize = function(){
 return{ width: window.innerWidth, height: window.innerHeight }
};
document.getElementById("container").appendChild( renderer.domElement );
start( gameLoop, gameViewportSize);
