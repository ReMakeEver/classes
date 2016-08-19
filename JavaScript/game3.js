var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
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
   fragmentShader : skyboxShader.fragmentShader, vertexShader: skyboxShader.vertexShader
   uniforms: skyboxShader.uniforms, depthWrite: false, side: THREE.BackSide()
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

function render(){
 requestAnimationFrame( render );
 renderer.render( scene, camera );
}
}
