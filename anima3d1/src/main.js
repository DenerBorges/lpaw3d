import "../style.css"
import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)

let aspecto = window.innerWidth/ window.innerHeight
const camera = new THREE.PerspectiveCamera(
	75,
	aspecto,
	0.1,
	200
);
camera.position.z = 80

const geometry = new THREE.BoxGeometry(20, 20, 20)
const texture = new THREE.TextureLoader()
			.load('img/marioblock.png',animate);
const material = new THREE.MeshBasicMaterial(
	{ map: texture });
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const coneGeometry = new THREE.ConeGeometry(10, 30, 32, 5)
const coneTexture = new THREE.TextureLoader()
      .load('img/cone.jpg', animate);
const coneMaterial = new THREE.MeshBasicMaterial(
  { map: coneTexture });
const cone = new THREE.Mesh(coneGeometry, coneMaterial)
scene.add(cone)
cone.position.x = 50;

const esferaGeometry = new THREE.SphereGeometry(12)
const esferaTextura = new THREE.TextureLoader()
      .load('img/bola.png', animate);
const esferaMaterial = new THREE.MeshBasicMaterial(
  { map: esferaTextura});
const esfera = new THREE.Mesh(esferaGeometry, esferaMaterial)
scene.add(esfera)
esfera.position.x = -50;

function animate(){
    renderer.render(scene, camera)
	cube.rotation.y += .001
	cube.rotation.x += .001
	cube.rotation.z += .001
  cone.rotation.y += .001
	cone.rotation.x += .001
	cone.rotation.z += .001
  esfera.rotation.y += .001
	esfera.rotation.x += .001
	esfera.rotation.z += .001
	requestAnimationFrame(animate)
}
animate()