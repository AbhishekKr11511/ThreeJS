import * as Three from 'three';

// Scene
const scene = new Three.Scene();

// Camera
const camera = new Three.PerspectiveCamera(50, 1920 / 1080, 0.1, 1000);
scene.add(camera)

// Shape
const geometry = new Three.BoxGeometry( 1, 10, 10 ); 
const material = new Three.MeshBasicMaterial( {color: 0x00ff00} ); 
const cube = new Three.Mesh( geometry, material ); 
scene.add( cube );

camera.position.z = 25

// Light
const light = new Three.PointLight(0xffffff, 1, 100)
light.position.set(1, 10 ,10)
// scene.add(light)

const renderer = new Three.WebGLRenderer();
renderer.setSize( 1920, 1080 );
document.body.appendChild( renderer.domElement );

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate()

const Start = () => {
  return (
    <div>
    </div>
  )
}
export default Start