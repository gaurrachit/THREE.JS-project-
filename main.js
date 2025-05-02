import *as THREE from "three";
import GUI from "lil-gui";
const scene= new THREE.Scene();
const camera= new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    100

);
camera.position.z=2;

const geometry = new THREE.BufferGeometry();

let vertices =new Float32Array(3000);

for(let i=0;i<1000*3;i++){
    vertices[i]=Math.random()-0.5;
}
geometry.setAttribute("position",new THREE.BufferAttribute(vertices,3));

const material=new THREE.MeshBasicMaterial({color:"red",wireframe:true});
const mesh=new THREE.Mesh(geometry,material);
scene.add(mesh);



const canvas=document.querySelector("canvas");
const renderer=new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight);

function animate(){
    window.requestAnimationFrame(animate);
    
    renderer.render(scene,camera);
}

animate();

 

