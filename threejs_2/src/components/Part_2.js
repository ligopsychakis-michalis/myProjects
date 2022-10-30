import * as THREE from 'three';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';

function Part_2(thr) {
    // box
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 16);
    const boxMaterial = new THREE.MeshNormalMaterial({ wireframe: true })
    const box = new THREE.Mesh(boxGeometry,boxMaterial);
    box.position.x = -1;
    box.position.y = -1;
    thr.scene.add(box);

    // cylinder
    const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 6, 16);
    const cylinderMaterial = new THREE.MeshNormalMaterial({ wireframe: true })
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.x = 1;
    cylinder.position.y = -1;
    thr.scene.add(cylinder);

    // teapot
    const teapotGeometry = new TeapotGeometry(0.5, 10);
    const teapotMaterial = new THREE.MeshNormalMaterial({ wireframe: true })
    const teapot = new THREE.Mesh(teapotGeometry, teapotMaterial);
    teapot.position.x = -1;
    teapot.position.y = 1;
    thr.scene.add(teapot);

    // rounded box
    const roundedBoxGeometry = new RoundedBoxGeometry(1, 1, 1);
    const roundedBoxMaterial = new THREE.MeshNormalMaterial({ wireframe: true })
    const roundedBox = new THREE.Mesh(roundedBoxGeometry, roundedBoxMaterial);
    roundedBox.position.x = 1;
    roundedBox.position.y = 1;
    thr.scene.add(roundedBox);
}

export default Part_2;