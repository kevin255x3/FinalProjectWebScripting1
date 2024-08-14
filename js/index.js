//  variables containing the html elements that open and close the menu, as well as the menu html element
const menuOpen = document.querySelector('.js-menu-open');
const menuClose = document.querySelector('.js-menu-close');
const menu = document.querySelector('.js-menu');

// this function acts as the navigation menu. so when the menu is clicked the navigation menu moves in and is displayed onto the
menuOpen.addEventListener('click', () => {
    menu.classList.remove('-translate-y-full');
    menu.classList.add('translate-y-0');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('translate-y-0');
    menu.classList.add('-translate-y-full');
});


// three js intialization
import * as THREE from 'three';

// intalize the render with a new scene
const scene = new THREE.Scene();
// set up the viewpoint of the scene with a perspective camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// set the three js render to the full width and size of the web page.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// defining the cube, the cubes materials and color.
const geometry = new THREE.BoxGeometry();
// the material of the cube, in this case im making a wireframe square
const material = new THREE.MeshBasicMaterial({ color: 0xF4C2C2, wireframe: true });
//cube is a 'primal' shape included in the three.js library
// i will create the cube with the geomtry and materials i defined in the variables above through the parameter
const cube = new THREE.Mesh(geometry, material);
// add the new cube to the scene
scene.add(cube);

// position camera, i think 3 is a good distance but you cant adjust the field of depth with the camera position.
camera.position.z = 3;

// the loop. creating an infinitie loop with the function
function animate() {
    requestAnimationFrame(animate);

    // rotating the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // rendering the scene passing through the scene and camera variables
    renderer.render(scene, camera);
}

animate();

// responsive sizing
window.addEventListener('resize', () => {
    // adjust it to the window inner width and height
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

