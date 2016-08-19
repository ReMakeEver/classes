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
