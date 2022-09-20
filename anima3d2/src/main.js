import '../style.css'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)

let aspecto = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(
  20,
  aspecto,
  0.1,
  100
);
camera.position.z = 1
camera.position.x = -.15
camera.position.y = -.85

var light = new THREE.AmbientLight();
scene.add(light);

var plight = new THREE.PointLight();
plight.position.set(-1, 1, 0);
scene.add(plight);

// Macaco

let model
const modelPath = 'models/monkey/'
const mtlFile = '170726_mia348_126884_601_100kmesh_OBJ.mtl'
const objFile = '170726_mia348_126884_601_100kmesh_OBJ.obj'

const manager = new THREE.LoadingManager();
manager.onProgress = function (item, loaded, total) {
  console.log(item, loaded, total);
};

const mtlLoader = new MTLLoader(manager);
const objLoader = new OBJLoader();

mtlLoader.setPath(modelPath)
  .load(mtlFile, (materials) => {
  materials.preload()
  objLoader.setMaterials(materials)
  objLoader.setPath(modelPath).load(objFile, (object) => {
    model = object
    model.scale.setScalar(.05)
    model.position.y=-.5
    model.rotation.x=.5
    scene.add(model)
    animate()
  })
})

function animate() {
  renderer.render(scene, camera)
  model.rotation.y += 0
  requestAnimationFrame(animate)
}

window.addEventListener('mousemove',event=>{
  model.rotation.x = 1;
  model.rotation.y = 3;
  model.rotation.z += .03;
})

// Carrinho

let modelc
const modelcPath = 'models/carrinho/'
const mtlcFile = 'Sketch.mtl'
const objcFile = 'Sketch.obj'

const managerc = new THREE.LoadingManager();
managerc.onProgress = function (itemc, loadedc, totalc) {
  console.log(itemc, loadedc, totalc);
};

const mtlcLoader = new MTLLoader(managerc);
const objcLoader = new OBJLoader();

mtlcLoader.setPath(modelcPath)
  .load(mtlcFile, (materialsc) => {
  materialsc.preload()
  objcLoader.setMaterials(materialsc)
  objcLoader.setPath(modelcPath).load(objcFile, (objectc) => {
    modelc = objectc
    modelc.scale.setScalar(.05)
    modelc.position.y=-.9
    modelc.position.x=-.3
    modelc.rotation.x=.5
    scene.add(modelc)
    animatec()
  })
})

function animatec() {
  renderer.render(scene, camera)
  modelc.rotation.y += 0
  requestAnimationFrame(animatec)
}

window.addEventListener('mousemove',event=>{
  /*let wh = window.innerHeight
  let my = event.clientY
  if(model)  model.rotation.x += (my-wh/2)/wh/100*/
  modelc.rotation.x = 1;
  modelc.rotation.y = 4.7;
  modelc.rotation.z += .02;
})